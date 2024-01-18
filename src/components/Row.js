import myUrl from "../mixins/url"

const Row = {
  async getProducts() {
    let url = `${myUrl}products`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },

  async render() {
    try {
      const products = await this.getProducts();
      return products.map((row) => /* html */`
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${row.id}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="text-sm font-medium text-gray-900">
              ${row.name}
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <img class="w-[100px]" src="${row.image}"/>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="w-[400px] truncate px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
            ${row.description}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="/#/admin/products/edit/${row.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button class="btn-remove" data="${row.id}" class="text-indigo-600 hover:text-indigo-900">Remove</button>
        </td>
      </tr>
    `).join("");
    } catch (e) {
      console.log(e);
    }
  },
  afterRender() {
    let btnRemove = document.querySelectorAll(".btn-remove");
    btnRemove.forEach(btn => {
      btn.onclick = async (e) => {  
        e.preventDefault()
        var x = confirm("Bạn chắc chắn muốn xóa ?")
        if (x) {
          await fetch(`${myUrl}products/${e.target.getAttribute("data")}`, { method: "DELETE"})
          .then(res => res.json())
          .then(async () => {
            alert("Đã xóa thành công !")
            window.location.replace("/admin/products")
          })
          .catch(e => {
            alert("Xóa không thành công !")
            console.log(e)
          })
        }
      }
    })
  }
};

export default Row;
