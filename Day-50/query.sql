-- Câu 1. Tạo bảng students gồm:
CREATE TABLE students
(
    student_id serial primary key,
    full_name  varchar not null,
    email      text unique,
    birth_date date
);
--     Câu 2. Tạo bảng teachers gồm:
CREATE TABLE teachers
(
    teacher_id serial primary key,
    full_name  varchar not null,
    department varchar

);
-- Câu 3. Tạo bảng courses gồm:
CREATE TABLE courses
(
    course_id   serial primary key,
    course_name text,
    teacher_id  int
);
--     Câu 4. Tạo bảng enrollments gồm:
CREATE TABLE enrollments
(
    enrollment_id SERIAL PRIMARY KEY,
    student_id    INTEGER REFERENCES students (student_id) ON DELETE CASCADE,
    course_id     INTEGER REFERENCES courses (course_id) ON DELETE CASCADE,
    enrolled_at   DATE DEFAULT CURRENT_DATE
);
-- Câu 5. Thêm cột phone vào bảng students
ALTER TABLE students
    ADD COLUMN phone varchar;
-- Câu 6. Thêm 3 sinh viên
INSERT INTO students (full_name, email, birth_date, phone)
VALUES ('student1', 'student1@gmail.com', '2001-01-01', '091999999'),
       ('student2', 'student2@gmail.com', '2001-01-01', '091999999'),
       ('student3', 'student3@gmail.com', '2001-01-01', '091999999');
-- Câu 7. Thêm 2 giảng viên
INSERT INTO teachers (full_name, department)
VALUES ('teacher1', 'Physics'),
       ('teacher2', 'Chemistry');
-- Câu 8. Thêm 3 khóa học
INSERT INTO courses (course_name, teacher_id)
VALUES ('Theory of relativity', 1),
       ('Basis of Atom', 2),
       ('Nuclear Boom Class', 2);
-- Câu 9. Thêm 5 lượt đăng ký học
INSERT INTO enrollments(STUDENT_ID, COURSE_ID)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (2, 2),
       (3, 1);
-- Câu 10. Hiển thị tất cả sinh viên
SELECT *
FROM students;
--  Câu 11. Liệt kê khóa học và tên giảng viên
SELECT course_name, teachers.full_name as teacher
FROM courses
         LEFT JOIN teachers ON courses.teacher_id=teachers.teacher_id;
-- Câu 12. Liệt kê tên sinh viên và tên các khóa học họ đã đăng ký
SELECT
    students.student_id,
    students.full_name AS student_name,
    STRING_AGG(courses.course_name, ', ') AS course_list
FROM students
         LEFT JOIN enrollments ON students.student_id = enrollments.student_id
         LEFT JOIN courses ON enrollments.course_id = courses.course_id
GROUP BY students.student_id
ORDER BY students.student_id;
-- Câu 13. Cập nhật số điện thoại sinh viên có email test@gmail.com
UPDATE students
SET phone ='090900000'
WHERE email='student1@gmail.com';
-- Câu 14. Cập nhật tên môn học
UPDATE courses
SET course_name='Peace for World'
WHERE course_name='Nuclear Boom Class';
-- Câu 15. Xoá sinh viên có email test@gmail.com
DELETE FROM students
WHERE email='student2@gmail.com';
-- Câu 16. Xoá môn học có tên “Backend”
DELETE FROM courses
WHERE course_name='Basis of Atom';
-- Câu 17. Liệt kê tên các môn học và tên giảng viên phụ trách
SELECT courses.course_name, teachers.full_name
FROM courses
         JOIN teachers ON courses.teacher_id=teachers.teacher_id;
-- Câu 18. Liệt kê tất cả các môn học và tên giảng viên (nếu có). Môn học chưa có giảng viên vẫn hiển thị.
SELECT courses.course_name, teachers.full_name
FROM courses
         LEFT JOIN teachers ON courses.teacher_id=teachers.teacher_id;
-- Câu 19. Hiển thị tên sinh viên và mã khóa học mà sinh viên đã đăng ký.
SELECT
    students.student_id,
    students.full_name AS student_name,
    STRING_AGG(courses.course_id::text, ', ') AS course_list
FROM students
         LEFT JOIN enrollments ON students.student_id = enrollments.student_id
         LEFT JOIN courses ON enrollments.course_id = courses.course_id
GROUP BY students.student_id
ORDER BY students.student_id;
-- Câu 20*. Hiển thị toàn bộ môn học và sinh viên đăng ký (nếu có). Môn học chưa có sinh viên vẫn hiển thị.

SELECT
    courses.course_id,
    courses.course_name,
    STRING_AGG(students.full_name, ',') AS student_list
FROM courses
         LEFT JOIN enrollments ON courses.course_id = enrollments.course_id
         LEFT JOIN students ON students.student_id = enrollments.student_id
GROUP BY courses.course_id
ORDER BY courses.course_id;a
