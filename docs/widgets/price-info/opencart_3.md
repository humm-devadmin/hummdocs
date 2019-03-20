#Adding Price-info Widget For OpenCart 3

**Step 1:** Open the ```product.twig``` file in the following location on your server<br>
```
YOUR_OPENCART_DIR/catalog/view/theme/YOUR_THEME/template/product/product.twig
```
**Step 2:** Find the product price section<br>

Within the ```product.twig``` file, find the section of code where the price is displayed.</br>
Below is an excerpt from the ```product.twig``` found in the default theme. Your theme may be different.</br>
Note that you would place the widget in the section marked ```INSERT_WIDGET_HERE```
```
{% if price %}
  <ul class="list-unstyled">
    {% if not special %}
    <li>
      <h2>{{ price }}</h2>
    </li>
    {% else %}
    <li><span style="text-decoration: line-through;">{{ price }}</span></li>
    <li>
      <h2>{{ special }}</h2>
    </li>
    {% endif %}
    INSERT_WIDGET_HERE
    {% if tax %}
    <li>{{ text_tax }} {{ tax }}</li>
    {% endif %}
    {% if points %}
    <li>{{ text_points }} {{ points }}</li>
    {% endif %}
    {% if discounts %}
    <li>
      <hr>
    </li>
    {% for discount in discounts %}
    <li>{{ discount.quantity }}{{ text_discount }}{{ discount.price }}</li>
    {% endfor %}
    {% endif %}
  </ul>
{% endif %}
```
**Step 3:** Place the following ```<script>``` tag into the ```product.twig``` file.<br>

### 'Little things' only

Using the following code if you are a **'Little things'** only merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={%if special%}{{special}}{%else%}{{price}}{%endif%}&LittleOnly"></script>
```

### 'Big things' only

Using the following code if you are a **'Big things'** only merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={%if special%}{{special}}{%else%}{{price}}{%endif%}&BigOnly"></script>
```

### Both 'Little things' and 'Big things'

Using the following code if you are both a **'Little things'** and **'Big things'** merchant.
```
<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice={%if special%}{{special}}{%else%}{{price}}{%endif%}"></script>
```

<div class="panel">
    Try inserting the widget in different places in the code until you find the most suitable place for your site.
</div>
<br>
**Step 4:** Save and you should see a working widget on your website.
