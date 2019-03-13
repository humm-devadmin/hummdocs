# Setup on OpenCart 3.0

You can install Humm automatically with the extension installer or manually by copying the extension files. Use the same instructions to upgrade your existing extension to a newer release.

<div class="panel">
  You will need your <b>Merchant ID</b> and an <b>Encryption Key (API Key)</b> handy before continuing with the installation.
</div>

## Plugin Installation

<div class="panel">
  The Extension Installer requires FTP settings to be already configured within OpenCart. If this is not already done we recommend following the Manual Installation steps below.
</div>

1 - Download the Humm extension from [github.com/shophumm/humm-opencart/releases](https://github.com/shophumm/humm-opencart/releases).

2 - Log into your **OpenCart Admin**, click on **Extensions** on the left menu, then on **Installer** submenu item below.

![11.png](/img/platforms/opencart/11.png)

3 - Click the **Upload** button and select the Humm extension installation file (it will end with `.ocmod.zip`). The progress bar will go green when the installation is complete.

![12.png](/img/platforms/opencart/12.png)

_Next: Continue onto Complete The Install instructions below._

### Manual Installation

1 - Download the Humm extension from [github.com/shophumm/humm-opencart/releases](https://github.com/shophumm/humm-opencart/releases).

2 - Unzip it and copy the contents of the `uploads` folder into OpenCarts root folder. For a new install, no files should be overwritten; with an upgrade, only previous Humm files should be overwritten.

_Next: Continue onto Complete The Install instructions below._

## Complete The Installation

1 - If not already, log into your **OpenCart Admin**. From the left menu select **Extensions**, and then the **Extensions** submenu item below.

![5.png](/img/platforms/opencart/5.png)

2 - This will take you to the **Extensions** page. Select **Payments** from the extension type dropdown.

![2.png](/img/platforms/opencart/2.png)

3 - Locate Humm and click the **Install** icon on the right.

![3.png](/img/platforms/opencart/3.png)

4 - Still on Humm, now click on the **Edit** icon on the right, this will open the Humm settings page.

![4.png](/img/platforms/opencart/4.png)

5 - Ensure that at the bottom of the page, the **Status** setting is set to **Enabled**, that the other settings are configured as below, then click on **Save**.

![5.png](/img/platforms/opencart/5.png)

## Configuration

Browse to the **Payment Extensions** listing page *(see above steps 3-4)*; Locate Humm and click the **Edit** icon on the right

![4.png](/img/platforms/opencart/4.png)

Below is a description of the various settings you will find on the Humm settings page.

#### Checkout Method

Setting | Description
--- | ---
Oxipay / Humm | Switch between the two checkout methods

As we are currently in a period of transitioning from Oxipay to Humm, this setting gives you the power of switching between the two checkout methods.  
**Australian merchants should choose Oxipay before the official Humm launch, and switch to Humm immediately after the launch.**

#### Shop Details

Setting | Description
--- | ---
Shop Name | Your online store's name as displayed on the Internet or TV
Humm Region | The Humm region your store operates in

#### Gateway Settings

Setting | Description
--- | ---
Humm Environment | Select which environment to use: Sandbox (Test) / Live or Other. Sandbox should be used for payment tests.
Humm Gateway URL | Only shown if Humm Environment is set to Other. Allows a custom Gateway URL to be specified.
Merchant ID | Identifies your business and is provided as part of your onboarding
API Key | Code used to verify that payment requests from your site are valid

<div class="panel">
  The Humm Platform Integration Team will provide you with your API key.
</div>

#### General Settings

Setting | Description
--- | ---
Order Status Completed | Status orders will be set to when payment is marked as completed.<br><br>We recommend setting this to 'Completed'.
Order Status Pending | Status orders will be set to when payment is marked as pending.<br><br>We recommend setting this to 'Processing'.
Order Status Failed | Status orders will be set to when payment is marked as failed.<br><br>We recommend setting this to 'Failed'.
Geo Zone | Select the Geo Zone this payment will be visible in.
Status | Enables or disables Humm
Sort Order | If you have more than one payment gateway, please use this field to define the order they are shown in. A setting of '1' will show it first, '2' second, etc.
