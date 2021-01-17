import React, {Component} from 'react';
import ContactPreview from './ContactPreview'
import emailIcon from './images/email.png'
import addressIcon from './images/address.png'
import mobileIcon from './images/mobile.png'

class ContactControl extends Component{
    constructor(props){
        super(props)

        this.state = {
            address: "1 house, some street, london, nw1 1bz",
            email: "GenericEmail@gmail.com",
            phone: '0124 456 7890'
        }
    }

    render(){
        let {address, email, phone} = this.state
        let mode = this.props.mode
        return(
            <div>
            <ContactPreview mode={mode} type="address" value={address} image={addressIcon}/>
            <ContactPreview mode={mode} type="email" value={email} image={emailIcon}/>
            <ContactPreview mode={mode} type="phone" value={phone} image={mobileIcon}/>
            </div>
        )
    }    

}

export default ContactControl