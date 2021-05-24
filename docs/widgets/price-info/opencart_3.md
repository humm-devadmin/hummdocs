#Price-info Widgets on OpenCart 3

**Step 1:** 
Open the ```product.twig``` file in the following location on your server<br>
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

Replace <code>PLACE_YOUR_MERCHANT_ID</code> with your unique merchant ID. This will have been provided to you in your welcome email.

> **If you are unsure of your merchant ID, please reach out to pit@%domain%.**

```
<script src="https://bpi.humm-%country_abbr_lower_case%.com/%country_abbr_lower_case%/content/scripts/price-info_sync.js?productPrice={%if special%}{{special}}{%else%}{{price}}{%endif%}&merchantID=PLACE_YOUR_MERCHANT_ID"></script>
```

> Try inserting the widget in different places in the code until you find the most suitable place for your site.

**Step 4:** Save and you should see a working widget on your website.
