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

### Price-info widget

<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=0"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=PLACE_YOUR_PRODUCT_PRICE"></script>
```

<!-- **(weekly repayments)**
<script src="https://widgets.%domain%/content/scripts/payments-weekly.js?productPrice=0"></script>
```
<script src="https://widgets.%domain%/content/scripts/payments-weekly.js?productPrice=PLACE_YOUR_PRODUCT_PRICE"></script>
``` 
-->


### Dynamic Price-info widget

For instances where you have multiple products on the same page, or the price of the product dynamically updates as a result of user selection; we provide a more sophisticated price-info widget. 

With this widget you can provide a **URL encoded** jquery style CSS selector and it will bind a call back to the DOMSubTreeModified event. If the price is modified, it will update the payment info accordingly. 

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
        <span class="woocommerce-Price-currencySymbol">$</span>1400.00
    </span>
</p>

In this case we use the urlencoded ```%23priceinfo ``` to refer to the id ```#priceinfo```

<script src="http://widgets.%domain%/content/scripts/price-info.js?price-selector=%23priceinfo"></script>
```
<script src="http://widgets.%domain%/content/scripts/price-info.js?price-selector=%23priceinfo"></script>
```
<br>

<!-- **(weekly repayments)**
<p class="price">
    <span><strong>Product Price</strong>:</span>
    <span id="priceinfo2" class="woocommerce-Price-amount amount">
        <span class="woocommerce-Price-currencySymbol">$</span>1400.00
    </span>
</p>
<script src="http://widgets.%domain%/content/scripts/payments-weekly.js?price-selector=%23priceinfo2"></script>
```
<script src="http://widgets.%domain%/content/scripts/payments-weekly.js?price-selector=%23priceinfo2"></script>
```

<br> -->

You could also use ```price-selector=.woocommerce-Price-amount.amount``` if your product price isn't accessible by an xml:id 

If you *do not* provide a ```price-selector``` query argument then you can also use a fixed  ```productPrice``` value. In this instance, the payment period will not update if the price is updated.

### Minimum and Maximum Price-info widget (Optional)

To alter the Price-info widget based on the price passed to it, you may set the minimum and maximum values it will display for.

This is done by setting the ```data-min``` and ```data-max``` fields when calling the Price-info widget script as seen below.
```
<script data-min="20" data-max="300" src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=YOUR_PRICE"></script>
```
In this instance the Price-info widget will not display if the proudct price is above $300 and will display in an altered form if the value is below $20 as seen below.

<script data-min="20" data-max="300" src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=0"></script>

<br>

<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">Installation based on Platforms</h3>
  </div>
  <div class="panel-body">
<ul>
  <li><a href="../../price-info/shopify">Shopify specific instructions</a></li>
  <li><a href="../../price-info/woocommerce">WooCommerce specific instructions</a></li>
</ul>
  </div>
</div>

<br/><br/>

<small>*We reserve the right to change any linked image at anytime without prior notice</small>
