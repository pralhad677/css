 let sliderList = document.getElementsByClassName('slider')
 let activeList = document.getElementsByClassName("circle")
 console.log([...sliderList])


 
 const array = [...sliderList];
 const array1 = [...activeList]
let index = 0;

function printElement() {
    console.log(array[index]);
    console.log(array1[index])
      
    if(index===0){
        array[index+2].classList.remove('activeSlider')
        array1[index+2].classList.remove('active')

    }
    if(index>0){
        array[index-1].classList.remove('activeSlider')
        array1[index-1].classList.remove('active')
    }

    console.log(array[index].classList.add('activeSlider'));
    console.log(array1[index].classList.add('active'));
    index = (index + 1) % array.length;
 
   
}

// Run the printElement function every 3 seconds
const intervalId = setInterval(printElement, 1000);
