// fetch('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=boolean')
//   // .then(async function (res) {
//   //   const data = await res.json();
//   //   console.log(data);
//   // })





//   // .then(response => response.json())
//   //   .then(data => console.log(data));


//   .then(async function (res) {
//     const data = await res.json();
//     // đợi res.json() chạy xong (hay còn gọi là đợi web openweathermap trả kết quả về rồi mới chạy tiếp lệnh dưới)


//     console.log('searchInput', data);

//     // cityName.innerHTML = data.name || DEFAULT_VALUE
//     // weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE
//     // // weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
//     // weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || DEFAULT_VALUE

//     // temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE

//     // sunrise.innerHTML = moment.unix(data.sys.sunrise).format('HH:mm') || DEFAULT_VALUE
//     // sunset.innerHTML = moment.unix(data.sys.sunset).format('HH:mm') || DEFAULT_VALUE

//     // humidity.innerHTML = data.main.humidity || DEFAULT_VALUE

//     // windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE
//     // // Đổi từ: m/s = (km/h)/3.6

//   })



// api url
const api_url =
  'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple';

// Defining async function
async function getapi(url) {

  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  // if (response) {
  //   hideloader();
  // }
  // show(data);
}
// Calling that async function
getapi(api_url);