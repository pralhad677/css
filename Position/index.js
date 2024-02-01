
let divChild = document.getElementsByTagName('div')
console.log(divChild)
let array = Array.from(divChild)
 
 
 array.splice(0,1)
 
function *showPosition(){
 
   for(let [index,value] of array.entries()){
    console.log(index,value)
    yield(value)
   }
}
let it = showPosition()
 
let button = document.querySelector('button')
let iterationCount = 1; 
button.addEventListener('click',function(){
  
     
    const  Value = it.next().value;
   
    console.log(' Value', Value) 
    if ( Value instanceof Element) {
      const content =  Value.textContent;
      Value.classList.add(content)
      console.log(content);
      button.innerText = content
    } 
    iterationCount++
})
 