# Refund API

The Refund API allows you to programmatically process refunds or adjustments to **humm** purchases.

## Refund Endpoints


| **Humm** Environment | URL |
|--------------------|-----|
| Production Endpoint | [https://buyerapi.%domain%/api/ExternalRefund/v1/processrefund](https://buyerapi.%domain%/api/ExternalRefund/v1/processrefund) |
| Sandbox Endpoint | [https://integration-buyerapi.%domain%/api/ExternalRefund/v1/processrefund](https://integration-buyerapi.%domain%/api/ExternalRefund/v1/processrefund) |


## Refund Request 

### Headers

| Key          | Value            |
|--------------|------------------|
| Content-Type | application/json |

### Body

    {
        "x_merchant_number": "30199250",
        "x_purchase_number": "52004168",
        "x_amount": "10.00",
        "x_reason": "Test refund",
        "signature": "e39ae5f3233f561162836989e050c1b61ba9e3d5eb3d64d4b3701e95fb5850a1"
    }

See [Signature Generation](signature_generation.md) for information on how to generate the HMAC Signature. 

### Example

The following ``curl`` command will allow you to test the refunds API. You will need to substitute **your** `x_merchant_number`, `x_purchase_number` and `signature`

    curl \
    --header "Content-Type:application/json" \
    --request POST \
    --data '{
        "x_merchant_number": "30199250",
        "x_purchase_number": "52000152",  
        "x_amount": 45.00,
        "x_reason": "test",
        "signature": "a5fc92ddd2326c6099bd0f43bbe75afb54004a6ba68f354cc2b40328341d8ee2"
    }' \    
    https://integration-buyerapi.%domain%/api/ExternalRefund/v1/processrefund

## Refund Response 

| HTTP Status | Reason Code | Reason Description|
|-------------|-------------|-------------------|
|  204        |   none      |   Success         |
|  400        | MERR0001    | API Key Not found |
|  400        | MERR0003    | Refund Failed     |
|  400        | MERR0004    | Invalid Request   |
|  401        | none        | Failed Signature Check|

## HTTP 400 Reason Codes

To capture the reason code for 400 errors, parse the JSON response and use the value in "Message". For example:

    POST /api/ExternalRefund/v1/processrefund HTTP/1.1
    Host: integration-buyerapi.shophumm.com.au
    Content-Type: application/json
    Cookie: hummueid=bc726701-3dc1-43b3-961c-8796df0477a3
    Content-Length: 224

    {
        "x_merchant_number":"30188525",
        "x_amount":18.50,
        "x_purchase_number":"28237558",
        "x_reason": "Booking Cancelled",
        "signature": "561dae20c677fc705dd511878b9bf4ba55bc3084de2efd6e53795d052d9ce778"
    }

This returns response headers

<img src="/img/api/refund/1.png" alt="HTTP 400 Response Headers">

To capture the reason, parse the JSON 

    {
        "Message": "MERR0003"
    }
