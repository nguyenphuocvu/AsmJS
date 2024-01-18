import Header from "../components/Header"
import Footer from "../components/Footer"
import BlockProducts from "../components/BlockProducts"
import myUrl from "../mixins/url"
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const HomePage = {
  async getBanners() {
    let url = `${myUrl}slideshow`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  async printBanner() {
    const data = await this.getBanners()
    try {
      const banners = data.map(banner => {
        return `
          <div class="swiper-slide text-white">
            <img class="absolute w-full h-full" src="${banner.src}">
            <div class="absolute banner-text container mx-auto left-96">
              <p class="banner-title pt-48 pb-4 font-bold text-2xl">${banner.title}</p>
              <p class="banner-name pb-4 font-bold text-6xl">${banner.name}</p>
              <p class="banner-description pt-4 w-[35rem]">${banner.description}</p>
            </div>
          </div>
        `
      }).join("")
      return `
        <div class="swiper h-full">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                ${banners}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
      `;
    } catch (error) {
      console.log(error);
    }
  },
  async getProducts() {
    let url = `${myUrl}products`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  async getProductsNewest() {
    let url = `${myUrl}products?_sort=id&_order=desc&_limit=4`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  async render() { 
    let banner = await this.printBanner()
    let products = await this.getProducts()
    return `
      ${Header.render(0)}
      <div class="content">
        <div class="relative banner">
          ${banner}
        </div>

        <div class="content-block">
          <div class="container mx-auto flex">
            <a href="/#/men-watches" class="w-full content-img-contain">
              <div class="content-img content-img-1"></div>
              <div class="content-img-text p-8">
                <p class="text-xl pb-4 pt-12">Xu hướng 2022</p>
                <div></div>
                <p class="text-4xl font-bold pt-4">ĐỒNG HỒ NAM</p>
              </div>
            </a>

            <a href="/#/women-watches" class="w-full content-img-contain">
              <div class="content-img content-img-2"></div>
              <div class="content-img-text p-8">
                <p class="text-xl pb-4 pt-12">Xu hướng 2022</p>
                <div></div>
                <p class="text-4xl font-bold pt-4">ĐỒNG HỒ NỮ</p>
              </div>
            </a>
          </div>
        </div>

        ${BlockProducts.render("Sản phẩm mới nhất", await this.getProductsNewest(), 4, 1)}

        <div class="content-block">
          <div class="container mx-auto flex">
            <div href="/" class="w-full content-img-contain">
              <div class="content-img content-img-3"></div>
              <div class="content-img-text p-8">
                <p class="text-4xl font-bold py-4">CỔ ĐIỂN</p>
                <p class="text-xl w-64 inline-block">Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
              </div>
            </div>

            <div href="/" class="w-full content-img-contain">
              <div class="content-img content-img-4"></div>
              <div class="content-img-text p-8">
                <p class="text-4xl font-bold pt-32 pb-4">SMART WATCH</p>
                <p class="text-xl w-64">Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
              </div>
            </div>
          </div>
        </div>

        ${BlockProducts.render("Sản phẩm ngẫu nhiên", products, 10, 2)}

      </div>
      ${Footer.render()}
    `
  },
  afterRender(data) {
    var swiper = new Swiper(".swiper", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

export default HomePage