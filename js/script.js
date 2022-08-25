
const down = document.querySelector(".bottom")
const up = document.querySelector(".top")
const title = document.querySelector(".titles")
const siteName = document.querySelector(".siteName")
const left = document.querySelector(".side-bar")
const infoButton = document.querySelector(".infoButton")
const close = document.querySelector(".close")
const moreInfo = document.querySelector(".moreInfo")
const footer = document.querySelector(".footer")



let selectIndex = 0;
let cellCount = 9;
let cellWidth;


let picNum = 0;

let mobileArrows, upArrow, downArrow;

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
  {copy: "control", url:"https://cntrl-study.glitch.me", projectType: "package design"},
  {copy: "from the rupture", url:"https://ftr.eyebeam.org/", projectType: "3D animation, design system, ux"},
  {copy: "telepresence", url: "https://mfadt.space/", projectType: "3D animation"},
  {copy:"invisible art handler", url:"https://invisible.art-handler.com/", projectType: "website, AR"},
  {copy: "icky gooey heart chamber", url:"https://ickygoohe.art/", projectType: "website, 3D" },
  {copy:"#black people dancing on the internet", url:"https://www.residency-blackpeopledancingontheinternet.com/", projectType: "website"},
  // {copy:"ingridraphael.com", url:"https://www.ingrid-raphael.com/", projectType: "website"},
  {copy:"black beyond: origins", url:"http://origins.blackbeyond.xyz/", projectType: "website, 3D animation"},
  {copy: "how to begin again", url:"https://www.labiennale.org/en/architecture/2021/emerging-communities/cohabitation-strategies", projectType: "3D illustration"},
  {copy: "spawn", url:"https://parsons.edu/dt-2022/spawn/", projectType:"installation"}

]

function howTo(){
  alert ("hello, welcome to this website! I am glad you are here. a couple of things that might be helpful: you can use the arrow keys or click around to navigate. Additional project information can be found by clicking on the images. All projects with websites are linked in the title card below. Have a nice day :)")
}


window.addEventListener('load', function(){
  siteName.style.visibility = "hidden"
  moreInfo.style.visibility = "hidden"
  randomColor()
  // howTo()
})

// play audio
function playAudio (){
  audio = document.querySelector("#click")
  audio.play()
}
function quack(){
  clack = document.querySelector("#clack")
  clack.play()
}
function doorOpen(){
  open = document.querySelector("#door-open")
  open.play()
}
function doorClose(){
  doorclose = document.querySelector("#door-close")
  doorclose.play()
}

// carousel
function spinTheWheel (){
	// let cellWidth = window.innerWidth * 2;
	let angle = selectIndex / cellCount * -360;
	let r = Math.round( (cellWidth / 2) / Math.tan(Math.PI/ angle));
	carousel.style.transform = 'translateZ(-488px) rotateX(' + angle + 'deg)';
  siteName.style.visibility = "visible"
  siteName.style.transition = "visibility 1s"
  moreInfo.style.visibility = "visible"
}

// update info

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

// random colors
function randomColor(){
  let randCol = colors[Math.floor(Math.random() * colors.length)]
  title.style.backgroundColor = randCol
  left.style.backgroundColor = randCol
  left.style.transition = ("background-color 1s")

  cells.forEach(cell => {
    cell.style.borderColor = randCol

  });

}
// create a tag / fill text from array
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

// info side bar open and close


infoButton.addEventListener("click", function (){
  if (window.outerWidth <= 414 || window.outerWidth <= 800){
    left.style.width ="100vw"
    left.style.transition = "width 1s"
  } else{
    left.style.width = "25vw"
      left.style.transition = "width 1.5s"
  }
  doorOpen()
})

close.addEventListener("click", function(){
  left.style.width = "0"
  doorClose()
})

// if the phone size is this big add these two arrows
checkWidth();
// window.addEventListener("resize", checkWidth());

function checkWidth(){
  if (window.outerWidth <= 414 || window.outerWidth <= 800){
    console.log("mobile")
  mobileArrows = document.createElement("div")
  upArrow = document.createElement("img")
  upArrow.src = "./assets/cursorup.png"
  downArrow = document.createElement("img")
  downArrow.src="./assets/cursordown.png"
  mobileArrows.className = "mobile-arrows";

  mobileArrows.appendChild(upArrow)
  mobileArrows.appendChild(downArrow)
  
footer.appendChild(mobileArrows)

upArrow.addEventListener('click', function(){
	selectIndex--;
	spinTheWheel();
  prevSlide();
  quack()
})

downArrow.addEventListener('click', function(){
	selectIndex++;
	spinTheWheel();
  nextSlide();
  playAudio();


})


    
  }



}


