
#Integrating on Magento 1

## Locate your **humm** Credentials

To integrate **humm** you will need your

* Merchant Number
* API Key

## Plugin Installation / Upgrade

1 - You can create a backup of your store by navigating to **System** -> **Tools** -> **Backup**.

2 - Download the **humm** plugin zip from [GitHub](https://github.com/shophumm/humm-magento1.x/archive/review.zip).

3 - Unzip it, then copy the following folders into the corresponding folders under your Magento root directory.

    /app/code/community/Humm/
	/app/design/frontend/base/default/template/HummPayments/
	/app/design/adminhtml/base/default/template/HummPayments/
	/app/etc/modules/Humm_HummPayments.xml
	/skin/frontend/base/default/images/Humm/
	/skin/adminhtml/base/default/images/Humm/

## Configuration

1 - Navigating to **System** > **Configuration**.

2 - On **Configuration** page, scroll downwards then click on **Payment Methods** on left side menu.

![5.png](/img/ecommerce/magento_1/5.png)

3 - Confirm  **humm Checkout** is visible and once expanded, the options will need to be configured with your merchant number and API key.

## Varnish Cache

If your server utilises a Varnish cache it is important that you whitelist any URLs associated with the **humm** plugin.

A rule must be added to varnish configuration for any magento installation running behind a varnish backend. (Or any other proxy cache) to invalidate any payment controller action.

Must exclude: `.*HummPayments.*` from all caching.


The [Checkout API](../../custom_integration/checkout_api/#humm-endpoints) and [Refund API](../../custom_integration/refund_api/) endpoints should also be whitelisted.
