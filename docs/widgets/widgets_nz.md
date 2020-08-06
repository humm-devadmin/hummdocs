## Widgets

Ensure you select the widget type corresponding to whether you are a **'Little things'** seller or a **'Big Things'** seller.

> Contact <a href="mailto:pit@%domain%">pit@%domain%</a> if unsure.

Insert the script where you want the widget to display replacing <code>PLACE_YOUR_PRODUCT_PRICE</code> with the product's price.

## 'Little things' only

If a **'Little things'** only seller, use:

#### For 5 fortnightly payments:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&little=f5"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=100&little=F5"></script>

#### For 10 weekly payments:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&little=w10"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=100&little=W10"></script>

Note the use of <code>&little=f5</code> or <code>&little=w10</code> parameter.

Also remember to use the real product price to replace the "<code>PLACE_YOUR_PRODUCT_PRICE</code>" placeholder.

<!--
## 'Big things' only

If a **'Big things'** only seller, use:

#### For payments over 6 months:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&big=m6"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1200&big=m6"></script>

#### For payments over 12 month:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&big=m12"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1200&big=m12"></script>

Note the use of <code>&big=m6</code> or <code>&big=m12</code> parameter.

Available options are:  
<code>m6</code> for 6 months, <code>m9</code> for 9 months, <code>m12</code> for 12 months, <code>m18</code> for 18 months, <code>m24</code> for 24 months.


## Widget behaviour

 **'Little things'**, only **'Big Things'** or **both** widgets behave differently, see table below:

### Little Things Only
| < $20 <br> (productPrice=10) | $20 - $1000 <br> (productPrice=200) | > $1000 <br> (producePrice=1800) |
| -- | -- | -- |
| <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=10&LittleOnly"></script> | 5W <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200&LittleOnly"></script> 10W <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200&LittleOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1800&LittleOnly"></script> |
 
### Big Things Only
| < $80 <br> (productPrice=30) | $80 - $10k <br> (productPrice=4500) | > $10k <br> (producePrice=12000) |
| -- | -- | -- |
| <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=30&big=M6"></script> | 6M <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4500&big=M6"></script> 12M <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4500&big=M12"></script> 24M <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4500&big=M24"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4000&BigOnly"></script> |

-->

## Platform-specific Installation Instructions
* [Shopify](/widgets/price-info/shopify_nz)
* [Magento 1](/widgets/price-info/magento_1_nz)
* [OpenCart 3](/widgets/price-info/opencart_3_nz)


## Dynamic Widget

Provide a ```price-selector``` query argument to target the HTML element containing the price. This will update the widget as the product price changes on user selection.

Provide a **URL encoded** jQuery CSS selector.

Here is HTML taken from a WooCommerce product page:

```
<span>Product Price:</span>
<p class="price">
    <span id="priceinfo" class="woocommerce-Price-amount amount">
        <span class="woocommerce-Price-currencySymbol">$</span>900.00
    </span>
</p>
```

<p class="price">
    <span><strong>Product Price</strong>:</span>
    <span id="priceinfo" class="woocommerce-Price-amount amount">
        <span class="woocommerce-Price-currencySymbol">$</span>900.00
    </span>
</p>

Use the urlencoded ```%23priceinfo ``` to reference the id ```#priceinfo```

<script src="https://widgets.%domain%/content/scripts/price-info.js?price-selector=%23priceinfo"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?price-selector=%23priceinfo"></script>
```

You could also use ```price-selector=.woocommerce-Price-amount.amount``` or any CSS selector to identify the price.

## Minimum and Maximum Widgets

"Little things" and "Big things" widgets have default minimum and maximum thresholds.

By default, "Little things" shows when product price is between $20 and $1000, while "Big things" shows only between the price of $80 and $10000.

You can customise the min and max threshold (can only increase the min or/and decrease the max) by setting ```data-min``` and ```data-max``` accordingly when calling the widget.

```
<script data-min="20" data-max="300" src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=YOUR_PRICE"></script>
```
Here it will not display for prices above $300 or will display in an altered form for prices below $20.

<small>* humm reserves the right to change branding without prior notice</small>
