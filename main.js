let myScroll = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", function () {
  let scrollTop = this.document.documentElement.scrollTop;
  myScroll.style.width = `${(scrollTop / height) * 100}%`;
});
