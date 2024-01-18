import Header from "../components/Header"
import Footer from "../components/Footer"
import ListProductsCol from "../components/ListProductsCol"
import PrintProduct from "../components/PrintProduct"
import myUrl from "../mixins/url"

const MenWatches = {
  async getProductsByCategory() {
    let url = `${myUrl}products?category_id=1`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  async render(data) { 
    try {
      let myProducts = await this.getProductsByCategory()
      let listProductsCol = await ListProductsCol.render(5)
      let selectValue = "Thứ tự mặc định";
      if (data.params !== null) {
        if(data.params.select === '1') {
          selectValue = "A-Z"
          myProducts.sort((a,b) => {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          })
        } else if(data.params.select === '2') {
          selectValue = "Z-A"
          myProducts.sort((a,b) => {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) return 1;
            if (nameA > nameB) return -1;
            return 0;
          })
        } else if(data.params.select === '3') {
          selectValue = "Giá từ thấp tới cao"
          myProducts.sort((a,b) => {
            return (a.price*(1 - a.discount)) - (b.price*(1 - a.discount))
          })
        } else if(data.params.select === '4') {
          selectValue = "Giá từ cao tới thấp"
          myProducts.sort((a,b) => {
            return (b.price*(1 - a.discount)) - (a.price*(1 - a.discount))
          })
        }
      }

      let printProduct = await PrintProduct.render(myProducts)

      return `
        ${Header.render(2)}
        <div class="container mx-auto">
          <div class="flex row">
            <div class="w-3/12 col pt-20">
              <div class="category-item pb-6">
                <h3 class="category-title font-bold pb-6">DANH MỤC SẢN PHẨM</h3>
                <div class="category-content border-2 p-4">
                  <div class="category-content-item border-b-[1px] pb-2">
                    <a class="cart-text" href="/men-watches">Đồng hồ nam</a>
                  </div>
                  <div class="category-content-item pt-2">
                    <a class="cart-text" href="/women-watches">Đồng hồ nữ</a>
                  </div>
                </div>
              </div>
  
              <div class="category-item pb-6">
                <h3 class="category-title font-bold pb-6">SẢN PHẨM NGẪU NHIÊN</h3>
                <div class="category-content border-2 p-4">
                  ${listProductsCol}
                </div>
              </div>
  
            </div>
  
            <div class="w-9/12 col">
              <div class="sort text-right py-6 flex items-center justify-end">
                <span class="pr-4 font-bold">Lọc kết quả</span>
                <div class="select">
                  ${selectValue}
                  <div class="drop-down bg-white">
                    <a href="/#/men-watches?select=0">Thứ tự mặc định</a>
                    <a href="/#/men-watches?select=1">A-Z</a>
                    <a href="/#/men-watches?select=2">Z-A</a>
                    <a href="/#/men-watches?select=3">Giá từ thấp tới cao</a>
                    <a href="/#/men-watches?select=4">Giá từ cao tới thấp</a>
                  </div>
                </div>
  
              </div>
              <div class="flex flex-wrap row-sm">
                ${printProduct}
              </div>
            </div>
          </div>
  
        </div>
        ${Footer.render()}
      `
    } catch (err) {
      console.error(err)
    }
  }
}

export default MenWatches