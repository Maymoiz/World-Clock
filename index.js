function updateTime() {
  let Joburg = document.querySelector("#jdate");
  Joburg.innerHTML = moment().tz("Africa/Johannesburg").format("DD MMMM YYYY");
  let JoburgTime = document.querySelector("#joburg .time");
  JoburgTime.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("hh:mm:ss[<small>]A[</small>]");
  let Washington = document.querySelector("#ndate");
  Washington.innerHTML = moment().tz("America/New_York").format("DD MMMM YYYY");
  let WashingtonTime = document.querySelector("#new-york .time");
  WashingtonTime.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss[<small>]A[</small>]");
  let HongKong = document.querySelector("#hdate");
  HongKong.innerHTML = moment().tz("Asia/Hong_Kong").format("DD MMMM YYYY");
  let HongKongTime = document.querySelector("#hong-kong .time");
  HongKongTime.innerHTML = moment()
    .tz("Asia/Hong_Kong")
    .format("hh:mm:ss[<small>]A[</small>]");
}

function updateCity(event) {
  let city = event.target.value;
  if (city === "current") {
    city = moment.tz.guess();
  }

  let cityElement = city.split("/")[1].replace("_", " ");
  let citytime = moment().tz(city);
  let cityDate = moment().tz(city);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `<div class="city">
        <h2>${cityElement}</h2>
        <div class="time">${citytime.format(
          "hh:mm:ss"
        )} <small>${citytime.format("A")}</small></div>
      </div>
      <div class="date" >${cityDate.format("DD MMMM YYYY")}</div>
      </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCity);
