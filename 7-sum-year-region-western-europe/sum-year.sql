select
  year(orders.order_date) as order_year,
  round(
    sum(
      order_details.quantity * products.unit_price * (1 - order_details.discount)
    ),
    4
  ) as 'sum'
from order_details
  inner join orders on order_details.order_id = orders.order_id
  inner join products on order_details.product_id = products.product_id
where
  orders.ship_region = 'Western Europe'
group by year(orders.order_date)
order by order_year;
