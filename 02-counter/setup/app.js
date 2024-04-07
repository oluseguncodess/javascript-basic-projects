//create a counter value that increases or decreases.
let count = 0; 

//access all the buttons. 
const btns = document.querySelectorAll(".btn");


// Access the current counter value
let counter = document.getElementById("value");

btns.forEach(function(btn) {
    btn.addEventListener("click", (e)=> {
        const current = e.currentTarget.classList;
        
        // write the conditional for each click of the button
        current.contains("increase") ? count ++ :
        current.contains ("decrease") ? count -- : 
        count = 0;

        counter.textContent = count;

        //write out the conditionals for the color of the counter
        count > 0 ? counter.style.color = "green" :
        count < 0 ? counter.style.color = "red" : 
        counter.style.color = "#222";
    })

});

