import Header from "../components/Header"
import Footer from "../components/Footer"
import banners from "../datas/banners"
import myUrl from "../mixins/url"
import $ from 'jquery';
import validate from "jquery-validation"

const Contact = {
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
        <div class="content-block container mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2264342718854!2d108.15485517490373!3d16.053735384623533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142193a34764b09%3A0x835a077aef89e95a!2zMTIwIEhvw6BuZyBWxINuIFRow6FpLCBIb8OgIEtow6FuaCBOYW0sIExpw6puIENoaeG7g3UsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1698255282601!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </div>

        <div class="content-block">
          <div class="container mx-auto flex mb-8 items-start">
            <div class="mx-5 grow">
              <h3 class="font-bold text-xl mb-4">Địa chỉ:</h3>
              <p>Hoàng Văn Thái ♥ Liên Chiểu ♥ Đà Nẵng</p>
            </div>

            <div class="mx-5 grow">
              <h3 class="font-bold text-xl mb-4">Điện thoại:</h3>
              <a class="menu-text" href="tel:+84389152753">038 915 2753</a>
            </div>

            <div class="mx-5 grow">
              <h3 class="font-bold text-xl mb-4">Email:</h3>
              <a class="menu-text" href="mailto:shinhagunn@gmail.com">shinhagunn@gmail.com</a>
            </div>
          </div>
        </div>

        <div class="content-block container mx-auto mb-32">
          <h2 class="text-center font-bold text-3xl mb-4">Đăng ký thông tin liên hệ</h2>
          <form id="formContact" class="flex flex-wrap justify-center">
            <div class="form-block w-4/12 m-2">
              <input class="bg-gray-200 w-full p-2" type="text" name="email" id="email" placeholder="Email">
            </div>
            <div class="form-block w-4/12 m-2">
              <input class="bg-gray-200 w-full  p-2" type="text" name="fullname" id="fullname" placeholder="Họ và tên">
            </div>
            <div class="form-block w-4/12 m-2">
              <input class="bg-gray-200 w-full p-2" type="text" name="phone" id="phone" placeholder=" Số điện thoại">
            </div>
            <div class="form-block w-4/12 m-2">
              <input class="bg-gray-200 w-full p-2" type="text" id="address" placeholder="Địa chỉ">
            </div>
            <div class="form-block w-full flex justify-center mt-4">
              <button id="btn-register" class="btn-main w-96">Đăng ký</button>
            </div>
          </form>
        </div>
      </div>
      ${Footer.render()}
    `
  },
  afterRender() {
    const email = document.getElementById("email")
    const fullname = document.getElementById("fullname")
    const phone = document.getElementById("phone")
    const address = document.getElementById("address")

    const formContact = $('#formContact');

    // validate form
    formContact.validate({
      rules: {
        "email": {
          required: true,
          email: true,
        },
        "fullname": {
          required: true,
        },
        "phone": {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 11
        }
      },
      messages: {
        "email": {
          required: "Không để trống email!",
          email: "Không đúng định dạng email!"
        },
        "fullname": {
          required: "Không để trống họ và tên!"
        },
        "phone": {
          required: "Không để trống số điện thoại!",
          digits: "Phải nhập số ",
          minlength: "Số chữ số phải lớn hơn 9",
          maxlength: "Số chữ số phải nhỏ hơn 12"
        }
      },
      submitHandler: () => {
        let created_at = Date().slice(0, 24);
        let updated_at = Date().slice(0, 24);

        var dataPost = {
          fullname: fullname.value,
          email: email.value,
          phone: phone.value,
          address: address.value,
          created_at: created_at,
          updated_at: updated_at,
        };
    
        fetch(`${myUrl}custommers`, {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPost),
        }).then((response) => response.json()) 
        .then((data) => { 
          alert("Đăng ký thông tin thành công !")
          console.log(data);
        }).catch((error) => {
          alert("Đăng ký thông tin không thành công !")
            console.error('Error:', error);
        });

        window.location.replace("/#/")
      }
    })
  }
}

export default Contact