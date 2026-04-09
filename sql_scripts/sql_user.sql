-- jsuser 계정 생성 및 비밀번호 설정
create user jsuser@localhost identified by 'pwjs1234';

-- jsdb 생성
create database jsdb;

-- 권한 부여
grant all privileges on jsdb.* to jsuser@localhost;