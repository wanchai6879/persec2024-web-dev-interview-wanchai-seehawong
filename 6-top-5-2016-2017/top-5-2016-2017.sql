with top5_2016 as (
    SELECT
      order_details.product_id,
      products.product_name as product_name,
      sum(order_details.quantity) as quantity
    FROM order_details
      inner join orders on order_details.order_id = orders.order_id
      inner join products on order_details.product_id = products.product_id
    where year(orders.order_date) = 2016
    group by products.product_name
    order by order_details.quantity desc
    limit 5
  ), top5_2017 as (
    SELECT
      order_details.product_id,
      products.product_name as product_name,
      sum(order_details.quantity) as quantity
    FROM order_details
      inner join orders on order_details.order_id = orders.order_id
      inner join products on order_details.product_id = products.product_id
    where year(orders.order_date) = 2017
    group by products.product_name
    order by order_details.quantity desc
    limit 5
  )
select
  top5_2016.product_name,
  top5_2016.quantity as 'quantity Year 2016',
  top5_2017.quantity as 'quantity Year 2017'
from top5_2016
  inner join top5_2017 on top5_2016.product_id = top5_2017.product_id;