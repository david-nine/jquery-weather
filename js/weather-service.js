function getWeather(cityName) {
    $.ajax(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7&aqi=no&alerts=yes&lang=pt`, {
        type: 'GET',
        beforeSend: function () {
            $('#prevision-cards').empty();
            $('.lds-roller').css("display", "block");
        },
        error: function (response) {
            $('.error').css("display", "block");
            $('#error-message').remove();
            $('.error').append(`<span id="error-message">${response.responseJSON.error.message}</span>`);
            setTimeout(() => {
                $('.error').css("display", "none");
            }, 3000)
        },
        success: function (data) {
            data.forecast.forecastday.forEach(item => {
                onShowCard(item)
            });
        },
        complete: function () {
            $('.lds-roller').css("display", "none");
        }
    })
}