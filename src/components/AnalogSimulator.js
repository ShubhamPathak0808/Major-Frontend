import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Button, Grid, styled } from '@material-ui/core';
import { Activity, Code, BarChart2, GitCommit } from 'react-feather';

import CodeEditor from './CodeEditor';
import { CodeContext } from './contextAPI/codeContext';

const RunSimulationButton = ({setResult, setImageData}) => {
    const { coding } = useContext(CodeContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post("http://10.25.100.17:8000/api/run_code", {
                coding: coding // Ensure coding has a value before sending
            });

            // Handle successful response
            setResult(response.data.result); // Update result state
            setImageData(response.data.image); // Update image data state
        } catch (error) {
            // Handle error
            console.log("failed coding api request, the error is: ", error);
            alert("Error sending code to server: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button variant="contained" onClick={handleClick} disabled={isLoading}>
            {isLoading ? "Running Simulation..." : "Run Simulation"}
        </Button>
    );
};


const AnalogSimulator = () => {

    const [result, setResult] = useState('');
    const [imageData, setImageData] = useState(null);

    return (
        <div>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} style={{ border: "2px solid #6C63FF ", }}>
                    <h3 style={{ textAlign: 'center' }}>
                        <Activity
                            size={20}
                            color={"#6C63FF"}
                            style={{ marginRight: 22 }}
                        />
                        Analog Simulator
                    </h3>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{ border: "2px solid #6C63FF", height: "80vh" }}>
                    <h3 style={{ textAlign: 'center' }}>
                        <Code
                            size={20}
                            color={"#6C63FF"}
                            style={{ marginRight: 22 }}
                        />
                        Code
                    </h3>
                    <CodeEditor initialValue="// write your NGs spice code here"/>
                    {/* <Button variant="contained" onClick={handleCode}>Run Simulation</Button> */}
                    <RunSimulationButton setResult={setResult} setImageData={setImageData} />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{ border: "2px solid #6C63FF", height: "80vh" }}>
                    <h2 style={{ textAlign: 'center' }}>
                        <BarChart2
                            size={20}
                            color={"#6C63FF"}
                            style={{ marginRight: 22 }}
                        />
                        Graph
                    </h2>
                    {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Graph" />}
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} style={{ border: "2px solid #6C63FF" }}>
                    <h3 style={{ textAlign: 'left' }}>
                        <GitCommit
                            size={20}
                            color={"#6C63FF"}
                            style={{ marginRight: 22 }}
                        />
                        Console
                    </h3>
                    <pre>{result}</pre>
                </Grid>
            </Grid>
        </div>

    );
}

export default AnalogSimulator;