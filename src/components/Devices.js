import React, { Component } from 'react';
import '../style.css';
import Device  from './Device.js';
import DeviceInputFields from './DeviceInputFields';

class Devices extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            devices: [],
            deviceID: 1,
            deviceInFocus: null
        }

        this.addDevice = this.addDevice.bind(this);
        this.renderDevices = this.renderDevices.bind(this);
        this.deleteDevice = this.deleteDevice.bind(this);
        this.updateFocus = this.updateFocus.bind(this);
    }


    addDevice() {
        const deviceObject = {
            deviceName: "",
            deviceDescr: "",
            id: this.state.deviceID
        }

        const dev = this.state.devices;
        dev.push(deviceObject);

        this.setState({
            devices: dev,
            deviceID: this.state.deviceID + 1
        });
    }


    deleteDevice(id) {
        const updateDeviceList = this.state.devices.filter( device => {
            return device.id !== id;
        });

        this.setState({
            devices: updateDeviceList
        })
    }


    renderDevices() { 
        return this.state.devices.map( device  => {
            return ( <Device delete={this.deleteDevice} 
                             key={device.id} 
                             deviceName={device.deviceName} 
                             id={device.id}
                             device={device}
                             updateFocus={this.updateFocus}
                    />)
         })
    }


    updateFocus(deviceId) {
        this.setState({
            deviceInFocus: deviceId
        })
    }


    render() {
        return (
            <>
                <button className='add-device-button' onClick={this.addDevice}>Add Device</button>
                <div className='devices-container'>
                    <div className='devices-list'>
                        {this.renderDevices()}
                    </div>
                </div>
            </>
        )
    }
};


export default Devices;
