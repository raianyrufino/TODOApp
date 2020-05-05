import React, {Component} from 'react';

import "./styles.css";

const Button = props => {
    // const [incrementa, setIncrementa, decrementa, setDecrementa] = React.useState()

    // const handleChangeQuantidadeLess = e => {
    //     setDecrementa(e.target.value-1);
    // }

    // const handleChangeQuantidadeMore = e => {
    //     setIncrementa(e.target.value+1);
    // }

    return (
        <div>
          <Button      
            onClick={props.FuncaoPai}
            //onChange={handleChangeQuantidadeLess}
          />
        </div>
      );
}

export default Button;