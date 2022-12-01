$(function () {
  //input focus 에 따른 색 변환

  const idInput = document.querySelector(".loginFormId input");
  const pwInput = document.querySelector(".loginFormPw input");
  const nInput = document.querySelector(".loginFormN input");
  const idP = document.querySelector(".loginFormId p");
  const pwP = document.querySelector(".loginFormPw p");
  const nP = document.querySelector(".loginFormN p");
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
  nInput.addEventListener("focusin", function () {
    nP.style.color = "#5ededf";
  });
  nInput.addEventListener("blur", function () {
    nP.style.color = "inherit";
  });
  //back 버튼 전 페이지로

  const backBtn = document.querySelector(".back");
  backBtn.addEventListener("click", function () {});

  //랜덤 닉네임 형성

  const ranBtn = document.querySelector(".ranBtn");
  const ranNick2 = [
    "강아지",
    "고양이",
    "산토끼",
    "집토끼",
    "멧토끼",
    "집오리",
    "일본꿩",
    "눈표범",
    "임팔라",
    "도마뱀",
    "살모사",
    "개구리",
    "두꺼비",
    "반달곰",
    "고라니",
    "너구리",
    "조랑말",
    "과나코",
    "알파카",
    "원숭이",
    "두루미",
    "앵무새",
    "갈매기",
    "소라게",
  ];
  const ranNick = [
    "예쁜",
    "멋진",
    "사나운",
    "화난",
    "웃는",
    "귀여운",
    "우는",
    "묘한",
    "큰",
    "작은",
  ];
  const random = () => {
    const rn1 = ranNick[Math.floor(Math.random() * ranNick.length)];
    const rn2 = ranNick2[Math.floor(Math.random() * ranNick2.length)];
    const randomNickName = `${rn1}  ${rn2}`;
    document.querySelector(".n").value = randomNickName;
  };
  ranBtn.addEventListener("click", random);

  //전체 checkBOx controll

  const allBtn = document.querySelector("input[name=all]");
  const checkBtn = document.querySelectorAll("input[name=summit]");
  const all = document.querySelector(".all");
  function checked(e) {
    e.preventDefault();
    for (let i = 0; i < checkBtn.length; i++) {
      checkBtn[i].checked = this.checked;
    }
  }

  allBtn.addEventListener("change", checked);
  //로그인 버튼 활성화

  const loginBox = document.querySelector(".boxes");
  const loginBtn = document.querySelector(".loginBtn");

  loginBox.addEventListener("keyup", () => {
    let idVal = document.querySelector(".id").value;
    let pwVal = document.querySelector(".pw").value;
    var nVal = document.querySelector(".n").value;
    idVal.includes("@") &&
    idVal.length > 2 &&
    pwVal.length > 5 &&
    nVal.length > 0
      ? loginBtn.classList.add("active")
      : loginBtn.classList.remove("active");
  });
  function checkLogin() {
    if (loginBtn.classList.contains("active")) {
      alert("회원가입 완료!");
    }
  }
  loginBtn.addEventListener("click", checkLogin);
  window.addEventListener("keypress", (e) => {
    if (e.key === 13) {
      checkLogin();
    }
  });

  //이용약관 펼치기
  const viewBtn1 = document.querySelector(".viewMore1");
  const viewBtn2 = document.querySelector(".viewMore2");
  const viewMore1 = document.querySelector(".viewMoreBox");
  const viewMore2 = document.querySelector(".viewMoreBox1");
  const closeBtn = document.querySelector(".closeBtn");
  const closeBtn1 = document.querySelector(".closeBtn1");
  viewBtn1.addEventListener("click", function () {
    viewMore1.classList.add("block");
  });
  viewBtn2.addEventListener("click", function () {
    viewMore2.classList.add("block");
  });
  closeBtn.addEventListener("click", function () {
    viewMore1.classList.remove("block");
  });
  closeBtn1.addEventListener("click", function () {
    viewMore2.classList.remove("block");
  });
});
