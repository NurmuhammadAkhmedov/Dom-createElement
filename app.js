let ism = prompt("Ismingizni kiriting:");
let h1 = document.createElement("h1");
h1.textContent = ism ? `Salom, ${ism}!` : "Ism kiritilmadi!";
document.body.appendChild(h1);
