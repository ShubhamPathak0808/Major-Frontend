import React,{useState,useEffect,useContext} from 'react';
// import { DurationContext } from './contextAPI/DurationContext';             //new added part
import { ActiveContext } from './contextAPI/ActiveContext';                 //new added part
import Axios from "axios";                                    //new added part

const MyTimer = (props) => {                                     /* new added part starts */
    // const { Duration, setDuration } = useContext(DurationContext);
    const { isActive, setIsActive } = useContext(ActiveContext);
    const [timeLeft, setTimeLeft] = useState(0);

    // useEffect(() => {                                         //new part
    //     if (isActive) {
    //       const interval = setInterval(() => {
    //         setTimeLeft((prevTime) => {
    //           if (prevTime > 0) {
    //             return prevTime - 1;
    //           } else {
    //             clearInterval(interval);
    //             return 0;
    //           }
    //         });
    //       }, 1000);
    
    //       return () => clearInterval(interval);
    //     }
    //   }, [isActive]);

    useEffect(() => {                                                //new part
        let loc = window.location.href.split("/");
        let attendenceId = loc[loc.length - 1];
    
        const fetchDuration = async () => {
          try {
            const res = await Axios.get(`http://10.25.100.77:8000/api/attendence/${attendenceId}`);
            if (res.data.success) {
              setTimeLeft(res.data.data.duration);
              console.log(res.data.data.duration);
            }
          } catch (error) {
            console.log("Error in fetching the duration: ", error);
          }
        };
    
        fetchDuration();


      }, []);

    // useEffect(() => {                                  //new part
    //     if (timeLeft === 0) {
    //         {props.endAttendence()};
    //     }
    // }, [timeLeft]);

    useEffect(() => {                                  //new part
        let interval = null;
    
        if (isActive) {
          interval = setInterval(() => {
            setTimeLeft((prevDuration) => prevDuration - 1);
            if (timeLeft <= 1) {
                clearInterval(interval);
                {props.endAttendence()}; 
                return;              // Call the endAttendence function when the duration reaches 0
              }
          }, 1000);
        } else {
          clearInterval(interval);
        }
    
        // if (timeLeft <= 0) {
        //   clearInterval(interval);
        //   {props.endAttendence()};               // Call the endAttendence function when the duration reaches 0
        // }
    
        return () => {
          clearInterval(interval);
        };
      }, [isActive, timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "50px" }}>Time left:</h1>
            <div style={{ fontSize: "50px" }}>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
        </div>
    );
};                                                                       /* new added part ends */

export default MyTimer


/*

const MyTimer = ({ endAttendence }) => {
  const { isActive } = useContext(ActiveContext);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let loc = window.location.href.split("/");
    let attendenceId = loc[loc.length - 1];

    const fetchDuration = async () => {
      try {
        const res = await Axios.get(`http://10.25.100.77:8000/api/attendance/${attendenceId}`);
        if (res.data.success) {
          setTimeLeft(res.data.data.duration);
        }
      } catch (error) {
        console.log("Error in fetching the duration: ", error);
      }
    };

    fetchDuration();
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevDuration) => prevDuration - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (duration <= 0) {
      clearInterval(interval);
      endAttendence(); // Call the endAttendence function when the duration reaches 0
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, duration]);

  return (
    <div>
      <p>Duration: {duration} seconds</p>
    </div>
  );
};

export default MyTimer;

*/
