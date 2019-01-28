import React from 'react'

const Form = (props) => {
    return (
        <form className='chat-form' onSubmit={props.handleSubmit}>
            <input id='text-input' type="text" onChange={props.handleChange} />
            <button id='send-button' type="submit">Send</button>
        </form>
    )

}

export default Form;