SELECT
  products.product_name as product_name,
  sum(order_details.quantity) as quantity
FROM order_details
  inner join orders on order_details.order_id = orders.order_id
  inner join products on order_details.product_id = products.product_id
where year(orders.order_date) = 2016
group by products.product_name
order by order_details.quantity desc
limit 5;