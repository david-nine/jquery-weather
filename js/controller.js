const API_KEY = '154e66cc81a54c0aa3c162802221509';

function onConfirm() {
    var cityName = document.getElementById('cityName').value;
    getWeather(cityName);
}

function onShowCard(prevision) {
    const day = prevision.day;
    const dayOfWeek = moment(prevision.date).lang("pt-br").format('dddd');
    var newCard = card.replace("imageUrl", day.condition.icon)
        .replace("temperature", day.maxtemp_c)
        .replace("chanceOfRain", day.daily_chance_of_rain)
        .replace("alert", day.condition.text).replace("dayOfWeek", dayOfWeek)
    $('#prevision-cards').append(newCard);
}

const card = `<div class="card m-1" style="width: 11rem;">
    <img src="http:imageUrl" class="card-img-top" alt="image">
    <div class="card-body">
        <h5 class="card-title">dayOfWeek</h5>
        <p class="card-text">alert</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">temperature°C</li>
        <li class="list-group-item">Chance de chuva: chanceOfRain%</li>
    </ul>
</div>`;