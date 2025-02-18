document
  .getElementById("adminLoginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const body = new URLSearchParams(formData);

    const response = await fetch("/auth/login", {
      method: "POST",
      body,
      credentials: "include",
    });

    if (response.redirected) {
      window.location.href = response.url;
    } else {
      document.getElementById("infosLogin").textContent =
        "Credenciais inválidas";
    }
  });
