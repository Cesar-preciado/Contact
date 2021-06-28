import React from 'react'

import PropTypes from 'prop-types'

import '../styles/Add.css'

export default class Add extends React.Component {

        render(){

            const { Add } = this.props

            const { visualizacionAdd} = this.props
            
            let estilo = {
                display:visualizacionAdd
            }
            return(
                    <div className="Add-contacts" style={estilo}>
                        <button type="button" onClick={Add}><span>+</span></button>
                    </div>
                
            )
        }
}


Add.prototypes = {
    Add: PropTypes.func.isRequired
  }