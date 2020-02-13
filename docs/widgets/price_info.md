## Widgets

Select the widget type corresponding to your seller type: **'Little things'**, **'Big Things'** or **both**. Contact <a href="mailto:pit@%domain%">pit@%domain%</a> if unsure.

Insert the script where you want the widget to display replacing <code>PLACE_YOUR_PRODUCT_PRICE</code> with the product's price.

## 'Little things' only

If a **'Little things'** only seller, use:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&LittleOnly"></script>
```
Note the use of <code>&LittleOnly</code> parameter.

## 'Big things' only

If a **'Big things'** only seller, use:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&BigOnly"></script>
```
Note the use of <code>&BigOnly</code> parameter.

## Both 'Little things' and 'Big things'

If a **'Little things'** and **'Big things'** seller, use: 
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE"></script>
```
No extra parameter required.

## Platform-specific Installation Instructions
* [Shopify](/widgets/price-info/shopify)
* [Magento 1](/widgets/price-info/magento_1)
* [OpenCart 3](/widgets/price-info/opencart_3)

## Widget behaviour

 **'Little things'**, only **'Big Things'** or **both** widgets behave different. Table below summarises this.

| | <= $1000 | $1000 < price <= $2000 | > $2000 |
| -- | -- | -- | -- |
| **Default** | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1500"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4000"></script> |
| **Big Things Only** | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200&BigOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1500&BigOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4000&BigOnly"></script> |
| **Little Things Only** | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200&LittleOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1500&LittleOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4000&LittleOnly"></script> |

This affects all widgets, including dynamic widgets.

## Dynamic Widget

Provide a ```price-selector``` query argument to target the HTML element containing the product price. This will allow the widget to update as the product price changes - useful if price changes on user selection, or there are multiple products on the same page.

For this provide a **URL encoded** jQuery style CSS selector and it will bind a call back to the DOMSubTreeModified event.  

Here is a block of HTML extracted from a typical WooCommerce product page:

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

In this case, we use the urlencoded ```%23priceinfo ``` to refer to the id ```#priceinfo```

<script src="https://widgets.%domain%/content/scripts/price-info.js?price-selector=%23priceinfo"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?price-selector=%23priceinfo"></script>
```

You could also use ```price-selector=.woocommerce-Price-amount.amount``` or any CSS selectors to help identify the price element.

## Minimum and Maximum Widgets

To display the widget above or below a certain price point, set the ```data-min``` and ```data-max``` accordingly when calling the widget.

```
<script data-min="20" data-max="300" src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=YOUR_PRICE"></script>
```
Here it will not display for prices above $300 or will display in an altered form for prices below $20.

<small>* humm reserves the right to change branding without prior notice</small>
