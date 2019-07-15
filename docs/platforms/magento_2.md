#Integrating on Magento 2

Use the same instructions to upgrade the **humm** plugin to a newer release.

## Locate your **humm** Credentials

To integrate **humm** you will need your

* Merchant Number
* API Key

## Integrating **humm** using Composer

1. Add the **humm** repository, in Magento's root directory

        composer config repositories.shophumm git https://github.com/shophumm/humm-magento2.x.git

2. Require the Humm Payment Gateway Module

        composer require humm/module-humm-payment-gateway:dev-composer

3. Enable the module
       
        ./bin/magento module:enable Humm_HummPaymentGateway --clear-static-content

4. Update the database

        ./bin/magento setup:upgrade

5.  [Configure humm](#configuration)

## Integrating **humm** Manually

1 - Download the **humm** plugin from [https://github.com/shophumm/humm-magento2.x/releases](https://github.com/shophumm/humm-magento2.x/releases).

2 - Unzip it then copy the inner `humm` folder into the `MAGENTO_DIR/app/code` directory on your webserver. If the <code>code</code> folder doesn't exist, then create it manually.

3 - Change directory into `MAGENTO_DIR/bin` to make the `magento` utility available.

4 - Run `magento setup:upgrade`. This will auto-enable **humm** as part of `setup:upgrade`. You should see `Module 'Humm_HummPaymentGateway'` in the output of the command.
<br>

> Depending on your tech stack, you might have to use the <code>php</code> prefix (<code>php magento setup:upgrade</code>) when running the various <code>magento</code> commands.

5 - Flush Magento's Cache: **Settings** -> **Cache Management** -> **Flush Magento Cache**. Alternatively, run <code>MAGENTO_DIR/bin/magento cache:flush</code> from command line.

![3.png](\img\platforms\magento_2\3.png)

6 - Run `setup:static-content:deploy` to avoid generated HTML referring to javascript/css that haven't been added to the list of compiled/minified assets which can break your store's front-end/admin panel.

## Configuration

1 - Navigate to **Stores** -> **Configuration** -> **Sales** -> **Payment Methods**.

2 - Confirm **humm Payment Gateway** is visible and once expanded looks like the image below.

![4.png](\img\platforms\magento_2\4.png)

## Upgrade From The Old Oxipay Plugin

1 - Install the **humm** payment plugin as described earlier in this page.

2 - Go to the **Payment Methods** page as described earlier.

3 - Configure the settings as you should as a new merchant.

4 - Do test transactions to make sure the **humm** Payment plugin works correctly with your store.

5 - Disable or remove the Oxipay plugin. Disable to allow online refunding of the existing old Oxipay transactions.

## Varnish Cache

If your server utilises a Varnish cache it is important that you whitelist any URLs associated with the **humm** plugin.

This should at least include the following:
```
* YOUR_DOMAIN/HummPayments/payment/start/
* YOUR_DOMAIN/HummPayments/payment/cancel/
* YOUR_DOMAIN/HummPayments/payment/complete/
```
The endpoints listed [here](../../developer_resources/gateway_reference/#humm-gateways) should also be whitelisted.