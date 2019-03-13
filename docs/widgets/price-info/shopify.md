# Adding Shopify's Price-info Widget

For adding Price-info Widget to your Shopify website, follow the instructions below:

**Step 1:** Login into Shopify backend/Dashboard

**Step 2:** Navigate to Online Store > Themes

![online-store.png](/img/price-info/online-store.png)

![theme.png](/img/price-info/theme.png)

**Step 3:** From top-right corner, select to Edit HTML/CSS

![theme-editor.png](/img/price-info/theme-editor.png)

**Step 4:** From the left panel, navigate to "Sections" and select "product-template.liquid"

![theme-editor.png](/img/price-info/left-sections.png)

<div class="panel">
    <b>If the "product-template.liquid" file does not exist</b>, navigate to "Templates" and select "product.liquid" instead.
</div>
**Step 5:** Place the ```<script>``` tag in the desired place you'd like it to appear on your website. This should be added before ```Add to Cart ``` button tag.<br>

```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}"></script>
```

**Step 6:** Save and you should see a working widget on your website.