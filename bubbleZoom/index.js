let childDiv = document.querySelectorAll('.child')
console.log(childDiv)


Array.from(childDiv).forEach((item,index)=>{
    item.addEventListener('mouseover',()=>{
     
        item.classList.add('hover')
       
        if(index===childDiv.length-1){ 
      
            childDiv[index-1].classList.add('hoverscale')
        }
        if(index===0){
         
            childDiv[index+1].classList.add('hoverscale')
        }
        if(index !==0 && index !==childDiv.length-1){
           
            childDiv[index+1].classList.add('hoverscale')
            childDiv[index-1].classList.add('hoverscale')
        }
     

    })
    item.addEventListener('mouseleave', () => {
    
        item.classList.remove('hover');
        if(index===childDiv.length-1){ 
        
            childDiv[index-1].classList.remove('hoverscale')
        }
        if(index===0){
          
            childDiv[index+1].classList.remove('hoverscale')
        }
        if(index !==0 && index !==childDiv.length-1){

            childDiv[index+1].classList.remove('hoverscale')
            childDiv[index-1].classList.remove('hoverscale')
        }
    });

})