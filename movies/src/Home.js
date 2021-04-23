import React from 'react';
import Alert from 'react-bootstrap/Alert'

function Home() {
    return (
        <div id="homeContainer">
            <Alert variant="primary">
                <Alert.Heading>Movies & TV Shows </Alert.Heading>
                <p>
                   Click on the links to reveal the lists
                </p>
             
            </Alert>
        </div>
    )
}

export default Home;