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
  {
    paintingName: "Pines Along the Shore",
    objectID: 459095,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Windflowers",
    objectID: 10767,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "LThe Calm Sea",
    objectID: 436005,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "The Veteran in a New Field",
    objectID: 11145,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Marine Landscape",
    objectID: 10215,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Steamboats in the Port of Rouen",
    objectID: 437309,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Allée of Chestnut Trees",
    objectID: 459121,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Sunflowers",
    objectID: 436524,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "View of the Domaine Saint-Joseph",
    objectID: 435885,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Oleanders",
    objectID: 436530,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Venice, from the Porch of Madonna della Salute",
    objectID: 437853,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Dancers, Pink and Green",
    objectID: 436140,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Breton Brother and Sister",
    objectID: 435754,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Olive Trees",
    objectID: 437998,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Roman Girl at a Fountain",
    objectID: 435708,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Kynance",
    objectID: 435775,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "The House with the Cracked Walls",
    objectID: 435874,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Dancers Practicing at the Barre",
    objectID: 436139,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Still Life with Apples and a Pot of Primroses",
    objectID: 435882,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Madame Cézanne (Hortense Fiquet, 1850–1922) in the Conservatory",
    objectID: 435875,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "The Road from Versailles to Louveciennes",
    objectID: 437685,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Sahurs Meadows in Morning Sun",
    objectID: 437683,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Washerwoman, Study",
    objectID: 437303,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Irises",
    objectID: 436528,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Madame Manet (Suzanne Leenhoff, 1830–1906) at Bellevue",
    objectID: 438002,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "The Gulf of Marseilles Seen from L'Estaque",
    objectID: 435872,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Wheat Field with Cypresses",
    objectID: 436535,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "Roses",
    objectID: 436534,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "A Farm in Brittany",
    objectID: 436448,
    palette: ["rgb(29, 89, 68)", "rgb(142, 16, 16)", "rgb(191, 130, 24)"]
  },
  {
    paintingName: "The Siesta",
    objectID: 436449,
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
function choosePainting(paintingsArray) {
  let numberChoices = paintingsArray.length;
  return Math.floor(Math.random() * numberChoices);
 }

 

let paintingNumber = choosePainting(paintings);

console.log(paintingNumber);


//Met API ajax call

//UNCOMMENT THE NEXT TWO LINES TO USE JS/PALETTE TEST HTML
// for (let i = 0, numberPaintings = paintings.length; i < numberPaintings; i++) {
//   paintingNumber = i;
  let thisPainting = paintings[paintingNumber];
  console.log(thisPainting);
  let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + thisPainting.objectID;



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

    //UNCOMMENT THIS WHOLE SECTION TO USE JS/PALETTE TEST HTML
    // let newPainting = $("<div>", { class: "painting-card", id: "painting-" + paintingNumber });
    // let infoSection = $("<section>", { class: "info" });
    // let paintingImage = $("<img>", { class: "painting", src: paintingURL, alt: "painting" });
    // infoSection.append(paintingImage);
    // newPainting.append(infoSection);
    // let colorSection = $("<section>", { class: "colors" });
    // for (let j = 0; j < 3; j++) {
    //   let newColor = $("<figure>", { class: "color-" + j + " block", style: "background: " + thisPainting.palette[j] + ";"});
    //   colorSection.append(newColor);
    // }
    // newPainting.append(colorSection);
    // $("#test-div").append(newPainting);


  })

  //UNCOMMENT FOR JS/PALETTE TEST HTML
// }





