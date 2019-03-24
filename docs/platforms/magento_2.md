<h1>Setup on Magento 2</h1>

You can install **humm** plugin by manually copying plugin files across into your store's webserver.  
Use the same instructions to upgrade your existing plugin to a newer release.

## Plugin Installation

<div class="panel">
  You will need your <b>Merchant Number</b> and an <b>Encryption Key</b> handy before continuing with the installation.
</div>

1 - Download the **humm** plugin from [https://github.com/shophumm/humm-magento2.x/releases](https://github.com/shophumm/humm-magento2.x/releases).

2 - Unzip it then copy the inner `humm` folder into the `MAGENTO_DIR/app/code` directory on your webserver. If the <code>code</code> folder doesn't exist, then create it manually.

3 - Change directory into `MAGENTO_DIR/bin` to make the `magento` utility available.

4 - Run `magento setup:upgrade`. This will auto-enable **humm** as part of `setup:upgrade`. You should see `Module 'Humm_HummPaymentGateway'` in the output of the command.
<br>

<div class="panel">
  Depending on your tech stack, you might have to use the <code>php</code> prefix (<code>php magento setup:upgrade</code>) when running the various <code>magento</code> commands.
</div>

5 - Flush Magento's Cache by navigating to **Settings** -> **Cache Management** -> **Flush Magento Cache**. Alternatively, you can run <code>MAGENTO_DIR/bin/magento cache:flush</code> from the command line.

![3.png](\img\platforms\magento_2\3.png)

6 - Run `setup:static-content:deploy` to avoid generated HTML referring to javascript/css that haven't been added to the list of compiled/minified assets which can break your store's front-end/admin panel.

## Configuration

1 - To view **humm**'s settings page, navigate to **Stores** -> **Configuration** -> **Sales** -> **Payment Methods**.

2 - Confirm **humm Payment Gateway** is visible and once expanded looks like the image below.

![4.png](\img\platforms\magento_2\4.png)

4 - Force **humm** provides a way to preview and test **humm** before **humm** is officially launched. Please do not enable it in the live environment before the official **humm** launch.

## **Humm** official launch

Before the **humm** official launch, the plugin will behave the same as the Oxipay payment plugin. It will show Oxipay, and checkout with the Oxipay gateway.

The plugin will automatically switch itself to **humm** once it is officially launched. It will then show **humm**, and checkout with the **humm** gateway.

The switch-over should be automatic and you as the merchant should not need to do anything on the launch date to make the switch.

## Upgrade From The Old Oxipay Plugin

1 - Install the **humm** payment plugin as described earlier in this page.

2 - Go to the **Payment Methods** page as described earlier.

3 - Configure the settings as you should as a new merchant.

4 - Do test transactions to make sure the **humm** Payment plugin works correctly with your store.

5 - Now you can disable or remove the Oxipay plugin as its features are all included in the **humm** plugin. You may like to keep the plugin but set it to disabled to allow online refunding of the existing old Oxipay transactions.

6 - Before the **humm** launch date, the plugin will still show Oxipay and checkout with Oxipay, and your customers should see no changes. After the official **humm** launch, the plugin will automatically switch to **humm**, providing a smooth and fully automatic transition.
