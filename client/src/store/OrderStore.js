import {makeAutoObservable} from "mobx";

export default class OrderStore {
    constructor() {

        this._allOrders = [];
        this._order = {};

        makeAutoObservable(this);
    }

    setAllOrders(orders) {
        this._allOrders = orders;
    }
    setOrder(order) {
        this._order = order;
    }

    get allOrders() {
        return this._allOrders;
    }
    get order() {
        return this._order;
    }
    
}