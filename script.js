const galeria = document.querySelector(".galeria-imagens");
class createImg{
constructor(src){
  this.src = src
}
create(){
  const img =document.createElement("img");
  const div = document.createElement("div");
  const span = document.createElement("span");
  img.src = this.src;
  div.appendChild(img)
  return div
}
}
for(let i =1;i<=83;i++){
  const novaImg = new createImg(`./img/galeria/galeria (${i}).jpg`)
  galeria.appendChild(novaImg.create())
}

/////

const cronologia =  document.querySelectorAll(".cronologia-fotos li")

cronologia[0].classList.add("ativo")

const metadeTela = window.innerHeight * 0.9


window.addEventListener("scroll", handleContent)


function handleContent(){
  cronologia.forEach((crono)=>{
    topContent = crono.getBoundingClientRect().top - metadeTela; 
    if(topContent<0){
      crono.classList.add("ativo")
    } else{
      crono.classList.remove("ativo")
    }
  
  })
}


///

const btn = document.querySelector("button")
const audio = document.querySelector("audio")
btn.addEventListener('click',()=>{
 audio.play()
 handleClick()

})

//

const linksInternos = document.querySelectorAll('.menu-lista li a')


function handleClick(e){
const href = e.currentTarget.getAttribute("href");
const section = document.querySelector(href);



section.scrollIntoView({
  behavior: "smooth",
  block: "start",
});
}

linksInternos.forEach((link)=>{
  link.addEventListener('click',handleClick)
})

///

const tempos = document.querySelectorAll(".introducao-tempo li span")

btn.addEventListener("click",setTempos)


function setTempos(){

    tempos.forEach((tempo)=>{
      const total = +tempo.innerHTML;
      let cont = Math.floor(total / 100);
      let start = 0

      const timer = setInterval(()=>{
       start += cont
       tempo.innerText = start+' '

       if(start>total){
        tempo.innerHTML = total;
     
        clearInterval(timer)
       }
      },50 * Math.random())
      tempos[4].innerText = 12;
      tempos[5].innerText = 1;
     })

}



