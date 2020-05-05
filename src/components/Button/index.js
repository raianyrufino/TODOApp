import React, {Component} from 'react';

import "./styles.css";

const Button = props => {
    const [incrementa, setIncrementa, decrementa, setDecrementa] = React.useState()

    numero = 0;

    function decrementa() {
    numero--;
    setDecrementa(numero);
    }

    function incrementa() {
    numero++;
    setIncrementa(numero);
    }

    // function setValue(value) {
    // document.getElementById('num').value = value;
    // }

    // setValue(numero);

    // const handleChangeValue = e => {
    //     setItem(e.target.value)
    // }

    // const handleChangeDecrementa = e => {
    //     setItem(e.target.value)
    // }
}
