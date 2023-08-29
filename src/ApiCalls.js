import { Component } from "react";

class ApiCalls extends Component{
    state = {todoList : []}

    componentDidMount(){
        this.fetchTheData()
    }

    fetchTheData = async() => {
        const apiUrl = "https://dinnu-express-app-627612a8146d.herokuapp.com/todos/"
        const options = {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(apiUrl, options)
        if(response.ok){
          const data = await response.json()
          this.setState({todoList : data})
        }
    }

    render(){
        const {todoList} = this.state
        return(
            <div>
                <h1>ApiCalls Component</h1>
                {todoList.length !== 0 && (<div>
                    {JSON.stringify(todoList)}
                    </div>)}
            </div>
        )
    }
}

export default ApiCalls