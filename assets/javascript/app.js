// Initialize Firebase
const config = {
  apiKey: firebaseAPI,
  authDomain: "curate-ss.firebaseapp.com",
  databaseURL: "https://curate-ss.firebaseio.com",
  projectId: "curate-ss",
  storageBucket: "curate-ss.appspot.com",
  messagingSenderId: "872408743875"
};
firebase.initializeApp(config);

let paintings = [
  {
    paintingName: "The Harvesters",
    objectID: 435809,
    palette: ["rgb(214, 152, 70)", "rgb(37, 31, 17)", "rgb(114, 62, 17)"]
    // palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
    //rainyPalette: {}, nightPalette: {} etc
  },
  {
    paintingName: "Madonna and Child",
    objectID: 459136,
    palette: ["rgb(11, 6, 9)", "rgb(216, 152, 69)", "rgb(163, 5, 4)"]
  },
  {
    paintingName: "The Dance Class",
    objectID: 438817,
    palette: ["rgb(85, 94, 56)", "rgb(88, 58, 26)", "rgb(150, 140, 113)"]
  },
  {
    paintingName: "Whalers",
    objectID: 437854,
    palette: ["rgb(219, 201, 169)", "rgb(193, 180, 147)", "rgb(39, 28, 15)"]
  },
  {
    paintingName: "View of Toledo",
    objectID: 436575,
    palette: ["rgb(35, 81, 89)", "rgb(71, 68, 49)", "rgb(90, 103, 62)"]
  },
  {
    paintingName: "Young Woman with a Water Pitcher",
    objectID: 437881,
    palette: ["rgb(17, 40, 64)", "rgb(141, 133, 112)", "rgb(38, 20, 23)"]
  },
  {
    paintingName: "Boating",
    objectID: 436947,
    palette: ["rgb(101, 134, 166)", "rgb(89, 57, 36)", "rgb(216, 212, 209)"]
  },
  {
    paintingName: "La Berceuse",
    objectID: 437984,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
]

let paintingTitle;
let artist;
let artistBio;
let artistNationality;
let medium;
let year;
let paintingURL;
let latitude = 0;
let longitude = 0;
let weatherCode;
let weatherDescription;
let weatherIcon;
let temperature;
let city;
let weatherType;

//wikipedia API query URL to get first two sentences of article
//"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=" + pageName + "&exintro=&exsentences=2&explaintext=&redirects=&format=json"


//Search API by painting name
// let paintingNumber = 7;
// let thisPainting = paintings[paintingNumber];
// let metSearchURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + paintings[paintingNumber].paintingName;
// $.ajax({
//   url: metSearchURL,
//   method: "GET"
// }).then(function (response) {
//   console.log(response);
//   let paintingID = response.objectIDs[0];
//   metAPI(paintingID);
// })

// function metAPI(objectID) {
//   let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + objectID;




//chooses random painting, will be fleshed out later
function choosePainting(paintingsArray) {
  let numberChoices = paintingsArray.length;
  return Math.floor(Math.random() * numberChoices);
}



//get's user's geolocation, if it fails defaults to berkeley location
function getLocation() {

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + " and Longitude: " + longitude);
    //calls get weather as a solution to asynchronous data retrieval so weather call doesnt happen til we have location data
    getWeather();
  }

  function error() {
    console.log("Unable to retrieve location");
    latitude = 37.9;
    longitude = -122.3;
  }

  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by this browser');
    latitude = 37.9;
    longitude = -122.3;
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

}



//get's weather based on geocoordinates in getLocation
function getWeather() {
  // let weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=lat={" + latitude + "}&lon={" + longitude + "}&APPID=" + openWeatherAPI;
  let weatherQueryURL = "https://api.weatherbit.io/v2.0/current?units=I&lat=" + latitude + "&lon=" + longitude + "&key=" + weatherBitAPI;
  $.ajax({
    url: weatherQueryURL,
    method: "GET"
  }).then(function (response) {
    let data = response.data[0];
    console.log(data);
    weatherCode = data.weather.code;
    weatherDescription = data.weather.description;
    weatherIcon = data.weather.icon;
    temperature = data.temp;
    timezone = data.timezone;
    city = data.city_name;
    state = data.state_code;
    country = data.country_code;
    console.log(weatherCode);
    console.log(weatherDescription);
    //if it's a stormy code
    if (weatherCode<700) {
      setWeather(2);
      //if its one of three sunny codes
    } else if (weatherCode === 800 || weatherCode == 801 || weatherCode === 802) {
      setWeather(0);
      //else its overcast-y
    } else {
      setWeather(1);
    }
  })
}



//basic function for now, will add color printing later.  sets weather code
function setWeather(code) {
  weatherType = code;
}




//when page is loaded gets location/weather, does met api call, etc
$(document).ready(function () {

  getLocation();

  let paintingNumber = choosePainting(paintings);
  let thisPainting = paintings[paintingNumber];
  let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + thisPainting.objectID;


  //Met API ajax call
  $.ajax({
    url: metQueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // if (!isPublicDomain) {
    //   console.log("Can't use this one!");
    // }
    let paintingTitle = response.title;
    let artist = response.artistDisplayName;
    let artistBio = response.artistDisplayBio;
    let artistNationality = response.artistNationality;
    let medium = response.medium;
    //might have to remove all non-number characters from response depending on how this is used
    let year = response.objectDate;
    let paintingURL = response.primaryImageSmall;

    console.log(paintingTitle);
    console.log(artist);
    console.log(artistBio);
    console.log(artistNationality);
    console.log(medium);
    console.log(year);
    console.log(paintingURL);

  })

  ///add moment.js - time
  //add weather
  //add wikipedia
  //change based on location painting was made in - time, weather, font
  //

  // database.ref().push({
  //   userID: ?,
  //   paintingIndex: n,
  //   timeAdded: firebase.database.ServerValue.TIMESTAMP
  // });

})
