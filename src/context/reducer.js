export const myReducer = (state, action) => {
    switch (action.type) {
        case 'PARSE_DATA':
            const data = action.payload;
            return {
                ...state,
                isLoading: false,
                currentData: {
                    all: data.current, condition: data.current.condition
                },
                forecastData: [
                    data.forecast.forecastday[0],
                    data.forecast.forecastday[1],
                    data.forecast.forecastday[2]
                ],
                userLocation: {
                    city: data.location.name + ', ' + data.location.country,
                    latlon: data.location.lat + ', ' + data.location.lon,
                }
            }
        case 'CHANGE_UNIT':
            const inputUnit = action.payload;
            return {
                ...state,
                unit: inputUnit,
            }
        case 'CHANGE_CITY':
            const inputCity = action.payload;
            return {
                ...state,
                city: inputCity,
            }
        case 'SHOW_FORECAST':
            return {
                ...state,
                showForecast: !state.showForecast
            }
        default:
            console.log('There was an error');
    }
}