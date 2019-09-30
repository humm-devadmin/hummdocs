# Checkout Process

Below is a chart that summarises the flow of a transaction when processing it using **humm**.

<img src="/img/api/1.png" alt="Humm Checkout Process">

<!-- **NOTE:** We have included a sample cURL script that you can use to test the **humm** sandbox gateway. You can find the script under [Sample cURL Script](../developer_resources/sample_curl.md) -->

 **Step 1**: The customer places an order in a shopping cart providing details such as their first/last name, email address etc. The customer chooses **humm** as the payment method.

 **Step 2**: The customer is redirected to the **humm** checkout gateway via a **HTTP POST** (See <a href="/developer_resources/checkout_api/#request-post">Request POST</a> for details). Note that this post needs to be signed to ensure security (See <a href="/developer_resources/signature_generation/">Signature Generation</a> for details).

 **Step 3**: The customer will then complete the purchase via the **humm** Service. Customers that cancel will be redirected back to the <code>x_url_cancel</code> URL.

**Step 4**: Once a decision has been reached ('Approved' or 'Declined'), **humm** will **POST** (Server to Server) to the provided <code>x_url_callback</code> URL  (See <a href="/developer_resources/checkout_api/#post-and-get-responses">Response POST</a> content).  

**Step 5**: The customer is then presented with an 'Approved' or 'Declined' page.  The customer is then redirected (**GET**) to the provided <code>x_url_complete</code> with the same <a href="/developer_resources/checkout_api/#post-and-get-responses">response</a> content as used in **Step 4**.  

 **Step 6**: The transaction is now complete from **humm**'s side as well as the client's and shopping cart's point of views.
