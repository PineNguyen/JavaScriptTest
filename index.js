//var id = 5;

const students = [
   { id: 1, name: "Alice", math: 9, english: 8, gender: "female" },
   { id: 2, name: "Bob", math: 6, english: 7, gender: "male" },
   { id: 3, name: "Charlie", math: 8, english: 9, gender: "male" },
   { id: 4, name: "Diana", math: 10, english: 10, gender: "female" },
   { id: 5, name: "Eve", math: 4, english: 6, gender: "female" },
];

// 1. Thêm học sinh
function addStudent(id, userName, math, english, gender) {
   // id+=1;
   // let userName = prompt(`Nhập tên`);
   // let math = parseFloat(prompt(`Nhập điểm Toán`));
   // let english = parseFloat(prompt(`Nhập điểm Anh`));
   // let gender = prompt(`Giới tính (male/female)`);

   students.push(id,userName, math, english, gender);
}

// 2. Tính điểm trung bình của từng học sinh
function avgPoint() {
   students.forEach(function(student) {
      console.log(student.name," ",(student.math+student.english)/2);
   });
}

// 3. Lọc ra danh sách học sinh có điểm trung bình >= 8
function filtStudent() {
   students.forEach(function(student) {
      if((student.math+student.english)/2>=8) {
         console.log(student.name);
      }
   });
}

// 4. Đếm số lượng học sinh nam và nữ
function countStudentGender() {
   let male = 0;
   let female = 0;
   students.forEach(function(student) {
      if(student.gender === "male") {
         male+=1;
      }
      else if(student.gender == "female") {
         female +=1;
      }
   });
   
   console.log("Male students: ", male);
   console.log("Female students: ", female);
}

// 5. Tìm học sinh có điểm toán cao nhất
function bestMath() {
   let maxPoint = 0;
   students.forEach(function(student) {
      if(student.math > maxPoint) {
         tmp = student.id
      }
   });
   console.log(students[tmp-1]);
}

// 6. Nhóm học sinh thành 2 nhóm: Pass và Fail. Nếu trung bình >= 5 là pass.
function passAndFail() {
   const passStudent = [];
   const failStudent = [];
   students.forEach(function(student) {
      if((student.math+student.english)/2>=5) {
         passStudent.push(student);
      }
      else {
         failStudent.push(student);
      }
   });
}

// 7. Tìm học sinh giỏi nhất môn tiếng Anh
function bestEnglish() {
   let maxPoint = 0;
   students.forEach(function(student) {
      if(student.english > maxPoint) {
         tmp = student.id
      }
   });
   console.log(students[tmp-1]);
}

// 8. Tạo danh sách tên học sinh viết in hoa
function nameUpper() {
   const danhSach = [];
   students.forEach(function(student) {
      danhSach.push(student.name.toUpperCase());
   });
}

// 9. Kiểm tra xem có học sinh nào bị điểm liệt (dưới 3) không
function checkPoint() {
   students.forEach(function(student) {
      if(student.math < 3 || student.english < 3) {
         console.log("YES");
      }
   });
}

// 10. Tìm danh sách học sinh có điểm Toán lớn hơn điểm Anh
function mathGreaterThanEnglish() {
   const listStudentEnglishBetter = [];
   students.forEach(function(student) {
      if(student.english < student.math) {
         listStudentEnglishBetter.push(student);
      }
   });
}

// 11. Kiểm tra xem tất cả học sinh nữ có điểm trung bình > 6 không
function checkAvgFemale() {
   let check = 0;
   students.forEach(function(student) {
      if(student.gender === "Female" && ((student.math+student.english)/2)<6) {
         check = 1;
      }
   });
   if(check == 1) {
      console.log("NO");
   }
   else {
      console.log("YES");
   }
}

// 12. Gom nhóm học sinh theo giới tính
function maleAndFemale() {
   const MaleStudent = [];
   const FemaleStudent = [];
   students.forEach(function(student) {
      if(student.gender === "male") {
         MaleStudent.push(student);
      }
      else {
         FemaleStudent.push(student);
      }
   });
}

// 13. Tìm học sinh có tổng điểm cao nhất
function bestPoint() {
   let maxPoint = 0;
   students.forEach(function(student) {
      if((student.english +student.math) > maxPoint) {
         tmp = student.id
      }
   });
   console.log(students[tmp-1]);
}

// 14. Tìm học sinh có tên bắt đầu bằng chữ 'A'
function nameLetterA() {
   students.forEach(function(student) {
      if(student.name.charAt[0] === 'A') {
         console.log(student);
      }
   });
}

// 15. Tạo mảng mới chỉ chứa tên học sinh và điểm trung bình
function newArr() {
   const newArray = students.map(student => ({
      name: student.name,
      avrPoint: (student.math+student.english)/2
   }));
   console.log(newArray);
}

// 16. Đếm số học sinh theo phân loại học lực
// >= 8: Giỏi
// >= 6.5: Khá
// >= 5: Trung bình
// < 5: Yếu
function countStudent() {
   let gioi = kha = trungBinh = yeu = 0;
   students.forEach(function(student) {
      let avgPoint = (student.english +student.math)/2; 
      if(avgPoint >= 8) {
         gioi+=1;
      }
      else if(avgPoint >= 6) {
         kha+=1;
      }
      else if(avgPoint >=5) {
         trungBinh+=1;
      }
      else {
         yeu+=1;
      }
      console.log("Hoc sinh gioi: ", gioi);
      console.log("Hoc sinh kha: ", kha);
      console.log("Hoc sinh trungBinh: ", trungBinh);
      console.log("Hoc sinh yeu: ", yeu);
   });
}
