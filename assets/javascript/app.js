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
    paintingName: "Cow's Skull: Red, White, and Blue",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
      //rainyPalette: {}, nightPalette: {} etc 
    },
  {
    paintingName: "The Harvesters",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "Bridge over a Pond of Water Lillies",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "Madonna and Child",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "The Dance Class",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "Autumn Rhythm (Number 30)",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "Lake of Zug: Early Morning",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "View of Toledo",
    objectID: 0,
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
    paintingName: "Dutch Interior (III)",
    objectID: 486758,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  }

]


//wikipedia API query URL to get first two sentences of article
//"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=" + pageName + "&exintro=&exsentences=2&explaintext=&redirects=&format=json"

let paintingNumber = 1;
//query by object number
let paintingURL;



//+ paintings[paintingNumber].objectID;
let metSearchURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + paintings[paintingNumber].paintingName;
//Met API ajax call
$.ajax({
  url: metSearchURL,
  method: "GET"
}) .then(function(response) {
  console.log(response);
  let paintingID = response.objectIDs[0];
  let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + paintingID; 
  $.ajax({
    url: metQueryURL,
    method: "GET"
  }) .then(function(result) {
    console.log(result);
})
})

