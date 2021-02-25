#Price-info Widgets on Shopify

1 - From the Shopify Dashboard, navigate to **Online Store > Themes > Actions > Edit Code**.

2 - From left panel, navigate to **Sections** then select **product-template.liquid**.

![theme-editor.png](/img/price-info/theme_edit.png)

> <b>If the "product-template.liquid" file does not exist</b>, navigate to **Templates** and select **product.liquid** instead.

3 - Place the ```< script >``` tag in the desired place you'd like it to appear on your website, typically this is before. This should be added before ```Add to Cart ``` button tag.

## 'Little things' only

If a **'Little things'** merchant, use:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}&LittleOnly"></script>
```

## 'Big things' only

If a **'Big things'** merchant, use:
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}&BigOnly"></script>
```

## Both 'Little things' and 'Big things'

Using the following code if you are both a **'Little things'** and **'Big things'** merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={{product.selected_or_first_available_variant.price | divided_by: 100.00}}"></script>
```

4 - Save and you should see a working widget on your website.

<br>