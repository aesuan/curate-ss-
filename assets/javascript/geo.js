$(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
  });




  $(".geoBox1").attr("style", "background-image: linear-gradient(to top, " + thisPainting.palette[0] + ", " + thisPainting.palette[1] + ");");
  $(".geoBox2").attr("style", "background-image: linear-gradient(to right, " + thisPainting.palette[1] + ", " + thisPainting.palette[2] + ");");
  $(".geoBox3").attr("style", "background-image: linear-gradient(to right, " + thisPainting.palette[0] + ", " + thisPainting.palette[2] + ");");
  $(".geo-html").attr("style", "background-color: " + thisPainting.palette[2]);



