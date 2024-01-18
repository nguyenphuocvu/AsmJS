import MenuList from "../../../components/MenuList";
import myUrl from "../../../mixins/url"
import axios from "axios"


const EditProduct = {
  async getProductById(id) {
    let url = `${myUrl}products/${id}`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  async render(data) {
    const product = await this.getProductById(data.data.id)
    return /* html */`
      <div
        class="flex h-screen bg-gray-50 dark:bg-gray-900"
      >
        ${MenuList.render()}
        <div class="flex flex-col flex-1 w-full">
          <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
              <!-- Search input -->
              <div class="flex justify-center flex-1 lg:mr-32">
                <div class="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                  <div class="absolute inset-y-0 flex items-center pl-2">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </div>
              <ul class="flex items-center flex-shrink-0 space-x-6">
                <!-- Profile menu -->
                <li class="relative">
                  <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </header>
          <main class="h-full overflow-y-auto">
            <div class="container px-6 mx-auto grid">
              <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                <nav aria-label="Breadcrumb">
                  <ol role="list" class="max-w-2xl mx-auto flex items-center space-x-2 lg:max-w-7xl ">
                    <li>
                      <div class="flex items-center">
                        <a href="/#/admin/products" class="mr-2 text-sm font-medium text-gray-900">
                          Products
                        </a>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"></path>
                        </svg>
                      </div>
                    </li>
                    <li class="text-sm">
                      <a href="/#/admin/products/edit/${product.id}" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
                        Edit
                      </a>
                    </li>
                  </ol>
                </nav>
              </h2>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form>
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-3">
                          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                          <input type="text" value="${product.name}" name="name" id="name" autocomplete="given-name" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
                        </div>
                      </div>

                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-3">
                          <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                          <input type="text" value="${product.price}" name="price" id="price" autocomplete="given-name" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
                        </div>
                      </div>

                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-3">
                          <label for="discount" class="block text-sm font-medium text-gray-700">Discount</label>
                          <input type="text" value="${product.discount}" name="discount" id="discount" autocomplete="given-name" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
                        </div>
                      </div>

                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-3">
                          <label for="discount" class="block text-sm font-medium text-gray-700">Category</label>
                          <div id="select" class="group relative py-2 px-2 shadow-sm mt-1 block w-full border border-gray-300 rounded-md text-base after:content-[''] after:bg-transparent after:h-2 after:absolute after:w-full after:left-0 after:top-full">
                            <div id="select-value">${(product.category_id === 1)? "Đồng hồ nam" : "Đồng hồ nữ"}</div>
                            <div class="group-hover:block hidden absolute top-full left-0 bg-white shadow-sm mt-1 block w-full border border-gray-300 rounded-md text-base">
                              <button id="option1" class="block w-full text-left hover:bg-slate-200 cursor-pointer py-2 px-2">Đồng hồ nam</button>
                              <button id="option2" class="block w-full text-left hover:bg-slate-200 cursor-pointer py-2 px-2">Đồng hồ nữ</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700">
                        Image
                      </label>
                      <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <img id="blah" src=""/>
                        <div class="space-y-1 text-center" id="text-img">
                          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" class="sr-only">
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label for="content" class="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <div class="mt-1">
                        <textarea id="description" name="description" rows="3" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Description ...">
                          ${product.description}
                        </textarea>
                      </div>
                    </div>

                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button id="bton-editProduct" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
            </div>
          </main>
        </div>
      </div>
    `;
  },
  async afterRender(data) {
    const CLOUDINARY_PRESET = "utr6ybml";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dicho/image/upload";

    document.getElementById("file-upload").onchange = () => {
      const [file] = document.getElementById("file-upload").files
      if (file) {
        document.getElementById("blah").src = URL.createObjectURL(file)
        document.getElementById("text-img").style.display = "none"
      }
    }
    const product = await this.getProductById(data.data.id)

    document.getElementById("option1").onclick = (e) => {
      e.preventDefault()
      document.getElementById("select-value").innerText = `Đồng hồ nam`
    }
  
    document.getElementById("option2").onclick = (e) => {
      e.preventDefault()
      document.getElementById("select-value").innerText = `Đồng hồ nữ`
    }
  
    document.getElementById("bton-editProduct").onclick = async (e) => {
      e.preventDefault()
      let name = document.querySelector("input[name=name]").value;
      let price = Number(document.querySelector("input[name=price]").value);
      let discount = Number(document.querySelector("input[name=discount]").value);
      let category_id = (document.querySelector("#select-value").innerText === "Đồng hồ nam")? 1 : 2;
      let description = document.querySelector("#description").value;
      let updated_at = Date().slice(0, 24);

      const file = document.getElementById("file-upload").files[0];

      var dataPost

      if(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_PRESET);
  
        // call api cloudinary, để upload ảnh lên
        const { data } = await axios.post(CLOUDINARY_API_URL,formData, {
            headers: {
                "Content-Type": "application/form-data"
            }
        });

        dataPost = {
          name: name,
          price: price,
          discount: discount,
          category_id: category_id,
          description: description,
          image: data.url,
          updated_at: updated_at,
        };
      } else {
        dataPost = {
          name: name,
          price: price,
          discount: discount,
          category_id: category_id,
          description: description,
          updated_at: updated_at,
        };
      }
  
      await fetch(`${myUrl}products/${product.id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataPost),
      }).then((response) => response.json()) 
      .then((data) => {
          alert("Đã sửa thành công !")
          console.log('Success:', data);
      }).catch((error) => {
          alert("Sửa không thành công !")
          console.error('Error:', error);
      });
  
      window.location.replace("/#/admin/products");
    }
  }
};

export default EditProduct;
