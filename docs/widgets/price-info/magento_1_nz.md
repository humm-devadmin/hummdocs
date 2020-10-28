#Price-info Widgets on Magento 1
For adding Price-info Widget to your Magento 1 Website, follow these instructions

## Step 1 
Find ```view.phtml``` from the following location in your hosting (Magento installed Folder) and open it with your desired text-editor
```
YOUR_MAGENTO_FOLDER/app/design/frontend/rwd/YOUR_TEMPLATE_FOLDER/template/catalog/product/view.phtml
```
## Step 2
Find "getPriceHtml"

There should be only one occurrence of the "getPriceHtml" string, and it may look similar to:
```
<?php echo $this->getPriceHtml($_product); ?>
```
## Step 3
Place the following ```<script>``` tag below the "getPriceHtml" code.

### 'Little things' only

Using the following code if you are a **'Little things'** merchant.
#### For 5 fortnightly payments:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=<?php echo $_product->getFinalPrice(); ?>&little=f5"></script>
```
<!-- 
#### For 10 weekly payments:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=<?php echo $_product->getFinalPrice(); ?>&little=w10"></script>
```
-->
### 'Big things' only

Using the following code if you are a **'Big things'** merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=<?php echo $_product->getFinalPrice(); ?>&big=m6"></script>
```
Available options are:  
<code>big=m6</code> for 6 months, <code>big=m9</code> for 9 months, <code>big=m12</code> for 12 months, <code>big=m18</code> for 18 months, <code>big=m24</code> for 24 months.


## Step 4
Save and you should see a working widget on your website.
