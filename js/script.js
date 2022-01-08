
const down = document.querySelector(".down")
const up = document.querySelector(".up")
const title = document.querySelector(".titles")
const siteName = document.querySelector(".siteName")
const left = document.querySelector(".side-bar")
const infoButton = document.querySelector(".infoButton")
const close = document.querySelector(".close")
const moreInfo = document.querySelector(".moreInfo")


let selectIndex = 0;
let cellCount = 6;
let cellWidth;


let picNum = 0;

const cells = document.querySelectorAll(".cell")
const carousel = document.querySelector(".carousel")

let colors = [
"#7ACC00",
"#8CD9AA",
"#329572",
"#7F6ECF",
"#CF6E77",
"#EAAB2F",
"#F57600",
"#FFF429",
"#9999FF"


]


const siteNames = [
  {copy:"invisible art handler ↗", url:"https://invisible.art-handler.com/", projectType: "website, AR"},
  {copy: "icky gooey heart chamber ↗", url:"https://ickygoohe.art/", projectType: "website, 3D" },
  {copy:"black people dancing on the internet ↗", url:"https://www.residency-blackpeopledancingontheinternet.com/", projectType: "website"},
  {copy:"ingridraphael.com ↗", url:"https://www.ingrid-raphael.com/", projectType: "website"},
  {copy:"black beyond: origins ↗", url:"http://origins.blackbeyond.xyz/", projectType: "website, 3D animation"},
  {copy:"moo's memory farm ↗", url:"http://teeangel.cloud/", projectType: "website, 3D" }
]


window.addEventListener('load', function(){
  siteName.style.visibility = "hidden"
  moreInfo.style.visibility = "hidden"
  randomColor()
})

function playAudio (){
  audio = document.querySelector("#click")
  audio.play()
}
function quack(){
  clack = document.querySelector("#clack")
  clack.play()
}



function spinTheWheel (){
	// let cellWidth = window.innerWidth * 2;
	let angle = selectIndex / cellCount * -360;
	let r = Math.round( (cellWidth / 2) / Math.tan(Math.PI/ angle));
	carousel.style.transform = 'translateZ(-100px) rotateX(' + angle + 'deg)';
  siteName.style.visibility = "visible"
  siteName.style.transition = "visibility 1s"
  moreInfo.style.visibility = "visible"
}

function nextSlide (){
  picNum = picNum + 1
  if(picNum > siteNames.length - 1){
    picNum = 0
  }

  updateSection()

}

function prevSlide(){
  picNum = picNum - 1
  if (picNum < 0){
    picNum = siteNames.length - 1
  }
  updateSection()
}


function randomColor(){
  let randCol = colors[Math.floor(Math.random() * colors.length)]
  title.style.backgroundColor = randCol
  left.style.backgroundColor = randCol
  left.style.transition = ("background-color 1s")

  cells.forEach(cell => {
    cell.style.borderColor = randCol

  });

}

const link = document.createElement("a")
const details = document.createElement("p")


const updateSection = function (){

    link.href = siteNames[picNum].url
    link.innerHTML = siteNames[picNum].copy
    link.target = "_blank"

    details.innerHTML = siteNames[picNum].projectType

    siteName.appendChild(link)
    moreInfo.appendChild(details)

randomColor()

}



up.addEventListener('click', function(){
	selectIndex--;
	spinTheWheel();
  prevSlide();
  quack()
})


down.addEventListener('click', function(){
	selectIndex++;
	spinTheWheel();
  nextSlide();
  playAudio();


})

document.addEventListener("keyup", function(event){
	if(event.key == "ArrowDown"){
		selectIndex++
		spinTheWheel()
    nextSlide()
    playAudio();

	}

	if(event.key == "ArrowUp"){
		selectIndex --
		spinTheWheel()
    prevSlide()
    quack()

	}
})

// info side bar


infoButton.addEventListener("click", function (){
  if (window.outerWidth <= 414 || window.outerWidth <= 800){
    left.style.width ="100vw"
    left.style.transition = "width 1s"
  } else{
    left.style.width = "25vw"
      left.style.transition = "width 1.5s"
  }
})

close.addEventListener("click", function(){
  left.style.width = "0"
})


//
// window.addEventListener("resize", function(){
//
//   }
// })
