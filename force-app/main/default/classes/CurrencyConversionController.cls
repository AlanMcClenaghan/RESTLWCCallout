public with sharing class CurrencyConversionController {
    @AuraEnabled
    public static map<string, object> retrieveCurrencyConversionRates(String endPointURL){
        map<string, object> mapJsonData = new map<string, object>();
        String strResponse = null;
        if (string.isNotBlank(endPointURL)) {
            HttpRequest httpRequest = new HttpRequest();
            httpRequest.setEndpoint(endPointURL);
            httpRequest.setMethod('GET');
            try {
                Http http = new Http();
                HttpResponse httpResponse = http.send(httpRequest);
                if (httpResponse.getStatusCode() == 200) {
                    strResponse = httpResponse.getBody();
                } else {
                    throw new CalloutException(httpResponse.getBody());
                }
            } catch (Exception e) {
                throw e;
            }
        }
            if (String.isNotBlank(strResponse)) {
                mapJsonData = (map<string, object>) JSON.deserializeUntyped(strResponse);
                System.debug('mapJsonData: ' + mapJsonData);
            }
            return mapJsonData;
    }
}


/*
Execute Anonymous code
CurrencyConversionController.retrieveCurrencyConversionRates(
'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=GBP&to_currency=USD&apikey=C2LE11OK1EV4V4NH');
*/