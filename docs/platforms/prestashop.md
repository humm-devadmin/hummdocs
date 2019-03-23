#Setting up on PrestaShop

This document outlines the steps needed to install **humm** on your PrestaShop store.

## Plugin Installation
<div id="installing-humm">
  The plugin can be installed via PrestaShop's admin panel. This section details how to upload and install the plugin, and configure its various parameters for it to work properly.
</div>

<div class="panel">
  You will need your <b>Merchant ID</b> and an <b>Encryption Key (API Key)</b> handy before continuing with the installation. 
</div>

**1** - Click the following URL corresponding to your PrestaShop version to download the plugin.

For PrestaShop 1.6:
[https://github.com/shophumm/humm-prestashop/releases/tag/1.5.1](https://github.com/shophumm/humm-prestashop/releases/tag/1.5.1)  
For PrestaShop 1.7: coming soon.

**2** - Log into your PrestaShop's admin area.

**3** - Once logged in, you will be presented with your store's dashboard. From the side menu that appears to the left, click on **Modules and Services**.

![2.png](/img/platforms/prestashop/2.png)

**4** - Scroll to the top of the page and then click on the **Add a new module** icon. This will open up the **Add a new module** panel.

![4.png](/img/platforms/prestashop/4.png)

**5** - From within the **Add a new module** panel, click on **Choose a file**. This will allow you to specify the folder or directory that contains the humm.zip plugin. Once selected, click on **Upload this module**.

![5.png](/img/platforms/prestashop/5.png)

**6** - If the upload of the plugin was successful, you will be presented with a success alert at the top of the page.

![6.png](/img/platforms/prestashop/6.png)

**7** - Scroll downwards to bring the **Modules List** panel into focus, and you will find **humm** Plugin in the modules list.

![7.png](/img/platforms/prestashop/7.png)

**8** - Click on the green **Install** button next to the **humm** PrestaShop listing.

**9** - Click on the orange **Proceed with the Installation** button. (This message is displayed because the module you are installing was uploaded from your computer, rather than through PrestaShop's module marketplace.)

![9.png](/img/platforms/prestashop/9.png)

**10** - After the installation, you will be re-directed to the the **humm** module configuration page with a message at the top of the page indicating that the module was installed successfully.

![10.png](/img/platforms/prestashop/10.png)

## Configuration

Immediately after installing the **humm** plugin, you would be automatically re-directed to the plugin settings page. Otherwise, you can bring up this page by going to the Modules and Services page, finding the **humm** listing, and clicking the **Configure** button next to it.

![8.png](/img/platforms/prestashop/8.png)

1 - **Checkout Method**: This allows you to switch between the two checkout methods (**humm** and Oxipay).

2 - **Country**: The country your store operates in (Australia or New Zealand).

3 - **Is Test?**: When set to 'Yes', the plugin will be set to do test transactions. Please set this to 'No' when you have done testing and are ready for real transactions.

4 - **Gateway URL**: This specifies the **humm** gateway that the plugin would communicate with for processing the payment. Leave this to empty when you are not sure, and the plugin will derive the correct URL based on your other settings.

5 - **Merchant ID**: This is the **humm** Merchant ID that you are provided with as part of your on-boarding when signing-up for **humm**.

6 - **API Key**: The API Key is a case-sensitive alpha-numeric sequence that is used to authenticate payment requests. It is vital that you protect it and don't provide it to unauthorised individuals.

<div class="panel">
  The <b>humm</b> Platform Integration Team will provide you with your API key.
</div>

Once you have finished making the necessary configuration changes, click the **Save** button on the bottom left.

## Plugin Update

You can upgrade your **humm** PrestaShop plugin by uninstalling the old one and installing the newer version. 

To uninstall the **humm** plugin you need to:

1 - Locate the **humm** plugin in the **Modules and Services** page.

2 - From the drop-down menu that appears, click **Delete**.

![14.png](/img/platforms/prestashop/14.png)

3 - Click **OK** when asked whether you are sure to premanently remove the plugin. Once the uninstallation is completed, you will be presented with a success message at the top of the page similar to the one shown in the screenshot below.

![16.png](/img/platforms/prestashop/16.png)

4 - You can now download the newer version of the **humm** PrestaShop plugin and install it as per the instructions in the [Installing **humm**](#installing-humm) section of this document.
