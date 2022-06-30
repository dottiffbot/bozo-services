const modals = document.querySelectorAll(".modal")
const coshra = document.querySelector(".coshra")
const eyebeam = document.querySelector(".eyebeam")
const venice = document.querySelector("#venice")
const spawn = document.querySelector("#spawn")
const trust = document.querySelector(".trust")
const ftr = document.querySelector("#ftr")
const telepresence = document.querySelector("#telepresence")
const bubs = document.querySelector(".bubs")
const closeModals = document.querySelectorAll(".ex")


venice.addEventListener("click", function (){
  coshra.classList.toggle("seen")
  console.log("seen")

})

ftr.addEventListener("click", function (){
  eyebeam.classList.toggle("seen")

})

telepresence.addEventListener("click", function(){
  bubs.classList.toggle("seen")

})
spawn.addEventListener("click", function(){
  trust.classList.toggle("seen")

})


closeModals.forEach(close => {
  close.addEventListener("click", function (){
    modals.forEach(modal => {
      modal.classList.remove("seen")
      modal.scrollTop = 0;

    });
  })


});
