import React from 'react'
import '../styles/Loader.css'



export default class Loader extends React.Component {

    constructor(props){
        super(props)

       this.ReadyLoader = this.ReadyLoader.bind(this)
       
       this.state = {
           Loader:'none'
       }
    }


    ReadyLoader(){
 
    
    var loader = document.querySelector("#loader")
        
    loader.className = 'loader'

  var Loader = setInterval(function(){

            setTimeout(function(){
                
                    loader.className = "detener"

                    clearInterval(Loader)
                    
            },1500)
        },100)

             
    }



    render(){        

        const {visualizacion} = this.props

        if(visualizacion.display === "block"){

                this.ReadyLoader()     
                setTimeout(function(){document.querySelector(".Contact-form").style.display = 'block'},1600)
            }

        return(
            <div className="Contact-Loader">
                <div id="loader"></div>
            </div>
        )
    }

}