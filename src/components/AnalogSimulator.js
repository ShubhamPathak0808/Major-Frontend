import React from 'react';
import { Button, Grid, styled } from '@material-ui/core';
import { Activity, Code, BarChart2, GitCommit } from 'react-feather';

import CodeEditor from './CodeEditor';

const handleCode = async () =>{
   // handle by yash
}

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
                    <Button variant="contained" onClick={{handleCode}}>Run Simulation</Button>
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