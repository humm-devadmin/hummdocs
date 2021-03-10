# **Integrating on Shopify**

## Locate your **humm** Credentials

To integrate **humm** you will need your

* Merchant Number
* Encryption Key

##Integrating **humm**

**1.** Fill in the online [Request Encryption Key Form](/request_api) and we'll send you your unique **Encryption Key**. 

**2.** Add **Humm** to your Shopify payments by following the Shopify gateway link <span style=display:%au-only%><a href = "https://www.shopify.com/login?redirect=%2Fadmin%2Fauthorize_gateway%2F1031227" >here</a></span> <span style=display:%nz-only%><a href = "https://www.shopify.com/login?redirect=%2Fadmin%2Fauthorize_gateway%2F1052217">here</a><span>

**3.** Once you've logged in, click **Install payment provider**.

![5.png](/img/ecommerce/shopify/5.png)

**4.** Confirmation will appear at bottom of the page.

![6.png](/img/ecommerce/shopify/6.png)

**5.** Navigate to **Settings > Payments > Alternative Payments**, select **Humm** from the drop-down.

![7.png](/img/ecommerce/shopify/7.png)

**6.** Enter your **Merchant Number** and **Encryption Key** then click **Save**.
> **Ensure test mode is disabled. The integration will not work if this is enabled.**

![8.png](/img/ecommerce/shopify/8.png)

**Humm** will now be displaying as a payment option at checkout.

If you have any questions, email us at <strong>pit@%domain%</strong>

**7.** You may verify the integration is working by attempting to checkout with humm. If you are redirected to the **humm** login page, the gateway is working correctly.

##Add the Humm Product Pricing Widgets

To add the Price-info widget as below, use Shopify instructions <a href="../../widgets/price-info/shopify">here</a>.

**Price: ** $800
<script id="my-id" src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=800"></script>

##Add the Humm Landing Page to your website

**1.** Navigate to **Online Store > Themes > Pages**. In the top right corner click the **Add Page** button.

**2.** Title the page **Humm** and click on the `<>` button, as highlighted below.

![pages_html.png](/img/ecommerce/shopify/pages_html.png)

**3.** Paste the below landing page script in the content box. Choose the script based on the plans you have available (Little and/or big things). Click **Save**.

Little things
```
<script id="humm-landing-page-little-online" src="https://widgets.%domain%/content/scripts/landing-page-little-online.js"></script>
```

Big things
```
<script id="humm-landing-page-big-online" src="https://widgets.%domain%/content/scripts/landing-page-big-online.js"></script>
```

Little + Big things
```
<script id="humm-landing-page-little-big-online" src="https://widgets.%domain%/content/scripts/landing-page-little-big-online.js"></script>
```

**4.** Navigate to **Online Store > Themes > Navigation** and choose the appropriate menu to display the humm landing page.

##Add the Humm Payment tile to your website footer
**1.** Download the humm payment tile <a href ="/img/logos/nz/humm_payment_tile.png" download>here</a>

**2.** Navigate to **Online Store > Themes > Actions > Edit Code > Assets** and click the **Add a new Asset** button

![edit_code.png](/img/ecommerce/shopify/edit_code.png)

![add_asset.png](/img/ecommerce/shopify/add_asset.png)

**3.** Click the **Choose file** button and select the recently downloaded humm payment tile and click **upload asset**.

**4.** Navigate to **Sections > footer.liquid**. Press `CTRL + F` and search for `payment`.

**5.** Scroll to the bottom of the last highlighted `payment`, paste the below img tag after the `{% endfor %}`. Click **Save**.

	<img style="height: 25px; vertical-align: middle;" src="{{'humm_payment_tile.png' | asset_url }}" id="humm-logo" alt="humm">

![shopify_payment.png](/img/ecommerce/shopify/shopify_payment.png)

**6.** The **humm** payment tile should now be displaying at the bottom of your website.

**NOTE:** If the payment tile is not inline with the other payment methods, please remove <br> `vertical-align: middle` from the script.
<br>