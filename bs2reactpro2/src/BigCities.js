import React from 'react';

function BigCities(props)
{
    return(
        <div>
            <table class="citiesTable">
                <tr><th>{props.province}</th> </tr>
                <tr> <td>{props.BigCity}</td> </tr>
            </table>
           
        </div>
    );


}

export default BigCities;
