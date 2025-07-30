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
updateTime();
setInterval(updateTime, 1000);
