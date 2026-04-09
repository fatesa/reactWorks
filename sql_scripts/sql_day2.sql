-- 사원 테이블 생성
create table employee(
	id varchar(5) primary key,
    name varchar(20) not null,
    salary int
);


-- 사원 추가
insert into employee(id, name, salary) values('e1001', '김대리', 3500000);
insert into employee(id, name, salary) values('e1002', '장그래', 2500000);


insert into employee(id, name) values('e1002', '한강');
-- 기본키 제약 조건 위배(UNIQUE, NOT NULL)
-- Error Code: 1062. Duplicate entry 'e1002' for key 'employee.PRIMARY'

insert into employee(id, salary) values('e1003', 2500000);
-- Error Code: 1364. Field 'name' doesn't have a default value

insert into employee(id, name) values('e1003', '한강');

-- 특정 사원 검색 : where
select * from employee where id = 'e1002';

-- 급여가 300만원 미만인 사원의 id, 이름 검색
select id, name from employee where salary < 3000000;

-- 급여가 없는 사원의 정보를 검색
select * from employee where salary is null;

-- 한강 사원의 급여를 400만원으로 수정
update employee set salary = 4000000 where name = '한강' and id = 'e1003';

-- 정렬 : order by(ASC, DESC)
select * from employee order by salary DESC;
select * from employee order by salary;

-- 삭제
delete from employee where id = 'e1001';

-- commit 검색을 제외하고 삽입, 수정, 삭제시에 반드시 명시해야지 실행됨

select * from employee;


