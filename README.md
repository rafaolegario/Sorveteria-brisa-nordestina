# 🍦 Sistema de Sorveteria - README Público

## 📋 Visão Geral
Aplicação web para gerenciamento de cardápio de sorvetes com área administrativa segura.

## ✨ Recursos Públicos
- Visualização do cardápio completo
- Atualização de estoque em tempo real
- Interface responsiva e amigável

## 🌐 Rotas Disponíveis
```javascript
// Visualizar cardápio
router.get("/", async (req, res) => {
  const products = await IceCreamController.getIceCreams(req, res);
  return res.render("cardapio", { products });
});

// Atualizar estoque (PATCH)
router.patch("/stock/:id", IceCreamController.updateStock);
```

## 🛠️ Como Utilizar
Acesse nosso cardápio online através da rota principal `/`.

```

## 🔒 Informações de Segurança
- Todos os dados são transmitidos de forma segura
- Área administrativa protegida por autenticação
---

**Nota:** Este README contém apenas informações públicas sobre a aplicação. As rotas administrativas e detalhes de autenticação foram omitidos por questões de segurança, já que a aplicação está em produção.
