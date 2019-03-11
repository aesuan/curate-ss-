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
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
    //rainyPalette: {}, nightPalette: {} etc
  },
  {
    paintingName: "Madonna and Child",
    objectID: 459136,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "The Dance Class",
    objectID: 438817,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "Whalers",
    objectID: 437854,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "View of Toledo",
    objectID: 436575,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "Young Woman with a Water Pitcher",
    objectID: 437881,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "Boating",
    objectID: 436947,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "La Berceuse",
    objectID: 437984,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
]


//wikipedia API query URL to get first two sentences of article
//"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=" + pageName + "&exintro=&exsentences=2&explaintext=&redirects=&format=json"

let paintingNumber = 7;

//Search by painting name
//let metSearchURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + paintings[paintingNumber].paintingName;
// $.ajax({
//   url: metSearchURL,
//   method: "GET"
// }) .then(function(response) {
//   console.log(response);
//   let paintingID = response.objectIDs[0];

//Met API ajax call
let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + paintings[paintingNumber].objectID;

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
//})

