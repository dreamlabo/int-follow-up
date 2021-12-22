import React, { Component } from 'react';
import '../style.css';


class DeviceInputFields extends Component { 

    constructor(props) {
        super(props);
        this.state = ({
            devName: this.props.deviceName,
            devDescr: this.props.deviceDescription
        })

        this.handleDeviceNameChange = this.handleDeviceNameChange.bind(this);
        this.handleDeviceDecriptionChange = this.handleDeviceDecriptionChange.bind(this);
    }
    

    handleDeviceNameChange (event) {
        event.preventDefault();
        // console.log('event: ' + event.target.value)
        this.props.updateName(event.target.value)
    }


    handleDeviceDecriptionChange (event) {
        event.preventDefault();
        this.props.updateDescription(event.target.value)
    }


    render() {
        return (
            <>
                <div className='device-input-fields-container'>
                    <div className='device-input-fields'>
                        <label htmlFor='deviceName'>Device Name</label>
                        <input type='text' 
                               name='deviceName'
                               id='deviceName' 
                               defaultValue={this.state.devName}
                               onChange={this.handleDeviceNameChange}
                        />
                    </div>

                    <div className='device-input-fields'>
                        <label htmlFor='deviceDescription'>Description</label>
                        <textarea  type='text' 
                                   name='deviceDescription' 
                                   id='deviceDescription'
                                   defaultValue={this.state.devDescr}
                                   onChange={this.handleDeviceDecriptionChange}/>
                    </div>    

                </div>
            </>
        )
    }
};

export default DeviceInputFields;