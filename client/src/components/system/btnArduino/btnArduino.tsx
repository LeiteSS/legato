import React, { useState } from 'react';
import axios from 'axios';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import GraphicEqIcon from '@mui/icons-material/GraphicEq';



const ButtonArduino = () => {
    const [loading, setLoading] = React.useState(false);


    const handleClick = async () => {
        try {
            setLoading(true);

            // Make a request to your Fastify backend
            const response = await axios.get('http://localhost:3001/api/arduino/execute');

            // Handle success, e.g., update UI
            console.log(response.data); // Log the server response
        } catch (error) {
            // Handle errors, e.g., display an error message
            console.error(error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <button disabled={loading}>
            {loading ? 'Executing...' : <GraphicEqIcon/>}
        </button>
    );
};

export default ButtonArduino;