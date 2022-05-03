const name = localStorage.getItem('name');
const product = products.find(elem => elem.name === name);

const view = document.querySelector(".view-wrapper");

let btnSize = ``;
    product.size.forEach(size=>{
    btnSize += `<button class="btn-size">${size}</button>`;
});

let btnColor = ``;
Object.keys(product.colors).forEach(color =>{
    btnColor += `<button class="btn-color" style="background-color: ${color}" onclick="changeColor('${color}')"></button>`;
});

view.innerHTML = `<div class="img-wrapper">
                        <img class="img-product" src=${product.colors[Object.keys(product.colors)[0]]}>
                   </div>
                   <div class="description-wrapper">
                        <h3 class="name">${product.name}</h3>
                        <p class="price">${product.price} BYN</p>
                        <p class="description">${product.description}</p>
                        <div class="colors-wrapper">
                            <span>Цвет:</span>${btnColor}
                        </div>
                        <div class="size-wrapper">
                            <span>Размер:</span>${btnSize}
                        </div>
                        <a class="add-btn">ДОБАВИТЬ В КОРЗИНУ</a>       
                    </div>`;

const btnsColors = document.querySelectorAll(".btn-color");
btnsColors[0].className += " focus-color";

const btnsSize = document.querySelectorAll(".btn-size");
btnsSize[0].className += " focus-size";
btnsSize.forEach(btn=>{
   btn.addEventListener("click", evt => {
       btnsSize.forEach(btn => btn.className = "btn-size");
       evt.target.className += " focus-size";
   });
});

function changeColor(color){
    btnsColors.forEach(btn =>{
        if(btn.style.backgroundColor == color){
            btn.className = "btn-color focus-color";
        }else{
            btn.className = "btn-color";
        }
    });
    const img = document.querySelector(".img-product");
    img.src = product.colors[color];
}
