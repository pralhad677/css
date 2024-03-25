const childDiv = document.querySelectorAll('.child')
console.log(childDiv)


setTimeout(()=>{
   childDiv.forEach(item=>{
        console.log('item')
        item.style.transform='translateY(0)'
    })
    
},100)
