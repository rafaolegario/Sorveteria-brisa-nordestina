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


document.querySelector('.updatedBtn').addEventListener("submit", async (event) => {
    if (event.target.closest(".updateBtn")) { 
        event.preventDefault();

        const id = event.target.closest(".updateBtn").getAttribute("data-id");

        const iuniqueIce = await fetch(`/protected/admin/${id}`).then((response) => response.json());

        const iceCreamName = document.querySelector('#iceCreamName');
        const iceCreamPrice = document.querySelector('#iceCreamPrice');
        const iceCreamInStock = document.querySelector('#iceCreamInStock');

        iceCreamName.value = iuniqueIce.name;
        iceCreamPrice.value = iuniqueIce.price;
        iceCreamInStock.value = iuniqueIce.inStock; 

        const response = await fetch(`/protected/admin/update/${id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: event.target.closest(".product").querySelector(".name").textContent,
                price: event.target.closest(".product").querySelector(".price").textContent,
                inStock: event.target.closest(".product").querySelector(".inStock").textContent,
            }),
        });

        if (response.redirected) {
            window.location.href = response.url;
        } else {
            event.target.closest(".product").remove();
        }
    }
});

