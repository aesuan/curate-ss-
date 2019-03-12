$(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
  });




let whichWeather = 2

  $(".geoBox1").attr("style", "background-image: linear-gradient(to top, " + thisPainting.weatherPalettes[whichWeather].four + ", " + thisPainting.weatherPalettes[whichWeather].one + ");");
  $(".geoBox2").attr("style", "background-image: linear-gradient(to right, " + thisPainting.weatherPalettes[whichWeather].five + ", " + thisPainting.weatherPalettes[whichWeather].three + ");");
  $(".geoBox3").attr("style", "background-image: linear-gradient(to right, " + thisPainting.weatherPalettes[whichWeather].four + ", " + thisPainting.weatherPalettes[whichWeather].two + ");");
  $("html").attr("style", "background-color: " + thisPainting.weatherPalettes[whichWeather].one);

  $("body").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].five);
  $(".the-back").attr("style", "background: " + thisPainting.weatherPalettes[whichWeather].one);
  $(".the-back").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].five);
  $(".btn-floating").attr("style", "background-color: " + thisPainting.weatherPalettes[whichWeather].one);

  $(".art-info").attr("style", "color: " + thisPainting.weatherPalettes[whichWeather].one);





