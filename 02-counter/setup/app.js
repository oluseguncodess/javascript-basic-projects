//Start by accessing the buttons and counter value
let count = 0; 

//Access all the buttons
const btns = document.querySelectorAll(".btn");


// Access the counter value
let counter = document.getElementById("value");

btns.forEach(function(btn) {
    btn.addEventListener("click", (e)=> {
        const current = e.currentTarget.classList;
        
        // write the conditional for each click of the button
        current.contains("increase") ? count ++ :
        current.contains ("decrease") ? count -- : 
        count = 0;

        counter.innerHTML = count;

    })

});

