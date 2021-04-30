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

    handleFromCurrencyChange(event) {
        this.fromCurrencyValue = event.target.value;
        console.log('fromCurrencyValue ' + this.fromCurrencyValue);
    }

    handleToCurrencyChange(event) {
        this.toCurrencyOptions = event.target.value;
        console.log('toCurrencyOptions ' + this.toCurrencyOptions);
    }

}