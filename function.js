// Hàm run không có tham số và không trả về giá trị
const run = () => {
  console.log("Running...");
};

run();

// Hàm walk không có tham số nhưng trả về giá trị
const walk = () => {
  return "Walking...";
};

const walkMessage = walk();

console.log(walkMessage);

// Hàm sum có tham số và trả về giá trị
const a = 1;
const b = 2;

const sum = (x, y) => {
  return x + y;
};

const tong = sum(a, b);
console.log("Sum:", tong);
