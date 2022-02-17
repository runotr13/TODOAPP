
let content = document.querySelectorAll(".content");

window.addEventListener("load", () => {
    for (let i = 0; i < content.length; i++) {
        content[i].addEventListener("click",(e) => {
            if (e.target.checked == true) {
                e.target.parentElement.style.backgroundColor = "#AE5F75";
                e.target.nextElementSibling.style.color = "#e15f41";
                e.target.previousElementSibling.style.color = "#f19066";
            }else if(e.target.checked == true){
                e.target.parentElement.style.backgroundColor = "#6D335C";
                e.target.nextElementSibling.style.color = "white";
                e.target.previousElementSibling.style.color = "white";
            }
        })
        
    }
})

let word = document.getElementById('değişen');
let btn = document.querySelector('.todobuton')
let search = document.getElementById('search')
btn.addEventListener('click',()=>{
    word.innerHTML = search.value;
    search.value = "";
});


let bton = document.getElementById('button')
let valueinput = document.getElementById('valuee')
let item = document.getElementById('item')

bton.addEventListener('click',()=>{
    valueinput.style.display = "block";
    valueebutton.style.display = "block"
    valueinput.value = item.value;
    item.value = "";
})

let bton2 = document.getElementById('tasksbutton')
let tasks = document.getElementById('tasks')

bton2.addEventListener('click',()=>{
    tasks.style.backgroundColor = "#5529DC"
    tasks.style.textDecoration = "line-through"
})



let maindiv = document.querySelectorAll('.maindiv')
var mainspan = document.getElementById('mainspan')

window.addEventListener("load",() =>{
    for (let i = 0; i < maindiv.length; i++) {
        maindiv[i].addEventListener("click",(e) =>{
            if(e.target.checked ==true){
                e.target.parentElement.style.textDecoration = "line-through"
                e.target.parentElement.style.fontSize = "12px"
                mainspan.innerText = Number(mainspan.innerText) + 1
            }else if(e.target.checked ==false){
                e.target.parentElement.style.textDecoration = "none"
                e.target.parentElement.style.fontSize = "15px"
                mainspan.innerText = Number(mainspan.innerText) - 1
            }
        })
        
    }
})
