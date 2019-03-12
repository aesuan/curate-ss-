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
    wikiSearch: "The Harvesters",
    description: "Add description here",
    palette: ["rgb(214, 152, 70)", "rgb(37, 31, 17)", "rgb(114, 62, 17)"],
    orientation: "landscape",
    weatherPalettes: [
      {
        one: "#FFE6C9",
        two: "#E8A74D",
        three: "#8B4B0E",
        four: "#717453",
        five: "#782D16"
      },
      {
        one: "#D7C4AE",
        two: "#6F6759",
        three: "#3F4333",
        four: "#592B0E",
        five: "#2E1A08"
      },
      {
        one: "#CCBAAC",
        two: "#6C6B53",
        three: "#2F2F21",
        four: "#331808",
        five: "#160F07"
      }
    ]
  },
  {
    paintingName: "Madonna and Child",
    objectID: 459136,
    wikiSearch: "",
    description: "Add description here",
    palette: ["rgb(11, 6, 9)", "rgb(216, 152, 69)", "rgb(163, 5, 4)"],
    orientation: "portrait",
    weatherPalettes: [
      {
        one: "#F1C77A",
        two: "#D89743",
        three: "#C15E0C",
        four: "#A70103",
        five: "#412D24"
      },
      {
        one: "#F1C77A",
        two: "#BE8D42",
        three: "#996A3B",
        four: "#750208",
        five: "#362314"
      },
      {
        one: "#F2AB4A",
        two: "#750208",
        three: "#713B04",
        four: "#3E281A",
        five: "#000000"
      }
    ]
  },
  {
    paintingName: "The Dance Class",
    objectID: 438817,
    wikiSearch: "The Dance Class",
    description: "Add description here",
    palette: ["rgb(85, 94, 56)", "rgb(88, 58, 26)", "rgb(150, 140, 113)"],
    orientation: "portrait",
    weatherPalettes: [
      {
        one: "#F8EAC8",
        two: "#818E63",
        three: "#A56F3F",
        four: "#606F4C",
        five: "#A83A0D"
      },
      {
        one: "#E5D7BA",
        two: "#7B8C60",
        three: "#4F593E",
        four: "#5E472B",
        five: "#2A1D17"
      },
      {
        one: "#DBCCAE",
        two: "#717D5C",
        three: "#4E664C",
        four: "#742313",
        five: "#341E16"
      }
    ]
  },
//   {
//     paintingName: "Whalers",
//     objectID: 437854,
//     wikiSearch: "",
//     description: "Add description",
//     palette: ["rgb(219, 201, 169)", "rgb(193, 180, 147)", "rgb(39, 28, 15)"],
//     orientation: "landscape"
//   },
//   {
//     paintingName: "View of Toledo",
//     objectID: 436575,
//     wikiSearch: "View of Toledo",
//     description: "Add description here",
//     palette: ["rgb(35, 81, 89)", "rgb(71, 68, 49)", "rgb(90, 103, 62)"],
//     orientation: "portrait"
//   },
//   {
//     paintingName: "Young Woman with a Water Pitcher",
//     objectID: 437881,
//     wikiSearch: "Young Woman with a Water Pitcher",
//     description: "Add description here",
//     palette: ["rgb(17, 40, 64)", "rgb(141, 133, 112)", "rgb(38, 20, 23)"],
//     orientation: "portrait"
//   },
//   {
//     paintingName: "Boating",
//     objectID: 436947,
//     wikiSearch: "",
//     description: "Add description",
//     palette: ["rgb(101, 134, 166)", "rgb(89, 57, 36)", "rgb(216, 212, 209)"],
//     orientation: "landscape"
//   },
//   {
//     paintingName: "La Berceuse",
//     objectID: 437984,
//     wikiSearch: "La Berceuse",
//     description: "Add description here",
//     palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
//     orientation: "portrait"
//   },
  // {
  //   paintingName: "Pines Along the Shore",
  //   objectID: 459095,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Windflowers",
  //   objectID: 10767,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "The Calm Sea",
  //   objectID: 436005,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "The Veteran in a New Field",
  //   objectID: 11145,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Marine Landscape",
  //   objectID: 10215,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Steamboats in the Port of Rouen",
  //   objectID: 437309,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Allée of Chestnut Trees",
  //   objectID: 459121,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Sunflowers",
  //   objectID: 436524,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "View of the Domaine Saint-Joseph",
  //   objectID: 435885,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Oleanders",
  //   objectID: 436530,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Venice, from the Porch of Madonna della Salute",
  //   objectID: 437853,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Dancers, Pink and Green",
  //   objectID: 436140,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "Breton Brother and Sister",
  //   objectID: 435754,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "Olive Trees",
  //   objectID: 437998,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Roman Girl at a Fountain",
  //   objectID: 435708,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "Kynance",
  //   objectID: 435775,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "The House with the Cracked Walls",
  //   objectID: 435874,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "Dancers Practicing at the Barre",
  //   objectID: 436139,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "Still Life with Apples and a Pot of Primroses",
  //   objectID: 435882,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Madame Cézanne (Hortense Fiquet, 1850–1922) in the Conservatory",
  //   objectID: 435875,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "The Road from Versailles to Louveciennes",
  //   objectID: 437685,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Sahurs Meadows in Morning Sun",
  //   objectID: 437683,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Washerwoman, Study",
  //   objectID: 437303,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "Irises",
  //   objectID: 436528,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Madame Manet (Suzanne Leenhoff, 1830–1906) at Bellevue",
  //   objectID: 438002,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "The Gulf of Marseilles Seen from L'Estaque",
  //   objectID: 435872,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Wheat Field with Cypresses",
  //   objectID: 436535,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "Roses",
  //   objectID: 436534,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "portrait"
  // },
  // {
  //   paintingName: "A Farm in Brittany",
  //   objectID: 436448,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // },
  // {
  //   paintingName: "The Siesta",
  //   objectID: 436449,
  //   palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
  //   orientation: "landscape"
  // }
]


