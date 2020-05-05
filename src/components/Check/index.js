import React, {Component} from 'react';

import "./styles.css";

import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes(props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox       
        checked={checked}
        onClick={props.FuncaoPai}
        onChange={handleChange}
        
      />
    </div>
  );
}
