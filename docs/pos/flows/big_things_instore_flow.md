# Big Things Instore Process

<strong>API reference: <a href="/pos/api/process_authorisation/">ProcessAuthorisation</a></strong>

<img src="/img/pos/flows/Pos-Buyer-Confirms-Ver-1.2.svg" alt="humm Customer Initiated Flow">

1. POS vendor sends initial authorisation request to humm with the `buyer_confirms` flag set to **true**.

2. **Humm** will attempt to process this request.

	1. The customer may be declined for finance at this stage. A `declined` status would be immediately returned to the POS vendor.

	2. If the transaction does not require confirmation from the buyer, e.g. a 'Little Things' term is used, an `approved` status would be returned to the POS vendor immediately except in case 2a.

3. In the event that **humm** decides that a 'Big Things' term is required, an update would be pushed to the customer for them to confirm. While the customer is confirming, a `pending` status will be returned to the POS vendor along with an additional `retry_duration` field which specifies the delay the POS vendor should wait in seconds before polling humm for an update on the transactions.

4. After the delay has elapsed the POS vendor will resend a copy of the original authorisation request and receive back a new status.

	1. If the returned status is `pending`, step 4 is repeated after the delay.

	2. If `approved`, `declined` or `cancelled` are received the POS vendor may update their records accordingly.

	3. In the event that the time spent in the pending state becomes excessive, the POS vendor may timeout and call the [ProcessSalesAdjustment](/pos/api/process_sales_adjustment) method in order to refund said order.
