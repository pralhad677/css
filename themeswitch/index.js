 let button =document.querySelectorAll('button')
 console.log(button)

 Array.from(button).forEach(item=>{
    
 
 item.addEventListener('click',()=>{
     
    if(item.classList.contains('red')){
        document.body.style.backgroundColor = "red";
    }
    if(item.classList.contains('green')){
        document.body.style.backgroundColor = "green";
    }
    if(item.classList.contains('black')){
        document.body.style.backgroundColor = "black";
    }
 })
})