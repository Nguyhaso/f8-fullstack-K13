create table users
(
    id            SERIAL PRIMARY KEY,
    full_name     VARCHAR(100),
    email         VARCHAR(100) UNIQUE,
    gender        VARCHAR(10),
    date_of_birth DATE,
    country_code  VARCHAR(2),
    created_at    TIMESTAMP
);
create table categories
(
    id                 SERIAL PRIMARY KEY,
    category_name      VARCHAR(100) UNIQUE,
    parent_category_id INTEGER REFERENCES categories (id)
);
create table products
(
    id           SERIAL PRIMARY KEY,
    product_name VARCHAR(255),
    price        DECIMAL(10, 2),
    category_id  INTEGER REFERENCES categories (id),
    created_at   TIMESTAMP
);
create table orders
(
    id         SERIAL PRIMARY KEY,
    user_id    INTEGER REFERENCES users (id),
    status     VARCHAR(20),
    -- e.g., 'pending', 'completed', 'cancelled'
    created_at TIMESTAMP
);
create table order_items
(
    order_id          INTEGER REFERENCES orders (id),
    product_id        INTEGER REFERENCES products (id),
    quantity          INTEGER,
    price_at_purchase DECIMAL(10, 2),
    PRIMARY KEY (order_id, product_id)
);
-- 2.1 Tạo 10,000 người dùng
INSERT INTO users (full_name, email, gender, date_of_birth, country_code)
SELECT 'User ' || s,
       'user' || s || '@example.com',
       CASE WHEN random() < 0.5 THEN 'male' ELSE 'female' END,
       '1990-01-01'::date + (random() * 365 * 20)::int,
    (ARRAY ['VN', 'US', 'SG', 'JP', 'KR'])[floor(random() * 5 + 1)]
FROM generate_series(1, 10000) s;

-- 2.2 Tạo 10 danh mục sản phẩm
INSERT INTO categories (category_name)
SELECT 'Category ' || s
FROM generate_series(1, 10) s;

-- 2.3 Tạo 1,000 sản phẩm
INSERT INTO products (product_name, price, category_id)
SELECT 'Product ' || s,
       (random() * 1000)::DECIMAL(10, 2),
    floor(random() * 10 + 1)
FROM generate_series(1, 1000) s;

-- 2.4 Tạo 20,000 đơn hàng
INSERT INTO orders (user_id, status, created_at)
SELECT floor(random() * 10000 + 1),
       (ARRAY ['completed', 'pending', 'cancelled'])[floor(random() * 3 + 1)],
       '2022-01-01'::timestamp + (random() * 730 * 86400) * interval '1 second'
FROM generate_series(1, 20000) s;

-- 2.5 Tạo 50,000 chi tiết đơn hàng
INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
SELECT floor(random() * 20000 + 1),
       floor(random() * 1000 + 1),
       floor(random() * 5 + 1),
       (random() * 1000)::DECIMAL(10, 2)
FROM generate_series(1, 50000) s
    ON CONFLICT (order_id, product_id) DO NOTHING;

-- Câu 3: Thống kê tổng doanh thu theo từng sản phẩm, chỉ hiển thị sản phẩm có doanh thu > 500,000
select products.id,
       products.product_name,
       sum(order_items.quantity * order_items.price_at_purchase) as income
from products
         join order_items on products.id = order_items.product_id
group by products.id, products.product_name
having sum(order_items.quantity * order_items.price_at_purchase) > 20000
order by products.id;

-- Câu 4: Tìm khách hàng ở 'VN' đã đặt trên 5 đơn hàng 'completed'
select users.id,
       users.country_code,
       count(orders.status) as number_of_completed
from users
         join orders on users.id = orders.user_id
where orders.status = 'completed'
  and users.country_code = 'VN'
group by users.id, users.country_code
having count(orders.status) > 5
order by users.id;


-- Câu 5: Đếm số lượng sản phẩm trong mỗi danh mục, sắp xếp theo tên danh mục
select categories.id,
       category_name,
       count(products.category_id) as number_of_product
from categories
         join products on categories.id = products.category_id
group by categories.id
order by categories.id;
-- Câu 6: Tìm sản phẩm chưa từng được bán ra (subquery)
select products.id, products.product_name
from products
where products.id not in (select order_items.product_id
                          from order_items
                                   join orders on order_items.order_id = orders.id
                          where orders.status = 'completed');
-- Câu 7: Tìm top 10 khách hàng chi tiêu cao nhất năm 2024 (WITH)
with completed_order(co_id, co_user_id)
         as (select orders.id, orders.user_id
             from orders
             where orders.status = 'completed')
select completed_order.co_user_id,
       sum(order_items.price_at_purchase * order_items.quantity) as total_payment
from completed_order
         join order_items on completed_order.co_id = order_items.order_id
group by completed_order.co_user_id
order by sum(order_items.price_at_purchase * order_items.quantity) desc
    limit 1;







