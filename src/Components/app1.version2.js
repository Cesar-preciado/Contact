import React, { Component } from 'react'

import SearchContact from './Components/SearchContact'
import AddContact from './Components/AddContact'
import ListContact from './Components/ListContact'

export default class AppContact extends Component {

     constructor(props){
         super(props)

         this.state = {
            LongitudList:0,
            ListQuery:[],
            query: '',

            ListContact:[
                {Codigo:1, Nombre:'Diana', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:2, Nombre:'Vanesa', Apellido: 'Lopez', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:3, Nombre:'Cristina', Apellido: 'Manrique', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:4, Nombre:'Daniela', Apellido: 'Zapata', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:5, Nombre:'Valentina', Apellido: 'Angulo', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                
                {Codigo:6, Nombre:'Evelin', Apellido: 'Muñoz', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:7, Nombre:'Lina', Apellido: 'Quiñonez', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:8, Nombre:'Angelica', Apellido: 'Araujo', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:9, Nombre:'Vicky', Apellido: 'Velandia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:10, Nombre:'Susana', Apellido: 'Solorzano', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                
                {Codigo:11, Nombre:'Lorena', Apellido: 'Rodriguez', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:12, Nombre:'Diana', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:13, Nombre:'Monica', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:14, Nombre:'Yurani', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:15, Nombre:'Diana', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                
                {Codigo:16, Nombre:'Michel', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:17, Nombre:'Sofia', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:18, Nombre:'Carlota', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:19, Nombre:'Juan', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:20, Nombre:'Maicol', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                
                {Codigo:21, Nombre:'Daniel', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:22, Nombre:'Victor', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:23, Nombre:'Lucia', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:24, Nombre:'Luci', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:25, Nombre:'Linda', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                
                
                {Codigo:26, Nombre:'Andrea', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:27, Nombre:'Sara', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:28, Nombre:'Mia', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:29, Nombre:'Victoria', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
                {Codigo:30, Nombre:'Anabelle', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000}
               
            ]
         }

            this.AddContact  = this.AddContact.bind(this)
            this.DeleteContact = this.DeleteContact.bind(this)

        }


  //Obtener datos de los campos del formulario
  ObtenerDatos = (event) =>{
    
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    })

}

  SearchContact = (e) =>{

    //Inicio de estado para lista.
    this.setState(
        {
          ListQuery: []
        }
      )

    //Detectar key enter o evento click
    if(e.key === "Enter" || e.type === "click"){

        for(var i = 0; i  < this.state.ListContact.length  ; i++){

            if(this.state.ListContact[i]["Nombre"].toUpperCase().indexOf(this.state.query.toUpperCase()) > -1 ){

                this.state.ListQuery.push(this.state.ListContact[i])
              
            }
       }

        //Nuevo estado para la lista de consulta
         this.setState({ListQuery: this.state.ListQuery})
         
    }

  }

  AddContact = (event) => {

    event.preventDefault();

        const Contact = { 
          
          Codigo: this.state.Codigo,
          Nombre: this.state.Nombre,
          Apellido: this.state.Apellido,
          Edad: this.state.Edad,
          FechaDnacimiento: this.state.FechaDnacimiento,
          Cargo: this.state.Cargo,
          Sueldo: this.state.Sueldo
        }          

       const List = this.state.ListContact

       List.push(Contact)
       this.setState({ListContact: List})
 
}

DeleteContact = (Cod) =>{

  var CDelete = this.state.ListContact.filter( (Contact) => Contact.Codigo !==  Cod )

  this.setState({
    ListContact: CDelete
  })

}


render(){


    return(
    <div className="Contact-App">
       <SearchContact Search={this.SearchContact} Contact={this.ObtenerDatos}></SearchContact>
       <AddContact Add={this.AddContact} Contact={this.ObtenerDatos} ></AddContact>
       <ListContact Query={this.state.query} List={this.state.ListContact} ListaQ={this.state.ListQuery} Delete={this.DeleteContact} ></ListContact>
    </div>
    );
}


}
