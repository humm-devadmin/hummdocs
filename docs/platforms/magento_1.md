<h1>Setup on Magento 1</h1>

You can install **humm** plugin by manually copying plugin files across into your store's web server.  
Use the same instructions to upgrade your existing plugin to a newer release.

## Plugin Installation

<div class="panel">
  You will need your <b>Merchant Number</b> and an <b>Encryption Key</b> handy before continuing with the installation.
</div>

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

4 - Force **humm** provides a way to preview and test **humm** before **humm** is officially launched. Please do not enable it in the live environment before the official **humm** launch.

## **Humm** official launch

Before the **humm** official launch, the plugin will behave the same as the Oxipay payment plugin. It will show Oxipay, and checkout with the Oxipay gateway.

The plugin will automatically switch itself to **humm** once it is officially launched. It will then show **humm**, and checkout with the **humm** gateway.

The switch-over should be automatic and you as the merchant should not need to do anything on the launch date to make the switch.

## Updating from the old Oxipay plugin

1 - Install the **humm** payment plugin as described earlier in this page.

2 - Go to the Payment Methods page as described earlier.

3 - If you already have the Oxipay plugin installed and configured, you will see certain Oxipay configurations (Merchant Number, API Key, etc.) have been copied to the **humm** plugin configurations.

4 - Set "Enabled" to "Yes" for **humm** plugin, **and set "Enabled" to "No" for the Oxipay plugin**.

5 - Adjust other **humm** plugin settings if necessary. "Is Testing" is preset to "No" by default in this case. Save the config.

6 - You may want to keep the old Oxipay plugin (and keep it NOT enabled) to allow online refunding of the existing Oxipay orders. Otherwise you can safely remove the Oxipay plugin by removing the following folders and files:

    /app/code/community/Oxipay
    /app/design/frontend/base/default/template/oxipayments
    /app/design/adminhtml/base/default/template/oxipayments
    /app/etc/modules/Oxipay_Oxipayments.xml

    /skin/frontend/base/default/images/Oxipay/
    /skin/adminhtml/base/default/images/Oxipay/

7 - Before the **humm** launch date, the plugin will still show Oxipay and checkout with Oxipay, and your customers should see no changes. After the official **humm** launch, the plugin will automatically switch to **humm**, providing a smooth and fully automatic transition.
