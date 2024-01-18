import menuListAdmin from "../datas/MenuAdmin";

const MenuItem = {
  render() {
    return menuListAdmin.map((menuItem) => /* html */`
      <li class="relative px-6 py-3">
      <a
        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        href="/#/${menuItem.link}"
      >
        ${menuItem.image}
        <span class="ml-4">${menuItem.title}</span>
      </a>
    </li>
    `).join("");
  },
};

export default MenuItem;
