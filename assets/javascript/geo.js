$(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
  });




  $(".geoBox1").attr("style", "background-image: linear-gradient(to top, " + thisPainting.paletteDark.one + ", " + thisPainting.paletteMuted.two + ");");
  $(".geoBox2").attr("style", "background-image: linear-gradient(to right, " + thisPainting.paletteDark.three + ", " + thisPainting.paletteDark.four + ");");
  $(".geoBox3").attr("style", "background-image: linear-gradient(to right, " + thisPainting.paletteDark.one + ", " + thisPainting.paletteDark.three + ");");
  $(".geo-html").attr("style", "background-color: " + thisPainting.paletteDark.five);



