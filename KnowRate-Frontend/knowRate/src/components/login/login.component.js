import React from 'react';
import ReactModal from 'react-modal';

import { Header } from 'semantic-ui-react';
import '../login/material-input.css';

import '../login/login.style.sass';

import EventEmitter from './../../emitter';

class LoginDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            isLoginState: true,
            login: {
                valid: true,
                requirements: {
                    max: 26,
                    min: 4,
                    regex: "@"
                }
            },
            password: {
                valid: true,
                requirements: {
                    max: 10,
                    min: 6,
                    regex: null
                }
            }
        };
        this.closeModal = this.closeModal.bind(this);
        this.customStyle = {
            overlay : {
                position          : 'fixed',
                    top               : 0,
                    left              : 0,
                    right             : 0,
                    bottom            : 0,
                    backgroundColor   : 'rgba(240,240,240, 0.75)'
            },
            content : {
                width: "400px",
                height: "300px",
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        }
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({modalIsOpen: nextProps.modalIsOpen, isLoginState: nextProps.isLoginState });
    }

    loginClicked = (event) => {
        console.log(event);
        if (this.state.login.valid && this.state.password.valid)
            EventEmitter.emit("login");
    };

    validate = (value, field, name) => {
        let requiements = field.requirements;
        if (value.length > requiements.max || value.length < requiements.min) {
            field.valid = false;
            this.setState({[name]: field});
            return;
        }
        if (requiements.regex != null) {
            if (!value.includes(requiements.regex)) {
                field.valid = false;
                this.setState({[name]: field});
                console.log(this.state);
                return;
            }
        }
        field.valid = true;
        this.setState({[name]: field});
        console.log(this.state);
    };

    render() {
        if (!this.state.isLoginState) {
            this.customStyle.content.height = '400px';
            return (
                <ReactModal
                    contentLabel="Join Us"
                    style={this.customStyle}
                    onRequestClose={this.closeModal}
                    isOpen={this.state.modalIsOpen}>
                    <Header className="imageholder"
                        as='h2'
                        image='https://cdn0.iconfinder.com/data/icons/mini-icon-2-2/16/login_in-512.png'
                        content='Join Us'
                    />
                    <hr className="divider"/>
                    <div className="group">
                        <input type="text" required />
                        <span className="highlight"/>
                        <span className="bar"/>
                        <label>Email</label>
                    </div>
                    <div className="group">
                        <input type="text" required />
                        <span className="highlight"/>
                        <span className="bar"/>
                        <label>Password</label>
                    </div>
                    <div className="contact-info-wrp">
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"/>
                            <span className="bar"/>
                            <label>First Name</label>
                        </div>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"/>
                            <span className="bar"/>
                            <label>Last Name</label>
                        </div>
                    </div>
                    <div className="footer-wrp">
                        <div className="register-link-wrp">
                            <span className="register-link-info">Already have an account?</span>
                            <span className="register-link" onClick={() => this.setState({isLoginState: true})}>Log In</span>
                        </div>
                        <div  className="login-btn">Join Us</div>
                    </div>
                </ReactModal>
            )
        } else {
            this.customStyle.content.height = '300px';
            return (
                <ReactModal
                    contentLabel="Log In"
                    style={this.customStyle}
                    onRequestClose={this.closeModal}
                    isOpen={this.state.modalIsOpen}>
                    <Header className="imageholder"
                        as='h2'
                        image='https://cdn0.iconfinder.com/data/icons/mini-icon-2-2/16/login_in-512.png'
                        content='Log In'
                    />
                    <hr className="divider"/>
                    <div className="group">
                        <input type="text" required onChange={(event) => this.validate(event.target.value, this.state.login)} />
                        <span className="highlight"/>
                        <span className={this.state.login.valid ? "bar" : "bar error"}/>
                        <label>Email</label>
                    </div>
                    <div className="group">
                        <input type="password" required />
                        <span className="highlight"/>
                        <span className={this.state.password.valid ? "bar" : "bar error"}/>
                        <label>Password</label>
                    </div>
                    <div className="register-link-wrp">
                        <span className="register-link-info">Have not created yet?</span>
                        <span className="register-link" onClick={() => this.setState({isLoginState: false})}>Register</span>
                    </div>
                    <div onClick={(event) => {this.loginClicked(event)}} className="login-btn"> Log In </div>
                </ReactModal>
            );
        }
    }
}

export default LoginDialog;