import Header from "../components/Header"
import Footer from "../components/Footer"
import myUrl from "../mixins/url"

const BlogDetail = { 
  async getPostById(id) {
    let url = `${myUrl}posts/${id}`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data
    } catch (e) {
      console.log(e);
    }
  },
  async render(data) { 
    let post = await this.getPostById(data.data.id)
    return `
      ${Header.render(4)}
      <div class="container mx-auto my-32">
        <div class="">
          <img class="w-full h-72" src="${post.image}">
        </div>
        <h2 class="font-bold my-8 text-2xl">${post.title}</h2>
        <p>${post.content}</p>
      </div>
      ${Footer.render()}
    `
  }
}

export default BlogDetail