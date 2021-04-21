# Checkout Process

Below is a chart that summarises the flow of a transaction when processing it using **humm**.

<img src="/img/api/1.png" alt="Humm Checkout Process">

<!-- **NOTE:** We have included a sample cURL script that you can use to test the **humm** sandbox gateway. You can find the script under [Sample cURL Script](../developer_resources/sample_curl.md) -->

 **Step 1**: Customer places an order and chooses **humm** as their payment option.

 **Step 2**: Customer is redirected to the **humm** checkout page via a **HTTP POST** (See <a href="/custom_integration/checkout_api/#request-post">Request POST</a> for details). This POST needs to be signed to ensure security (See <a href="/developer_resources/signature_generation/">Signature Generation</a> for details).

 **Step 3**: Customer completes their purchase on **humm**. Customers that cancel are redirected back to the <code>x_url_cancel</code> URL.

**Step 4**: **humm** will either Approve or Decline the purchase and then **POST** (Server to Server) to the <code>x_url_callback</code> URL  (See <a href="/developer_resources/checkout_api/#post-and-get-responses">Response POST</a> content).  

**Step 5**: Customer is also presented with an 'Approved' or 'Declined' page.  The customer is then redirected (**GET**) to the provided <code>x_url_complete</code> with the same <a href="/developer_resources/checkout_api/#post-and-get-responses">response</a> content in **Step 4**.  

**Step 6**: The transaction is now complete on both **humm** and the shopping cart.