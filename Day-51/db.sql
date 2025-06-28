-- Câu 1:
create table departments
(
    id   bigserial primary key,
    name varchar(20)
);
-- Câu 2:

create table employees
(
    id            bigserial primary key,
    name          varchar(30),
    salary        float,
    department_id int,
    hire_date     date
);
--     Câu 3: Thêm cột position (chức vụ, kiểu chuỗi) vào bảng employees
alter table employees
    add column position text;
-- Câu 4: Đổi tên cột salary thành monthly_salary
alter table employees
    rename column salary to monthly_salary;
-- Câu 5: Thêm tối thiểu 5 bản ghi phòng ban.
insert into employees(name, monthly_salary, department_id, hire_date)
values ('emp1', 1000, 1, '2021-11-22'),
       ('emp2', 2000, 1, '2020-11-22'),
       ('emp3', 3000, 2, '2019-11-22'),
       ('emp4', 4000, 3, '2018-11-22'),
       ('emp5', 5000, 4, '2017-11-22'),
       ('emp6', 6000, 5, '2016-11-22'),
       ('emp7', 7000, 1, '2015-11-22'),
       ('emp8', 8000, 2, '2014-11-22'),
       ('emp9', 9000, 3, '2012-11-22'),
       ('emp10', 10000, 4, '2010-11-22');
-- Câu 6: Thêm tối thiểu 10 bản ghi nhân viên, gán cho các phòng ban khác nhau.
insert into departments(name)
values ('ga'),
       ('hr'),
       ('procurement'),
       ('civil'),
       ('piping');
-- Câu 7: Truy vấn tất cả nhân viên.
select *
from employees;
-- Câu 8: Truy vấn nhân viên thuộc một phòng ban cụ thể.
select departments.id,
       departments.name,
       json_agg(
               jsonb_build_object('id', employees.id, 'name', employees.name)
       ) as employee_list
from departments
         join employees on departments.id = employees.department_id and department_id = 2
group by departments.id, departments.name;

-- Câu 9: Đếm số lượng nhân viên theo từng phòng ban.
select departments.id,
       departments.name,
       count(employees.id) as number_of_employee
from departments
         join employees on departments.id = employees.department_id
group by departments.id, departments.name
order by departments.id;

-- Câu 10: Tính tổng lương theo từng phòng ban. ( Sử dụng count() và sum() )
select departments.id,
       departments.name,
       sum(employees.monthly_salary) as number_of_employee
from departments
         join employees on departments.id = employees.department_id
group by departments.id, departments.name
order by departments.id;

-- Câu 11: Sắp xếp nhân viên theo lương giảm dần.
select employees.id, employees.name, employees.monthly_salary
from employees
order by employees.monthly_salary desc;
-- Câu 12: Sắp xếp nhân viên theo ngày vào làm tăng dần.
select employees.id, employees.name, employees.hire_date
from employees
order by employees.hire_date;
-- Câu 13: Hiển thị các phòng ban có hơn 3 nhân viên.
select departments.id,
       departments.name,
       count(employees.id) as number_of_employee
from departments
         join employees on departments.id = employees.department_id
group by departments.id, departments.name
having count(employees.id) > 2;

-- Câu 14: Hiển thị các phòng ban có tổng lương > 30,000.

select departments.id,
       departments.name,
       sum(employees.monthly_salary) as number_of_employee
from departments
         join employees on departments.id = employees.department_id
group by departments.id, departments.name
having sum(employees.monthly_salary) > 11000
order by departments.id;

-- Câu 15: Tìm nhân viên có lương cao hơn mức lương trung bình toàn công ty.
select employees.id, employees.name
from employees
where employees.monthly_salary > (select avg(employees.monthly_salary) from employees);


-- Câu 16: Tìm tên phòng ban có nhân viên lương cao nhất.
select departments.id, departments.name, employees.monthly_salary as max_salary
from departments
         join employees on employees.department_id = departments.id
where employees.monthly_salary = (select max(employees.monthly_salary) from employees);


-- Câu 17: Dùng WITH để tính mức lương trung bình từng phòng ban.
with dep_avg as (select employees.department_id,
                        avg(employees.monthly_salary) as avg_salary
                 from employees
                 group by employees.department_id)
select department_id, departments.name, avg_salary
from dep_avg
         join departments on department_id = departments.id;
-- Câu 18: Dùng kết quả trên để liệt kê nhân viên có lương cao hơn mức trung bình của phòng ban của họ
with dep_avg as (select employees.department_id,
                        avg(employees.monthly_salary) as avg_salary
                 from employees
                 group by employees.department_id)
select dep_avg.department_id,
       departments.name,
       avg_salary,
       json_agg(
               jsonb_build_object('id', employees.id, 'name', employees.name, 'salary',employees.monthly_salary)
       ) as employee_above_average_salary
from dep_avg
         join departments on dep_avg.department_id = departments.id
         join employees on employees.department_id = departments.id and employees.monthly_salary > avg_salary
group by dep_avg.department_id, departments.name,avg_salary ;

-- Câu 19: Truy vấn danh sách phòng ban, kèm theo mảng nhân viên của từng phòng ban dưới dạng JSON.
select departments.id, departments.name,
       json_agg(
               jsonb_build_object('id', employees.id, 'name', employees.name)
       ) as employee_list
from departments
         join employees on employees.department_id = departments.id
group by departments.id, departments.name ;
-- Câu 20: Tạo cột tạm phân loại lương:****≥ 15,000 → Cao,< 15,000 → Thấp
select employees.id, employees.name, employees.monthly_salary,
       case
           when employees.monthly_salary >=5000 then 'high'
           else 'low'
           end as salary_level
from employees;

--          Câu 21: Phân loại cấp bậc nhân viên: Manager → Cấp cao, Staff → Cấp thấp
--          Câu 22: Dùng EXPLAIN ANALYZE để phân tích truy vấn lấy tất cả nhân viên theo phòng ban
explain
select departments.id, departments.name,
       json_agg(
               jsonb_build_object('id', employees.id, 'name', employees.name)
       ) as employee_list
from departments
         join employees on employees.department_id = departments.id
group by departments.id, departments.name ;
-- Câu 23: Phân tích truy vấn tìm nhân viên có lương cao hơn trung bình.
explain
select employees.id, employees.name
from employees
where employees.monthly_salary > (select avg(employees.monthly_salary) from employees);




