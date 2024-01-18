import Header from "../components/Header"
import Footer from "../components/Footer"

const NotFoundPage = {
  render() { 
    return `
      ${Header.render()}
      <div class="content flex justify-center items-center h-80 font-bold text-3xl">
        NOT FOUND PAGE
      </div>
      ${Footer.render()}
    `
  }
}

export default NotFoundPage