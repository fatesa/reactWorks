use jsdb;

-- product 테이블 생성
create table product(
	id	int	auto_increment primary key,
    product_name	varchar(30) not null,
    price	int not null,
    created_at	timestamp default current_timestamp
);

-- 상품 추가
insert into product(product_name, price) values('무선 마우스', 30000);

select * from product;

commit;