// Biến: 3 kiểu khai báo biến trong JavaScript
// var, let, const
// Mình sẽ chủ yếu sử dụng let và const
// let -> giá trị có thể thay đổi
// const -> giá trị không thể thay đổi
// Dùng const càng nhiều càng tốt
// var a = 5;
let b = 10;
const c = 15;

// Hàm: function
// Có 3 cách khai báo hàm
// Chủ yếu dùng arrow function (ES6)
// Cách 1: Function Declaration
function add(x, y) {
  // x, y là tham số (parameters)
  return x + y;
}

// Cách 2: Function Expression
const subtract = function (x, y) {
  return x - y;
};

// Cách 3: Arrow Function (ES6)
const multiply = (x, y) => {
  return x * y;
};

// Gọi hàm (Function Call)
const product = multiply(b, c);

// In kết quả
console.log("Product:", product); // Product: 150

// Mảng: Array
// Index: 0, 1, 2, 3, ... ( chỉ số phần tử )
const numbers = [1, 2, 3, 4, 5, b, c];
const firstNumber = numbers[0]; // Truy cập phần tử đầu tiên
console.log("First number:", firstNumber);

const doDaiMang = numbers.length; // Lấy độ dài mảng
console.log("Độ dài mảng:", doDaiMang);

// Toán tử %: Phép chia lấy dư
const soDu = 14 % 5; // 14 chia 5 = 2 dư 4
console.log("Số dư của 14 chia 5 là:", soDu);

// Câu điều kiện: if - else
const dieuKien = false;

if (dieuKien) {
  console.log("Điều kiện là đúng");
} else {
  console.log("Điều kiện là sai");
}

const KiemTraSoLonHon10 = (n) => {
  if (n > 10) {
    console.log(n + " lớn hơn 10");
  } else {
    console.log(n + " không lớn hơn 10");
  }
};

KiemTraSoLonHon10(5);

// Cộng chuỗi

const chuoi1 = "Hello";
const chuoi2 = "World";

const chuoiKetQua = chuoi1 + " " + chuoi2 + "!";

console.log(chuoiKetQua); // Hello World!

// Chữa bài tập về hàm kiểm tra chẵn lẻ

const KiemTraChanLe = (n) => {
  const soDu = n % 2;

  const KiemTraSoLe = soDu === 1;

  if (KiemTraSoLe) {
    console.log(n + " là số lẻ");
  } else {
    console.log(n + " là số chẵn");
  }
};

KiemTraChanLe(7);
