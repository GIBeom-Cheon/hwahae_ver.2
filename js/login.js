$(function () {
  //input focus 에 따른 색 변환

  const idInput = document.querySelector(".loginFormId input");
  const pwInput = document.querySelector(".loginFormPw input");
  const idP = document.querySelector(".loginFormId p");
  const pwP = document.querySelector(".loginFormPw p");
  idInput.addEventListener("focusin", function () {
    idP.style.color = "#5ededf";
  });
  idInput.addEventListener("blur", function () {
    idP.style.color = "inherit";
  });
  pwInput.addEventListener("focusin", function () {
    pwP.style.color = "#5ededf";
  });
  pwInput.addEventListener("blur", function () {
    pwP.style.color = "inherit";
  });

  //back 버튼 전 페이지로

  const backBtn = document.querySelector(".back");
  backBtn.addEventListener("click", function () {});

  //로그인 버튼 활성화
  const loginBox = document.querySelector(".boxes");
  const loginBtn = document.querySelector(".loginBtn");

  loginBox.addEventListener("keyup", () => {
    let idVal = document.querySelector(".id").value;
    let pwVal = document.querySelector(".pw").value;
    idVal.includes("@") && idVal.length > 2 && pwVal.length > 5
      ? loginBtn.classList.add("active")
      : loginBtn.classList.remove("active");
  });
  function checkLogin() {
    if (loginBtn.classList.contains("active")) {
      location.href = "main.html";
    }
  }
  loginBtn.addEventListener("click", checkLogin);
  window.addEventListener("keypress", (e) => {
    if (e.key === 13) {
      checkLogin();
    }
  });
});
