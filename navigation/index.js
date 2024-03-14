const listItem = document.getElementsByTagName("li")
console.log(listItem)

Array.from(listItem).forEach(element => {
        element.addEventListener('click',()=>{
            Array.from(listItem).forEach(li => {
                li.classList.remove('active');
            });
            element.classList.add('active');
        })
});

let navBar = document.querySelector('.nav-bar')
var beforeContent = window.getComputedStyle(navBar, ':after').content;
 
console.log(beforeContent);
navBar.addEventListener('click', function(event) {
    // Check if the click occurred on the ::before content
    console.log(event.target)
    console.log(event.target.classList.contains('nav-bar'))
    if (event.target.classList.contains('nav-bar')) {
        // If it's the ::before content, do something
        console.log('Clicked on the ::before content');
        event.target.classList.add('remove')
        // event.target.classList.remove('withBefore');
        
        event.target.classList.add('noAfter');
      }
  });