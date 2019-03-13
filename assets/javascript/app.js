// Initialize Firebase



// const config = {
//   apiKey: firebaseAPI,
//   authDomain: "curate-ss.firebaseapp.com",
//   databaseURL: "https://curate-ss.firebaseio.com",
//   projectId: "curate-ss",
//   storageBucket: "curate-ss.appspot.com",
//   messagingSenderId: "872408743875"
// };
// firebase.initializeApp(config);


let paintings = [
  {
    paintingName: "The Harvesters",
    objectID: 435809,
    wikiSearch: "The Harvesters (painting)",
    description: "",
    palette: ["rgb(214, 152, 70)", "rgb(37, 31, 17)", "rgb(114, 62, 17)"],
    orientation: "landscape",
    metURL: "https://www.metmuseum.org/art/collection/search/435809",
    weatherPalettes: [
      //sunny
      {
        one: "#FFE6C9",
        two: "#E8A74D",
        three: "#8B4B0E",
        four: "#717453",
        five: "#782D16"
      },
      //overcast
      {
        one: "#D7C4AE",
        two: "#6F6759",
        three: "#3F4333",
        four: "#592B0E",
        five: "#2E1A08"
      },
      //stormy
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
    description: "Simone Martini was one of the leading painters of his time, whose highly refined technique and descriptive powers were unequalled in Europe and earned the praise and friendship of the Italian poet Petrarch (1304–1374). This panel, together with a related work depicting Saint Ansanus in the Robert Lehman Collection (1975.1.13) and a third panel of Saint Andrew (41.100.23) in the European Paintings Collection, formed part of an altarpiece that was possibly commissioned by the civic government of Siena.",
    palette: ["rgb(11, 6, 9)", "rgb(216, 152, 69)", "rgb(163, 5, 4)"],
    orientation: "portrait",
    metURL: "https://www.metmuseum.org/art/collection/search/459136",
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
    wikiSearch: "The Dance Class (Degas, Metropolitan Museum of Art)",
    description: "",
    palette: ["rgb(85, 94, 56)", "rgb(88, 58, 26)", "rgb(150, 140, 113)"],
    orientation: "portrait",
    metURL: "https://www.metmuseum.org/art/collection/search/438817",
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
  {
    paintingName: "Boating",
    objectID: 436947,
    wikiSearch: "",
    description: "Boating was painted in the summer of 1874 when Manet was at the family home at Gennevilliers on the Seine, opposite Argenteuil. At this time he was frequently joined by Claude Monet, who had been living in Argenteuil for some time, and occasionally by Renoir. Manet painted Monet and his wife and it was at this period that he came closest to adopting the impressionist idiom of working in the open air, using short rapid brushstrokes and adopting a much higher key than in his earlier work.",
    palette: ["rgb(101, 134, 166)", "rgb(89, 57, 36)", "rgb(216, 212, 209)"],
    orientation: "landscape",
    metURL: "https://www.metmuseum.org/art/collection/search/436947",
    weatherPalettes: [
      {
        one: "#E6E2E9",
        two: "#DBB9A6",
        three: "#8FACCB",
        four: "#523420",
        five: "#4A5578"
      },
      {
        one: "#D1CDD1",
        two: "#6A90B0",
        three: "#C7A794",
        four: "#836858",
        five: "#432E25"
      },
      {
        one: "#C7C0BF",
        two: "#708EAB",
        three: "#593C21",
        four: "#332720",
        five: "#232D49"
      }
    ]
  },  
  {
    paintingName: "Still Life with Apples and a Pot of Primroses",
    objectID: 435882,
    wikiSearch: "",
    description: "Cézanne rarely painted flowering plants or fresh-cut bouquets, which were susceptible to wilting under his protracted gaze. He included potted plants only in three still lifes, two views of the conservatory at Jas de Bouffan, his family's estate, and about a dozen exquisite watercolors made over the course of two decades (from about 1878 to 1906). Cézanne seems to have reserved this particular table, with its scalloped apron and distinctive bowed legs, for three of his finest still lifes of the 1890s. This painting was once owned by the ardent gardener Claude Monet.",
    orientation: "landscape",
    metURL: "https://www.metmuseum.org/art/collection/search/435882",
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
//     wikiSearch: "Whalers (J. M. W. Turner)",
//     description: "",
//     palette: ["rgb(219, 201, 169)", "rgb(193, 180, 147)", "rgb(39, 28, 15)"],
//     orientation: "landscape"
//   },
//   {
//     paintingName: "View of Toledo",
//     objectID: 436575,
//     wikiSearch: "View of Toledo",
//     description: "",
//     palette: ["rgb(35, 81, 89)", "rgb(71, 68, 49)", "rgb(90, 103, 62)"],
//     orientation: "portrait"
//   },
//   {
//     paintingName: "Young Woman with a Water Pitcher",
//     objectID: 437881,
//     wikiSearch: "",
//     description: "This painting is one of a closely related group painted in the early to mid-1660s as the artist was not using linear perspective and geometric order and the light was his only source of emphasis.  The painting by Henry Gurdon Marquand in 1887 at a Paris gallery for $800. When Marquand brought it to the United States, it was the first Vermeer in America. Marquand donated the artwork along with other pieces in his collection to the Metropolitan Museum of Art in New York City",
//     palette: ["rgb(17, 40, 64)", "rgb(141, 133, 112)", "rgb(38, 20, 23)"],

//   },
//   {
//     paintingName: "La Berceuse",
//     objectID: 437984,
//     wikiSearch: "",
//     description: 'After her husband had posed for several works with van Gogh, Augustine Roulin sat for Van Gogh and Paul Gauguin in the Yellow House the two men shared. Van Gogh created several La Berceuse [la bɛʁsøz] works where Augustine rocked her unseen cradle by a string.[15] Van Gogh labeled the group of work La Berceuse meaning "our lullaby or the woman rocking the cradle." The colour and setting were intended to set the scene of a lullaby, meant to give comfort to "lonely souls."',
//     palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"],
//     orientation: portrait
//   },
//  
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
let dimensions;
let paintingURL;

let paintingDescription;

let intervalID;
let time;
let date;
let thisPainting;
let user = "Gray";
let timeOfDay;



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

function choosePainting(paintingsArray) {
  let numberChoices = paintingsArray.length;
  return Math.floor(Math.random() * numberChoices);
}




//chooses random painting, will be fleshed out later
function choosePainting(paintingsArray) {
  let numberChoices = paintingsArray.length;
  return Math.floor(Math.random() * numberChoices);
}



//get's user's geolocation, if it fails defaults to berkeley location
function getLocationPermission() {

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    localStorage.setItem("currentLatitude", latitude);
    localStorage.setItem("currentLongitude", longitude);
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

function getIP() {
  let ipCity;

  if (localStorage.getItem("cityName") === null) {
    console.log("no local storage city");
    getLocationPermission();
  } else {
    $.get("https://ipinfo.io", function (response) {
      console.log(response);
      console.log("City: " + response.city, " Latitude/Longitude: " + response.loc);
      ipCity = response.city;
      console.log(ipCity);

      if (localStorage.getItem("cityName") === ipCity) {

        latitude = localStorage.getItem("currentLatitude");
        longitude = localStorage.getItem("currentLongitude");
        getWeather();

      } else {
        getLocationPermission();
      }
    }, "jsonp");
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
    console.log("city is: " + city);
    state = data.state_code;
    console.log("state is: " + state);
    country = data.country_code;
    console.log(weatherCode);
    console.log(weatherDescription);
    localStorage.setItem("cityName", city);
    //if it's a stormy code
    if (weatherCode < 700) {
      setWeather(2);
      //if its one of three sunny codes
    } else if (799 < weatherCode < 804) {
      setWeather(0);
      //else its overcast-y
    } else {
      setWeather(1);
    }

    $("#city").text(city);
    $("#state").text(state);
    $("#weather").text(weatherDescription);
    $("#temp").text(temperature);

  })
}


let thisPalette;

//basic function for now, will add color printing later.  sets weather code
function setWeather(code) {
  whichWeather = code;
  console.log("the weather code is" + code);
  thisPalette = thisPainting.weatherPalettes[whichWeather];
  console.log("the weather is: " + code)

    //==GEO COLOR ASSIGNMENTS====================================================================================================================================================================================
  
  //==GEO SHAPE GRADIENTS
  $(".geoBox1").attr("style", "background-image: linear-gradient(to top, " + thisPalette.four + ", " + thisPalette.one + ");");
  $(".geoBox2").attr("style", "background-image: linear-gradient(to right, " + thisPalette.five + ", " + thisPalette.three + ");");
  $(".geoBox3").attr("style", "background-image: linear-gradient(to right, " + thisPalette.four + ", " + thisPalette.two + ");");
  $(".geo-html").attr("style", "background-color: " + thisPalette.one);

  $(".geo-body").attr("style", "color: " + thisPalette.five);
  $(".the-back").attr("style", "background: " + thisPalette.one);
  $(".the-back").attr("style", "color: " + thisPalette.five);
  $(".art-info").attr("style", "color: " + thisPalette.one);
  $(".extra-info").attr("href", thisPainting.metURL);

  
    //==BUTTONS=============//
  $(".btn-floating").attr("style", "background-color: " + thisPalette.one);
  $(".material-icons").attr("style", "color: " + thisPalette.five);


  
  //==GALLERY COLOR ASSIGNMENTS====================================================================================================================================================================================
  //==BODY/BG=============//
  $("#gallery-body").attr("style", "background-color: " + thisPainting.weatherPalettes[whichWeather].two);
  // $(".wrapper").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].four);
  
  //==CARD BACKSIDE=======//
  $("#demo-card-info").attr("style", "background-color: " + thisPainting.weatherPalettes[whichWeather].one);
  $(".card-tabs").attr("style", "background-color: " + thisPainting.weatherPalettes[whichWeather].five);
  $("#info-back").attr("style", "background-color: " + thisPainting.weatherPalettes[whichWeather].five);
  $(".flip-back").attr("style", "background-color: " + thisPainting.weatherPalettes[whichWeather].five);
  $("#info-back-title").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].one);
  $("#info-back-text").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].one);

  //==ARTIST INFO====//
  $("#painting-card").attr("style", "background-color: " + thisPainting.weatherPalettes[whichWeather].one);
  $("#artist-name").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].five);
  $("#painting-name").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].five);
  $("#artist-bio").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].four);

  //==CLOCK/TIME====//
  $(".date-color").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].four);
  $(".time-color").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].five);
  $(".city-color").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].four);
  $(".weather-color").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].four);
  $(".temp-color").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].four);
  $(".temp-weather-info-color").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].four);
}



