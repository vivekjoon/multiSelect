import React, { Fragment } from "react";
import MultipleSelect from "./Form";

const Value =() => {

    const singers =  [
        'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
    ]
    
    return (
        <Fragment>
            <h2>Select From the following: </h2>
            <MultipleSelect singers={singers} name="Singers" />
        </Fragment>
    )
}

export default Value;