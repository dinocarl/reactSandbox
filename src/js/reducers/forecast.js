export function currentUnit(state = 'F', action) {
  switch(action.type) {
    case 'TOGGLE_UNIT':
      return action.val;
    default:
      return state;
  }
}

export function forecastHasErrored(state = false, action) {
  switch(action.type) {
    case 'FORECAST_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function forecastIsLoading(state = false, action) {
  switch(action.type) {
    case 'FORECAST_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function forecast(state = [], action) {
  switch(action.type) {
    case 'FORECAST_FETCH_DATA_SUCCESS':
      return action.forecast;
    default:
      return state;
  }
}
