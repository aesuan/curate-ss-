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



//   $(".geoBox1").attr("style", "background-color: white;");

//   $(".primary-color-background").attr("style", "background: " + thisPainting.palette[0] + ";");
//   .grad1 {
//     background-image: linear-gradient(to top,#528360, #c2dd8f);
// }

// .grad2 {
//     background-image: linear-gradient(to right, rgb(137, 164, 204), #1F4C8F);
// }

// .grad3 {
//     background-image: linear-gradient(to right, #80a738, #1F4C8F);
// }