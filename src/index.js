import "bootstrap";
import "./index.scss";

import Calc from "./calc"

import Vue from "vue";

new Vue({
    el: "#app",
    data: {
        name: ""
    },
    beforeUpdate: function () {
        this.hash = Calc.hash(this.name);
    }
});
