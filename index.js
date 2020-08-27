// $(".nav-toggle").click(function(){
// $(".links").addClass("show-links");
// });
$(".nav-toggle").click(function(){
  if($(".links").hasClass("show-links")){
    $(".links").removeClass("show-links")
  }
  else( $(".links").addClass("show-links"))

})
