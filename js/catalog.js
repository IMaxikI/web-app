const productsDiv = document.querySelector(".products");
const type = localStorage.getItem("typePage");
let gen = localStorage.getItem("typePage");
let contentPage = [];
let selectProduct = [];
products.forEach(el=>{
        if(el.gender == gen){
            contentPage.push(el);
        }
});

selectProduct = contentPage;

productsDiv.innerHTML = `<div class="name-products">
                            <h3>${type.toUpperCase()}</h3>
                        </div>
                        <div class="sort-wrapper">
                            <select name="sort" class="sort-select" onchange="sortProducts()">
                              <option value="def">По умолчанию</option>
                              <option value="asc">По возврастанию цены</option>
                              <option value="desc">По убыванию цены</option>
                            </select>
                        </div>
                        <div class="cards-wrapper"></div>`;

// Сортировка
function sortProducts(){
    const tempProduct = selectProduct;
    const sortSelect = document.querySelector(".sort-select");
    if(sortSelect.value == "asc"){
        tempProduct.sort( (a,b)=>a.price - b.price);
        printProduct(tempProduct);
    }else if(sortSelect.value = "desc"){
        tempProduct.sort( (a,b)=>b.price - a.price);
        printProduct(tempProduct);
    }else{
        printProduct(tempProduct);
    }
}


const categories = document.querySelector(".categories-wrapper");

let categs = new Set();
products.forEach(el=>{
    categs.add(el.type);
});

categories.innerHTML = `<h3>КАТЕГОРИИ</h3>
                        <button class="btn-catg focus-btn" onclick="clickBtn('All')">Все</button>`;
categs.forEach(el=>{
    categories.innerHTML += `<button class="btn-catg" onclick="clickBtn('${el}')">${el}</button>`;
});

const btns = document.querySelectorAll(".btn-catg");
btns.forEach(btn => {
   btn.addEventListener("click", evt => {
       btns.forEach(btn => {
           btn.className = "btn-catg";
       })
      evt.target.className += " focus-btn";
   });
});
// Выбор категории
function clickBtn(type){
    selectProduct =[];
    if(type == "All"){
        selectProduct = contentPage;
    }else{
        contentPage.forEach(el=>{
            if(el.type == type){
                selectProduct.push(el);
            }
        });
    }
    sortProducts();
}

const cards = document.querySelector(".cards-wrapper");
printProduct(contentPage);

//Поиск
const search = document.querySelector(".img-search");
const searchText = document.querySelector(".search-field");

search.addEventListener("click", () => {
    cards.innerHTML = "";
    selectProduct = [];
    contentPage .forEach(prod => {
        const text = searchText.value.trim().toLowerCase();
        if (prod.name.toLowerCase().indexOf(text) != -1) {
            selectProduct.push(prod);
        }
    });
    if (selectProduct.length != 0) {
        sortProducts(selectProduct)
    } else {
        cards.innerHTML = `<p class="products-not-found">Товары не найдены!</p>`
    }
});

function printProduct(arr){
    cards.innerHTML = "";
    arr.forEach(el=>{
        cards.innerHTML += `<div class="card">
                            <img src=${el.colors[Object.keys(el.colors)[0]]} alt="${el.name}" >
                            <p class="card-name">${el.name}</p>
                            <p class="card-price">${el.price} BYN</p>
                            <a href="view.html" onclick="localStorage.setItem('name','${el.name}');"  class="card-view">просмотр</a> 
                        </div>`;
    });
}

