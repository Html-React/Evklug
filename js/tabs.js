window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".work_btn").forEach(function (item) {
    item.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".work_block").forEach(function (WorkBlock) {
        WorkBlock.classList.remove("work_block_active");
      });
      document .querySelector(`[data-target="${path}"]`).classList.add("work_block_active");
    })
  });

  const swiper = new Swiper(".swiper", {
    // // Optional parameters
    // direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },

    autoplay: {
      delay: 5000,
    },

  });

  document.querySelector(".container_header_burgermenu").addEventListener('click', () => {
    document.querySelector(".burger_menu").classList.toggle("burger_menu_active");
    document.querySelector(".container_header_burgermenu").classList.toggle("container_header_burgermenu--active");
    document.querySelector(".header_burgermenu-line").classList.toggle("header_burgermenu-line--active");
  })

  document.querySelector(".btn_search-link").addEventListener("click", () => {
    document.querySelector(".search").classList.add("search--active");
    document.querySelector(".container-header-search").classList.add("container-header-search--closed");
  });

  document.querySelector(".search__closed").addEventListener("click", () => {
    document.querySelector(".search").classList.remove("search--active");
    document.querySelector(".container-header-search").classList.remove("container-header-search--closed");
  });
  
})
