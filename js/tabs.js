window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".work_btn").forEach(function (item) {
    item.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".work_block").forEach(function (WorkBlock) {
        WorkBlock.classList.remove("work_block_ative");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("work_block_ative");
    })
  });
})


// work_block_ative;
