var myParagraph = document.getElementById("paragraphChange");
var myPrincess = document.getElementById("cuteBaby");
var button = document.getElementById("myButton");
button.addEventListener("click", function () {
  myParagraph.textContent = "You have freed the Princess, She says Thank you!";
  myPrincess.src = "./media/free_princess.jpeg";
});
