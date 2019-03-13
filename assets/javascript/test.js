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

let database = firebase.database();

let paintings = [
    {
        paintingName: "The Harvesters",
        objectID: 435809,
        wikiSearch: "The Harvesters (painting)",
        description: "",
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
        description: "Simone Martini was one of the leading painters of his time, whose highly refined technique and descriptive powers were unequalled in Europe and earned the praise and friendship of the Italian poet Petrarch (1304–1374). This panel, together with a related work depicting Saint Ansanus in the Robert Lehman Collection (1975.1.13) and a third panel of Saint Andrew (41.100.23) in the European Paintings Collection, formed part of an altarpiece that was possibly commissioned by the civic government of Siena.",
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
        wikiSearch: "The Dance Class (Degas, Metropolitan Museum of Art)",
        description: "",
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
    }
]

//PAINTING CHOICE RELATED FCNS

let paintingNumber;
let excludeIndexes = {};

// Storage.prototype.setObj = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getObj = function(key) {
//     return JSON.parse(this.getItem(key))
// }

function getPainting() {
    if (localStorage.getItem("paintingChoice") === null) {
        paintingNumber = choosePainting(paintings, null);
    } else {
        paintingNumber = localStorage.getItem("paintingChoice");
    }
    metAPI(paintingNumber);
}


function choosePainting(paintingsArray, excludeIndex) {

    database.ref("/excludeThese").on("value", function(snapshot) {

        // If Firebase has a highPrice and highBidder stored (first case)
        if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
      
          // Set the local variables for highBidder equal to the stored values in firebase.
          highBidder = snapshot.val().highBidder;
          highPrice = parseInt(snapshot.val().highPrice);
      
          // change the HTML to reflect the newly updated local values (most recent information from firebase)
          $("#highest-bidder").text(snapshot.val().highBidder);
          $("#highest-price").text("$" + snapshot.val().highPrice);
      
          // Print the local data to the console.
          console.log(snapshot.val().highBidder);
          console.log(snapshot.val().highPrice);
        }
      
        // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
        else {
      
          // Change the HTML to reflect the local value in firebase
          $("#highest-bidder").text(highBidder);
          $("#highest-price").text("$" + highPrice);
      
          // Print the local data to the console.
          console.log("local High Price");
          console.log(highBidder);
          console.log(highPrice);
        }
      
        // If any errors are experienced, log them to console.
      }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      });



database.ref().set(
    "excludeThese" = excludeIndexes
)

    if (excludeIndex != null) {
        excludeIndexes[excludeIndex] = true;
        console.log(excludeIndexes);
        localStorage.setObj("excludeThese", excludeIndexes);
        console.log(excludeIndex);
    }

    let numberChoices = paintingsArray.length;
    let choice = Math.floor(Math.random() * numberChoices);

    if (excludeIndexes[choice]===true) {
        return choosePainting(paintings, null);
    } else {
        localStorage.setItem("paintingChoice", choice);
        return choice;
    }
}

function redoPaintingChoice(currentPainting) {
    localStorage.removeItem("paintingChoice");
    paintingNumber = choosePainting(paintings, currentPainting);
    metAPI(paintingNumber);
}



function metAPI(choice) {

    thisPainting = paintings[choice];
    console.log("this is this painting: " + thisPainting.paintingName);

    let metQueryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + thisPainting.objectID;

    //Met API ajax call
    $.ajax({
        url: metQueryURL,
        method: "GET"
    }).then(function (response) {

        let paintingTitle = response.title;
        let artist = response.artistDisplayName;
        let artistBio = response.artistDisplayBio;
        let artistNationality = response.artistNationality;
        let medium = response.medium;
        let year = response.objectDate;
        let dimensions = response.dimensions;
        let paintingURL = response.primaryImageSmall;


        console.log(paintingTitle);
        console.log(artist);
        console.log(artistBio);
        console.log(artistNationality);
        console.log(medium);
        console.log(year);
        console.log(dimensions);
        console.log(paintingURL);

    })

}




$(".dislike").on("click", function () {
    redoPaintingChoice(paintingNumber);
})


$(document).ready(function () {

    getPainting();
})