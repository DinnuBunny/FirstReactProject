import { Component } from "react";

class ApiCalls extends Component{
    state = {date : undefined}

    componentDidMount(){
        this.fetchTheData()
    }

    fetchTheData = async() => {
        const apiUrl = "https://dinnu-express-app-627612a8146d.herokuapp.com/"
        const options = {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(apiUrl, options)
        if(response.ok){
          const data = await response.json()
          console.log(data)
        }
        console.log("fetchTheData")
    }

    render(){
        return(
            <div>
                <h1>ApiCalls Component</h1>
            </div>
        )
    }
}

export default ApiCalls