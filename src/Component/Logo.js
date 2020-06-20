import React,{Component} from 'react';
import imagelogo from '../img/logo.png';




class Logo extends Component {
    render() {
        let today = new Date()
        return (
        <div>
            <img class="float-left h-10" src={imagelogo} ></img> 
        </div>
        );
    }
}

export default Logo;