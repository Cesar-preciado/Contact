import React, { Component } from 'react'

class ListItems extends Component {

    render(){

        const frutas = ["Mandarina","Manzana","Mango"]
        const f = frutas.map((fruts) =>
            
            <li>{fruts}</li>
        )

        return(
            <div className="list">
                <ul id="Myfruts">
                    {f}
                </ul>
            </div>
        )
    }
}

export default ListItems;