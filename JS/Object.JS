const swiper = new Swiper('.swiper',{
    autoplay: {
        delay: 2000,
    },
  loop: true,

  pagination: {
  el: '.swiper-pagination',
  clickable: true
  },

  navigation: {
      nextE1: '.swiper-button-next',
      prevE1: '.swiper-button-prev',
  },
});
 

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic)
{
  fullImgBox.style.display = "flex";
  fullImg.src = pic   
}
function closeFullImg()
{
   fullImgBox.style.display = "none";
}
function opensubFullImg(pic)
{
  document.getElementById("subWindow").removeAttribute("style");
  document.getElementById("imgsub").src=pic;
}
function closesubFullImg()
{
  document.getElementById("subWindow").setAttribute("style","display:none");
}

  
