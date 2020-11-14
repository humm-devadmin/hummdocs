#Integrating on WooCommerce

## Locate your **humm** Credentials

To integrate **humm** you will need your:

* Merchant Number
* API Key

##Integrating **humm**

<span style = display:%nz-only%><strong>0</strong> - <strong>Before</strong> installing the new **Humm** plugin, if you have a previous version installed, please ensure you deactivate and uninstall the old plugin before proceeding.</span>

**1** - Download the **Humm** WooCommerce plugin from <span style=display:%au-only%><a href = "https://github.com/shophumm/humm-au-woocommerce/archive/master.zip">Github</a></span> <span style=display:%nz-only%><a href = "https://github.com/shophumm/humm-nz-woocommerce/archive/master.zip">Github</a></span>

**2** - Navigate to the WordPress Admin page and on the left hand side click **Plugins > Add New** then click the **Upload Plugin** button at the top of the page.

**3** - Add the Humm **.zip** file downloaded earlier and install it to your WordPress website.

**4** - Once installed, click the **Activate Now** button.

## Configuration

**1** - Navigate to the **Plugins** page, find Humm then click **Settings**.

![32.png](/img/ecommerce/woocommerce/33.png)

**2** - Configure the **Merchant ID** and **API Key** fields with your credentials.
	**If you have not received your API key please fill out the form located [here](https://docs.shophumm.com.au/request_api/).**

**3** - Ensure **humm** is configured as follows.

|Setting|Value|
-------|-----
**Enabled**| `Ticked`
**Humm Region**| AU or NZ
**Test Mode**| `Unticked`
**Price Widget**| `Ticked`
**Price Widget Advanced Settings**|`Unticked`
**Pre-select Checkout Button**| `Ticked`
**Pre-select Button Order**| `1`
**Top Banner Widget**| `Ticked` (AU Only)
**Top Banner on FrontPage Only**| `Ticked` (AU only)
**Merchant Type**| 'Little things', 'Big things' or Both.
**Shop Name**| Insert your shop name here.	
**Minimum Order Total**| `0` for no limit.
**Maximum Order Total**| `0` for no limit.

If you have any questions, email us at <strong>pit@%domain%</strong></span>

## Refunding

**1** - Click order to refund from orders list page, then **Refund** at bottom.

![Refund1.png](/img/ecommerce/woocommerce/refund1.png)

**2** - Choose the items or set the amount you want to refund then click **Refund via humm**.

![Refund2.png](/img/ecommerce/woocommerce/refund2.png)
