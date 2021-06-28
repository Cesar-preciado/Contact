import React,{ Component } from 'react'

class Welcome extends Component {

    Saludar(){
        alert("Hello world")
    }

    render(){

        return( 
            <div className="List">
                <table border="1">
                    
                    <tr>
                        <td>Codigo</td>
                        <td>Producto</td>
                        <td>Descripcion</td>
                        <td>Precio</td>
                    </tr>

                        {
                            this.props.List.map((Product) => (
                                <tr>
                                    <td>{Product.Id}</td>
                                    <td>{Product.Producto}</td>
                                    <td>{Product.Descripcion}</td>
                                    <td>{Product.Precio}</td>
                                </tr>
                        ))
                
                        }
                    
                </table>
            </div>
        )
    }
}

export default Welcome;