import React from 'react';
import axios from 'axios';

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
        <button onClick={handleClick} disabled={loading}>
            {loading ? 'Executing...' : 'Execute Arduino Code'}
        </button>
    );
};

export default ButtonArduino;