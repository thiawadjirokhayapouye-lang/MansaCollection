let phoneNumber = "221706551782";

// =======================
// 🟡 PANIER
// =======================
let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - " + item.price + " FCFA";
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

// =======================
// 🟢 COMMANDE DIRECTE
// =======================
function orderNow(productName, price, tailleId, btn) {

  let product = btn.closest(".product");

  let nom = product.querySelector("input[placeholder='Votre nom']").value;
  let adresse = product.querySelector("input[placeholder='Votre adresse']").value;

  if (nom === "" || adresse === "") {
    alert("Veuillez remplir vos informations");
    return;
  }

  let taille = "";
  if (tailleId) {
    taille = document.getElementById(tailleId).value;
  }

  let message = "🛍️ Commande MANSA Collection:%0A%0A";
  message += "Nom: " + nom + "%0A";
  message += "Adresse: " + adresse + "%0A%0A";
  message += "Produit: " + productName + "%0A";

  if (taille) {
    message += "Taille: " + taille + "%0A";
  }

  message += "Prix: " + price + " FCFA%0A%0A";
  message += "Paiement: Wave ou Orange Money";

  let url = "https://wa.me/" + phoneNumber + "?text=" + message;

  window.open(url, "_blank");
}

// =======================
// 🟢 COMMANDE PANIER
// =======================
function sendCartWhatsApp() {

  if (cart.length === 0) {
    alert("Panier vide !");
    return;
  }

  let message = "🛍️ Commande MANSA Collection:%0A%0A";

  cart.forEach(item => {
    message += "- " + item.name + " : " + item.price + " FCFA%0A";
  });

  message += "%0ATotal : " + total + " FCFA%0A";
  message += "%0APaiement : Wave ou Orange Money";

  let url = "https://wa.me/" + phoneNumber + "?text=" + message;

  window.open(url, "_blank");
}

// =======================
// 🎞️ SLIDER
// =======================
document.querySelectorAll(".slider").forEach(slider => {
  let images = slider.querySelectorAll("img");
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 2500);
});