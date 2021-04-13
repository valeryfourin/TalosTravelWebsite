import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._id = 0;
        this._role = "";
        this._email = "";
        this._token = "";
        makeAutoObservable(this);
    }

    // setToken( ) {
    //     if 
    // }
    setUser(user) {
        this._user = user;
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
    
    get user() {
        return this._user;
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
}