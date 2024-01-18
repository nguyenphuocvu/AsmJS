import ListProducts from "./ListProducts"

const BlockProducts = {
  
  render(title, products, number, row) {
    return ` 
      <div class="content-block">
        <div class="container mx-auto">
          <h2 class="content-block-title text-2xl font-bold pb-4">${title}</h2>
          ${ListProducts.render(products, number, row)}
        </div>
      </div>
    `
  }
}

export default BlockProducts