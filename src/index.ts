import "bootstrap";
import "./index.scss";

import Vue from "vue";

class User {

    public name: string;

    public telephone: string;
}

let user = new User();


let app = new Vue({
    el: "#app",
    data: {
        user: user
    }
});
