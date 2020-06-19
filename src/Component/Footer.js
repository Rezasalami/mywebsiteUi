import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render() {
        let today = new Date()
        return (
            <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full  ">
                    <FontAwesomeIcon icon={faCoffee} />
                 	&copy; Copyright  2020 <a href="Https://Rezasalami.ir">Rezasalami.ir</a>
            </footer>
        );
    }
}

export default Footer;