
import React from 'react'
import logo from './logo.svg';

import './styles/App.css'


import SearchContact from './Components/SearchContact'
import ListContact from './Components/ListContact'
import Add from './Components/Add'
import AddContact from './Components/AddContact'

class AppContact extends React.Component{

    constructor(props){
        super(props)

          this.state = {
              
              LongitudList:0,
              ListQuery:[],
              query:'',
              mensaje:'',

              Cod:0,
              Nombre: '',
              Telefono:'',
              ListaContact:[
                {Codigo:1, Nombre:'Diana', Telefono: '314 456 6789'},
                {Codigo:2, Nombre:'Vanesa', Telefono: '315 456 7893'},
                {Codigo:3, Nombre:'Cristina', Telefono: '313 346 9345'},
                {Codigo:4, Nombre:'Daniela', Telefono: '321 236 8394'},
                {Codigo:5, Nombre:'Valentina', Telefono: '312 463 7394'},
        
            ],

                visualizacion:'none',
                visualizacionAdd:'block'
          }


         this.FormAdd  = this.FormAdd.bind(this)
          //this.DeleteContact = this.DeleteContact.bind(this)
    }

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
    
            for(var i = 0; i  < this.state.ListaContact.length  ; i++){
    
                if(this.state.ListaContact[i]["Nombre"].toUpperCase().indexOf(this.state.query.toUpperCase()) > -1 ){
    
                    this.state.ListQuery.push(this.state.ListaContact[i])
                  
                }
           }
    
            //Nuevo estado para la lista de consulta
             this.setState({ListQuery: this.state.ListQuery})
             
        }
    
      }

      FormAdd = (e) => {

          if(this.state.visualizacion === "block"){
            this.setState({visualizacion:'none'})

            document.querySelector(".msm").style.display = "none"
            document.querySelector(".msm").innerHTML = ""

            this.setState({visualizacionAdd:'block'})
            
            
            
          }else{
            this.setState({visualizacion:'block'})
            this.setState({visualizacionAdd:'none'})
            

          }
        
      }

      SaveContact = (e) =>{
        
        e.preventDefault()

        const Contact = { 
                   
            Codigo: this.state.Cod,
            Nombre: this.state.Nombre,
            Telefono: this.state.Telefono

          }


            if(Contact.Nombre === '' || Contact.Telefono === ''){

                  document.querySelector(".msm").style.display = "block"
                  document.querySelector(".msm").innerHTML = "campos vacios"
                    
            }else{

                const List = this.state.ListaContact
  
                List.push(Contact)
            
                this.setState({ListaContact: List})
                
                this.setState({
                    Codigo:'',
                    Nombre:'',
                    Telefono:''
                })

                const Form = document.getElementsByTagName('form')[0]
                const input = Form.getElementsByTagName('input')

                for(var i = 0; i < input.length - 1; i++){
                    if(input[i].type === "text"){input[i].value = ''}
                }

                    this.setState({visualizacion:'none'})
                    document.querySelector(".msm").style.display = "none"
                    document.querySelector(".msm").innerHTML = ""
                    this.setState({visualizacionAdd:'block'})
            
            }
    
        //}else{

         //   this.setState({visualizacion:'none'})
            
       // }
        

    }
    

    render(){

        return(
            <div className="App-contacts">
                <div className="App-header">
                    <div className="App-title">
                        <h1>AppContact</h1>
                    </div>
                    <div className="logo">
                       <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
                <div className="App-body">
                     <SearchContact Search={this.SearchContact} Contact={this.ObtenerDatos} ></SearchContact>
                     <ListContact Query={this.state.query} List={this.state.ListaContact} ListaQ={this.state.ListQuery}></ListContact>   
                     <Add Add={this.FormAdd} visualizacionAdd={this.state.visualizacionAdd}></Add>
                     <AddContact Close={this.FormAdd} visualizacion={this.state.visualizacion} AddC={this.SaveContact} Contact={this.ObtenerDatos}></AddContact>
                </div>
            </div>
        )

    }

}


export default AppContact;
























