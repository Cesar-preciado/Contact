import React from 'react'

import '../styles/Form.css'

class Form extends React.Component{


    render(){

       
        const {AddC} = this.props
        const { Close } = this.props

        return(
            <div className="Contact-form">
            
            <form className="Empleado-form" onSubmit={AddC}>

                <input type="text" name="Nombre" placeholder="Nombre"  onChange={this.props.Contact}></input>
                <input type="text" name="Telefono" placeholder="Telefono"  onChange={this.props.Contact}></input>
                <div id="control">
                    <input type="submit" value="Agregar" className="button"></input>
                    <input type="button" onClick={Close} value="Cancelar" className="button"></input>
                </div>
            </form>
                        <p className="msm" style={{display:'none'}}></p>
            </div>
        )
    }
    
}

export default Form;