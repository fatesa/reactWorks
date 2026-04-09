-- 사원 테이블 생성
create table employee(
	id varchar(5),
    name varchar(20),
    salary int
);

-- 사원 추가
insert into employee(id, name, salary) values('e1001', '김대리', 3500000);
insert into employee(id, name, salary) values('e1002', '장그래', 2500000);
insert into employee(id, name) values('e1002', '한강');

select * from employee

-- 테이블 삭제
drop table employee;