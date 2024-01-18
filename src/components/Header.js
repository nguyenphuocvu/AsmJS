import Menus from "../datas/menu"

const Header = {
  menus(number) {
    return Menus.map((menu, index) => {
      if (number === index) return `<li class="inline"><a class="font-bold menu-text--choose p-1 m-4 inline-block border-b-[1px] text-sm" href="/#${menu.src}">${menu.name}</a></li>`
      return `<li class="inline"><a class="font-bold text-white menu-text p-1 m-4 inline-block border-b-[1px] text-sm" href="/#${menu.src}">${menu.name}</a></li>`
    }).join("")
  }, 
  printHeaderBar() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    if(username) {
      if (role === "admin") {
        return `
          <div class="header-user py-2 ">
            <div class="container mx-auto flex justify-between items-center text-white">
              <div class="flex text-sm">
                <div class="ml-4">
                <i class="fa-solid fa-location-dot"></i>
                  Hoàng Văn Thái ♥ Liên Chiểu ♥ Đà Nẵng
                </div>
                <div class="ml-4">
                  <i class="fa-solid fa-phone"></i>
                  <a class="menu-text" href="tel:+84389152753">038 915 2753</a>
                </div>
              </div>
              <div class="text-sm">
                <a href="/#/admin" class="menu-text mx-2">Trang quản trị</a>
                Xin chào, ${username}
                <button id="logout" class="menu-text ml-2">Đăng xuất</button>
              </div>
            </div>
          </div>
        `
      } else {
        return `
          <div class="header-user py-2 ">
            <div class="container mx-auto flex justify-between items-center text-white">
              <div class="flex text-sm">
                <div class="ml-4">
                <i class="fa-solid fa-location-dot"></i>
                Hoàng Văn Thái ♥ Liên Chiểu ♥ Đà Nẵng
                </div>
                <div class="ml-4">
                  <i class="fa-solid fa-phone"></i>
                  <a class="menu-text" href="tel:+84389152753">038 915 2753</a>
                </div>
              </div>
              <div class="text-sm">
                Xin chào, ${username}
                <button id="logout" class="menu-text ml-2">Đăng xuất</button>
              </div>
            </div>
          </div>
        `
      }
    } else {
      return `
        <div class="header-user py-2 ">
          <div class="container mx-auto flex justify-between items-center text-white">
            <div class="flex text-sm">
              <div class="ml-4">
              <i class="fa-solid fa-location-dot"></i>
               Hoàng Văn Thái ♥ Liên Chiểu ♥ Đà Nẵng
              </div>
              <div class="ml-4">
                <i class="fa-solid fa-phone"></i>
                <a class="menu-text" href="tel:+84389152753">038 915 2753</a>
              </div>
            </div>
            <div class="text-sm">
              <a href="/#/signin" class="menu-text mx-2">Đăng nhập</a>
              <a href="/#/signup" class="menu-text ml-2">Đăng ký</a>
            </div>
          </div>
        </div>
      `
    }
  },
  render(number) {
    return `
      <div id="header" class="bg-zinc-700">
        ${this.printHeaderBar()}

        <div class="header-top px-4">
          <div class="container mx-auto flex justify-between items-center">
            <div class="header-top-logo p-2">
              <a href="/#/"><img class="w-52" src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png"></a>
            </div>
            <div class="header-top-search flex bg-white w-96 h-10 rounded overflow-hidden">
              <input class="grow h-full outline-none p-4 text-sm" placeholder="Tìm kiếm...">
              <button class="h-full w-16 text-center bg-maincolor text-white">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <div class="header-top-cart">
              <a class="cart-text text-white no-underline text-2xl border-none" href="/#/cart">
                <i class="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="header-menu text-center">
          <ul class="list-none">
            ${this.menus(number)}
          </ul>
        </div>
      </div>
    `
  }
}

export default Header