import React, { Component } from 'react';
import '../style.css';
import DeviceInputFields from './DeviceInputFields';

class Device extends Component {

    constructor(props){
        super(props);

        this.ref = React.createRef();
        this.refInput = React.createRef();

        this.state = ({
            deviceName: this.props.device.deviceName,
            deviceDescr: this.props.device.deviceDescr,
            id: this.props.device.id,
            inFocus: false
        })

        this.delete = this.delete.bind(this);
        this.onClickDeviceUpdateInfo = this.onClickDeviceUpdateInfo.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }


    handleClickOutside(event) {
        if (this.ref.current && !this.ref.current.contains(event.target) 
                && this.refInput.current && !this.refInput.current.contains(event.target)) {
          
            this.setState({
              inFocus: false
          })
        }
      };


    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside.bind(this), true);
    }
    

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true);
    };


    delete() {
        this.props.delete(this.props.id)
    }


    onClickDeviceUpdateInfo() {
        this.props.updateFocus(this.props.id)
        this.setState({
            inFocus: true
        });
    }


    updateName(name) {
        this.setState({
            deviceName: name
        })
    }  
    

    updateDescription(descr) {
        this.setState({
            deviceDescr: descr
        })
    }
        

    render() {
        return (
            <>
                <div ref={this.ref}   aria-label='device properties' className='device' onClick={this.onClickDeviceUpdateInfo} >
                    <h2>{this.state.deviceName}</h2>
                    <p>{this.state.deviceDescr}</p>

                    <div onClick={this.delete} className='close-device-container' aria-label='close device'>        
                            <span className='close-device bar-one'></span>
                            <span className='close-device bar-two'></span>
                    </div>   
                </div>  

                <div ref={this.refInput} className='deviceClass'>
                    { this.state.inFocus && <DeviceInputFields deviceName={this.state.deviceName} 
                                                               deviceDescription={this.state.deviceDescr} 
                                                               updateName={this.updateName} 
                                                               updateDescription={this.updateDescription}
                                                               />}
                </div>
            </>
        )
    }
};


export default Device;
