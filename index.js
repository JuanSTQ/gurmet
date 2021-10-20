const button = document.getElementById('clickme')
const next = document.getElementById('next')
const titles = Array.from(document.getElementsByTagName('h1'))
const colors = ["#1A8CD8", "black", "red", "#3376B4", "#33A9B4", "#33B4A3", "#B46033", "#E37B45", "#4598E3", "#E3455B", "#2BC09D", "#2BC06F"]
console.log("colors: " + colors.length)
const changeColor = (e)=>{
  titles.forEach(title=>{
    const ramdom = parseInt(Math.random()*12+0)
    console.log(ramdom)
    title.style.color = colors[ramdom]
  })
}
let c=0;
const nextColor = (e)=>{
  titles.forEach(title=>{
    title.style.color = colors[c]
  })
  if(c+1===colors.length){
    c=0
  }else{
    c++
  }
}
const text = document.getElementById('text')
const words = ["El Gourmet", "El gourmet"]
text.addEventListener('click', ()=>{
  
  titles.forEach(title=>{
    title.textContent= words[parseInt(Math.random()*2+0)]
  })
})
next.addEventListener('click', nextColor)
button.addEventListener('click', changeColor)