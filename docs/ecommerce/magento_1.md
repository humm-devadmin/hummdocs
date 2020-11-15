
#Integrating on Magento 1

## Locate your **humm** Credentials

To integrate **humm** you will need your

* Merchant Number
* API Key

## Plugin Installation / Upgrade

<span style = display:%nz-only%><strong>0</strong> - <strong>Before</strong> installing the new **Humm** plugin, if you have a previous version installed, please ensure you deactivate and uninstall the old plugin before proceeding.</span>

**1** - You can create a backup of your store by navigating to **System** -> **Tools** -> **Backup**.

**2** - Download the **humm** plugin zip file from <span style=display:%au-only%><a href = "https://github.com/shophumm/humm-au-magento1.x/archive/master.zip">Github</a></span> <span style=display:%nz-only%><a href = "https://github.com/shophumm/humm-nz-magento1/archive/master.zip">Github</a></span>

**3** - Unzip it, then copy the following folders into the corresponding folders under your Magento root directory.

    /app/code/community/Humm/
	/app/design/frontend/base/default/template/HummPayments/
	/app/design/frontend/base/default/layout/humm/
	/app/design/adminhtml/base/default/template/HummPayments/
	/app/design/adminhtml/default/default/template/humm/payments/
	/app/etc/modules/Humm_HummPayments.xml
	/skin/frontend/base/default/images/Humm/
	/skin/adminhtml/base/default/images/Humm/

## Configuration

**1** - Navigating to **System** > **Configuration**.

**2** - On **Configuration** page, scroll downwards then click on **Payment Methods** on left side menu.

![5.png](/img/ecommerce/magento_1/5.png)

**3** - Confirm  **humm Checkout** is visible and once expanded, the options will need to be configured with your merchant number and API key.

|Setting|Value|
-------|-----
**Enable this Solution**| Yes
**Environment**| Production for live, Sandbox for testing
**Merchant Number**| Configure with your merchant number
**Title**| Humm payments
**New Order Status**| Processing
**Minimum Order Total**| `0` for no limit.
**Email Customer**| Yes or No
**Automatic Invoice**| Yes or No (Must be enabled for refunding)
**Force Humm**| Yes
**Payment Currency**| AU or NZ
**Timeout**| 60 recommended
**Widgets & Banners**| Yes or No

If you have any questions, email us at <strong>pit@%domain%</strong>

