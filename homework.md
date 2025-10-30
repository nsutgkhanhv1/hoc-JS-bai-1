1. **Cộng chuỗi: Giới thiệu bản thân**

Khai báo 3 biến: name, age, favoriteColor.
In ra màn hình dòng:

Xin chào, tôi là [name], năm nay [age] tuổi và tôi thích màu [favoriteColor].

Gợi ý: dùng + để nối chuỗi

2. **Cộng chuỗi: Ghép chuỗi câu**

Tạo 3 biến:

const first = "Tôi đang học";
const middle = "JavaScript";
const end = "và tôi thấy rất vui!";

Ghép 3 chuỗi này thành 1 câu hoàn chỉnh rồi in ra.

3. **Viết hàm: In lời chào**  
   Viết hàm `sayHello()` in ra `"Xin chào!"`.

   > Gợi ý: chỉ cần `console.log()`.

Ví dụ:
const sayHello = () => {
...
}

sayHello(); // in ra Xin chào

4. **Viết hàm: Chào người dùng theo tên**  
   Viết hàm nhận vào tham số là tên `greet(name)` in ra `"Xin chào, <name>!"`.
   > Gợi ý: dùng `console.log` và nối chuỗi (`+`).

Ví dụ:
const greet = (name) => {
...
}

greet("Khánh"); // in ra Xin chào, Khánh!

5. **Viết hàm: In ra số**
   Viết hàm nhận vào tham số là số n `inra(n)` in ra `"Số n là: <n>!"`.

Ví dụ:
const inra = (n) => {
...
}

inra(5); // in ra Số n là: 5!

5. **Viết hàm: Tính tổng và hiệu của hai số**

Viết 2 hàm:

const tinhTong = (a, b) => {
// code xử lý
}
const tinhHieu = (a, b) => {
// code xử lý
}

Sau đó gọi thử:

console.log(tinhTong(10, 5)); // 15
console.log(tinhHieu(10, 5)); // 5

6. **Làm việc với mảng**

Tạo mảng const fruits = ["Táo", "Cam", "Chuối"];

In ra phần tử đầu tiên.

In ra phần tử cuối cùng.

In ra độ dài mảng .

7. **Viết hàm có điều kiện: Kiểm tra số dương hay âm**  
   Viết hàm `checkNumber(n)`:

   - Nếu `n > 0` → in `"Số dương"`.
   - Nếu `n < 0` → in `"Số âm"`.
   - Nếu `n === 0` → in `"Số 0"`.

8. **Viết hàm có điều kiện: Kiểm tra tuổi hợp lệ**  
   Viết hàm `canDrive(age)`:

   - Nếu `age >= 18` → `"Được lái xe"`.
   - Ngược lại → `"Chưa đủ tuổi"`.

9. **Viết hàm có điều kiện: Kiểm tra chia hết cho 5**  
   Viết hàm `checkDivisibleBy5(n)`:

   - Nếu chia hết cho 5 → `"Chia hết cho 5"`.
   - Ngược lại → `"Không chia hết cho 5"`.

10. **Viết hàm có điều kiện: Phân loại điểm học sinh**  
    Viết hàm `grade(score)`:

- `score > 8`: `"Giỏi"`
- `score > 6.5`: `"Khá"`
- `score > 5`: `"Trung bình"`
- Ngược lại: `"Yếu"`
