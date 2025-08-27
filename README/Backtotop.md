<a href="#" id="back-to-top" title="Về đầu trang">▲</a>

#back-to-top {
  display: none; /* Ẩn nút ban đầu */
  position: fixed; /* Giữ nút ở một vị trí cố định */
  bottom: 20px; /* Cách lề dưới 20px */
  right: 30px; /* Cách lề phải 30px */
  z-index: 99; /* Đảm bảo nút nằm trên các phần tử khác */
  border: none;
  outline: none;
  background-color: #555;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  opacity: 0.7; /* Làm nút mờ đi một chút */
}

#back-to-top:hover {
  opacity: 1; /* Hiển thị rõ ràng khi di chuột qua */
}

JavaScript

// Lấy nút "Back to Top"
const backToTopButton = document.getElementById("back-to-top");

// Thêm sự kiện cuộn trang
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// Thêm sự kiện nhấp chuột
backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // Cho Safari
  document.documentElement.scrollTop = 0; // Cho Chrome, Firefox, IE và Opera
});