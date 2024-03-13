const outerDiv = document.querySelector(".outer-circle")
console.log(outerDiv)


setInterval(()=>{
    let content =  Math.floor(Math.random() * 100) + 1;
    outerDiv.setAttribute("data-content",`${content}%`)
    outerDiv.style.setProperty('--progress',`${content}%`)
    
},3000)


 