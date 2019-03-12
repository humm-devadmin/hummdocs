<!-- ### More-info large
<script src="https://widgets.%domain%/content/scripts/more-info-large.js"></script>
```
<script src="https://widgets.%domain%/content/scripts/more-info-large.js"></script>
```
<br/>

### More-info small
<script src="https://widgets.%domain%/content/scripts/more-info-small.js"></script>
```
<script src="https://widgets.%domain%/content/scripts/more-info-small.js"></script>
```
<br> -->

# Price-info widget

## How to use

To use the price-info widget, simple insert the following code to where you want the price-info widget to be be displayed. Replace <code>PLACE_YOUR_PRODUCT_PRICE</code> with the price of the product.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200"></script>

<br>


<!-- **(weekly repayments)**
<script src="https://widgets.%domain%/content/scripts/payments-weekly.js?productPrice=0"></script>
```
<script src="https://widgets.%domain%/content/scripts/payments-weekly.js?productPrice=PLACE_YOUR_PRODUCT_PRICE"></script>
``` 
-->

## Widget behavior
When the product price is below **$1000**, the price-info widget will display the payable amount of each instalment.  
On a product of **$400**, the widget will look like:
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=400"></script>

When the product price is over **$1000**, the widget will show "Streeetch your payments", with the amount of each instalment.  
Here is an example of the widget on a **$5000** product:
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=5000"></script>

Also, the content of the popup when the widget is clicked will be slightly different when the product price is below or over **$2000**.

## Widget features
### 1. Dynamically get product price

Instead of passing in a fixed ```productPrice``` value,  you can provide a ```price-selector``` query argument to target the HTML element containing the product price. In this instance, the price-info widget will get the product price from the specified element, and dynamically update when the price is changed.

For instances where the price of the product dynamically updates as a result of user selection, or you have multiple products on the same page, our price-info widget can dynamically get the product price from a specified html element in the page.

With this feature, you can provide a **URL encoded** jquery style CSS selector and it will bind a call back to the DOMSubTreeModified event.  
If the price is modified, it will update the payment info accordingly. 

For example, this is a block of html extracted from a typical WooCommerce product page:

```
<span>Product Price:</span>
<p class="price">
    <span id="priceinfo" class="woocommerce-Price-amount amount">
        <span class="woocommerce-Price-currencySymbol">$</span>1400.00
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
<br>

<!-- **(weekly repayments)**
<p class="price">
    <span><strong>Product Price</strong>:</span>
    <span id="priceinfo2" class="woocommerce-Price-amount amount">
        <span class="woocommerce-Price-currencySymbol">$</span>1400.00
    </span>
</p>
<script src="https://widgets.%domain%/content/scripts/payments-weekly.js?price-selector=%23priceinfo2"></script>
```
<script src="https://widgets.%domain%/content/scripts/payments-weekly.js?price-selector=%23priceinfo2"></script>
```

<br> -->

You could also use ```price-selector=.woocommerce-Price-amount.amount``` or any CSS selectors to help identify the price element.

### 2. Minimum and Maximum (Optional)

To alter the Price-info widget based on the price passed to it, you may set the minimum and maximum values it will display for.

This is done by setting the ```data-min``` and ```data-max``` fields when calling the Price-info widget script as seen below:
```
<script data-min="20" data-max="300" src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=YOUR_PRICE"></script>
```
In this example, the Price-info widget will not display if the product price is above $300 and will display in an altered form if the value is below $20 as seen below.

<script data-min="20" data-max="300" src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=0"></script>

<br>


  <div class="panel-heading">
    <h3 class="panel-title">Installation based on Platforms</h3>
  </div>
  <div class="panel-body">
<ul>
  <li><a href="../../price-info/shopify">Shopify</a></li>
  <li><a href="../../price-info/magento_1">Magento 1</a></li>
  <li><a href="../../price-info/opencart_3">OpenCart 3</a></li>
</ul>
  </div>
</div>

<br/><br/>

<small>*We reserve the right to change any linked image at anytime without prior notice</small>
