import myUrl from "../mixins/url"

const PrintProduct = {
  formatCurrency(number) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
  },
  render(products) {
    try {
      return products.map(product => `
        <div class="w-3/12 col-sm pb-4">
          <div class="border-2 shadow pb-4 hover:shadow-lg">
            <a href="/#/product/${product.id}" class="cursor-pointer">
              <img class="h-64" class src="${product.image}">
            </a>
            <div class="text-center">
              <h3 class="font-bold text-lg pb-2">${product.name}</h3>
              <div class="pb-2">
                <span class="text-maincolor font-bold">${this.formatCurrency(product.price * (1 - product.discount))}</span>
              </div>
              <a href="/#/product/${product.id}" class="btn-main text-xs">Xem chi tiết</a>
            </div>
          </div>
        </div> 
      `).join("")
    } catch (e) {
      console.error(e)
    }
  }
}

export default PrintProduct