import Header from "../components/Header"
import Footer from "../components/Footer"
import banners from "../datas/banners"
import Validate from "../mixins/auth"

const Cart = {
  formatCurrency(number) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
  },
  printCart() {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart)
    if (cart && cart.length !== 0) {
      let total = cart.reduce((x, product) => x + product.price * product.quantity, 0)
      let result = cart.map(product => `
        <tr>
          <td class="flex items-center">
            <button class="removeCart"data-id="${product.id}">x</button>
            <img class="h-28" src="${product.url}">
            <span>${product.name}</span>
          </td>
          <td>
            <span class="font-bold">${this.formatCurrency(product.price)}</span>
          </td>
          <td>
            <div class="flex h-full w-full">
              <button class="quantityDec" data-id="${product.id}" class="border-2 cursor-pointer h-10 w-6 hover:bg-slate-100">-</button>
              <span id="quantity" class="text-center h-10 border-2 m-0 w-10 flex justify-center items-center">${product.quantity}</span>
              <button class="quantityInc" data-id="${product.id}" class="border-2 cursor-pointer h-10 w-6 hover:bg-slate-100">+</button>
            </div>
          </td>
          <td class="font-bold">
            ${this.formatCurrency(product.price * product.quantity)}
          </td>
        </tr>
      `).join('')
      return `
        <div class="grow mt-8">
          <table class="w-full">
            <thead>
              <tr class="border-b-[1px]">
                <th class="text-left">SẢN PHẨM</th>
                <th class="text-left">GIÁ</th>
                <th class="text-left">SỐ LƯỢNG</th>
                <th class="text-left">TỔNG</th>
              </tr>
            </thead>
            <thead>
              ${result}
            </thead>
          </table>
        </div>
        <div class="grow border-l-[1px] ml-8 pl-8 mt-7">
          <h3 class="font-bold text-xl mb-4">Tổng giá trị</h3>
          <p class="mb-4 font-bold text-right">${this.formatCurrency(total)}</p>
          <button class="btn-main w-full">THANH TOÁN</button>
        </div>
      `
    } else {
      return `
          <div class="cart-empty w-full flex flex-wrap justify-center items-center my-32">
            <h3 class="w-full text-center mb-4">Chưa có sản phẩm nào trong giỏ hàng.</h3>
            <a href="/#/" class="btn-main">QUAY TRỞ LẠI CỬA HÀNG</a>
          </div>
        `
    }
  },
  async render() { 
    let cart = this.printCart()
    return `
      ${Header.render(10)}
      <div class="content">
        <div class="cart-container container mx-auto flex">
          ${cart}
        </div>
      </div>
      ${Footer.render()}
    `
  },
  afterRender() {
    let removeCarts = document.querySelectorAll(".removeCart")
    removeCarts.forEach(btn => {
      btn.onclick = async (e) => {
        e.preventDefault();
        let id = Number(e.target.getAttribute("data-id"))
        let cart = JSON.parse(localStorage.getItem("cart"))
        cart.splice(cart.findIndex(product => product.id === id), 1)
        cart = JSON.stringify(cart)
        localStorage.setItem("cart", cart)
        document.querySelector("#app").innerHTML = await this.render();
        await this.afterRender();
      }
    })

    let quantityDecs = document.querySelectorAll(".quantityDec")
    quantityDecs.forEach(btn => {
      btn.onclick = async (e) => {
        e.preventDefault();
        let id = Number(e.target.getAttribute("data-id"))
        let cart = JSON.parse(localStorage.getItem("cart"))
        if(cart[cart.findIndex(product => product.id === id)].quantity > 1) cart[cart.findIndex(product => product.id === id)].quantity--
        cart = JSON.stringify(cart)
        localStorage.setItem("cart", cart)
        document.querySelector("#app").innerHTML = await this.render();
        await this.afterRender();
      }
    })

    let quantityInc = document.querySelectorAll(".quantityInc")
    quantityInc.forEach(btn => {
      btn.onclick = async (e) => {
        e.preventDefault();
        let id = Number(e.target.getAttribute("data-id"))
        let cart = JSON.parse(localStorage.getItem("cart"))
        cart[cart.findIndex(product => product.id === id)].quantity++
        cart = JSON.stringify(cart)
        localStorage.setItem("cart", cart)
        document.querySelector("#app").innerHTML = await this.render();
        await this.afterRender();
      }
    })
  }
}

export default Cart