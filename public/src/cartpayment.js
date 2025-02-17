const products = []

const dialog = document.querySelector('#finishCart')
const cartBtn = document.querySelectorAll('.cartBtn')
const finishBtn = document.querySelector('.finalizar')
const cart = document.querySelector('.cart')

cartBtn.forEach(btn => {
    btn.addEventListener('click',(event)=>{
      const id = event.target.getAttribute('data-id')
      const name = document.querySelector(`${id}-name`).innerText
      const price = document.querySelector(`${id}-price`).innerText
      const stock = document.querySelector(`${id}-stock`).innerText

        const product = {
            id,
            name,
            price,
            stock
        }

        products.push(product)
    })
})

finishBtn.addEventListener('click', ()=>{
    dialog.showModal()
})