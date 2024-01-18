import Header from "../components/Header"
import Footer from "../components/Footer"
import myUrl from "../mixins/url"

const Blog = {
  async getPosts() {
    let url = `${myUrl}posts`
    try {
      const data = await fetch(url, {method: "GET"}).then(res => res.json());
      return data.map(post => `
        <a href="/#/blog/${post.id}" style="width: 24%" class="h-60 shadow-md overflow-hidden border-2 hover:shadow-lg cursor-pointer m-1">
          <img class="w-full h-36" src="${post.image}">
          <h4 class="font-bold my-2 px-2">${post.title}</h4>
          <p class="px-2">${post.content}</p>
        </a>
      `).join("")
    } catch (e) {
      console.log(e);
    }
  },
  async render() { 
    let posts = await this.getPosts()
    return `
      ${Header.render(10)}
      <div class="content">
        <div class="container mx-auto">
          <h3 class="m-8 text-center font-bold">BLOGS</h3>

          <div class="flex flex-wrap mb-32">
            ${posts}
          </div>
        </div>
      </div>
      ${Footer.render()}
    `
  }
}

export default Blog