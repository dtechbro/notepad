const note_container = document.querySelector(".note-container")
const create_btn = document.querySelector(".btn")
let note = document.querySelectorAll(".input-box")

function show_notes(){
    note_container.innerHTML = localStorage.getItem("note")
}
show_notes()

function update_storage() {
    localStorage.setItem("note", note_container.innerHTML)
}

create_btn.addEventListener("click", ()=>{
    let input_box = document.createElement("p")
    let img = document.createElement("img")
    input_box.className = "input-box"
    input_box.setAttribute("contenteditable", "true")
    img.src = "images/delete.png"
    note_container.appendChild(input_box).appendChild(img)
})

note_container.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        update_storage()
    }
    else if(e.target.tagName === "p"){
        note = document.querySelectorAll(".input-box")
        note.forEach(nt => {
            nt.onekeyup = function(){
                update_storage()
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})