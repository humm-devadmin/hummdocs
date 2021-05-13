# Signature Generation

To prevent against malicious and man-in-the-middle attacks, **humm** implements HMAC-SHA256 signing.

Signature generation is required when:

* Sending POST request to **humm**
* Receiving POST and GET responses from **humm**

## PHP Example

```php
<?php

function humm_sign($query, $api_key )
{
    $clear_text = '';
    ksort($query);
    foreach ($query as $key => $value) {
        if (substr($key, 0, 2) === "x_" && $key !== "x_signature") {
            $clear_text .= $key . $value;
        }
    }
    $hash = hash_hmac( "sha256", $clear_text, $api_key);
    return str_replace('-', '', $hash);
}
```


The method expects two parameters: <code>$query</code> and <code>$api_key</code>:

* <code>$query</code> represents the various key-value pairs that form your HTTP request POST

* <code>$api_key</code> is the merchant's API Key

<code>**humm**_sign</code> then performs alphabetical sorting of the key-value pairs based on the key but still maintaining correlation between the keys and their values.

It then examines the query <code>$query</code> for the various key-value pairs by checking for the <code>x_</code> prefix and then appends them together.</br>

> <b>Note: </b>When signing a request, all <code>x_</code> fields must be used, except for <code>x_signature</code>.

The method then computes the keyed hash value using the <code>hash_hmac</code> method.

## C# Example

```C#
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace PaymentService.Features.Payments.Humm
{
    public class HummRequestSigner
    {
        /// <summary>
        /// Generates the Humm signature for the <paramref name="requestArgs"/> provided.
        ///
        /// </summary>
        /// <param name="requestArgs">Dictionary of request args to sign.</param>
        /// <returns>HMACSHA256 hashed value converted to a Hexadecimal string.</returns>
        public static async Task<string> SignAsync(Dictionary<string, string> requestArgs)
        {
            // Create a string of all key/value pairs sorted in alphabetical order by key
            var plainText = requestArgs.Keys
                .Where(key => key != "x_signature" && !string.IsNullOrWhiteSpace(requestArgs[key]))
                .OrderBy(key => key)
                .Aggregate(string.Empty, (current, key) => current + $"{key}{requestArgs[key]}");

            using var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(<<Your API Key goes here>>));

            await using var stream = new MemoryStream(Encoding.UTF8.GetBytes(plainText));
            var hash = await hmac.ComputeHashAsync(stream);

            return BitConverter.ToString(hash).Replace("-", string.Empty).ToLower();
        }
    }
}
```

## Java Example 

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.security.InvalidKeyException;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.binary.Base64;
import java.security.NoSuchAlgorithmException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

class Main
{
    private static final String _merchantId = "<insert your merchantId here>";
    private static final String _key = "<insert your key here>";
    private static final String _hashAlgorithm = "HmacSHA256";

    public static void main(String[] args) {
        
        HashMap<String, String>  map = new HashMap<String, String>();

        map.put("x_url_callback", "http://example.com/payments/humm/process");
        map.put("x_url_cancel", "http://example.com/payments/humm/cancel");
        map.put("x_url_complete", "http://example.com/payments/humm/process");
        map.put("x_account_id", _merchantId);
        map.put("x_amount", "400.00");
        map.put("x_currency", "AUD");
        map.put("x_reference", "TestOrder1");
        map.put("x_shop_country", "AU");
        map.put("x_shop_name", "Humm Mugs");
        map.put("x_test", "false");

        String plainText = signatureGeneration(_key, map);

        System.out.println("Plain Text: " + plainText);

        // generate the HMAC
        String hmac = signMessage(plainText, _key);

        System.out.println("HMAC " + hmac);
    }

    public static String signatureGeneration(String gatewayKey, HashMap apiArgs) {
        String[] stringArray = Arrays.copyOf(apiArgs.keySet().toArray(), apiArgs.size(), String[].class);
        List<String> keys = Arrays.asList(stringArray);

        // Sort the List
        try {
            Collections.sort(keys);
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }

        String plainText = "";
        for(String key : keys){
            plainText += (key + apiArgs.get(key));
        }

        return  plainText;
    }

    private static String signMessage(String plainText, String key){
        String signature = "";
        try {
            Mac hmac = Mac.getInstance(_hashAlgorithm);
            SecretKeySpec secretKey = new SecretKeySpec(key.getBytes("UTF-8"), _hashAlgorithm);

            hmac.init(secretKey);
            signature = Hex.encodeHexString(hmac.doFinal(plainText.getBytes("UTF-8")));
            
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
             System.out.format("You do not have the %s libraries installed", _hashAlgorithm);
        }
        return signature;
    }
}

