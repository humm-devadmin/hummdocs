# Integrating on OpenCart

**Humm** is available for the following versions of OpenCart:

* 2.0.x, 2.1.x, 2.2.x
* 2.3.x
* 3.0.x

##Locate your humm Credentials

To integrate **humm** you will need your

* Merchant Number
* API Key

## Installation using Extension Installer

> The Extension Installer requires FTP settings to be configured. If it isn't, use manual installation instead.

1 - Download the latest extension for your OpenCart version [here](https://github.com/shophumm/humm-opencart/releases).

2 - From your **OpenCart Admin**, click **Extensions > Installer**.

![11.png](/img/platforms/opencart/11.png)

3 - Click **Upload** then select the **humm** extension (ending with `.ocmod.zip`).

![12.png](/img/platforms/opencart/12.png)

_Next: Continue onto Finalising Installation [below](#finalising-installation)._

## Manual Installation

1 - Download the latest extension for your OpenCart version [here](https://github.com/shophumm/humm-opencart/releases).

2 - Unzip then copy contents of `uploads` folder into OpenCarts root folder. If upgrading **humm**, only **humm** files should be overwritten.

_Next: Continue onto Finalising Installation [below](#finalising-installation)._

## Finalising Installation

1 - Log into your **OpenCart Admin** then navigate to **Extensions > Extensions**.

![1.png](/img/platforms/opencart/1.png)

2 - Select **Payments** from dropdown.

![2.png](/img/platforms/opencart/2.png)

3 - Locate **humm** then click **Install**.

![3.png](/img/platforms/opencart/3.png)

4 - Click **Edit** on the right, this will open your **humm** settings page.

![4.png](/img/platforms/opencart/4.png)

5 - Ensure plugin is configured as below:

Setting | Description
--- | ---
Status | Enabled
Order Status Completed | `Completed`
Order Status Pending | `Processing`
Order Status Failed | `Failed`
Geo Zone | AU or NZ
Environment | Sandbox (Test) for testing else Live or Other.
Sort Order | `1` This will show humm first.

## Upgrading From Old Oxipay Plugin

1 - Make note of your Merchant No. and API Key in your Oxipay settings page.

2 - Navigate to **Extensions** as shown in [Finalising Installation](#finalising-installation).

2 - Locate Oxipay then click **Uninstall**.

![13.png](/img/platforms/opencart/13.png)

3 - Follow the installation process as described [here](#installation-using-extension-installer).