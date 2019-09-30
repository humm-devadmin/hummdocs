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

        composer require humm/module-humm-payment-gateway:dev-master

3. Enable the module
       
        ./bin/magento module:enable Humm_HummPaymentGateway --clear-static-content

4. Update the database

        ./bin/magento setup:upgrade

5.  [Configure humm](#configuration)

## Integrating **humm** Manually

1 - Download the **humm** plugin zip from [GitHub](https://github.com/shophumm/humm-magento2.x/releases/latest).

2 - Unzip it then copy the inner `Humm` folder into the `MAGENTO_DIR/app/code` directory on your webserver.

> If the `code` folder doesn't exist, then create it manually.

3 - Run `MAGENTO_DIR/bin/magento setup:upgrade` to enable **humm**.

You should see `Module 'Humm_HummPaymentGateway'` in the output of the command.

> Depending on your tech stack, you might have to use the <code>php</code> prefix (`php MAGENTO_DIR/bin/magento setup:upgrade`) when running the various <code>magento</code> commands.

4 - Flush Magento's Cache: **Settings** -> **Cache Management** -> **Flush Magento Cache**.

Alternatively, run <code>MAGENTO_DIR/bin/magento cache:flush</code> from command line.

![3.png](\img\ecommerce\magento_2\3.png)

> You may need to run `MAGENTO_DIR/bin/magento setup:static-content:deploy`. This is to avoid generated HTML referring to javascript/css that haven't been added to the list of compiled/minified assets which can break your store's front-end/admin panel.

## Configuration

Navigate to **Stores** -> **Configuration** -> **Sales** -> **Payment Methods**.

![4.png](\img\ecommerce\magento_2\4.png)

## Varnish Cache

If your server utilises a Varnish cache it is important that you whitelist any URLs associated with the **humm** plugin.

This should at least include the following:
```
* YOUR_DOMAIN/HummPayments/payment/start/
* YOUR_DOMAIN/HummPayments/payment/cancel/
* YOUR_DOMAIN/HummPayments/payment/complete/
```
The [Checkout API](../../developer_resources/checkout_api/#humm-gateways) and [Refund API](../../developer_resources/refund_api/) endpoints should also be whitelisted.
