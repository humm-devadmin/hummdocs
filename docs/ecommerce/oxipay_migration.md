# Oxipay to **humm** migration

As part of the migration to **humm** you will need to update 3 parts of your e-commerce website:

* [Plugins](#plugins)
* [Widgets](#widgets)
* [Other Advertising](#other-advertising)

## Plugins
To migrate your online store to **humm**, identify your eCommerce platform from below and follow provided instructions.

Your Oxipay merchant number and API key will be will be the same for **humm**. Contact [pit@%domain%](mailto:pit@%domain%) if you don't have either.

Platform | Action Required | Auto-switch
---------|-----------------|------------
Shopify               | Your site will auto switch to **humm** on go-live date. |
WooCommerce           | A new plugin update will be released prior to launch of **humm** on go-live date. Update plugin using instructions [here](../../ecommerce/magento_1/#plugin-installation-upgrade). | Yes
Magento 1             | Update plugin using instructions [here](../../ecommerce/woocommerce/#integrating-humm).<br>Then perform a test transaction and have it verified by [pit@%domain%](mailto:pit@%domain%) | Yes, will carry over your Oxipay settings.
Magento 2             | Update plugin using instructions [here](../../ecommerce/magento_2/#integrating-humm-using-composer).<br>Then perform a test transaction and have it verified by [pit@%domain%](mailto:pit@%domain%) | Yes, will carry over your Oxipay settings.
OpenCart              | After launch of humm, update plugin using instructions [here](../../ecommerce/opencart/#installation-using-extension-installer).<br>Then perform a test transaction and have it verified by [pit@%domain%](mailto:pit@%domain%). | No, manually enable **humm** once launched.
PrestaShop            | After launch of humm, update plugin using instructions [here](../../ecommerce/prestashop/#updating-the-plugin).<br>Then perform a test transaction and have it verified by [pit@%domain%](mailto:pit@%domain%). | No, manually enable **humm** once launched.
Custom                | Custom integrations will need to manually update their [checkout endpoints](../../custom_integration/checkout_api) closer to launch.<br>The underlying API will not change, contact [pit@%domain%](mailto:pit@%domain%) for further information

> Closer to launch a sandbox endpoint for **humm** will be provided for testing purposes.

## Widgets + Banners

Existing Oxipay widgets, including price breakdowns, banners and landing pages will automatically switch to **humm** at launch.

To illustrate, the following Oxipay widget:
<script src="https://widgets.oxipay.co.nz/content/scripts/price-info.js?productPrice=100"></script>

<br>Will switch to **humm**

<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200&LittleOnly"></script>

However, we recommend that you update your widgets to our latest versions listed here:

* [Price Breakdown](../../widgets/%price_info_page_link%)
* [Banner](../../widgets/banners)
* [Landing Page](../../widgets/landing_pages/introduction)

Any custom content you added which is not the official Oxipay widget will not automatically update, you'll need to update that yourself.

## Other Advertising

All existing Oxipay branding on your website that you have created will need to be updated to **humm** for launch.

Please see our [Best Practice Integration Guidelines](../../best_practice_integration) for further information.

<br>
<br>
