# **Setup on Vend**

To **humm** you will need your

* Merchant ID
* A POS Device Token for each Vend Device

Device Tokens can be generated in your <a href="https://seller.%domain%/">**humm** Seller Portal</a>

1. Login to the <a href="https://seller.%domain%/">**humm** Seller Portal</a>

2. Select **POS Device Tokens** from the left hand side menu

3. Select **Generate** and provide the number of registers you have allocated in Vend
<hr/>

## Setup Process

### Add a payment type

Login to your Vend store.
Go to **Settings** -> **Payment Types** -> **Add Payment Type**.

From the **Add New Payment Type** pop-up, select **Other Payment Method**

![humm_vend_1.png](/img/ecommerce/vend/humm_vend_1.png)

---

### Configure **humm** Payment Type

On the Settings -> Payment Types screen, choose the **humm** Payment Type


![humm_vend_2.png](/img/ecommerce/vend/humm_vend_2.png)

Set the Gateway URL to:

```https://vend.%domain% ```

Press the "Save Payment Type"

![humm_vend_3.png](/img/ecommerce/vend/humm_vend_3.png)

---
### Pair a Register

**Humm** requires each Vend register to be paired with **humm** before it can transact against the **humm** POS endpoint.

In order to do this, you simply need to perform a test transaction from each Vend Register with-in your store.

You will be prompted for your:

* **Merchant ID**
* **Device Token.**

Your **Merchant ID** is provided in your Welcome Pack.

**Device Tokens** can be generated in the <a href="https://seller.%domain%/">**humm** Seller Portal</a>

![humm_vend_4.png](/img/ecommerce/vend/humm_vend_4.png)

![humm_vend_5.png](/img/ecommerce/vend/humm_vend_5.png)

![08_pair_register.png](/img/ecommerce/vend/08_pair_register.png)

---
## Complete

Congratulations! Once a register is paired, your customers can now pay with **humm**
