#Setup on WooCommerce

<div class="panel">
  You will need your <b>Merchant ID</b> and an <b>Encryption Key</b> for the installation.
</div>

1 - Log into the WordPress admin area, then click on **Plugins** on the sidebar.

![1.png](/img/platforms/woocommerce/1.png)

2 - Click on **Add New** on the top left.

![2.png](/img/platforms/woocommerce/2.png)

3 - In the top left, type **humm** in the **Search plugins...** search box then hit Enter.

![3.png](/img/platforms/woocommerce/3.png)

4 - From the search results, click on **Install Now** next to **Humm / Oxipay Payment Gateway for WooCommerce**.

![29.png](/img/platforms/woocommerce/29.png)

5 - Still on the same page and once installation is successful, you should see the **Activate** button. Click on it.

![30.png](/img/platforms/woocommerce/30.png)

6 - This will re-direct you to **Plugins** page, confirm that **humm** is installed and activated.

![31.png](/img/platforms/woocommerce/31.png)

## Configuring Plugin

1 - From the **Plugins** page, find the Humm/Oxipay plugin, and click on **Settings**.

![32.png](/img/platforms/woocommerce/32.png)

2 - The **humm** settings page will be shown if it is after the **humm** launch date. Otherwise you may still see an **Oxipay** settings page. 
Below is a screenshot of the various **humm** settings available and what they are for. 

![34.png](/img/platforms/woocommerce/34.png)

**Enabled**: Enables or disables **humm**

**Shop Name**: Your store name that will be displayed in WooCommerce email receipts to customers

**Humm Region**: Region where your store is located as per your merchant agreement.

**Test Mode**: For troubleshooting of issues or testing of **humm**'s user experience.

**Force humm** This is for testing humm before the official launch. Leave it unchecked unless you are sure about what you are doing.

**Price Widget**: Displays an **humm** price widget on each of your store's product pages. (**Recommended**)

**Merchant Type**: If your **humm** account supports only 'Little things', only 'Big things' or Both.

**Top Banner Widget**: Displays an **humm** banner at the top of all pages. (Australian stores only)

**Top Banner on FrontPage Only**: Displays an **humm** banner at the top of the FrontPage only. (Australian stores only)

**Pre-select Checkout Button**: Adds a button to the cart page to quickly checkout with **humm**.

**Pre-select Button Order**: Determines the order in which the pre-select button is displayed. Lower numbers are displayed first. Default is 20.

**Merchant ID**: Provided to you as part of your welcome pack.

**API Key**: Provided to you by Platform Integration Team; used to verify orders from your store.

**Minimum Order Total**: Orders below that will not have **humm** as a payment option. Leave as 0 for no limit.

**Maximum Order Total**: Orders above that will not have **humm** as a payment option. Leave as 0 for no limit.

<div class="panel">
  Leaving both Minimum and Maximum Order Totals 0 will enable <b>humm</b> on all products.
</div>

## Refunding

This plugin supports WooCommerce online refunding.

1 - Find and click the order you want to refund from the orders list. 

2 - In the Order details page, click the "Refund" button

![10.png](/img/platforms/woocommerce/10.png)

3 - Choose the items or set the amount you want to refund, and click the "Refund via humm" button.

![11.png](/img/platforms/woocommerce/11.png)

4 - In this way, a refund request will be sent to the **humm** server and you will be shown the result immediately.

## **Humm** official launch

Before the **humm** official launch, the plugin will behave the same as the Oxipay payment plugin. It will show Oxipay, and checkout with the Oxipay gateway.

The plugin will automatically switch itself to **humm** once it is officially launched. It will then show **humm**, and checkout with the **humm** gateway.

The switch-over should be automatic and you as the merchant should not need to do anything on the launch date to make the switch.

## Updating from the old Oxipay plugin

For existing Oxipay merchants, navigate to the plugins menu, find the Oxipay plugin and click **update now**.

![35.png](/img/platforms/woocommerce/35.png)