import Header from "../components/Header"
import Footer from "../components/Footer"
import myUrl from "../mixins/url"
import $ from 'jquery';

const Signin = {
  render() {
    return /* html */`
    ${Header.render()}

      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Đăng nhập vào tài khoản
            </h2>
          </div>
          <form id="formLogin" class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <div class="my-1">Tên tài khoản</div>
                <input id="username" name="username" type="text" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Tên đăng nhập">
              </div>
              <div>
                <div class="my-1">Mật khẩu</div>
                <input id="password" name="password" type="password" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu">
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Ghi nhớ?
                </label>
              </div>

              <div class="text-sm">
                <a href="/#/signup" class="color-main font-medium text-indigo-600">
                  Đăng ký ngay
                </a>
              </div>
            </div>

            <div id="print-e" class="text-red-600">

            </div>
              <button type="submit" class="btn-main group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
      
      ${Footer.render()}
    `;
  },
  afterRender() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    const formLogin = $('#formLogin');

    // validate form
    formLogin.validate({
      rules: {
        "username": {
          required: true,
          minlength: 6,
        },
        "password": {
          required: true,
          minlength: 6
        }
      },
      messages: {
        "username": {
          required: "Không để trống tên đăng nhập!",
          minlength: "Phải chứa 6 ký tự trở lên",
        },
        "password": {
          required: "Không để trống mật khẩu!",
          minlength: "Phải chứa 6 ký tự trở lên",
        }
      },
      submitHandler: (e) => {
        fetch(`${myUrl}users?username=${username.value}`, {method: 'GET'}).then((response) => response.json()) 
        .then((data) => { 
          if(data.length) {
            if(data[0].password !== password.value) {
              document.getElementById("print-e").innerHTML = "Mật khẩu không đúng!"
            } else {
              document.getElementById("print-e").style.color = "green"
              document.getElementById("print-e").innerHTML = "Đăng nhập thành công!"
              localStorage.setItem('username', data[0].username);
              localStorage.setItem('password', data[0].password);
              localStorage.setItem('role', data[0].role);
              document.location.href="/#/"

            }
          } else {
            document.getElementById("print-e").innerHTML = "Không tồn tại tên tài khoản!"
          }
        }).catch((error) => {
          console.error('Error:', error);
        });
      }
    })
  }
};

export default Signin;
