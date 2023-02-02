import React from "react"

function SearchForm(props) {

    const kw_input = React.useRef()
    const limit_input = React.useRef(1)
    
    const handleSubmit = (event) => {

        // using REF HOOK
        let value = kw_input.current.value;
        let limit = limit_input.current.value;

        event.preventDefault(); //prevent reload and state loss
        if(value !== ""){
            // event.currentTarget.reset(); 
            props.setLimit(limit)
            props.setKeyword(value);
        }
    }


    return (
        <div>
            <form
                onSubmit = {(event) => handleSubmit(event)}
            >
                {/* <label>Keywords</label> */}
                <input 
                type="text"
                placeholder="search gifs"
                ref={kw_input}>
                </input>
                {/* <label># Results</label> */}
                <input 
                type="number"
                placeholder="e.g. 1"
                ref={limit_input}>
                </input>
                <input type='submit'>
                </input>
            </form>
        </div>
    );
}

export default SearchForm;
