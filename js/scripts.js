var swiper = new Swiper(".mySwiper", {
  
  effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
  });

  var swiperCard = new Swiper(".mySwiperCards", {
    direction: "vertical",
    effect: "cards",
        grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  let sidebar = document.querySelector('.sidebar');
  let burger = document.querySelector('.burger');
  let closeBtn = document.querySelector('.close-button');

  closeBtn.addEventListener("click", function(){
    sidebar.style.transform = 'translateX(100%)';
  });
  
  burger.addEventListener("click", function(){
    sidebar.style.transform = 'translateX(0)';
  });