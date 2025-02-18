document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".tab-btn");
    const sizeButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product");
  
    let activeCategory = "tradicional"; // Categoria padrão
    let activeSize = "1L"; // Tamanho padrão
  
    // Função para filtrar os produtos
    function filterProducts() {
      products.forEach(product => {
        const productCategory = product.getAttribute("data-category");
        const productSize = product.getAttribute("data-size");
  
        // Verifica se a categoria e o tamanho do produto correspondem às opções selecionadas
        if (productCategory === activeCategory && productSize === activeSize) {
          product.style.display = "flex"; // Exibe o produto
        } else {
          product.style.display = "none"; // Esconde o produto
        }
      });
    }
  
    // Inicializa o filtro
    filterProducts();
  
    // Altera a categoria ativa ao clicar
    categoryButtons.forEach(button => {
      button.addEventListener("click", function () {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
  
        activeCategory = this.getAttribute("data-category");
        filterProducts();
      });
    });
  
    // Altera o tamanho ativo ao clicar
    sizeButtons.forEach(button => {
      button.addEventListener("click", function () {
        sizeButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
  
        activeSize = this.getAttribute("data-size");
        filterProducts();
      });
    });
  });
  