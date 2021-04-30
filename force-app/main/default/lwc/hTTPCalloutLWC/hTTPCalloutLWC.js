import { LightningElement } from 'lwc';

const options = [
    {label: 'CAD', value: 'CAD'},
    {label: 'EUR', value: 'EUR'},
    {label: 'GBP', value: 'GBP'},
    {label: 'INR', value: 'INR'},
    {label: 'USD', value: 'USD'}
]

export default class HTTPCalloutLWC extends LightningElement {
    fromCurrencyValue;
    toCurrencyOptions;
    fromCurrencyOptions = options;
    toCurrencyOptions = options;
}