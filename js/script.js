const ulAppend = document.querySelector("ul");

const listaSpesa = ["Pane", "Affettati vari", "Verdure varie", "Parmigiano", "Snack salutari", "Formaggio", "Latte", "Yogurt", "Biscotti", "Dolci Vari", "Pesto", "Succhi di frutta", "Gelato", "Pizza surgelata"];

let i = 0;

while(i < listaSpesa.length - 1){
    i++
    const liEl = document.createElement("li");
    liEl.append(listaSpesa[i]);
    ulAppend.appendChild(liEl);    
}
