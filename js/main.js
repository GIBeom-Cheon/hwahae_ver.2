$(function () {
  const zoomElement = document.querySelector(".workspace");
  const backBox = document.querySelector(".opacityBox");
  const mainVisual = document.querySelector(".mainVisual");
  const pupM = document.querySelector(".pupMain");
  const pupS = document.querySelector(".pupSub");
  const white1 = document.querySelector(".white1");
  const white2 = document.querySelector(".white2");
  const header = document.querySelector("header");
  const ZOOM_SPEED = 0.005;
  let zoom = 1;
  let h = $(document).scrollTop();

  document.addEventListener("wheel", function (e) {
    let h = $(document).scrollTop();
    console.log(h);
    if (e.deltaY > 0) {
      if (h < 2000) {
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
        backBox.classList.add("block");
        mainVisual.style.opacity = "1";

        if (h > 0) {
          pupM.classList.add("none");
          pupS.classList.add("block");
        }
      } else {
        // mainVisual.style.opacity = "0";
        mainVisual.style.display = "none";
        white1.setAttribute("fill", "#5ededf");
        white2.setAttribute("fill", "#000000");
        header.style.backgroundColor = "white";
      }
    } else {
      if (h < 2000) {
        white1.setAttribute("fill", "#fff");
        white2.setAttribute("fill", "#fff");
        header.style.backgroundColor = "inherit";
        mainVisual.style.display = "block";
        // mainVisual.style.opacity = "1";
        if (zoom > 1) {
          zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
          pupM.style.opacityBox = 0;
          pupS.style.opacity = 1;
        } else {
          backBox.classList.remove("block");
          if (h == 0) {
            pupM.classList.remove("none");
            pupS.classList.remove("block");
          }
        }
      }
    }
  });

  //로고click 이동, 햄버거팝업
  const headerBtn = document.querySelector(".headerBtn");
  const headerHam = document.querySelector(".headerHam");
  const headerClose = document.querySelector(".headerClose");
  const navBar = document.querySelector(".navbar");

  headerHam.addEventListener("click", function () {
    white1.setAttribute("fill", "#5ededf");
    white2.setAttribute("fill", "#000000");
    header.style.backgroundColor = "white";

    headerHam.classList.add("none");
    headerClose.classList.add("block");
    navBar.classList.add("down");
  });
  headerClose.addEventListener("click", function () {
    let h = $(document).scrollTop();
    if (h < 2000) {
      headerHam.classList.remove("none");
      headerClose.classList.remove("block");
      navBar.classList.remove("down");

      white1.setAttribute("fill", "#fff");
      white2.setAttribute("fill", "#fff");
      header.style.backgroundColor = "inherit";
    } else {
      headerHam.classList.remove("none");
      headerClose.classList.remove("block");
      navBar.classList.remove("down");
      white1.setAttribute("fill", "#5ededf");
      white2.setAttribute("fill", "#000000");
      header.style.backgroundColor = "white";
    }
  });
  //숫자 카운트 업
  const index1 = document.querySelector(".index1");
  const index2 = document.querySelector(".index2");
  const index3 = document.querySelector(".index3");
  const index4 = document.querySelector(".index4");
  let count1 = index1.innerText;
  let count2 = index2.innerText;
  let count3 = index3.innerText;
  let count4 = index4.innerText;

  const item = document.querySelectorAll(".item");
  const imgBox = document.querySelectorAll(".sec1img");

  // const index = document.querySelectorAll(".index");
  const listUp = (e) => {
    e = setInterval(setListUp, 3000);
    let i = 0;
    function setListUp() {
      let count0 = 0;
      if (i === 0) {
        item[i].classList.add("active");
        item[1].classList.remove("active");
        item[2].classList.remove("active");
        item[3].classList.remove("active");
        imgBox[i].classList.add("block");
        imgBox[1].classList.remove("block");
        imgBox[2].classList.remove("block");
        imgBox[3].classList.remove("block");
        i = 1;

        setTimeout(countUp, 1);
        function countUp() {
          count0 = count0 + Math.round(count1 / 221);
          if (count0 > count1) {
            clearInterval(e);
            console.log(count1);
          } else {
            $(".index").eq(0).text(count0);
          }
        }
      } else if (i === 1) {
        item[i].classList.add("active");
        item[0].classList.remove("active");
        item[2].classList.remove("active");
        item[3].classList.remove("active");
        imgBox[i].classList.add("block");
        imgBox[0].classList.remove("block");
        imgBox[2].classList.remove("block");
        imgBox[3].classList.remove("block");
        i = 2;

        setTimeout(countUp, 1);
        function countUp() {
          count0 = count0 + Math.round(count2 / 221);
          if (count0 > count2) {
            clearInterval(e);
          } else {
            $(".index").eq(0).text(count0);
          }
        }
      } else if (i === 2) {
        item[i].classList.add("active");
        item[0].classList.remove("active");
        item[1].classList.remove("active");
        item[3].classList.remove("active");
        imgBox[i].classList.add("block");
        imgBox[0].classList.remove("block");
        imgBox[1].classList.remove("block");
        imgBox[3].classList.remove("block");

        i = 3;

        setTimeout(countUp, 1);
        function countUp() {
          count0 = count0 + Math.round(count3 / 221);
          if (count0 > count3) {
            clearInterval(e);
          } else {
            $(".index").text(count0);
          }
        }
      } else {
        item[i].classList.add("active");
        item[1].classList.remove("active");
        item[2].classList.remove("active");
        item[0].classList.remove("active");
        imgBox[i].classList.add("block");
        imgBox[1].classList.remove("block");
        imgBox[2].classList.remove("block");
        imgBox[0].classList.remove("block");
        i = 0;

        setTimeout(countUp, 1);
        function countUp() {
          count0 = count0 + Math.round(count4 / 221);
          if (count0 > count4) {
            clearInterval(e);
          } else {
            $(".index").text(count0);
          }
        }
      }
    }
  };
  listUp();

  let interval = setInterval(randomType, 3100);
  function randomType() {
    const age = [...document.querySelectorAll(".grid-age div")];
    const oil = [...document.querySelectorAll(".grid-oil div")];
    const cha = [...document.querySelectorAll(".grid-character div")];

    let sAge = age[Math.floor(Math.random() * age.length)];
    let sOil = oil[Math.floor(Math.random() * age.length)];
    let sCha = cha[Math.floor(Math.random() * age.length)];

    sAge.style.backgroundColor = "#5ededf";
    sAge.style.color = "white";
    sOil.style.backgroundColor = "#5ededf";
    sOil.style.color = "white";
    sCha.style.backgroundColor = "#5ededf";
    sCha.style.color = "white";
    setTimeout(reset, 2000);
    function reset() {
      sAge.style.backgroundColor = "inherit";
      sAge.style.color = "inherit";
      sOil.style.backgroundColor = "inherit";
      sOil.style.color = "inherit";
      sCha.style.backgroundColor = "inherit";
      sCha.style.color = "inherit";
    }
  }
  //리뷰 섹션 비디오 translate
  // const videoView = document.querySelector(".video_viewport");
  // let intervalVideo = setInterval(videoT, 3000);
  // function videoT() {
  //   videoView.style.transform = "translateX(-250px)";
  //   setTimeout(videoT, 3000);
  // }

  const video1 = document.querySelector(".video1");
  const video2 = document.querySelector(".video2");
  const video3 = document.querySelector(".video3");
  const v1L = video1.offsetLeft;
  const v2L = video2.offsetLeft;
  const v3L = video3.offsetLeft;
  console.log(v1L);
  console.log(v2L);
  console.log(v3L);
  const videoViewport = document.querySelector(".videoViewport");

  const intervalVideo = (e) => {
    e = setInterval(videoT, 3100);
    let i = 0;
    function videoT() {
      if (i == 0) {
        videoViewport.style.transform = "translateX(" + -250 * [i] + "px)";
        i = 1;
      } else if (i == 1) {
        videoViewport.style.transform = "translateX(" + -250 * [i] + "px)";
        i = 2;
      } else {
        videoViewport.style.transform = "translateX(" + -250 * [i] + "px)";
        i = 0;
      }
    }
  };
  intervalVideo();

  //리뷰 섹션 contents slide

  const slide = document.querySelector(".slide");
  let slideWidth = slide.clientWidth;

  // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
  let slideItems = document.querySelectorAll(".slide_item");
  // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
  const maxSlide = slideItems.length;
  // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
  let currSlide = 1;
  // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
  const startSlide = slideItems[0];
  const endSlide = slideItems[slideItems.length - 1];
  const startElem = document.createElement("div");
  const endElem = document.createElement("div");

  endSlide.classList.forEach((c) => endElem.classList.add(c));
  endElem.innerHTML = endSlide.innerHTML;

  startSlide.classList.forEach((c) => startElem.classList.add(c));
  startElem.innerHTML = startSlide.innerHTML;

  // 각 복제한 엘리먼트 추가하기
  slideItems[0].before(endElem);
  slideItems[slideItems.length - 1].after(startElem);
  // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
  slideItems = document.querySelectorAll(".slide_item");
  //
  let offset = slideWidth + currSlide;

  slideItems.forEach((i) => {
    console.log(offset);
    i.setAttribute("style", `left: ${-offset}px`);
  });

  function nextMove() {
    currSlide++;
    // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
    if (currSlide <= maxSlide) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
    } else {
      // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
      currSlide = 0;
      let offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide++;
      offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      setTimeout(() => {
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
          i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
        });
      }, 0);
    }
  }

  window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
  });

  // PC 클릭 이벤트 (드래그)
  slide.addEventListener("mousedown", (e) => {
    startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
  });

  slide.addEventListener("mouseup", (e) => {
    endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
    if (startPoint < endPoint) {
      // 마우스가 오른쪽으로 드래그 된 경우
      prevMove();
    } else if (startPoint > endPoint) {
      // 마우스가 왼쪽으로 드래그 된 경우
      nextMove();
    }
  });

  let loopInterval = setInterval(() => {
    nextMove();
  }, 3000);

  // 슬라이드에 마우스가 올라간 경우 루프 멈추기
  slide.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
  });

  // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
  slide.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
      nextMove(); // 다음 슬라이드를 보여주는 함수
    }, 3000);
  });
});
