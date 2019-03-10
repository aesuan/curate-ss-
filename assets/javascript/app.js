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
    paintingName: "The Hunters in the Snow",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  },
  {
    paintingName: "",
    objectID: 0,
    palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
  }
]


//wikipedia API query URL to get first two sentences of article
//"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=" + pageName + "&exintro=&exsentences=2&explaintext=&redirects=&format=json"


let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + paintings[paintingNumber].paintingName;

//Met API ajax call
$.ajax({
  url: metQueryURL,
  method: "GET"
}) .then(function(response) {
  
})