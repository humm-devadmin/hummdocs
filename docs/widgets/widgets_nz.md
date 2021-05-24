## Widgets

You will need to insert the script where you want the widget to display (typically directly below the product price), replacing the <code>PLACE_YOUR_PRODUCT_PRICE</code> field with the product's price parameter.

You will also need to replace the <code>PLACE_YOUR_MERCHANT_ID</code> field with your unique merchant ID. This will have been provided to you in your welcome email.

> **If you are unsure of your merchant ID, please reach out to pit@%domain%.**

```
<script src="https://bpi.humm-nz.com/nz/content/scripts/price-info_sync.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&merchantId=PLACE_YOUR_MERCHANT_ID"></script>
```

<strong>Widget example:</strong>

<select id = "price_dd" onchange = "changeSelect()">
    <option value = "1">Little things</option>
    <option value = "2">Big Things</option>
</select>
<div>Price: <span id = "price_div" class = "price">$100</span></div>
<script src="https://bpi.humm-nz.com/nz/content/scripts/price-info_sync.js?price-selector=.price&merchantId=30133331"></script>


## Platform-specific Installation Instructions
* [Shopify](/widgets/price-info/shopify_nz)
* [Magento 1](/widgets/price-info/magento_1_nz)
* [OpenCart 3](/widgets/price-info/opencart_3_nz)

## Minimum and Maximum Widgets

**'Little things'** and **'Big things'** widgets have default minimum and maximum thresholds.

You can customise the min and max threshold (can only increase the min or/and decrease the max) by setting ```data-min``` and ```data-max``` accordingly when calling the widget.

<p style=display:%nz-only%>
    By default, "Little things" shows when product price is between $20 and $1000, while "Big things" shows only between the price of $80 and $10000.
</p>
```
<script data-min="20" data-max="300" src="https://bpi.humm-nz.com/nz/content/scripts/price-info_sync.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&merchantId=PLACE_YOUR_MERCHANT_ID"></script>
```

Here it will not display for prices above $300 or will display in an altered form for prices below $20.

<small>* humm reserves the right to change branding without prior notice</small>

<script src = "/js/custom.js"></script>