<h1>Setup on Vend</h1>

To setup and configure **humm** with your Vend POS device you will need the following:


<div class="panel">
 <ul>
    <li>Your Merchant ID</li>
    <li>A POS Device Token for each Vend Device</li>
 </ul>
</div>

Device Tokens can be generated in your <a href="https://seller.%domain%/">**humm** Merchant Portal</a>

1. Login to the <a href="https://seller.%domain%/">**humm** Merchant Portal</a>

2. Select the menu in the top right corner

3. Select POS Device Tokens

4. Select "Generate" and provide the number of registers you have allocated in Vend
<hr/>

## Setup Process

### Add a payment type

Login to your Vend store.
Go to Settings -> Payment Types -> Add Payment Type


![01_add_payment_type.png](/img/ecommerce/vend/01_add_payment_type.png)

---

### Create new "Credit Card" Payment Type

Select:

* Payment Type =  Credit Card
* Custom Name = **humm**


![02_select_credit_card.png](/img/ecommerce/vend/02_select_credit_card.png)


![03_name_oxipay.png](/img/ecommerce/vend/03_name_oxipay.png)

---

### Configure **humm** Payment Type

On the Settings -> Payment Types screen, choose the **humm** Payment Type


![04_configure_oxipay.png](/img/ecommerce/vend/04_configure_oxipay.png)



Set the Gateway URL to:

```https://vend.%domain% ```

Press the "Save Payment Type"

![05_add_custom_gateway.png](/img/ecommerce/vend/05_add_custom_gateway.png)

---
### Pair a Register

**Humm** requires each Vend register to be paired with **humm** before it can transact against the **humm** POS endpoint.

In order to do this, you simply need to perform a test transaction from each Vend Register with-in your store.

You will be prompted for your:

* **Merchant ID**
* **Device Token.**

Your **Merchant ID** is provided in your Welcome Pack.

**Device Tokens** can be generated in the <a href="https://seller.%domain%/">**humm** Merchant Portal</a>



![06_payment.png](/img/ecommerce/vend/06_payment.png)

![07_pay_with_oxipay.png](/img/ecommerce/vend/07_pay_with_oxipay.png)

![08_pair_register.png](/img/ecommerce/vend/08_pair_register.png)

---

## Complete

Congratulations! Once a register is paired, your customers can now pay with **humm**
