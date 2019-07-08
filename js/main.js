class Products {
    constructor(container=`.products`){
        this.container = container;
        this.data = [];
        this.allProduct = [];
        this.init();
    }
    init(){
        this._fetchProducts();
        this._render();
        this.totalPrice()
    }
    _fetchProducts(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Keyboard', price: 200},
            {id: 3, title: 'Mouse', price: 47},
            {id: 4, title: 'Gamepad', price: 87},
            {id: 5, title: 'Chair', price: 187},
        ];
    }
    totalPrice(){
        let totalSumm = this.allProduct.reduce((accumulator, el) => accumulator + el.price, 0);
        let sum = document.querySelector(".totalPrice");
        sum.innerHTML = `Общая стоимость все товаров:${totalSumm}`;
        return sum;
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let el of this.data) {
            const product = new ProductItem(el);
            this.allProduct.push(product);
            block.insertAdjacentHTML('beforeend', product.render())
        }
    }

}

class ProductItem {
    constructor(el, img='https://placehold.it/200x150'){
        this.title = el.title;
        this.id = el.id;
        this.price = el.price;
        this.img = img;
    }
    render() {
            return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

class Cart {
    constructor(){
        // this.container  //  разметка
        //this.data = []  // товары от сервера
        //this.allProduct = []  // все товары в корзине

    }
    // render(){} // построение корзины
    // quantity (){] // количество товаров в корзине;
    // getTotalPrice () {} // общая стоимость товаров  в корзине;
    // buy (){}  // кнопка купить
}
const products = new Products();

// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Keyboard', price: 200},
//     {id: 3, title: 'Mouse', price: 47},
//     {id: 4, title: 'Gamepad', price: 87},
//     {id: 5, title: 'Chair', price: 187},
// ];
//
// const renderProduct = (title, price, img='https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };
//
// const renderPage = list => {
//     // document.querySelector(`.products`).innerHTML = list.map(el => renderProduct(el.title, el.price)).join('');
//     for(let el of list){
//         document.querySelector(`.products`).insertAdjacentHTML('beforeend', renderProduct(el.title, el.price));
//     }
// };
//
// renderPage(products);