let latitude = 0;
let longitude = 0;
let weatherCode;
let weatherDescription;
let weatherIcon;
let temperature;
let city;
let whichWeather;

let paintingTitle;
let artist;
let artistBio;
let artistNationality;
let medium;
let year;
let paintingURL;
let description;
let intervalID;
let time;
let date;


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
function choosePainting(paintingsArray) {
  let numberChoices = paintingsArray.length;
  return Math.floor(Math.random() * numberChoices);
 }

 

let paintingNumber = choosePainting(paintings);

console.log(paintingNumber);

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
    if (weatherCode < 700) {
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
  whichWeather = code;
}



//this does not totally work yet but getting there!!! sorry :/
//wikipedia description puller from first two sentences of article
function getWikiDescription(index) {
  //wikipedia API query URL to get first two sentences of article
  let pageName = paintings[index].wikiSearch;
  if (pageName === "") {
    return paintings[index].description;
  } else {
    let wikiURL = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=" + pageName + "&exintro=&exsentences=2&explaintext=&redirects=&format=json&callback=?";
    $.ajax({
      url: wikiURL,
      method: "GET",
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
    }).then(function (response) {
      console.log(response.query.pages);

    })

  }
  return "this";
}

function setTime() {
  clearInterval(intervalID);
  intervalID = setInterval(count, 1000); 
  
  function count() {
    time = moment().format("hh:mm A");
    console.log(time);
    //some statement printing time to screen
  }
}

function setDate() {
  date = moment().format("dddd MMM Do");
  console.log(date);
  //some statment printing date
}






//when page is loaded gets location/weather, does met api call, etc
$(document).ready(function () {

  getLocation();
  setTime();
  setDate();

  let paintingNumber = choosePainting(paintings);
  let thisPainting = paintings[paintingNumber];
  console.log(thisPainting);
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
    paintingTitle = response.title;
    artist = response.artistDisplayName;
    artistBio = response.artistDisplayBio;
    artistNationality = response.artistNationality;
    medium = response.medium;
    //might have to remove all non-number characters from response depending on how this is used
    year = response.objectDate;
    paintingURL = response.primaryImageSmall;


    //STUFF FOR GEOMETRIC PAGE STYLING

    $("#vg-painting").attr("src", paintingURL);
    $("#vg-painting").attr("alt", thisPainting.paintingName);
    $(".artist-name").text(artist);
    $(".painting-name").text(paintingTitle);
    $(".painting-info").text(artistBio);
    $(".painting-info2").text(year + " " + medium);




    // console.log(paintingTitle);
    // console.log(artist);
    // console.log(artistBio);
    // console.log(artistNationality);
    // console.log(medium);
    // console.log(year);
    // console.log(paintingURL);

    description = getWikiDescription(paintingNumber);
    console.log(description);

  })

  ///add moment.js - time
  //more possible additions:
  //change based on time period/location: font
  //also - greeting in language of nationality of painter?
  //

  //for use with firebase storing timeAdded to look back on (check if after midnight - could do locally)

  // database.ref().push({
  //   userID: ?,
  //   paintingIndex: n,
  //   timeAdded: firebase.database.ServerValue.TIMESTAMP
  // });


})

