<h1>Accreditation Process</h1>

Once humm is installed on your platform it must be verified before it can process live transactions.<br>
To do this your website must be able to process a test transaction and have it verified by humm.

<div class="panel">
    Before performing the test transaction, <b>test mode</b> must be activated in the humm settings.<br>
    Please refer to the documentation for your platform.
</div>

### Performing a Test Transaction

1 - Add a product to your cart and proceed to check out with humm.

- The URL you redirect to should be **integration-**cart.%domain%

2 - Sign up for a **test** humm account.

![1.png](/img/accreditation/1.png)

- Only test accounts will be able to sign in. Preexisting live humm accounts will not work.
- Please ensure your mobile number is correct as you will need to receive a verification code.

<div class="panel">
    If you can't sign up please contact <a href="mailto:pit@%domain%">pit@%domain%</a>
</div>

3 - Pay the first installment using a testing credit card

![2.png](/img/accreditation/2.png)

- You can use the card number **5506750000004364** with any name and valid expiry date. See [Testing Declines and Approvals](../../developer_resources/declines_and_approvals) for more information.
- A CVV of 200 will cause the transaction to decline. All other 3 digit numbers will succeed.

4 - Your transaction will be approved or declined and you will be redirected back to the web-store.

![3.png](/img/accreditation/3.png)

5 - Confirm that the transaction is showing up correctly in the sales records for your store.

<div class="panel">
    Once complete, please email <a href="mailto:pit@%domain%">pit@%domain%</a> with your merchant ID.
</div>
