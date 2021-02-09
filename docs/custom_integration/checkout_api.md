---
hide:
  - toc        # Hide table of contents
---
# Checkout API

We have used this API to integrate **humm** into leading shopping cart platforms such as Shopify, WooCommerce and Magento.

Communicating with **humm** involves **the buyers' browser** performing a HTTP **POST** to **humm** - authorisation request. Details provided below on expected format of request as well as response.

> This is not an HTTP API and *cannot* be used for server to server communication.

## **Humm** Endpoints


| **Humm** Environment | URL |
|--------------------|-----|
| Production Endpoints | [https://cart.%domain%/Checkout?platform=Default](https://cart.%domain%/Checkout?platform=Default) |
| Sandbox Endpoints | [https://integration-cart.%domain%/Checkout?platform=Default](https://integration-cart.%domain%/Checkout?platform=Default) |

<a name="Responses"></a>

## Request POST

POST to **humm** in the format <code>application/x-www-form-urlencoded</code> and prefix all key names with <code>x_</code>

Below is an overview of the various key-value pairs that can be passed.

### Request values

 Key | Description | Type | Example | Length
-----|-------------|------|---------|--------
x_account_id **Required**         | **humm** Merchant ID | unicode string | 123456 | 10
x_amount **Required**             | Total amount including any taxes and shipping costs | decimal | 99.90 | 12
x_currency **Required**           | Currency | ISO-4217 | %currency_abbr% | 3
x_customer_billing_address1       | Billing address line 1 | unicode string | %address_street_1% | 200
x_customer_billing_address2       | Billing address line 2 | unicode string | %address_street_2% | 200
x_customer_billing_city           | Billing city | unicode string | %address_city% | 200 
x_customer_billing_country        | Billing country | iso-3166-1 alpha-2 | %country_abbr% | 3
x_customer_billing_state          | Billing state | unicode string | %address_state_abbr% | 200 
x_customer_billing_postcode       | Billing postcode | unicode string | %address_post_code% | 200
x_customer_email                  | Billing email address | unicode string | user@example.com | 65
x_customer_first_name             | Customer's first name | unicode string | John | 50
x_customer_last_name              | Customer's last name | unicode string | Appleseed | 50
x_customer_phone                  | Customer's phone number | unicode string | %address_phone_number% | 12 
x_customer_shipping_address1      | Shipping address line 1 | unicode string | %address_street_1% | 200 
x_customer_shipping_address2      | Shipping address line 2 | unicode string | %address_street_2% |  200 
x_customer_shipping_city          | Shipping city | unicode string | %address_city% | 200
x_customer_shipping_country       | Shipping country | unicode string | %country_abbr% | 3
x_customer_shipping_first_name    | Customer's first name (Shipping) | unicode string | John | 50
x_customer_shipping_last_name     | Customer's last name (Shipping) | unicode string | Appleseed | 50
x_customer_shipping_phone         | Customer's phone number (Shipping) | unicode string | %address_phone_number% | 12 
x_customer_shipping_state         | Shipping state | unicode string | %address_state_abbr% | 200
x_customer_shipping_postcode      | Shipping postcode | unicode string | %address_post_code% | 200
x_description                     | Item's description as setup in the shopping cart | unicode string | Order #767 | 200
x_reference **Required**          | Reference no. assigned by the shopping cart | ascii string (max length 250 bytes) | 19783 | 250
x_shop_country **Required**       | Merchant's store country | iso-3166-1alpha-2 | %country_abbr% | 3
x_shop_name **Required**          | Shopping cart store name | Shop Inc | 200
x_signature **Required**          | Request payload that is signed using HMAC-SHA256 | hex string, case-insensitive | See [Signature Generation](../signature_generation/) | 64
x_url_callback **Required**       | Async-callback sent to this URL. **must be HTTPS** | URL | https://shop%domain_postfix%/callback | 200
x_url_cancel **Required**         | Cancelled orders redirected to this URL | URL | https://shop%domain_postfix%/cancel | 200
x_url_complete **Required**       | Approved orders redirected to this URL | URL | https://shop%domain_postfix%/compete | 200
x_transaction_timeout             | Transaction timeout in minutes. Maximum is 1440. | int | 60

### Sample POST

Below is a sample POST request in <code>application/x-www-form-urlencoded</code> format. This is a sample POST so ignore values for individual keys

    x_reference=123&x_account_id=1&x_amount=100.00&x_currency=%currency_abbr%&x_url_callback=sample_callback_url&x_url_complete=sample_complete_url&x_shop_country=%country_abbr%&x_shop_name=Sample+Shop&x_customer_first_name=first&x_customer_last_name=last&x_customer_email=sample%40email.com&x_customer_billing_country=%country_abbr%&x_customer_billing_city=%address_city%&x_customer_billing_address1=97+Pirie&x_customer_billing_address2=St&x_customer_billing_state=%address_state_abbr%&x_customer_billing_zip=%address_post_code%&x_description=Sample+Store+-+%123&x_url_cancel=sample_cancel_url&x_signature=dummy_signature


<a name="Responses"></a>
## POST and GET responses

Once a transaction is processed, **humm** will send two responses: 1) the async-callback POST and 2) the redirect GET.

The POST is an asynchronous server-to-server call to the shopping cart on the <code>x_url_callback</code> URL in the <code>application/x-www-form-urlencoded</code> format. It includes key-values pairs specific to the transaction such as it's outcome.</br>

> <code>x_url_callback</code> should specifiy a HTTPS URL as the POST response must be sent over HTTPS

The HTTP GET (HTTP) is to the client on the <code>x_url_complete</code> URL.</br>

Both the POST and GET will contain the same set of key-value pairs as shown below.

### Response POST/GET values

Below is an overview of the key-value pairs that **humm** returns.
> Some of these key-value echo corresponding key-value pairs in the request, such as <code>x_currency</code> for instance.

</br>

 Key | Description | Type | Example
-----|-------------|------|---------
x_account_id              | **humm** Merchant ID | Unicode string | 123456
x_reference               | Reference no. assigned by the shopping cart | ASCII string | 19783
x_currency                | Currency | ISO-4217 | %currency_abbr%
x_amount                  | Total amount including any taxes and shipping costs | decimal | 99.90  
x_gateway_reference       | **humm** reference number | unique string | 123
x_purchase_number         | **humm** reference number **Same as x_gateway_reference** | unique string | 123
x_timestamp               | Time at which transaction is completed | iso-8601 in UTC</br>YYYY-MM-DDTHH:MM:SSZ | 2017-06-24T12:11:43Z
x_result                  | Transaction outcome | Valid values are **completed** or **failed** | **completed**
x_signature               | Response payload that is signed using HMAC-SHA256 | hex string, case-insensitive | See [Signature Generation](../signature_generation/)

### Validating **humm** Responses

The <code>x_signature</code> in the POST and GET responses must validated by the shopping cart to ensure it's not tampered with by a third-party.</br> If there is a mistmatch, then the response should be disregarded.

For more information on how to calcualte the signature, see [Signature Generation](../signature_generation/).

## Async-callback Acknowledgement 

To confirm to **humm** that the async-callback POST was correctly received by your cart, you need to respond with an acknowledgement that is human-readable and does not exceed 1000 characters. Common errors include responding with a full HTML page.

A JSON with the following key-value pairs is sufficient.

 Key | Description | Type | Example
-----|-------------|------|---------
x_reference               | The shopping cart reference for the order | ASCII string | 19783
x_result                  | The status of the order from your shopping cart's perspective, NOT a copy of the status from the initial async-callback | ASCII string | Approved, Declined
