const ListProducts = {
  formatCurrency(number) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
  },
  render(products, number, row) {
    let result = [`<div class="flex products flex-wrap">`];

    products.forEach((product, index) => {
      if (index < number) 
      result.push(`
        <div class="product-item" style="width: calc(100%/${number}*${row})">
          <a href="/#/product/${product.id}" class="block border-2 cursor-pointer">
            <img class="h-80" src="${product.image}">
          </a>
          <div class="text-center border-b-[2px] border-l-[2px] border-r-[2px] p-4">
            <h3 class="font-bold text-lg pb-2">${product.name}</h3>
            <div class="pb-3">
              <span class="text-maincolor font-bold">${this.formatCurrency(product.price * (1 - product.discount))}</span>
            </div>
            <a href="/#/product/${product.id}" class="btn-main text-xs">Xem chi tiết</a>
          </div>
        </div>
      `)
    })

    result.push(`</div>`)
    return result.join("")
  }
}

export default ListProducts