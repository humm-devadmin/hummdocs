# Oxipay to **humm** eComm migration

## Websites with existing Oxipay integration

To ensure your website is displaying humm on launch day please identify your e-commerce platform from below and follow provided instructions. For further assistance, email [pit@%domain%](mailto:pit@%domain%)

# Widgets + Banners

> All existing Oxipay widgets will automatically switch to humm after launch.

Any content you added to your website advertising Oxipay which is not the official Oxipay widget will not automatically update. You will need to update this custom content yourself.

# eCommerce

> Your merchant number and API key will be the same both before and after switch to humm.

If you do not have either, fill out our Request API Key.

## Shopify
Your website will automatically switch to **humm** on 1 May.

## WooCommerce
A new plugin update will be released prior to launch of **humm** on 1 May. Sellers can update their plugin through the normal WordPress process.

The updated plugin will automatically switch from Oxipay to humm after its release, no further testing of the plugin is required.
The new plugin will be titled “humm / Oxipay Payment Gateway for WooCommerce”.

## Magento 1

A new humm plugin will need to be installed as per our documentation.
Your Oxipay settings will automatically be carried over to the new humm plugin.
The updated plugin will behave as Oxipay prior to launch and will automatically switch
over to humm after launch.
There will be no need to test the plugin.

## Magento 2
A new humm plugin will need to be installed as per our documentation.
Oxipay settings will not automatically be carried over to the new humm plugin.
The new plugin will need to be tested and verified by PIT, please see Test Transactions for further details.

The updated plugin will behave as Oxipay prior to launch will automatically switch over to **humm** after launch.

## PrestaShop / OpenCart 3.0

A new humm plugin will need to be installed.
For PrestaShop, you will find the installation documentation.
For OpenCart 3.0 you will find the installation documentation.
Oxipay settings will not automatically be carried over to the new **humm** plugin.
The new **humm** plugin will need to be tested and verified by PIT, please see Test Transactions for further details.
The new plugin may be installed prior to launch and can be set to display as Oxipay but you will need to update the plugin settings in order to display **humm** after launch on 1 May.

## OpenCart 2.x / CubeCart

A new humm plugin will need to be installed after the launch of humm on the 8th of April.
These new humm plugins will be available before launch for testing purposes.
Documentation describing the upgrade process will be available soon.
Oxipay settings will not automatically be carried over to the new humm plugin.
The new plugin will need to be tested and verified by PIT, please see Test Transactions for further details.

## Custom Platform

Please refer to the developer resources.
Your new humm integration will need to be tested.
Please get in contact with the PIT team for further instructions.



As part of the migration to **humm** you will need to update 3 parts of your e-commerce website:

* [Plugins](#plugins)
* [Widgets](#widgets)
* [Other Advertising](#other-advertising)

## Plugins
For updating your website please see the table below.<br>
Further instructions on how to update and new plugins will be provided soon.

Platform | Action Required
---------|----------------
Shopify               | Your website will automatically switch to **humm** on 1 May.
WooCommerce           | A new plugin update will be released prior to the launch of humm on 8 April. Merchants can update their plugin through the normal WordPress process.
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