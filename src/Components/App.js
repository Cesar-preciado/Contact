import React from 'react'


class Empleado extends React.Component {

  constructor(props){
    super(props)

    this.state = { 

      query:'',
      Codigo:1,
      Nombre: '',
      Apellido: '',
      Edad: 0,
      FechaDnacimiento:'',
      Cargo:'',
      Sueldo:'',
      LongitudList:0,
      ListQuery:[],

      ListaEmpleado:[

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
        {Codigo:30, Nombre:'Anabelle', Apellido: 'Garcia', Edad:23, FechaDnacimiento:"19/02/1990", Cargo:'Administradora', Sueldo: 2300.000},
      ]
    }

    this.AddEmpleado  = this.AddEmpleado.bind(this)
    this.DeleteEmpleado = this.DeleteEmpleado.bind(this)
  }

  ObtenerDatos = (event) =>{
    
      let name = event.target.name;
      let value = event.target.value;

      this.setState({
        [name]: value
      })

  }

  //despues de renderizar el componente
  //componentDidMount() {
    
    //  this.setState({LongitudList: this.state.ListaEmpleado.length})
  
  //}

//después de que el componente se actualice en el DOM.
  //componentDidUpdate() {

    //console.log(
    //"The updated favorite is " + this.state.LongitudList)
  //}




  QueryEmpleado = (e) =>{ 
      
  //  var lista = [];

  //var query = document.getElementById("query").value
  this.setState(
    {
      ListQuery: []
    }
  )
        
       if(e.key === "Enter" || e.type === "click"){ 


          for(var i = 0; i  < this.state.ListaEmpleado.length  ; i++){

                if(this.state.ListaEmpleado[i]["Nombre"].toUpperCase().indexOf(this.state.query.toUpperCase()) > -1 ){
                   
                         this.state.ListQuery.push(this.state.ListaEmpleado[i])
                  }
           }

            this.setState({ListQuery: this.state.ListQuery })
            
            console.log(this.state.ListQuery)

          }
          //console.log(this.state.ListaEmpleado)
    
      /*
       if(e.key === "Enter" || e.type === "click"){         

          var query = document.getElementById("query").value
          var ListaEmpleado = document.getElementsByClassName("ListEmpleados");

          for( var i = 0 ; i < ListaEmpleado.length; i++){
            var content = ListaEmpleado[i].children[1].textContent

              if(content.toUpperCase().indexOf(query.toUpperCase()) > -1 ){

                  ListaEmpleado[i].style.display = ""
            }else{ ListaEmpleado[i].style.display = "none"}*/
    

  

      //if(e.keyCode === 13 || e.type === "click"){}
/*
*/


  }

  AddEmpleado = (event) => {

      event.preventDefault();

          const Empleado = { 
            
            Codigo: this.state.Codigo,
            Nombre: this.state.Nombre,
            Apellido: this.state.Apellido,
            Edad: this.state.Edad,
            FechaDnacimiento: this.state.FechaDnacimiento,
            Cargo: this.state.Cargo,
            Sueldo: this.state.Sueldo
          }          

          const List = this.state.ListaEmpleado
          List.push(Empleado)

          this.setState({ListaEmpleado: List})
  }

  DeleteEmpleado = (IdEmpleado) =>{

    var Empleado = this.state.ListaEmpleado.filter( (Empl) => Empl.Codigo !==  IdEmpleado )

    this.setState({
      ListaEmpleado: Empleado
    })

  }

 
  ShowTable(){
    
  var list = [];


   if(this.state.query.length  > 0 && this.state.ListQuery.length > 0 ){
        
              list = this.state.ListQuery      

            }else{list = this.state.ListaEmpleado}

   return list;

  }


