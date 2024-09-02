import { Component } from "react"





class CustomForm extends Component {

    constructor() {
        super()
        this.state = {
            forms: [],
            obj: false
        }
    }

    clickHandler = () => {

        const newForms = { name: "subahan", class: "7r" }

        this.setState(prevState => ({
            forms: [...prevState.forms, newForms],
            obj: true
        }))

    }
    render() {
        return (
            <div>
                <h1>This is a Form Component</h1>
                <button onClick={this.clickHandler}>Click</button>
                {
                    this.state.obj ? 
                    <form>
                        <input type="text"/>
                        <input type="password"/>
                        <button>submit</button>
                    </form>:""
                }
                
            </div>
        )
    }
}
export default CustomForm