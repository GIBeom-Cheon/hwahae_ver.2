$(function () {
  const pop = document.querySelector(".login");
  const timeCounter = (e) => {
    
    let count0 = 0;
    e = setInterval(count0Fn, 4);
    function count0Fn() {
      count0 = count0 + Math.round(7271013 / 223);
      if (count0 > 7271013) {
        clearInterval(e);
        setTimeout(function () {
          document.body.classList.remove("no-scroll");
          $(".loginContainer").addClass("none");
          $(".popUp").addClass("popPop");
        }, 300);
      } else {
        $(".number").eq(0).text(count0);
      }
    }
  };
  timeCounter();
  pop.addEventListener("click", function () {
    pop.classList.add("none");
  });
});
