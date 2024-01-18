import Header from "../components/Header"
import Footer from "../components/Footer"
import $ from 'jquery';
import myUrl from "../mixins/url"
import validate from "jquery-validation"

const Signup = {
  render() {
    return /* html */`
    ${Header.render()}
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Đăng ký tài khoản
            </h2>
          </div>
          <form id="formRegister" class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <div class="my-1">Họ và tên</div>
                <input id="fullname" name="fullname" type="text" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Họ và tên">
              </div>
              <div>
                <div class="my-1">Địa chỉ</div>
                <input id="address" name="address" type="text" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Địa chỉ">
              </div>
              <div>
                <div class="my-1">Email</div>
                <input id="email" name="email" type="email" autocomplete="email" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Email">
              </div>
              <div>
                <div class="my-1">Số điện thoại</div>
                <input id="phone" name="phone" type="text"class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Số điện thoại">
              </div>
              <div>
                <div class="my-1">Tên tài khoản</div>
                <input id="username" name="username" type="text" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Tên tài khoản">
              </div>
              <div>
                <div class="my-1">Mật khẩu</div>
                <input id="password" name="password" type="password" autocomplete="current-password" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu">
              </div>
              <div>
                <div class="my-1">Nhập lại mật khẩu</div>
                <input id="re-password" name="re-password" type="password" autocomplete="current-password" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Nhập lại mật khẩu">
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Chấp nhận điều khoản của website
                </label>
              </div>

              <div class="text-sm">
                <a href="/#/signin" class="color-main font-medium text-indigo-600">
                  Đăng nhập ngay
                </a>
              </div>
            </div>
            <div>
              <button id="btn-register" class="btn-main w-full">
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
      ${Footer.render()}
    `;
  },
  afterRender() {
    let fullname = document.getElementById("fullname");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");

    const formRegister = $('#formRegister');

    // validate form
    formRegister.validate({
      rules: {
        "email": {
          required: true,
          email: true,
        },
        "fullname": {
          required: true,
        },
        "address": {
          required: true,
        },
        "phone": {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 11
        },
        "username": {
          required: true,
          minlength: 6,
        },
        "password": {
          required: true,
          minlength: 6
        },
        "re-password": {
          required: true,
          equalTo: "#password"
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
        "address": {
          required: "Không để trống địa chỉ!"
        },
        "phone": {
          required: "Không để trống số điện thoại!",
          digits: "Phải nhập số ",
          minlength: "Số chữ số phải lớn hơn 9",
          maxlength: "Số chữ số phải nhỏ hơn 12"
        },
        "username": {
          required: "Không để trống tên đăng nhập!",
          minlength: "Phải chứa 6 ký tự trở lên",
        },
        "password": {
          required: "Không để trống mật khẩu!",
          minlength: "Phải chứa 6 ký tự trở lên",
        },
        "re-password": {
          required: "Không để trống",
          equalTo: "Không trùng khớp với mật khẩu"
        }
      },
      submitHandler: (e) => {
        let created_at = Date().slice(0, 24);
        let updated_at = Date().slice(0, 24);

        let dataPost = {
          fullname: fullname.value,
          email: email.value,
          phone: phone.value,
          address: address.value,
          username: username.value,
          password: password.value,
          role: "member",
          created_at: created_at,
          updated_at: updated_at,
        };

        fetch(`${myUrl}users`, {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPost),
        }).then((response) => response.json()) 
        .then((data) => { 
          console.log(data);
          alert("Đăng ký tài khoản thành công !")
          document.location.href="/#/signin"
        }).catch((error) => {
          alert("Đăng ký tài khoản không thành công !")
            console.error('Error:', error);
        });
      }
    })
  }
};

export default Signup;