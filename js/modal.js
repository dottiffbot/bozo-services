const modals = document.querySelectorAll(".modal")
const coshra = document.querySelector(".coshra")
const eyebeam = document.querySelector(".eyebeam")
const venice = document.querySelector("#venice")
const spawn = document.querySelector("#spawn")
const trust = document.querySelector(".trust")
const bb = document.querySelector("#bb");
const beyond = document.querySelector(".beyond")
const ftr = document.querySelector("#ftr")
const telepresence = document.querySelector("#telepresence")
const bubs = document.querySelector(".bubs")
const un = document.querySelector("#un")
const undocumenta = document.querySelector(".undocumenta")
const invisible = document.querySelector("#invis")
const artHandler = document.querySelector(".arthandler")
const closeModals = document.querySelectorAll(".ex")


venice.addEventListener("click", function (){
  coshra.classList.toggle("seen")
  console.log("seen")

})

ftr.addEventListener("click", function (){
  eyebeam.classList.toggle("seen")

})

bb.addEventListener("click", function(){
  beyond.classList.toggle("seen")
})

telepresence.addEventListener("click", function(){
  bubs.classList.toggle("seen")

})
spawn.addEventListener("click", function(){
  trust.classList.toggle("seen")

})
un.addEventListener("click", function(){
  undocumenta.classList.toggle("seen")

})
invisible.addEventListener("click", function(){
 artHandler.classList.toggle("seen")

})

// modals.forEach(modal =>{
//   modal.addEventListener("click", function(){
//     modal.classList.toggle("seen")
//   })
// })


closeModals.forEach(close => {
  close.addEventListener("click", function (){
    modals.forEach(modal => {
      modal.classList.remove("seen")
      modal.scrollTop = 0;

    });
  })


});
