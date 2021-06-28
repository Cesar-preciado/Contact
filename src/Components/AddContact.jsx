import React from 'react'
import PropTypes from 'prop-types';

import '../styles/AddContact.css'

//import Loader from './Loader';
import Form from './Form';

export default class AddContact extends React.Component {

    constructor(props){
        super(props)
            this.state = {

                Codigo:1,
                Nombre: '',
                Apellido: '',
                Edad: 0,
                FechaDnacimiento:'',
                Cargo:'',
                Sueldo:'',

                Loader:'none'
            }
        
    }

    /* 
  
  const divStyle = {
  color: 'blue',  
  backgroundImage: 'url(' + imgUrl + ')',

};*/
 

    render(){

        const  { visualizacion } = this.props 
        const  { AddC } = this.props
   
        const  { Contact } = this.props 
         
        const { Close } = this.props

        let styl = {
            display: visualizacion,
        }

        return(
            <div className="Contact-forms" style={styl}>
                <div className="Contact-panel-form">
                   <div className="form">
                     <Form Loader={this.state.Loader} AddC={AddC} Contact={Contact} Close={Close}></Form>           
                   </div>
                </div>
            </div>
        )
    }    
    
}



AddContact.prototypes = {
    Add: PropTypes.string,
   AddC: PropTypes.func.isRequired
  }