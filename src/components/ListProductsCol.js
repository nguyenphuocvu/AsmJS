import myUrl from "../mixins/url"

const ListProductsRow = {
  formatCurrency(number) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
  },
  async getProducts() {
    let url = `${myUrl}products`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  async render(number) {
    try {
      let result = [];
      let products = await this.getProducts();
  
      products.forEach((product, index) => {
        if (index < number - 1) 
          result.push(`
            <a href="/#/product/${product.id}" class="category-content-item border-b-[1px] pb-2 flex items-center">
              <div class="pr-4">
                <img class="h-16 w-16" src="${product.image}">
              </div>
              <div>
                <p class="pb-2">${product.name}</p>
                <p class="font-bold">${this.formatCurrency(product.price * (1 - product.discount))}</p>
              </div>
            </a>
          `)
        if (index === (number - 1)) 
          result.push(`
          <a href="/#/product/${product.id}" class="category-content-item flex items-center">
            <div class="pr-4">
              <img class="h-16 w-16" src="${product.image}">
            </div>
            <div>
              <p class="pb-2">${product.name}</p>
              <p class="font-bold">${this.formatCurrency(product.price * (1 - product.discount))}</p>
            </div>
          </a>
        `)
      })

      return result.join("")
    } catch (err) {
      console.error(err)
    }
  }
}

export default ListProductsRow