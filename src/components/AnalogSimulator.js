import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Button, Grid, styled } from '@material-ui/core';
import { Activity, Code, BarChart2, GitCommit } from 'react-feather';

import CodeEditor from './CodeEditor';
import { CodeContext } from './contextAPI/codeContext'; //new added part

// const handleCode = async () =>{
//    // handle by yash
//  const { coding, setCoding } = useContext(CodeContext);      //new added part
// console.log(coding);
// }

const RunSimulationButton = () => {                                //new added part
    const { coding } = useContext(CodeContext);
  
    const handleClick = async(e) => {                                   
    //   handleCode(coding); // Pass coding as a parameter
    console.log(coding);
    

    //connection of backend vaala part
    // e.preventDefault();

    // try {
    //     axios.post("http://localhost:8000/coding", {
    //         coding: coding // Ensure coding has a value before sending
    //      }).then((response) => {
    //         // Handle successful response
    //         console.log("coding response: ",response.data)
    //      }).catch((error) => {
    //         // Handle error
    //         console.log("failed coding api request, the error is: ",error)
    //      });
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Error sending code to server: " + error.message);
    // }
    };
  
    return <Button variant="contained" onClick={handleClick}>Run Simulation</Button>;
  };

const AnalogSimulator = () => {

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
                    <CodeEditor initialValue="// write your LT spice code here"/>
                    {/* <Button variant="contained" onClick={handleCode}>Run Simulation</Button> */}
                    <RunSimulationButton />
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
                </Grid>
            </Grid>
        </div>

    );
}

export default AnalogSimulator;