```

## Go Example

```golang
// RegistrationPayload required to register a device with humm
type RegistrationPayload struct {
    MerchantID      string `json:"x_merchant_id"`
    DeviceID        string `json:"x_device_id"`
    DeviceToken     string `json:"x_device_token"`
    OperatorID      string `json:"x_operator_id"`
    FirmwareVersion string `json:"x_firmware_version"`
    POSVendor       string `json:"x_pos_vendor"`
    TrackingData    string `json:"tracking_data,omitempty"`
    Signature       string `json:"signature"`
}

// AuthorisationPayload Payload used to send to humm
type AuthorisationPayload struct {
    MerchantID        string `json:"x_merchant_id"`
    DeviceID          string `json:"x_device_id"`
    OperatorID        string `json:"x_operator_id"`
    FirmwareVersion   string `json:"x_firmware_version"`
    PosTransactionRef string `json:"x_pos_transaction_ref"`
    PreApprovalCode   string `json:"x_pre_approval_code"`
    FinanceAmount     string `json:"x_finance_amount"`
    PurchaseAmount    string `json:"x_purchase_amount"`
    Signature         string `json:"signature"`
}

// Response is the response returned from humm for both a CreateKey and Sales Adjustment
type Response struct {
    PurchaseNumber string `json:"x_purchase_number,omitempty"`
    Status         string `json:"x_status,omitempty"`
    Code           string `json:"x_code,omitempty"`
    Message        string `json:"x_message"`
    Key            string `json:"x_key,omitempty"`
    Signature      string `json:"signature"`
}

// SalesAdjustmentPayload holds a request to humm for the ProcessAdjustment
type SalesAdjustmentPayload struct {
    PosTransactionRef string `json:"x_pos_transaction_ref"`
    PurchaseRef       string `json:"x_purchase_ref"`
    MerchantID        string `json:"x_merchant_id"`
    Amount            string `json:"x_amount,omitempty"`
    DeviceID          string `json:"x_device_id,omitempty"`
    OperatorID        string `json:"x_operator_id,omitempty"`
    FirmwareVersion   string `json:"x_firmware_version,omitempty"`
    TrackingData      string `json:"tracking_data,omitempty"`
    Signature         string `json:"signature"`
}



//Authenticate validates HMAC
func (r *Response) Authenticate(key string) (bool, error) {
    responsePlainText := GeneratePlainTextSignature(r)

    if len(r.Signature) >= 0 {
        return CheckMAC([]byte(responsePlainText), []byte(r.Signature), []byte(key))
    }
    return false, errors.New("Plaintext is signature is 0 length")
}

// GeneratePlainTextSignature will generate an humm plain text message ready for signing
func GeneratePlainTextSignature(payload interface{}) string {

    var buffer bytes.Buffer

    // create a temporary map so we can sort the keys,
    // go intentionally randomises maps so we need to
    // store the keys in an array which we can sort
    v := reflect.TypeOf(payload).Elem()
    y := reflect.ValueOf(payload)
    if y.IsNil() {
        return ""
    }
    x := y.Elem()

    payloadList := make(map[string]string, x.NumField())

    for i := 0; i < x.NumField(); i++ {
        field := x.Field(i)
        ftype := v.Field(i)

        data := field.Interface()
        tag := ftype.Tag.Get("json")
        idx := strings.Index(tag, ",")
        if idx > 0 {
            tag = tag[:idx]
        }

        payloadList[tag] = data.(string)

    }
    var keys []string
    for k := range payloadList {
        keys = append(keys, k)
    }
    sort.Strings(keys)

    for _, v := range keys {
        // there shouldn't be any nil values
        // Signature needs to be populated with the actual HMAC
        // calld
        if v[0:2] == "x_" && payloadList[v] != "" {
            buffer.WriteString(fmt.Sprintf("%s%s", v, payloadList[v]))
        }
    }
    plainText := buffer.String()
    return plainText
}


// SignMessage will generate an HMAC of the plaintext
func SignMessage(plainText string, signingKey string) string {
    key := []byte(signingKey)
    mac := hmac.New(sha256.New, key)
    mac.Write([]byte(plainText))
    macString := hex.EncodeToString(mac.Sum(nil))
    return macString
}
```
