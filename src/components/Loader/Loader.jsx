import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => (
    <div className="loader-container">
        <FontAwesomeIcon icon={faSpinner} spinPulse size='5x' />
    </div>
)

export default Loader