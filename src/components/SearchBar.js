import React from "react"


class SearchBar extends React.Component{
    
    state ={ value:""}
    onFormChange = (e) =>{
      
        const input = e.target.value
        // console.log(input)
        this.setState({value: input})
    }

    submitForm = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state.value)
    }

    

    render(){
        return(
            <div className=" search-bar ui segment">
                <form className="ui form" onSubmit={this.submitForm}>
                    <div className="field">
                        <label>Video Search</label>
                        <input placeholder="enter your text" value={this.state.value} onChange={this.onFormChange} />
                    </div>
              
                {/* <input type="submit" value="Submit" /> */}
                </form>
               
            </div>
        )
    }
}
export default SearchBar