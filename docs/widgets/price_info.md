# Price-info widget

## How to use

To use the price-info widget, you must select the corresponding type based on whether you offer **'Little things'** merchant, **'Big Things'** or **both**.

> Contact <a href="mailto:pit@%domain%">pit@%domain%</a> if you're unsure what type of merchant you are.

Insert the script where you want the price-info widget to display replacing <code>PLACE_YOUR_PRODUCT_PRICE</code> with the product price.

## Platform-specific Instructions
* [Shopify](/widgets/price-info/shopify)
* [Magento 1](/widgets/price-info/magento_1)
* [OpenCart 3](/widgets/price-info/opencart_3)

## Widget behaviour

There are three different types of price-info widgets depending on whether your **humm** account supports only **'Little things'**, only **'Big Things'** or **both**. See table below for possible bevahiours.

| | <= $1000 | $1000 < price <= $2000 | > $2000 |
| -- | -- | -- | -- |
| **Default** | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1500"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4000"></script> |
| **Big Things Only** | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200&BigOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1500&BigOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4000&BigOnly"></script> |
| **Little Things Only** | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200&LittleOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=1500&LittleOnly"></script> | <script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=4000&LittleOnly"></script> |

This behaviour effects all price-info widgets, including the dynamic price-info widget.

### 'Little things' only

Using the following code if you are a **'Little things'** only merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&LittleOnly"></script>
```
Note the use of <code>&LittleOnly</code> parameter.

### 'Big things' only

Using the following code if you are a **'Big things'** only merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE&BigOnly"></script>
```
Note the use of <code>&BigOnly</code> parameter.

### Both 'Little things' and 'Big things'

Using the following code if you are both a **'Little things'** and **'Big things'** merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE"></script>
```
Note that there is no extra parameter required.

## Widget features
### 1. Dynamically get product price

Instead of passing in a fixed ```productPrice``` value,  you can provide a ```price-selector``` query argument to target the HTML element containing the product price. Here, the price-info widget will get the product price from the specified element, and dynamically update when the price is changed.

If product price dynamically updateson user selection, or you have multiple products on the same page, the price-info widget can dynamically get the product price from a specified HTML element in the page.

With this feature, you can provide a **URL encoded** jQuery style CSS selector and it will bind a call back to the DOMSubTreeModified event.  
If the price is modified, it will update the payment info accordingly. 

For example, this is a block of HTML extracted from a typical WooCommerce product page:

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

### 2. Minimum and Maximum (Optional)

You may set the minimum and maximum prices the widget will display for by setting the ```data-min``` and ```data-max```  when calling the widget.

```
<script data-min="20" data-max="300" src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=YOUR_PRICE"></script>
```
Here it will not display for prices above $300 or will display in an altered form for prices below $20.

<small>*We reserve the right to change any linked image at anytime without prior notice</small>
