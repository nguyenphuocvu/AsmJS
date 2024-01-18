const Footer = {
  render() {
    return `
      <div id="footer" class="bg-zinc-700">
        <div class="container mx-auto flex items-center justify-around p-10">
          <h2 class="text-white text-2xl font-bold">ĐĂNG KÝ NHẬN THÔNG TIN</h2>
          <div class="flex bg-white w-96 h-10 rounded overflow-hidden">
            <input class="grow h-full outline-none p-4 text-sm" placeholder="Email...">
            <button class="h-full w-16 text-base text-center bg-maincolor text-white">
              NHẬN
            </button>
          </div>
        </div>

        <div class="footer-block p-10">
          <div class="container mx-auto flex justify-between">
            <div class="footer-lists text-white w-52">
              <h4 class="footer-item-title font-bold text-xl pb-4">THÔNG TIN LIÊN HỆ</h4>
              <ul>
                <li class="pb-2 inline-block"> Hoàng Văn Thái ♥ Liên Chiểu ♥ Đà Nẵng</li>
                <li><a class="cart-text pb-2 inline-block" href="/">0389152753</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">shinhagunn@gmail.com</a></li>
              </ul>
            </div>

            <div class="footer-lists text-white">
              <h4 class="footer-item-title font-bold text-xl pb-4">LIÊN KẾT</h4>
              <ul>
                <li><a class="cart-text pb-2 inline-block" href="/">Giới thiệu</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">Đồng hồ nam</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">Đồng hồ nữ</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">Blog</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">Liên hệ</a></li>
              </ul>
            </div>

            <div class="footer-lists text-white">
              <h4 class="footer-item-title font-bold text-xl pb-4">HỖ TRỢ</h4>
              <ul>
                <li><a class="cart-text pb-2 inline-block" href="/">Hướng dẫn mua hàng</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">Hướng dẫn thanh toán</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">Chính sách bảo hành</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">Chính sách đổi trả</a></li>
                <li><a class="cart-text pb-2 inline-block" href="/">Tư vấn khách hàng</a></li>
              </ul>
            </div>

            <div class="footer-lists text-white">
              <h4 class="footer-item-title font-bold text-xl pb-4">BẢN ĐỒ</h4>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2264342718854!2d108.15485517490373!3d16.053735384623533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142193a34764b09%3A0x835a077aef89e95a!2zMTIwIEhvw6BuZyBWxINuIFRow6FpLCBIb8OgIEtow6FuaCBOYW0sIExpw6puIENoaeG7g3UsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1698255282601!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>

        <div class="footer-block h-14 flex justify-center items-center">
          <span class="text-white font-bold">Mona Watch</span>
        </div>

      </div>
    `
  }
}

export default Footer