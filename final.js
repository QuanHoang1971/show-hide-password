window.addEventListener("load", function () {
  // trước khi làm thì để nó load hết ra đã
  const togglePassword = document.querySelector(".toggle");

  // tạo event khi click vào class toggle chỗ con mắt thì sẽ truy cập vào class form
  togglePassword.addEventListener("click", function () {
    // class form là previousElementSibling -> gán nó là input
    // nếu ở function arrow thì dùng this sẽ bị lỗi
    const input = this.previousElementSibling;

    const inputType = input.getAttribute("type");
    // input nó sẽ lấy attribute "type" là password bên trong

    // nếu type là text thì hiện ra text, còn ko sẽ là * password, đổi lại khi ấn vào con mắt
    if (inputType === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});
