let products = [];

const dialog = document.querySelector("#finishCart");
const cartBtn = document.querySelectorAll(".cartBtn");
const finishBtn = document.querySelector(".finalizar");
const cart = document.querySelector(".cart");
const cartSpan = document.querySelector(".cartSpan");
const delivery = document.querySelector(".delivery");
const finishBtnModal = document.querySelector(".finishBtn");
const productsCart = document.querySelector(".productsCart");
const closeBtn = document.querySelectorAll(".close");
const buyBtn = document.querySelector(".payment");
let totalPrice = 0;

cartBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const id = event.currentTarget.getAttribute("data-id");
    const name = document.querySelector(`#I${id}-name`).innerText;
    const price = document.querySelector(`#I${id}-price`).innerText;
    const stock = document.querySelector(`#I${id}-stock`).innerText;

    const priceConvert = parseFloat(price.replace("R$", "").replace(",", "."));
    const stockConvert = parseInt(stock.replace("Em estoque:", "").trim());

    if (stockConvert === 0) {
      alert("Produto sem estoque");
      return;
    }

    const findProduct = products.find((p) => p.id === id);

    if (findProduct) {
      if (findProduct.quantity < stockConvert) {
        findProduct.quantity++;
      }
    } else {
      const product = {
        id,
        name,
        price: priceConvert,
        stock: stockConvert,
        quantity: 1,
      };
      products.push(product);
    }

    const total = products.reduce((acc, product) => acc + product.quantity, 0);

    cartSpan.innerText = total;
  });
});

finishBtn.addEventListener("click", openModal);

cart.addEventListener("click", openModal);

function buildCart() {
  const productsCart = document.querySelector(".cartProducts");
  productsCart.innerHTML = "";

  products.forEach((product) => {
    const divProduct = document.createElement("div");
    const divInfo = document.createElement("div");
    const divRemove = document.createElement("div");

    divProduct.classList.add("productCart");
    divRemove.classList.add("removeBtn");
    divInfo.classList.add("productCartInfo");

    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    const spanQ = document.createElement("span");

    h3.innerText = product.name;
    span.innerText = ` R$: ${product.price.toFixed(2)}`;
    spanQ.innerText = ` Quantidade: ${product.quantity}`;

    divInfo.append(h3, span, spanQ);

    const removeBtn = document.createElement("button");
    const trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash");
    removeBtn.append(trash);
    divRemove.append(removeBtn);
    removeBtn.addEventListener("click", () => {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        products = products.filter((p) => p.id !== product.id);
      }
      buildCart();
    });
    divProduct.append(divInfo, divRemove);
    productsCart.append(divProduct);
  });

  const total = document.querySelectorAll(".total");
  total.forEach((t) => {
    const totalValue = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    t.innerText = `Total: R$ ${totalValue.toFixed(2)}`;
    totalPrice = totalValue;
  });
}

finishBtnModal.addEventListener("click", () => {
  productsCart.style.display = "none";
  delivery.style.display = "block";
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    dialog.close();
    delivery.style.display = "none";
    productsCart.style.display = "block";
  });
});

buyBtn.addEventListener("click", () => {
  if (products.length === 0) {
    alert("Adicione um produto ao carrinho");
    return;
  }

  const name = document.querySelector("#Nome").value;
  const phoneUser = document.querySelector("#telefone").value;
  const addressInput = document.querySelector("#endereco").value;
  const cepInput = document.querySelector("#cep").value;
  const numberInput = document.querySelector("#numero").value;
  const complementInput = document.querySelector("#complemento").value;
  const paymentInput = document.querySelector("#pagamento").value;

  if (addressInput === "" || cepInput === "" || numberInput === "") {
    alert("Preencha todos os campos");
    return;
  }

  const informations = `
👤 *Nome:* ${name}
📱 *Telefone:* ${phoneUser}
🏠 *Endereço de Entrega:*
📍 Endereço: ${addressInput}
📮 CEP: ${cepInput}
🏢 Número: ${numberInput}
📝 Complemento: ${complementInput}

💳 *Forma de Pagamento:* ${paymentInput}
💰 *Total:* R$ ${totalPrice.toFixed(2)}
`;

  const cartItems = products
    .map((item) => {
      return `
🛒 *${item.name}*
💲 Preço: R$ ${item.price}
📦 Quantidade: ( ${item.quantity} )
----------------------------
`;
    })
    .join("");

  const message = encodeURIComponent(
    `🛍️ *Resumo do Pedido:* \n${cartItems}\n${informations}`
  );
  const phone = "16991342553";

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});

function openModal() {
  delivery.style.display = "none";
  buildCart();
  dialog.showModal();
}
