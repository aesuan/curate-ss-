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
    palette: []
    // palette: { primaryColor: "", secondaryColor: "", tertiaryColor: "" }
    //rainyPalette: {}, nightPalette: {} etc
  },
  {
    paintingName: "Madonna and Child",
    objectID: 459136,
    palette: []
  },
  {
    paintingName: "The Dance Class",
    objectID: 438817,
    palette: []
  },
  {
    paintingName: "Whalers",
    objectID: 437854,
    palette: []

  },
  {
    paintingName: "View of Toledo",
    objectID: 436575,
    palette: []
  },
  {
    paintingName: "Young Woman with a Water Pitcher",
    objectID: 437881,
    palette: []
  },
  {
    paintingName: "Boating",
    objectID: 436947,
    palette: []
  },
  {
    paintingName: "La Berceuse",
    objectID: 437984,
    palette: []
  },
]


//wikipedia API query URL to get first two sentences of article
//"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=" + pageName + "&exintro=&exsentences=2&explaintext=&redirects=&format=json"


//Search API by painting name
//
//let metSearchURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + paintings[paintingNumber].paintingName;
// $.ajax({
//   url: metSearchURL,
//   method: "GET"
// }) .then(function(response) {
//   console.log(response);
//   let paintingID = response.objectIDs[0];
// })



//Met API ajax call

for (let i = 0, numberPaintings = paintings.length; i < numberPaintings; i++) {
  let paintingNumber = i;
  let thisPainting = paintings[paintingNumber];
  let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + thisPainting.objectID;

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

    //uncomment this section to print simple painting card on test html page
    let newPainting = $("<div>", { class: "painting-card", id: "painting-" + paintingNumber });
    let infoSection = $("<section>", { class: "info" });
    let paintingImage = $("<img>", { class: "painting", src: paintingURL, alt: "painting" });
    infoSection.append(paintingImage);
    newPainting.append(infoSection);
    let colorSection = $("<section>", { class: "colors" });
    for (let j = 0; j < 3; j++) {
      let newColor = $("<figure>", { class: "color-" + j + " block", style: thisPainting.palette[j]});
      colorSection.append(newColor);
    }
    newPainting.append(colorSection);
    $("#test-div").append(newPainting);


  })

}


