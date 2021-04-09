<h3>Barcode Standards</h3>

**Humm** uses <a href="https://en.wikipedia.org/wiki/Code_128">Code 128</a> symbology for pre-approval barcodes, specifically code set B (128B). 128B allows for characters 0–9, A–Z (uppercase) and a–z (lowercase), however we currently only use numeric values 0–9 in the barcode.

The length of encoded data is 10 digits, beginning with "6199" followed by 6 generated digits. This way POS vendors can identify humm barcodes. 

Benefits of 128B include:

* Supports alphanumeric characters, giving large combination of barcode ranges to support future business volume
* Difficult to decode our barcode standard with a combination of alphanumeric characters
* Encoded data length is extendable
