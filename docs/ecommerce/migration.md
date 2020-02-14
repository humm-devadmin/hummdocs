# E-commerce Upgrade Overview

As part of the migration to **humm** you will need to update 3 parts of your e-commerce website:

* [Plugins](#plugins)
* [Widgets](#widgets)
* [Other Advertising](#other-advertising)

## Plugins
For updating your website please see the table below.<br>
Further instructions on how to update and new plugins will be provided soon.

Platform | Action Required
---------|----------------
Shopify               | No action required. Your plugin will automatically switch to **humm**
WooCommerce           | Keep your plugin updated and it will automatically switch to **humm** at launch
Magento               | You will need to update your plugin.<br>Once updated you will need to perform a test transaction and have this verified by [pit@%domain%](mailto:pit@%domain%).<br>Your new plugin will switch to **humm** automatically at launch
OpenCart / PrestaShop | You will need to update your plugin.<br>Once updated you will need to perform a test transaction and have this verified by [pit@%domain%](mailto:pit@%domain%).<br>You will need to manually enable **humm** once launched
Custom                | Custom integrations will need to manually update their [checkout endpoints](../../custom_integration/checkout_api) closer to launch.<br>Our checkout API will not be changing.<br>Please contact [pit@%domain%](mailto:pit@%domain%) for further information

* Your current Oxipay credentials will stay the same for **humm**.
* Closer to launch a sandbox endpoint for **humm** will be provided for testing purposes.

## Widgets
Existing Oxipay widgets, including price breakdowns, banners and landing pages will automatically switch to **humm** at launch.

To illustrate, the following Oxipay widget:
<script src="https://widgets.oxipay.co.nz/content/scripts/price-info.js?productPrice=200"></script>

<br>Will switch to **humm**:

<script src="https://widgets.%domain%/content/scripts/price-info.js?productPrice=200&LittleOnly"></script>

However, we recommend that you update your widgets to our latest versions listed here:

* [Price Breakdown](../../widgets/%price_info_page_link%)
* [Banner](../../widgets/banners)
* [Landing Page](../../widgets/landing_pages/introduction)

## Other Advertising

All existing Oxipay branding on your website that you have created will need to be updated to **humm** for launch.

Please see our [Best Practice Integration Guidelines](../../best_practice_integration) for further information.

Any questions? Please contact [pit@%domain%](mailto:pit@%domain%)