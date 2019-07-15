#Integrating on Magento 1

Use the same instructions to upgrade the **humm** plugin to a newer release.


## Locate your **humm** Credentials

To integrate **humm** you will need your

* Merchant Number
* API Key
## Plugin Installation

1 - You can create a backup of your store by navigating to **System** -> **Tools** -> **Backup**.

2 - Download the **humm** plugin from [github.com/shophumm/humm-magento1.x/releases](https://github.com/shophumm/humm-magento1.x/releases).

3 - Unzip it, then copy the following plugin files and folders into the corresponding folders under the Magento root directory.

    /app/code/community/Humm
    /app/design/frontend/base/default/template/HummPayments
    /app/design/adminhtml/base/default/template/HummPayments
    /app/etc/modules/Humm_HummPayments.xml

    /skin/frontend/base/default/images/Humm/
    /skin/adminhtml/base/default/images/Humm/

4 - Login into Magento's **Admin Panel**, click on **System** then select **Cache Management**.

5 - On the **Cache Management** page, click on **Flush Magento Cache**.

![3.png](/img/platforms/magento_1/3.png)

## Configuration

1 - Navigating to **System** > **Configuration**.

2 - On **Configuration** page, scroll downwards then click on **Payment Methods** on left side menu.

![5.png](/img/platforms/magento_1/5.png)

3 - Confirm  **humm Checkout** is visible and once expanded looks similar to the image below.

![6.png](/img/platforms/magento_1/6.png)

## Varnish Cache

If your server utilises a Varnish cache it is important that you whitelist any URLs associated with the **humm** plugin.

This should at least include the following:


    YOUR_DOMAIN/HummPayments/payment/start/
    YOUR_DOMAIN/HummPayments/payment/cancel/
    YOUR_DOMAIN/HummPayments/payment/complete/

The endpoints listed [here](../../developer_resources/checkout_api/#humm-gateways) should also be whitelisted.

## Upgrade From The Old Oxipay Plugin

1 - Install **humm**.

2 - Navigate to **Payment Methods**.

3 - If Oxipay plugin is already installed and configured, you will see certain Oxipay configurations (Merchant Number, API Key, etc.) have been copied over to **humm**.

4 - Set "Enabled" to "Yes" for **humm** plugin, **and set "Enabled" to "No" for the Oxipay plugin**.

5 - Adjust other **humm** plugin settings if necessary. "Is Testing" is preset to "No" by default in this case. Save the config.

6 - You may want to keep the old Oxipay plugin (and keep it NOT enabled) to allow online refunding of the existing Oxipay orders. Otherwise you can remove it by removing the following folders and files:

    /app/code/community/Oxipay
    /app/design/frontend/base/default/template/oxipayments
    /app/design/adminhtml/base/default/template/oxipayments
    /app/etc/modules/Oxipay_Oxipayments.xml

    /skin/frontend/base/default/images/Oxipay/
    /skin/adminhtml/base/default/images/Oxipay/

7 - Before the **humm** launch date, the plugin will still show Oxipay and checkout with Oxipay, and your customers should see no changes. After the official **humm** launch, the plugin will automatically switch to **humm**, providing a smooth and fully automatic transition.

