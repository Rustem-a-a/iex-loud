import React from 'react';
import ComboBox from "../Combobox/ComboBox";
import Input from '../Input/Input';


const Filters = () => {

    return (
        <div>
            <h1>Filters</h1>
           <ComboBox/>
            <div>
                <p>Symbol:</p>
                <Input size='small' label='Symbol'/>
            </div>
            <div>
                <p>Company label:</p>
                <Input size='small' label='Company label'/>
            </div>
            <div>
                <p>Latest price:</p>
                <Input size='small' label='from'/> -
                <Input size='small' label='to'/>
            </div>
            <div>
                <p>Previous close:</p>
                <Input size='small' label='from'/> -
                <Input size='small' label='to'/>
            </div>
            <div>
                <p>Change:</p>
                <Input size='small' label='from'/> -
                <Input size='small' label='to'/>
            </div>
            <div>
                <p>Latest update:</p>
                <Input size='small' label='from'/> -
                <Input size='small' label='to'/>
            </div>


        </div>
    );
};

export default Filters;