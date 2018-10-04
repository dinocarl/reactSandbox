import {
  compose,
  split,
  head,
  has,
  prop,
  path,
  values,
  sortBy,
  merge,
  max,
  min,
  indexOf,
  take
} from 'ramda';

const createDayVal = compose(
  head,
  split(` `),
  prop(`dt_txt`)
);

const sortByDay = compose(
  take(5),
  sortBy(prop(`day`)),
  values
);

const getDescription = path([`weather`, `0`, `main`]);

export const toggleUnit = val => {
  const cases = {
    C: `F`,
    F: `C`
  };
  return {
    type: `TOGGLE_UNIT`,
    val: cases[val]
  };
};

export const forecastHasErrored = bool => ({
  type: `FORECAST_HAS_ERRORED`,
  hasErrored: bool
});

export const forecastIsLoading = bool => ({
  type: `FORECAST_IS_LOADING`,
  isLoading: bool
});

export const forecastFetchDataSuccess = data => ({
  type: `FORECAST_FETCH_DATA_SUCCESS`,
  forecast: sortByDay(data.fixedList)
});

export const forecastFetchData = url => dispatch => {
  dispatch(forecastIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(forecastIsLoading(false));
      return response;
    })
    .then(
      response => response.json()
    )
    .then(
      data => {
        // parse the incoming data
        const defaultDayData = {
          hi: -Infinity,
          lo: Infinity,
          description: []
        };

        const parsedList = {
          fixedList: data.list.reduce((acc, item) => {
            const day = createDayVal(item);
            const description = getDescription(item);
            if (!has(`day`, acc)) {
              acc[day] = merge({ day }, defaultDayData);
            }
            acc[day].hi = max(item.main.temp_max, acc[day].hi);
            acc[day].lo = min(item.main.temp_min, acc[day].lo);
            if (indexOf(description, acc[day].description) < 0) {
              acc[day].description = acc[day].description.concat(description);
            }
            return acc;
          }, {})
        };
        dispatch(
          forecastFetchDataSuccess(
            merge(data, parsedList)
          )
        );
      }
    )
    .catch(
      () => dispatch(forecastHasErrored(true))
    );
};
