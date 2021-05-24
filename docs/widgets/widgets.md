## Widgets

You will need to insert the script where you want the widget to display (typically directly below the product price), replacing the <code>PLACE_YOUR_PRODUCT_PRICE</code> field with the product's price parameter.

You will also need to replace the <code>PLACE_YOUR_MERCHANT_ID</code> field with your unique merchant ID. This will have been provided to you in your welcome email.

> **If you are unsure of your merchant ID, please reach out to pit@%domain%.**

<div style = display:%au-only% >

```
<script src="https://bpi.humm-au.com/au/content/scripts/price-info_sync.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&merchantId=PLACE_YOUR_MERCHANT_ID"></script>
```

</div>
<div style=display:%nz-only%>

```
<script src="https://bpi.humm-nz.com/nz/content/scripts/price-info_sync.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&merchantId=PLACE_YOUR_MERCHANT_ID"></script>
```

</div>
<strong>Widget example:</strong>

<select id = "price_dd" onchange = "changeSelect()">
    <option value = "1">Little Things</option>
    <option value = "2">Big Things</option>
</select>
<div>Price: <span id = "price_div" class = "price">$100</span></div>

<script src="https://bpi.humm-%country_abbr_lower_case%.com/%country_abbr_lower_case%/content/scripts/price-info_sync.js?price-selector=.price&merchantId=30133331"></script>

## Platform-specific Installation Instructions
* [Shopify](/widgets/price-info/shopify)
* [Magento 1](/widgets/price-info/magento_1)
* [OpenCart 3](/widgets/price-info/opencart_3)

## Minimum and Maximum Widgets

**'Little things'** and **'Big things'** widgets have default minimum and maximum thresholds.

You can customise the min and max threshold (can only increase the min or/and decrease the max) by setting ```data-min``` and ```data-max``` accordingly when calling the widget.   

You will need to replace <code>PLACE_YOUR_MERCHANT_ID</code> with your unique merchant ID. This will have been provided to you in your welcome email.

> **If you are unsure of your merchant ID, please reach out to pit@%domain%.**


```
<script data-min="20" data-max="300" src="https://bpi.humm-%country_abbr_lower_case%.com/%country_abbr_lower_case%/content/scripts/price-info_sync.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&merchantId=PLACE_YOUR_MERCHANT_ID"></script>
```


Here it will not display for prices above $300 or will display in an altered form for prices below $20.

<small>* humm reserves the right to change branding without prior notice</small>

<script src = "/js/custom.js"></script>