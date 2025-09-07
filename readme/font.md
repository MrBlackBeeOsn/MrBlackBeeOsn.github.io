Dựa trên các tính toán và nguyên tắc thiết kế đáp ứng (responsive design), đây là các giá trị đề xuất:

/* Tại 768px */
h1 { font-size: 36px; line-height: 1.5; }
h2 { font-size: 30px; line-height: 1.5; }
h3 { font-size: 24px; line-height: 1.5; }
h4 { font-size: 20px; line-height: 1.5; }
h5 { font-size: 18px; line-height: 1.5; }
h6 { font-size: 16px; line-height: 1.5; }


Màn hình < 768px:

Margin-y: 40px.
Font-size: 16px.
Line-height: 1.4 (≈ 22px).

/* Dưới 768px */
@media (max-width: 767px) {
  h1 { font-size: 32px; line-height: 1.4; }
  h2 { font-size: 26px; line-height: 1.4; }
  h3 { font-size: 22px; line-height: 1.4; }
  h4 { font-size: 18px; line-height: 1.4; }
  h5 { font-size: 16px; line-height: 1.4; }
  h6 { font-size: 14px; line-height: 1.4; }
}


Màn hình 375px:

Margin-y: 30px.
Font-size: 16px.
Line-height: 1.3 (≈ 21px) hoặc 1.4 (≈ 22px) tùy theo ưu tiên về không gian hoặc độ dễ đọc.

/* Tại 375px */
@media (max-width: 375px) {
  h1 { font-size: 28px; line-height: 1.3; }
  h2 { font-size: 24px; line-height: 1.3; }
  h3 { font-size: 20px; line-height: 1.3; }
  h4 { font-size: 17px; line-height: 1.3; }
  h5 { font-size: 15px; line-height: 1.3; }
  h6 { font-size: 14px; line-height: 1.3; }
}