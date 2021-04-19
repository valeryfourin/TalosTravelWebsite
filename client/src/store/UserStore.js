import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        
        this._users = [];
        this._id = "";
        this._role = "";
        this._email = "";
        this._previousOrders = "";
        this._token = "";
        makeAutoObservable(this);
    }

    setUser(user) {
        this._user = user;
    }
    setUsers(users) {
        this._users = users;
    }
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setEmail(email) {
        this._email = email;
    }
    setRole(role) {
        this._role = role;
    }
    setPreviousOrders(previousOrders) {
        this._previousOrders = previousOrders;
    }
    setId(id) {
        this._id = id;
    }
    
    get user() {
        return this._user;
    }
    get users() {
        return this._users;
    }
    get isAuth() {
        return this._isAuth;
    }
    get email() {
        return this._email;
    }
    get role() {
        return this._role;
    }
    get previousOrders() {
        return this._previousOrders;
    }
    get id() {
        return this._id;
    }
}