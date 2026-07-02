const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const headings = document.querySelectorAll('.heading-tags')

buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            headings.forEach((head) => head.style.color ="black"
            );
        } else if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
            headings.forEach((head) => head.style.color ="black"
            );
        } else if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id
            headings.forEach((head) => {
                head.style.color = "white"
            })
        } else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            headings.forEach((head) => {
                head.style.color = 'white'
            })
        } else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            headings.forEach((head) => {
                head.style.color = 'black'
            })
        } else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
            headings.forEach((head) => {
                head.style.color = 'white'
            })
        } else if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
            headings.forEach((head) => {
                head.style.color = 'white'
            })
        } else if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
            headings.forEach((head) => {
                head.style.color = 'black'
            })
        } else
            body.style.backgroundColor = none;
    })
})