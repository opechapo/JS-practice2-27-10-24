const input = document.getElementById('input')
const button = document.getElementById('button')
const output = document.getElementById('output')

// function display(){

//    output.innerHTML= input.value
// }

// button.addEventListener('click', display)


// let outPuter = output.innerHTML

button.addEventListener('click', ()=>{
const inputValue= input.value 
output.insertAdjacentHTML('beforeend',`<li>${inputValue}`)

})