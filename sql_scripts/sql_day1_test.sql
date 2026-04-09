create database mydb;
use mydb;

create table test(
-- 컬럼명 자료형
    msg varchar(50)
);

-- 데이터 추가
insert into test(msg) values('Good Luck!');

select * from test;
