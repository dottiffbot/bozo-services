const modals = document.querySelectorAll(".modal")
const coshra = document.querySelector(".coshra")
const eyebeam = document.querySelector(".eyebeam")
const venice = document.querySelector("#venice")
const ftr = document.querySelector("#ftr")
const closeModals = document.querySelectorAll(".ex")


venice.addEventListener("click", function (){
  coshra.classList.toggle("seen")
  console.log("seen")

})

ftr.addEventListener("click", function (){
  eyebeam.classList.toggle("seen")

})

closeModals.forEach(close => {
  close.addEventListener("click", function (){
    modals.forEach(modal => {
      modal.classList.remove("seen")
    });
  })


});
