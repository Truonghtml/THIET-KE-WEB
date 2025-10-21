// ----- MỞ / ĐÓNG MENU TRÊN MOBILE -----
const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ----- LỌC MÓN ĂN THEO DANH MỤC -----
const filterButtons = document.querySelectorAll(".menu-filter button");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // bỏ active cũ
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    menuItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
