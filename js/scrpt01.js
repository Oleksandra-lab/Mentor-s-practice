// task 01

// Потрібно створити картки продуктів
const instruments = [{
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_261194.jpg',
    name: 'Молоток',
    price: 150
}, {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5587/catalog_origin_190742.jpg',
    name: 'Перфоратор',
    price: 3000
}, {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2299/catalog_origin_261034.jpg',
    name: 'Рівень',
    price: 2000
}]

// const productList = document.querySelector(".js-productlist");
// console.log(productList);


// function createMarkup(instruments){
//     const items = instruments.map(({id, img, name, price}) => {
//         const li = document.createElement("li");
//         const image = document.createElement("img");
//         const h2 = document.createElement("h2");
//         const h3 = document.createElement("h3");
//         image.src = img;
//         image.alt = name;
//         img.width = 300;
//         h2.textContent = name;
//         h3.textContent = price;
//         li.setAttribute("data-id", id)
//         li.append(image, h2, h3)
//         return li

//     })
//     container.append(...items);
// }
// createMarkup(instruments)

const productList = document.querySelector(".js-productlist");

createMarkup(instruments);

function createMarkup(arr) {
    const markup = arr.map(({id, img, name, price}) => {
return `<li data-id = ${id}>
<img src="${img}" alt="${name}" width="300px">
<h2>${name}</h2>
<h3>${price}</h3>
</li>`

    })
    productList.innerHTML = markup.join("");
    console.log(markup);
}

const formRef = document.querySelector(".js-form");

formRef.addEventListener("click", onSubmit)

function onSubmit(evt) {
    evt.preventDefault();
    
    const inputValue = evt.currentTarget.elements.product.value;
    console.log(inputValue);
        const items = instruments.filter(({ name }) => {
            return name.toLowerCase().includes(inputValue.trim().toLowerCase())
            
        });

        createMarkup(items);
        evt.currentTarget.reset();
}
    


