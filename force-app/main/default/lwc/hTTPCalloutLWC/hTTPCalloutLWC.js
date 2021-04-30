import { LightningElement } from 'lwc';

export default class HTTPCalloutLWC extends LightningElement {
    fromCurrencyValue;
    toCurrencyOptions;
    options = [
        {label: 'CAD', value: 'CAD'},
        {label: 'EUR', value: 'EUR'},
        {label: 'GBP', value: 'GBP'},
        {label: 'INR', value: 'INR'},
        {label: 'USD', value: 'USD'}
    ]
    exchangeRateData;

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
            this.exchangeRateData = data;
            console.log(this.exchangeRateData);
        })
        .catch(error => console.error(error))
    }

}