import { LightningElement } from 'lwc';

export default class HTTPCalloutLWC extends LightningElement {
    options = [
        {label: 'CAD', value: 'CAD'},
        {label: 'EUR', value: 'EUR'},
        {label: 'GBP', value: 'GBP'},
        {label: 'INR', value: 'INR'},
        {label: 'USD', value: 'USD'}
    ]
    fromCurrencyValue;
    toCurrencyOptions;
    displayData;

    handleFromCurrencyChange(event) {
        this.fromCurrencyValue = event.target.value;
        console.log('fromCurrencyValue ' + this.fromCurrencyValue);
    }

    handleToCurrencyChange(event) {
        this.toCurrencyValue = event.target.value;
        console.log('toCurrencyValue ' + this.toCurrencyValue);
    }

    handleCurrencyConversion() {
        // REST API call
        fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='
            + this.fromCurrencyValue 
            + '&to_currency=' 
            + this.toCurrencyValue 
            + '&apikey=C2LE11OK1EV4V4NH')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);

            let tempData = {
                From_Currency_Code : '',
                From_Currency_Name : '',
                To_Currency_Code : '',
                To_Currency_Name : '',
                Last_Refreshed : '',
                Exchange_rate : ''
            }

            let exchangeData = data['Realtime Currency Exchange Rate'];
            tempData.From_Currency_Code = exchangeData['1. From_Currency Code'];
            tempData.From_Currency_Name = exchangeData['2. From_Currency Name'];
            tempData.To_Currency_Code = exchangeData['3. To_Currency Code'];
            tempData.To_Currency_Name = exchangeData['4. To_Currency Name'];
            tempData.Exchange_rate  = exchangeData['5. Exchange Rate'];
            tempData.Last_Refreshed = exchangeData['6. Last Refreshed'];
            this.displayData = tempData;

            console.log('exchangeData:' + JSON.stringify(exchangeData));
            console.log('tempData:' + JSON.stringify(displayData));
            console.log('this.displayData:' + JSON.stringify(this.displayData));
        })
        .catch(error => console.error(error))
    }

}