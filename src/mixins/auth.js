const Validate = {
  checkEmail(email) {
    let c = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email === "") {
      return "Không được để trống email"
    } else if (!c.test(email)) {
      return "Không đúng định dạng email"
    } else {
      return ""
    }
  }, 
  checkPhone(phone) {
    let c = /^[0-9]{10,11}$/
    if (phone === "") {
      return "Không được để trống phone"
    } else if (!c.test(phone)) {
      return "Không đúng định dạng phone"
    } else {
      return ""
    }
  }, 
  checkName(name) {
    let c = /[0-9]/
    if (name === "") {
      return "Không được để trống họ và tên"
    } else if (c.test(name)) {
      return "Không được nhập số ở ô họ và tên"
    } else {
      return ""
    }
  }
};

export default Validate