//wikipedia description puller from first two sentences of article
function setWikiDescription(index) {
  //wikipedia API query URL to get first two sentences of article
  let pageName = paintings[index].wikiSearch;
  if (pageName === "") {
    paintingDescription = paintings[index].description;
    $(".card-reverse").text(paintingDescription);
  } else {
    let wikiURL = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=" + pageName + "&exintro=&exsentences=4&explaintext=&redirects=&format=json&callback=?";
    $.ajax({
      url: wikiURL,
      method: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
    }).then(function (response) {
      console.log(response);
      let pageID = parseInt(Object.keys(response.query.pages)[0]);
      console.log(pageID);
      wikiExtract = response.query.pages[pageID].extract;
      console.log(wikiExtract);

      paintingDescription = wikiExtract;
      $(".card-reverse").text(paintingDescription);
      console.log(paintingDescription);
    })

    

  }
}

function getGreetingTime(m) {
  var g = null; //return g

  if (!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

  var split_afternoon = 12 //24hr time to split the afternoon
  var split_evening = 17 //24hr time to split the evening
  var currentHour = parseFloat(m.format("HH"));

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    g = "afternoon";
  } else if (currentHour >= split_evening) {
    g = "evening";
  } else {
    g = "morning";
  }

  return g;
}

function setTime() {
  clearInterval(intervalID);
  intervalID = setInterval(count, 1000);

  function count() {
    time = moment().format("hh:mm A");
    console.log(time);
    //some statement printing time to screen
    $(".clock").text(time);

    //function to check general time of day

    $("#time-of-day").text(timeOfDay);
  }
}

