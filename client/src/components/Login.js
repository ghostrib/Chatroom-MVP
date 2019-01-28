import React, { Component } from 'react';

class Login extends Component {
    state = { show: true, username: '' }
    showModal = () => this.setState({ show: true });
    hideModal = () => this.setState({ show: false });
    handleUsernameInput = (e) => this.setState({ username: e.target.value })
    //handleUsernameInput = (e) => console.log(e.target.value)
    render() {
        return (
            <>
                <Modal show={this.state.show} handleClose={this.hideModal} >
                    <div>
                        <div className='login-header'>
                            <p>Chat Login</p>
                        </div>
                        <p>Username</p>
                        <input onChange={this.handleUsernameInput} className='login-input' type="email" required />
                    </div>
                    <div>
                        <p>Password</p>
                        <input className='login-input' type='password' required />
                    </div>
                </Modal>
            </>
        )
    }
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button id='login-button' onClick={handleClose}>Login</button>
            </section>
        </div>
    );
};

export default Login;

