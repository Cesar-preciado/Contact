import React from 'react'
import '../styles/Search.css'

export default class SearchContact extends React.Component {


        render(){

            return(

                <div className="App-search">
                    <div className="Search">
                        <input type="text"  placeholder="Buscar contacto ..." name="query" id="ery" onKeyPress={this.props.Search} onChange={this.props.Contact}></input>
                        <button type="button" onClick={ this.props.Search }>Buscar</button>
                    </div>
                </div>
            )
        }

}   