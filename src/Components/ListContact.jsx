import React from 'react'
//import AppContact from '../app1.version2'
//import PropTypes from 'prop-types';
import '../styles/List.css'

export default class ListContact extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      cod:1
    }
  }

RenderList(){
var Lista = []

        if(this.props.Query.length > 0 && this.props.ListaQ.length > 0){

            Lista = this.props.ListaQ 
        
        }else{

            Lista = this.props.List
        }

        return Lista        
    
    }
    
render(){

  //const {Delete} = this.props

      const ListContact = this.RenderList().map((ListaCt) =>(
        //<AppContact Cod={ListaCt.Codigo} ></AppContact>
          <div className="Contact" key={ListaCt.Codigo}>
            <div className="items">
              <div className="photo"></div>
            </div>
            <div className="items">
              <div className="inform">
                <p>{ListaCt.Nombre}</p>
                <p>{ListaCt.Telefono}</p>
              </div>
            </div>
          </div>    
        /*<tr key={ListaCt.Codigo} className="ListContacts" >
      
              <td>{ListaCt.Codigo}</td>
              <td>{ListaCt.Nombre}</td>
              <td>{ListaCt.Apellido}</td>
              <td>{ListaCt.Edad}</td>
              <td>{ListaCt.FechaDnacimiento}</td>
              <td>{ListaCt.Cargo}</td>
              <td>{ListaCt.Sueldo}</td>
              <td><button onClick={ () =>  Delete(ListaCt.Codigo) } >Eliminar</button></td>
            </tr>

            */
      
    ))
        

return(
        <div className="App-list">
          {ListContact}
        </div>
    )
}

}
/*
ListContact.prototype = {
  Delete: PropTypes.func.isRequired
}*/