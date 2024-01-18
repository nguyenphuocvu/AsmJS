import Header from "../components/Header"
import Footer from "../components/Footer"
import myUrl from "../mixins/url"
import BlockProducts from "../components/BlockProducts"

const ProductDetail = { 
  async getProductById(id) {
    let url = `${myUrl}products/${id}`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  async getRandomProducts(id) {
    let x = await this.getProductById(id)
    let url = `${myUrl}products?category_id=${x.category_id}`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  formatCurrency(number) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
  },
  async render(data) { 
    let product = await this.getProductById(data.data.id)
    let products = await this.getRandomProducts(data.data.id)
    return `
      ${Header.render(product.category_id + 1)}
      <div class="container mx-auto flex">
        <div class="w-6/12">
          <img class="" src="${product.image}">
        </div>
        <div class="w-6/12 pt-16">
          <h2 class="pt-6 text-3xl font-bold pb-4 border-b-[3px] inline-block">${product.name}</h2>
          <p class="pt-4 pb-4 font-bold text-red-600">Sale: ${product.discount * 100}%</p>
          <span class="line-through text-2xl text-amber-700 opacity-40 mr-4">${this.formatCurrency(product.price)}</span>
          <span class="font-bold text-2xl text-amber-700">${this.formatCurrency(product.price * (1- product.discount))}</span>
          <p class="pt-8">${product.description}</p>
          <div class="pt-12 flex items-center">
            <div class="product-quantity flex mr-10">
              <input id="quantityDec" class="border-2 cursor-pointer h-10 w-6 hover:bg-slate-100" type="button" value="-">
              <span id="quantity" class="text-center h-10 border-t-[2px] border-b-[2px] m-0 w-10 flex justify-center items-center">1</span>
              <input id="quantityInc" class="border-2 cursor-pointer h-10 w-6 hover:bg-slate-100" type="button" value="+">
            </div>
            <button id="addToCart" data-id="${product.id}" class="btn-main text-base w-44">THÊM VÀO GIỎ</button>
          </div>
        </div>
      </div>
      ${BlockProducts.render("Sản phẩm tương tự", products, 5, 1)}
      ${Footer.render()}
    `
  }, 
  afterRender() {
    document.getElementById("quantityDec").onclick = (e) => {
      e.preventDefault();
      const quantity = document.getElementById("quantity")
      let result = Number(quantity.innerText)
      if (result > 0) {
        result--
        quantity.innerText = result;
      }
    }

    document.getElementById("quantityInc").onclick = (e) => {
      e.preventDefault();
      const quantity = document.getElementById("quantity")
      let result = Number(quantity.innerText)
      result++
      quantity.innerText = result;
    }

    document.getElementById("addToCart").onclick = async (e) => {
      e.preventDefault();
      let cart = localStorage.getItem("cart")
      let product = await this.getProductById(Number(e.target.getAttribute("data-id")))
      if(!cart) {
        cart = []
        cart.push({
          id: 1,
          url: product.image,
          name: product.name,
          price: product.price * (1 - product.discount),
          quantity: Number(document.getElementById("quantity").innerText)
        })
        cart = JSON.stringify(cart)
        localStorage.setItem("cart", cart)
        alert("Thêm vào giỏ hàng thành công!")
      } else {
        cart = JSON.parse(cart)
        const exist = cart.findIndex(x => x.name === product.name)
        if (exist >= 0) {
          cart[exist].quantity += Number(document.getElementById("quantity").innerText)
        } else {
          cart.push({
          url: product.image,
            id: cart.length + 1,
            name: product.name,
            price: product.price * (1 - product.discount),
            quantity: Number(document.getElementById("quantity").innerText)
          })
        }
        cart = JSON.stringify(cart)
        localStorage.setItem("cart", cart)
        alert("Thêm vào giỏ hàng thành công!")
      }
    }
  }
}

export default ProductDetail