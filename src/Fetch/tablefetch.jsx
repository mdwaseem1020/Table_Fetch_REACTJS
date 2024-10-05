import React from "react"
import { Component } from "react"
class Tablefetch extends Component{
    constructor(){
        super()
            this.state={
                thead:[],
                tbody:[]
             
        }
    }
    componentDidMount(){
        let api=fetch("https://jsonplaceholder.typicode.com/users").then(x=>x.json())
        .then((x)=>{
            this.setState({thead:Object.keys(x[0]).slice(0,4)})
            this.setState({tbody:x})
        api.catch("api not fetched")
    })
    
    }
    render(){
        console.log(this.state.thead);
        console.log(this.state.tbody);
        
        
        return(
            <>
            <h1>TABLE</h1>
            <table >
                <thead>
                <tr>
                    { this.state.thead.map((x,ind)=><th key={ind}>{x}</th>)}
                </tr>
                </thead>
                <tbody>
                {this.state.tbody.map((x,ind)=>{
                    return(
                    
                        <tr key={ind}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.username}</td>
                            <td>{x.email}</td>
                        </tr>
                        
                    )
                    
                })}
               </tbody>

            </table>
            </>
        )
    }
}
export default Tablefetch;