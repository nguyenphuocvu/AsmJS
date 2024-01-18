import MenuList from "../../../components/MenuList";
import Table from "../../../components/Table";

const AdminPosts = {
  async render() {
    try {
      const t = await Table.render();
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
                          <a href="/#/admin/posts" role="button"class="mr-2 text-sm font-medium text-gray-900">
                            Posts
                          </a>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </h2>
              </div>
              <button class="mx-6 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
                <a href="/#/admin/posts/add">Add Post</a>
              </button>
              ${t}
            </main>
          </div>
        </div>
      `;
    } catch (e) {
      console.error(e);
    }
  },
  afterRender() {
    Table.afterRender()
  }
};

export default AdminPosts;
