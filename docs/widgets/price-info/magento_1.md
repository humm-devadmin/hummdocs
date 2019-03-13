#Adding Magento 1's Price-info Widget
For adding Price-info Widget to your Magento 1 Website, follow these instructions

**Step 1:** Find ```view.phtml``` from the following location in your hosting (Magento installed Folder) and open it with your desired text-editor
```
YOUR_MAGENTO_FOLDER/app/design/frontend/rwd/YOUR_TEMPLATE_FOLDER/template/catalog/product/view.phtml
```
**Step 2:** Find "getPriceHtml"

There should be only one occurrence of the "getPriceHtml" string, and it may look similar to:
```
<?php echo $this->getPriceHtml($_product); ?>
```
**Step 3:** Place the following ```<script>``` tag below the "getPriceHtml" code.

```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=<?php echo $_product->getFinalPrice(); ?>"></script>
```
<div class="alert alert-danger">
    You may try inserting the code a few lines below the "getPriceHtml" code, or below some other elements. Try different places and view the visual appearance to find the most suitable place for your site.
    You may need to flush cache for the changes to take effect. 
</div>

**Step 4:** Save and you should see a working widget on your website.

<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=100"></script>
