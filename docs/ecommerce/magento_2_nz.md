#Integrating on Magento 2

Use the same instructions to upgrade the **humm** plugin to a newer release.

## Locate your **humm** Credentials

To integrate **humm** you will need your

* Merchant Number
* API Key

## Integrating **humm** using Composer

1. Add the **humm** repository, in Magento's root directory

        composer config repositories.shophumm git https://github.com/shophumm/humm-nz-magento2.git
        
2. Require the Humm Payment Gateway Module

        composer require humm/module-humm-payment-gateway:dev-master

3. Enable the module
       
        ./bin/magento module:enable Humm_HummPaymentGateway --clear-static-content

4. Update the database

        ./bin/magento setup:upgrade

5. Update the DI Compile

		./bin/magento setup:di:compile  

6. Option to run

		./bin/magento setup:static-content:deploy

7.  [Configure humm](#configuration)

## Integrating **humm** Manually

1 - Download the **humm** plugin zip from [GitHub](https://github.com/shophumm/humm-nz-magento2/archive/master.zip).

2 - Unzip it then copy all of folders into the `MAGENTO_DIR/app/code/Humm/HummPaymentGateway` directory on your web server.

>  If the `code/Humm/HummPaymentGateway` folder doesn't exist, then create it manually.

3 - Run `MAGENTO_DIR/bin/magento setup:upgrade` to enable **humm**.

You should see `Module 'Humm_HummPaymentGateway'` in the output of the command.

> Depending on your tech stack, you might have to use the <code>php</code> prefix (`php MAGENTO_DIR/bin/magento setup:upgrade`) when running the various <code>magento</code> commands.

4 - Run bin/magento module:enable Humm_HummPaymentGateway

5 - Flush Magento's Cache: **Settings** -> **Cache Management** -> **Flush Magento Cache**.

Alternatively, run <code>MAGENTO_DIR/bin/magento cache:flush</code> from command line.

6 - DI compile: Run `MAGENTO_DIR/bin/magento setup:di:compile`

> You may need to run `MAGENTO_DIR/bin/magento setup:static-content:deploy`. This is to avoid generated HTML referring to javascript/css that haven't been added to the list of compiled/minified assets which can break your store's front-end/admin panel.

* Plugin log file is humm-payment.log for review if you have installation issues

## Configuration

1. Navigate to **Stores** -> **Configuration** -> **Sales** -> **Payment Methods**.

2. Scroll down to **Other payment methods** and select **Humm Payment Gateway**

3. Enter your **Merchant Number** and **API Key** and select **save config** in the top right of the screen.

![5.png](\img\ecommerce\magento_2\5.png)
![6.png](\img\ecommerce\magento_2\6.png)
![7.png](\img\ecommerce\magento_2\7.png)

## Varnish Cache

If your server utilises a Varnish cache it is important that you whitelist any URLs associated with the **humm** plugin.

This should at least include the following:
```
* YOUR_DOMAIN/HummPayments/payment/start/
* YOUR_DOMAIN/HummPayments/payment/cancel/
* YOUR_DOMAIN/HummPayments/payment/complete/
```
The [Checkout API](../../custom_integration/checkout_api/#humm-endpoints) and [Refund API](../../custom_integration/refund_api) endpoints should also be whitelisted.
