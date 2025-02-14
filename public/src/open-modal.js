const addIceBtn = document.querySelector('.add-iceBtn')
const closeModalBtn = document.querySelectorAll('.closeBtn')
const dialog = document.querySelector('#create-and-update-dialog')
const createForm = document.querySelector("#create-form")
const updateBtn = document.querySelectorAll('.updateBtn')
const updateForm = document.querySelector('#update-form')

addIceBtn.addEventListener('click', ()=>{
    createForm.style.display = "flex"
    updateForm.style.display = "none"
    dialog.showModal()
})

closeModalBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        createForm.reset()
        updateForm.reset()
        dialog.close()
    })
})

updateBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        
        createForm.style.display = "none"
        updateForm.style.display = "flex"
        dialog.showModal()
    })
})