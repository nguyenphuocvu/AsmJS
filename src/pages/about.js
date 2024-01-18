import Header from "../components/Header"
import Footer from "../components/Footer"
import BlockProducts from "../components/BlockProducts"
import banners from "../datas/banners"
import myUrl from "../mixins/url"

const About = {
  printBanner() {
    return banners.map(banner => {
      return `
        <div class="banner-current text-white hidden">
          <img class="absolute w-full h-full" src="${banner.src}">
          <div class="absolute banner-text container mx-auto left-96">
            <p class="banner-title pt-48 pb-4 font-bold text-2xl">${banner.title}</p>
            <p class="banner-name pb-4 font-bold text-6xl">${banner.name}</p>
            <p class="banner-description pt-4 w-[35rem]">${banner.description}</p>
          </div>
        </div>
      `
    }).join("")
  },
  async render() { 
    return `
      ${Header.render(1)}
      <div class="content">
        <div class="content-block">
          <div class="container mx-auto flex">
            <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/about-us_bg.jpg" class="w-full relative mx-5 overflow-hidden" >

            <div class="w-full flex flex-col justify-center">
              <h2 class="font-bold text-4xl mb-8">Giới thiệu về Watch Mona</h2>
              <p>“Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay. Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”</p>
            </div>
          </div>
        </div>

        <div class="content-block  mb-20">
          <div class="container mx-auto flex mb-8 items-start">
            <div class="mx-5">
              <h3 class="font-bold text-xl mb-4">Hàng chính hãng</h3>
              <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
            </div>

            <div class="mx-5">
              <h3 class="font-bold text-xl mb-4">Sản phẩm mới 100%</h3>
              <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
            </div>

            <div class="mx-5">
              <h3 class="font-bold text-xl mb-4">Bảo hành 12 tháng</h3>
              <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
            </div>
          </div>

          <div class="container mx-auto flex items-start">
            <div class="mx-5">
              <h3 class="font-bold text-xl mb-4">Đổi trả trong vòng 7 ngày</h3>
              <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
            </div>

            <div class="mx-5">
              <h3 class="font-bold text-xl mb-4">Miễn phí giao hàng</h3>
              <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
            </div>

            <div class="mx-5">
              <h3 class="font-bold text-xl mb-4">Giá cả hợp lý</h3>
              <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
            </div>
          </div>
        </div>
      </div>
      ${Footer.render()}
    `
  }
}

export default About