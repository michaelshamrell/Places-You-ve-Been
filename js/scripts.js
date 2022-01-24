$(document).ready(function(){
  $("#portlandbutton").click(function() {
    console.log("load working");
    $("#portlandresult").show();
    let portland = new City("Big Pink", "Oregon", "Saturday Market");
    $("#portland-list").text(portland.list());
  });
});  

$(document).ready(function(){
  $("#seattlebutton").click(function() {
    console.log("load working");
    $("#seattleresult").show();
    let seattle = new City("Space Needle", "Washington", "Pike Place Market");
    $("#seattle-list").text(seattle.list());
  });
});  
 



// $("#portlandresults").submit(function(event) {
  //   event.preventDefault();
  //   console.log("submit working");
  //   $("#portlandresult").show();
    // let portland = new City("Big Pink", "Oregon", "Saturday Market");
    // $("#portlandresult").show();
    // $("#portland-list").text(portland.list);
  
 



// $(document).ready(function() {
//   $("form#seattleresults").submit(function(event) {
//   let seattle = new City("Space Needle", "Washington", "Pike Place Market");
//   $("#seattleresult").show();
//   });
// });







//Business logic for Places ---------


let portland = new City("Big Pink", "Oregon", "Saturday Market");
let seattle = new City("Space Needle", "Washington", "Pike Place Market");

//Business Logic for Cities -------
function City(landmarks, state, knownFor) {
  this.landmarks = landmarks;
  this.state = state;
  this.knownFor = knownFor;
}
City.prototype.list = function() {
  return this.landmarks + " " + this.state + " " + this.knownFor;
};