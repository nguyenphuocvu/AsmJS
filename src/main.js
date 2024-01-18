import Navigo from "navigo"
import HomePage from "./pages/home"
import ProductDetail from "./pages/productDetail"
import NotFoundPage from "./pages/notFound"
import MenWatches from "./pages/menwatches"
import WomenWatches from "./pages/womenwatches"
import Dashboard from "./pages/admin/index"
import Products from "./pages/admin/products/index"
import Posts from "./pages/admin/posts/index"
import AddProduct from "./pages/admin/products/add"
import EditProduct from "./pages/admin/products/edit"
import About from "./pages/about"
import Contact from "./pages/contact"
import Cart from "./pages/cart"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Header from "./components/Header"
import Blog from "./pages/blogs"
import BlogDetail from "./pages/blogDetail"

const router = new Navigo("/", { linksSelector: "a", hash: true })

const printHTML = async (content, data) => {
  document.querySelector("#app").innerHTML = await content.render(data);
  if(content.afterRender) await content.afterRender(data);

  if(document.getElementById("logout")) {
    document.getElementById("logout").onclick = (e) => {
      e.preventDefault();
      localStorage.clear();
      window.location.replace("/")
    }
  }
};

router.on("/admin/*", () => {}, {
  before: (done) =>{ 
      if(localStorage.getItem('username')){
          const role = localStorage.getItem('role');
          if(role === "admin"){
            done()
          } else {
            document.location.href="/"
          }
      } else {
        console.log(1)
        document.location.href="/"
      }
  }
})

router.on({
  "/": (data) => printHTML(HomePage, data),
  "/about": (data) => printHTML(About, data),
  "/contact": (data) => printHTML(Contact, data),
  "/cart": (data) => printHTML(Cart, data),
  "/signin": (data) => printHTML(Signin, data),
  "/signup": (data) => printHTML(Signup, data),
  "/blogs": (data) => printHTML(Blog, data),
  "/blog/:id": (data) => printHTML(BlogDetail, data),
  "/product/:id": (data) => printHTML(ProductDetail, data),
  "/men-watches": (data) => printHTML(MenWatches, data),
  "/women-watches": (data) => printHTML(WomenWatches, data),
  "/admin": (data) => printHTML(Dashboard, data),
  "/admin/products": (data) => printHTML(Products, data),
  "/admin/posts": (data) => printHTML(Posts, data),
  "/admin/products/add": async (data) => await printHTML(AddProduct, data),
  "/admin/products/edit/:id": (data) => printHTML(EditProduct, data),
})

router.notFound((data) => printHTML(NotFoundPage, data))
router.resolve()