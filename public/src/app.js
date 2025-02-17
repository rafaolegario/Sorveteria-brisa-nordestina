document.addEventListener("click", async (event) => {
    if (event.target.closest(".deleteBtn")) {
        event.preventDefault();

        const id = event.target.closest(".deleteBtn").getAttribute("data-id");

        const response = await fetch(`/protected/admin/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
        });

        if (response.redirected) {
            window.location.href = response.url;
        } else {
            event.target.closest(".product").remove();
        }
    }
});


let currentId;
let currentTarget;

document.addEventListener("click", async (event) => {
    if (event.target.closest(".updateBtn")) {
        event.preventDefault();

        const id = event.target.closest(".updateBtn").getAttribute("data-id");
        console.log(id)

        const response = await fetch(`/protected/admin/${id}`, {
            method: "GET",
            credentials: "include",
        }).then((res) => res.json());

        const iceCreamName = document.querySelector("#iceCreamNameUp");
        const iceCreamPrice = document.querySelector("#iceCreamPriceUp");
        const iceCreamInStock = document.querySelector("#iceCreamStockUp");
        iceCreamName.value = response.name;
        iceCreamPrice.value = response.price;
        iceCreamInStock.value = response.inStock;

        currentId = id;
        currentTarget = event.target.closest(".product");
    }
});


document.querySelector("#update-form").addEventListener("submit", async (event) => {
        event.preventDefault();

        const iceCreamName = document.querySelector("#iceCreamNameUp");
        const iceCreamPrice = document.querySelector("#iceCreamPriceUp");
        const iceCreamInStock = document.querySelector("#iceCreamStockUp");

        const response = await fetch(`/protected/admin/update/${currentId}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: iceCreamName.value,
                price: iceCreamPrice.value,
                inStock: iceCreamInStock.value,
            }),
        });

        if (response.ok) {
            window.location.reload();
        } else {
            console.error("Erro ao atualizar o sorvete");
        }
});
