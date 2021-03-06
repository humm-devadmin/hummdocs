This endpoint processes an authorisation to finalise the transaction.

**Method:** *ProcessAuthorisation*

## Request

Parameter | Type | length | Description
----------|------|--------|------------
x_pos_transaction_ref | Unicode string | 64 | This must be the same reference that would get passed through on future *ProcessSalesAdjustment* requests. This field is mandatory - if the POS system does not have this information at the time of the request, it should pass through a temporary unique value (e.g. a GUID) so that **humm** has the information it needs to process retry attempts. If a temporary value *is* used; a subsequent request to *SendReceipt* **must** be made when the actual transaction reference is known by the POS system, so that **humm** can successfully reconcile future *ProcessSalesAdjustment* requests.
x_merchant_id | Unicode string | 10 | Merchant identifier as defined by **humm**
x_purchase_amount | int | 12 | Total purchase amount (in cents)
x_finance_amount | int | 12 | Amount that the customer wants the finance for from **humm** (in cents)
x_pre_approval_code | Unicode string | 6, optionally 10 digits when including 6199 prefix | The pre-approval code obtained from barcode that the customer is presented
purchase_items <code class="optional">optional</code> | String | 200 | A JSON formatted string containing information about the purchase items e.g. <code>{ "PurchaseItems": [ "Item1", "Item2" ] }</code><br/>**Note**: the purchase item array is assigned to a field named "PurchaseItems".
x_device_id | Unicode string | 64 | Unique device identifier for the POS terminal
x_operator_id | Unicode string | 64 | ID of POS/terminal operator
x_firmware_version | Unicode string | 64 | Current firmware version of POS device
tracking_data <code class="optional">optional</code> | Associative array | Max 1000000 | A map that can be populated with additional tracking/state information that will get passed back in the response
buyer_confirms <code class="optional">optional</code> | Boolean (true/false) | 5 | New field to indicate that the POS Vendor supports the ‘Big Things’ Buyer Confirms flow.  If not specified, it is assumed to be ‘false’
signature | Hex string case-insensitive | 200 | Payload that is signed using HMAC-SHA256 using a device specific key

## Response

Parameter | Type | Description
-----------|------|-------------
x_status | Unicode string | **Success/Failure/Error**
x_code | Unicode string | A code that maps to a <a href="/pos/api_information/status_codes/">specific reason</a>
x_message | Unicode string | A string explaining the status/code above. Example: For an Approval, what will be customer’s first direct debit date. For an Error: Bank declined – Insufficient Funds
x_purchase_number | Unicode string | Unique transaction identifier generated by **humm**
tracking_data | Associative array | Echoes tracking_data sent on the request
retry_duration | int | Set to 5 seconds by default. When the status returned is ‘Pending’ the POS Response will include a new ‘retry_duration’. The intent is for the calling POS Vendor to wait the specified retry duration in seconds </br>*(Only if *<code class="optional">buyer_confirms</code>* passed in initial request)*
signature | Hex string case-insensitive | Payload that is signed using HMAC-SHA256 using a device specific key

## Testing

The following describes dummy API requests that return a predictable response. Please contact <a href="mailto:pit@%domain%">pit@%domain%</a> to get access to the test/dummy APIs.

Request -> x_pre_approval_code | Response -> x_status | Response -> x_code
-----------|-----------|-----------
01###### | Success | SPRA01
Pending | SPND01 | ProcessAuthorisation (Big Things only) | Pending
Cancelled | FCNL01 | ProcessAuthorisation (Big Things only) | Cancelled
10###### | Failed | FPRA01
11###### | Failed | FPRA02
12###### | Failed | FPRA03
13###### | Failed | FPRA04
14###### | Failed | FPRA05
15###### | Failed | FPRA06
16###### | Failed | FPRA07
17###### | Failed | FPRA08
18###### | Failed | FPRA21
19###### | Failed | FPRA22
20###### | Failed | FPRA23
21###### | Failed | FPRA24
22###### | Failed | FPRA99
23###### | Failed | FPRA09
30###### | Error | EVAL01
31###### | Error | EAUT01
32###### | Error | EVAL02
any other value | Error | EISE01


> <b>#</b> signifies an alphanumeric digit

> <b>Testing Assumptions</b> To generate the signature, use a device-signing-key of "1234567890". A invalid signature will cause an ESIG01 Error.
