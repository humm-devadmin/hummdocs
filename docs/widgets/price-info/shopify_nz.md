#Price-info Widgets on Shopify

## Step 1 
From the Shopify Dashboard, navigate to **Online Store > Themes > Actions > Edit Code**.

## Step 2
From left panel, navigate to **Sections** then select **product-template.liquid**.

![theme-editor.png](/img/price-info/theme_edit.png)

> <b>If the "product-template.liquid" file does not exist</b>, navigate to **Templates** and select **product.liquid** instead.

## Step 3
Place the ```<script>``` tag in the desired place you'd like it to appear on your website, typically this is before. This should be added before ```Add to Cart ``` button tag.

### 'Little things' only

Using the following code if you are a **'Little things'** merchant.
#### For 5 fortnightly payments:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}&little=f5"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}&little=f5"></script>
<!-- 
#### For 10 weekly payments:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}&little=w10"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}&little=w10"></script>
-->

### 'Big things' only

Using the following code if you are a **'Big things'** merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}&big=m6"></script>
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}&big=m6"></script>

Available options are:  
<code>big=m6</code> for 6 months, <code>big=m9</code> for 9 months, <code>big=m12</code> for 12 months, <code>big=m18</code> for 18 months, <code>big=m24</code> for 24 months.

## Step 4
Save and you should see a working widget on your website.