function setDate() {
  date = moment().format("dddd MMM Do");
  console.log(date);
  $(".date").text(date);
  //some statment printing date
}


//stuff for materialize functionality

//nav button event listener 
//direction is defaulted to up, need to set in each instance for other directionality
document.addEventListener('DOMContentLoaded', function() {

  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
  });
});


//when page is loaded gets location/weather, does met api call, etc
$(document).ready(function () {
  //materialize stuff
  $('.materialboxed').materialbox();
  //modal stuff
  M.AutoInit();
  $('.modal').modal('open');

  timeOfDay = getGreetingTime(moment());

  $("#user-name").text(user);
  getIP();
  setTime();
  setDate();

  let paintingNumber;
  if (localStorage.getItem("paintingChoice") === null) {
    paintingNumber = choosePainting(paintings);
    localStorage.setItem("paintingChoice", paintingNumber);
  }
  else {
    paintingNumber = localStorage.getItem("paintingChoice");
  }
  thisPainting = paintings[paintingNumber];
  console.log("this is this painting: " + thisPainting);
  setWikiDescription(paintingNumber);

  let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + thisPainting.objectID;


  //Met API ajax call

  $.ajax({
    url: metQueryURL,
    method: "GET"
  }).then(function (response) {
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
    dimensions = response.dimensions;
    paintingURL = response.primaryImageSmall;

    //===GEO ASSIGNMENTS ======================================================================
    $("#vg-painting").attr("src", paintingURL);
    $("#vg-painting").attr("alt", thisPainting.paintingName);
    $(".artist-name").text(artist);
    $(".painting-name").text(paintingTitle);
    $(".painting-info").text(artistBio);
    $(".painting-info2").text(year + " " + medium);
    $(".painting-info3").text(dimensions);


    //===GALLERY ASSIGNMENTS ==================================================================
    $("#art-piece").attr("src", paintingURL);
    $("#art-piece").attr("alt", thisPainting.paintingName);
    $("#artist-name").text(artist);
    $("#painting-name").text(paintingTitle);
    $("#artist-bio").text(artistBio);
    $("#painting-info").text(year + " " + medium);
    

    console.log(paintingTitle);
    console.log(artist);
    console.log(artistBio);
    console.log(artistNationality);
    console.log(medium);
    console.log(year);
    console.log(dimensions);
    console.log(paintingURL);

  })
  console.log("my new test: " + thisPainting.orientation);











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

