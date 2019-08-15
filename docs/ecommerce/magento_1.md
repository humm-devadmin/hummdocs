#Integrating on Magento 1

## Locate your **humm** Credentials

To integrate **humm** you will need your

* Merchant Number
* API Key

## Plugin Installation / Upgrade

1 - You can create a backup of your store by navigating to **System** -> **Tools** -> **Backup**.

2 - Download the **humm** plugin zip from [GitHub](https://github.com/shophumm/humm-magento1.x/releases/latest).

3 - Unzip it, then copy the following folders into the corresponding folders under your Magento root directory.

    app/
    skin/

4 - Login into Magento's **Admin Panel**, click on **System** then select **Cache Management**.

5 - On the **Cache Management** page, click on **Flush Magento Cache**.

![3.png](/img/ecommerce/magento_1/3.png)

## Configuration

1 - Navigating to **System** > **Configuration**.

2 - On **Configuration** page, scroll downwards then click on **Payment Methods** on left side menu.

![5.png](/img/ecommerce/magento_1/5.png)

3 - Confirm  **humm Checkout** is visible and once expanded looks similar to the image below.

![6.png](/img/ecommerce/magento_1/6.png)

## Varnish Cache

If your server utilises a Varnish cache it is important that you whitelist any URLs associated with the **humm** plugin.

This should at least include the following:

    YOUR_DOMAIN/HummPayments/payment/start/
    YOUR_DOMAIN/HummPayments/payment/cancel/
    YOUR_DOMAIN/HummPayments/payment/complete/

The endpoints listed [here](../../developer_resources/checkout_api/#humm-gateways) should also be whitelisted.
