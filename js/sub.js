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
  

  // const listItem = document.querySelector(".list-item");
  // const viewMore = document.querySelector(".viewMoreBox")
  // const closeBtn = document.querySelector(".closeBtn")
  // const box = document.querySelector(".box1")
  // const topic = document.querySelector(".topic");
  // const desc = document.querySelector(".desc");
  // const viewMoreDesc = document.querySelector(".viewMoreDesc");
  // listItem.addEventListener("click", function(){
  //   // let img = $(this).attr("background")
  //   viewMore.classList.add("block");
  //   // box.style.background = "url(img)"
  // })
  // closeBtn.addEventListener("click", function(){
  //   viewMore.classList.remove("block");

  // })
});
