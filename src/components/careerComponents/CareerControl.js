import React, {Component} from 'react';

function CareerControl(props){

    if(props.mode === 'edit'){
        return(
            <div>

            </div>
        )
    }
    return(
        <div>
            <p>Preview</p>
        </div>
    )
}

export default CareerControl