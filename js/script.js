
const down = document.querySelector(".down")
const up = document.querySelector(".up")
const title = document.querySelector(".titles")
const siteName = document.querySelector(".siteName")
const left = document.querySelector(".side-bar")



let selectIndex = 0;
let cellCount = 6;
let cellWidth;
// let cellDist = 60;
// let r;

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
  {copy:"invisible art handler ↗", url:"https://invisible.art-handler.com/"},
  {copy: "icky gooey heart chamber ↗", url:"https://ickygoohe.art/" },
  {copy:"black people dancing on the internet ↗", url:"https://www.residency-blackpeopledancingontheinternet.com/"},
  {copy:"ingridraphael.com ↗", url:"https://www.ingrid-raphael.com/"},
  {copy:"black beyond: origins ↗", url:"http://origins.blackbeyond.xyz/"},
  {copy:"moo's memory farm ↗", url:"http://teeangel.cloud/" }
]

window.addEventListener('load', function(){
  siteName.style.visibility = "hidden"
  randomColor()
})




function spinTheWheel (){
	// let cellWidth = window.innerWidth * 2;
	let angle = selectIndex / cellCount * -360;
	let r = Math.round( (cellWidth / 2) / Math.tan(Math.PI/ angle));
	carousel.style.transform = 'translateZ(-100px) rotateX(' + angle + 'deg)';
  siteName.style.visibility = "visible"
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

const updateSection = function (){

    link.href = siteNames[picNum].url
    link.innerHTML = siteNames[picNum].copy
    link.target = "_blank"

siteName.appendChild(link)
randomColor()
}



up.addEventListener('click', function(){
	selectIndex--;
	spinTheWheel();
  prevSlide();


	console.log("touched it");
})


down.addEventListener('click', function(){
	selectIndex++;
	spinTheWheel();
  nextSlide();
	console.log("touched tit")

})

document.addEventListener("keyup", function(event){
	if(event.key == "ArrowDown"){
		selectIndex++
		spinTheWheel()
    nextSlide()

	}

	if(event.key == "ArrowUp"){
		selectIndex --
		spinTheWheel()
    prevSlide()

	}
})