  render(){
    
    var Empleado = this.ShowTable();
      
    const ListaEmpleado = Empleado.map((ListaEmp) =>(
        
      <tr key={ListaEmp.Codigo} className="ListEmpleados" >

        <td>{ListaEmp.Codigo}</td>
        <td>{ListaEmp.Nombre}</td>
        <td>{ListaEmp.Apellido}</td>
        <td>{ListaEmp.Edad}</td>
        <td>{ListaEmp.FechaDnacimiento}</td>
        <td>{ListaEmp.Cargo}</td>
        <td>{ListaEmp.Sueldo}</td>
        <td><button onClick={ () => {this.DeleteEmpleado(ListaEmp.Codigo)}}>Eliminar</button></td>
      </tr>

    ))
    
  
/*
       ListaEmpleado = this.state.ListaEmpleado.map((ListaEmp) =>(
        //<tr key={Codigo.cod}>-->//
        <tr key={ListaEmp.Codigo} className="ListEmpleados" >

          <td>{ListaEmp.Codigo}</td>
          <td>{ListaEmp.Nombre}</td>
          <td>{ListaEmp.Apellido}</td>
          <td>{ListaEmp.Edad}</td>
          <td>{ListaEmp.FechaDnacimiento}</td>
          <td>{ListaEmp.Cargo}</td>
          <td>{ListaEmp.Sueldo}</td>
          <td><button onClick={ () => {this.DeleteEmpleado(ListaEmp.Codigo)}}>Eliminar</button></td>
        </tr>
      ))*/

    
      /*const ListaEmpleado = this.state.ListaEmpleado.map((ListaEmp) =>(
         //<tr key={Codigo.cod}>-->//
         <tr key={ListaEmp.Codigo} className="ListEmpleados" >

           <td>{ListaEmp.Codigo}</td>
           <td>{ListaEmp.Nombre}</td>
           <td>{ListaEmp.Apellido}</td>
           <td>{ListaEmp.Edad}</td>
           <td>{ListaEmp.FechaDnacimiento}</td>
           <td>{ListaEmp.Cargo}</td>
           <td>{ListaEmp.Sueldo}</td>
           <td><button onClick={ () => {this.DeleteEmpleado(ListaEmp.Codigo)}}>Eliminar</button></td>
         </tr>
       ))*/

       return(
         <div className="Empleado-list">

          <div className="Empleado-search">
            <input type="text"  placeholder="Buscar empleado" name="query" id="ery" onKeyPress={this.QueryEmpleado} onChange={this.ObtenerDatos}></input>
            <button type="button" onClick={ this.QueryEmpleado }>Buscar</button>
          </div>

           <form className="Empleado-form" onSubmit={this.AddEmpleado}>

           <label id="name">Id</label><br/>
              <input type="text" name="Codigo" placeholder="Id"  onChange={this.ObtenerDatos}></input><br/>


           <label id="name">Nombre</label><br/>
              <input type="text" name="Nombre" placeholder="Nombre"  onChange={this.ObtenerDatos}></input><br/>

              <label id="name">Apellido</label><br/>
              <input type="text" name="Apellido" placeholder="Apellido"  onChange={this.ObtenerDatos}></input><br/>


              <label id="name">Edad</label><br/>
              <input type="text"  name="Edad" placeholder="Edad"  onChange={this.ObtenerDatos}></input><br/>


              <label id="name">FechaDnacimiento</label><br/>
              <input type="text" name="FechaDnacimiento" placeholder="Fecha de nacimiento" onChange={this.ObtenerDatos}></input><br/>


              <label id="name">Cargo</label><br/>
              <input type="text" name="Cargo" placeholder="Cargo"  onChange={this.ObtenerDatos}></input><br/>


              <label id="name">Sueldo</label><br/>
              <input type="text" name="Sueldo" placeholder="Sueldo" onChange={this.ObtenerDatos}></input><br/>

              <input type="submit" value="Guardar"></input>
           </form>

           <table border="1">
             <tbody>
               <tr>
                 <td>Codigo</td>
                 <td>Nombre</td>
                 <td>Apellido</td>
                 <td>Edad</td>
                 <td>Fecha de nacimiento</td>
                 <td>Cargo</td>
                 <td>Sueldo</td>
               </tr>
               {ListaEmpleado}
             </tbody>
           </table>
         </div>
       )
  }


}

export default Empleado;