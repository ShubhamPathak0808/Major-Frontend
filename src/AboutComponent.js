import React from "react";
import { Card, CardBody, CardHeader, Media, CardImg, } from "reactstrap";
import "./AboutComponent.css";

//material ui for responsive - Shubham
// import {Grid} from "@mui/material"

import hod from "./assets/ppbansod.jpg";
import dkmishrasir from "./assets/hodsir.jpg";
// import dk from './assets/dkmishra.jpg'

import ppbansod from './assets/ppbansod.jpg';
import dsajnar from './assets/dsajnar.jpg';
import khatrisir from './assets/khatrisir.jpg';
import gurjarsir from './assets/gurjarsir.jpg';
import soni from './assets/soni.jpg'
import anuj from './assets/anuj.jpg'
import tarni from './assets/tarni.jpg'
import deepali from './assets/deepali.jpg'
import neha from './assets/neha.jpg'
import niharika from './assets/niharika.jpg'
import kirti from './assets/kirti.jpeg'
import ayushi from './assets/ayushi.jpg'
import gamad from './assets/gamad.jpg'
// import { baseUrl } from '../shared/baseUrl';
// import {Stagger,Fade} from 'react-animation-components';

// function RenderLeader({leaders}){
//     return(
//         leaders.map((leader)=>{
//             return(

//                     <div key={leader.id} className='col-12 mt-5'>
//                     <Media>
//                 <Media left href="#">
//                     <Media
//                         object className="mr-3"
//                         src={baseUrl+leader.image}

//                         alt={leader.name}
//                     />
//                 </Media>
//                 <Media body className="col-12">

//                     <Media heading>{leader.name}</Media>
//                     <p>{leader.designation}</p>
//                     <p>{leader.description} </p>

//                 </Media>

//             </Media>
//                 </div>

//             )
//         })
//     )
// }
function About(props) {
  // const leaders = props.leaders.map((leader) => {
  //     return (
  //         <p>Leader {leader.name}</p>
  //     );
  // });

  return (
    <div className="container" id='about'>
      {/* <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div> */}
      <div className="row row-new row-content">
        <div className="col-12 col-md-6">
          <h3 className='brand-name mb-5' ><span>E</span>lectronics <span>&</span> <span>I</span>nstrumentation</h3>
          {/* <h2>Electronics and Instrumentation</h2> */}
          <p>
            The Department of Electronics and Instrumentation Engineering was
            established in 1984.This Department came out as an offspring of
            Electronics Engineering due to enormous development in the field of
            Electronics and demand of Instrumentation Engineers in the city and
            its vicinity. Equipped with modern sophisticated instruments, it
            offers Under Graduate course (B.E. Programme). An M. Tech. course in
            Microelectronics VLSI Design was started by this Department in 2002.
            The faculty is well qualified to accept the new challenges in the
            Electronics and Instrumentation field.{" "}
          </p>
          <p >
            {" "}
            The Department has been recognized as a centre to conduct short term
            Programme for teaching faculty in the PC based Electronics
            Instrumentation under UGC vocational courses. New ventures for
            research and product development in the area of Biomedical and
            Optical Engineering are being set up under MHRD schemes.
          </p>
        </div>
        {/* cards of teachers start */}


        <div className="col-12 col-md-5" style={{"margin": "20px 0 0 0"}}>
          <Card >
            <CardHeader className="bg-new text-white text-center">
              <b>Head of the Department</b>
            </CardHeader>
            <CardImg className="hod" src={hod} />
            <CardBody className="buddy">
              <dl className="row p-1">
                <dt className="col-12">
                  <i class="fa fa-user"></i>:<a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf"><b> Dr. P. P. Bansod</b></a>
                </dt>
                <dt className="col-12">
                  <i class="fa fa-envelope"></i>:<a href="mailto:pbansod@sgsits.ac.in"> pbansod@sgsits.ac.in</a>
                </dt>
                <dt className="col-12">
                  <i class="fa fa-phone"></i>:<a href="tel:091-731-2582421"> 091-731-2582421</a>
                </dt>
              </dl>
            </CardBody>
          </Card>
        </div>




        {/* <div className="col-12">
          <Card>
            <CardTitle>Mission</CardTitle>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
              <p>
                The department is committed to provide a holistic education that
                transforms the students into responsible engineers and
                facilitates them to build successful careers and excel in the
                field of Electronics and Instrumentation with social and ethical
                standards.
              </p>
            </CardBody>
          </Card>
        </div> */}
      </div>


      <div className="row row-content">
        <div className="col-12">
          <h2 className="">Faculty Members</h2>
        </div>
        <div className=" col-12">
          <Media list className="row row-aboutus justify-content-between ">
            {/* <div className="col-12 mt-5"> */}
            {/* <Media>
              <Media left href="#">
                <Media 
                  object
                  className="mr-3 fimage"
                  src={dk}
                   alt="D.K. Mishra"
                />
              </Media>
              <Media body className="col-12 fbody">
                <Media heading>Dr. D. K. Mishra</Media>
                <p>Designation: Professor</p>
                <p>Employee ID: 03300182</p>
                <p>Qualification:  Ph. D. , M.E., B.E</p>
                <p>Date of joining:  4/8/1990</p>
                <p><i class="fa fa-phone"></i> : 091-731-2582428</p>
                <p><i class="fa fa-envelope"></i> : dmishra@sgsits.ac.in</p>
                <p></p>
              </Media>
            </Media> */}
            {/* </div> */}


            {/* Teacher 1 start */}

            {/* <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 mt-5 border card-about cardResponsive">

              <Media>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 order-2 order-sm-1">
                    <Media left href="#">
                      <a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf"><Media
                        object
                        className="mr-2 fimage"
                        src={dkmishrasir}
                        alt="Dr. D. K. Mishra"
                      /></a>
                    </Media>
                  </div>


                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-1 order-sm-2">
                    <Media body className="col-12 fbody">
                      <Media heading ><a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf">Dr. D. K. Mishra</a></Media>
                      <p>Designation: Professor & Head</p>
                      <p>Employee ID: 03300182</p>
                      <p>Qualification:  Ph. D. , M.E., B.E</p>
                      <p>Date of joining:   4/8/1990</p>
                      <p><i class="fa fa-phone"></i> :  <a href="tel:091-731-2582428">091-731-2582428</a></p>
                      <p><i class="fa fa-envelope"></i> : <a href="mailto: dmishra@sgsits.ac.in"> dmishra@sgsits.ac.in</a></p>
                      <p></p>
                    </Media>
                  </div>
                </div>
              </Media>

            </div> */}
            {/* Teacher 1 end */}




            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={dkmishrasir}
                      alt="Dr. D. K. Mishra"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading ><a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf">Dr. D. K. Mishra</a></Media>
                  <p>Designation: Professor & Head</p>
                  <p>Employee ID: 03300182</p>
                  <p>Qualification:  Ph. D. , M.E., B.E</p>
                  <p>Date of joining:   4/8/1990</p>
                  <p><i class="fa fa-phone"></i> :  <a href="tel:091-731-2582428">091-731-2582428</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto: dmishra@sgsits.ac.in"> dmishra@sgsits.ac.in</a></p>
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}



            {/* Teacher 2 start */}

            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 border card-about cardResponsive">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf"><Media
                    object
                    className="mr-2 fimage"
                    src={gamad}
                    alt="Dr. R. S. Gamad"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading ><a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf">Dr. R. S. Gamad</a></Media>
                  <p>Designation: Professor </p>
                  <p>Employee ID: 3300293</p>
                  <p>Qualification:  Ph.D.</p>
                  <p>Date of joining:   30/01/2006</p>
                  <p><i class="fa fa-phone"></i> :  <a href="tel:091-731-2582421">091-731-2582421</a>,<a href="tel: 091-731-2582423"> 091-731-2582423</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto: gs3300293@sgsitsindore.in"> gs3300293@sgsitsindore.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}

            {/* Teacher 2 end */}


            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={gamad}
                      alt="Dr. R. S. Gamad"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading ><a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf">Dr. R. S. Gamad</a></Media>
                  <p>Designation: Professor</p>
                  <p>Employee ID: 3300293</p>
                  <p>Qualification:  Ph. D.</p>
                  <p>Date of joining:   30/01/2006</p>
                  <p><i class="fa fa-phone"></i> :  <a href="tel:091-731-2582421">091-731-2582421</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto: gs3300293@sgsitsindore.in"> gs3300293@sgsitsindore.in</a></p>
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}


            {/* teacher 3 start */}
            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/downloads/PPBansod.pdf"><Media
                    object
                    className="mr-2 fimage"
                    src={ppbansod}
                    alt="Dr. P. P. Bansod"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading ><a href="https://www.sgsits.ac.in/files/downloads/PPBansod.pdf">Dr. P. P. Bansod</a></Media>
                  <p>Designation: Professor</p>
                  <p>Employee ID: 3300221</p>
                  <p>Qualification:  Ph.D.</p>
                  <p>Date of joining:  02/04/1993</p>
                  <p><i class="fa fa-phone"></i> :  <a href="tel:091-731-2582421">091-731-2582421</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:pbansod@sgsits.ac.in">pbansod@sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}
            {/* teacher 3 end */}


            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/downloads/DKMishra.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={ppbansod}
                      alt="Dr. P. P. Bansod"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading ><a href="https://www.sgsits.ac.in/files/downloads/PPBansod.pdf">Dr. P. P. Bansod</a></Media>
                  <p>Designation: Professor</p>
                  <p>Employee ID: 3300221</p>
                  <p>Qualification:  Ph.D.</p>
                  <p>Date of joining:  02/04/1993</p>
                  <p><i class="fa fa-phone"></i> :  <a href="tel:091-731-2582421">091-731-2582421</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:pbansod@sgsits.ac.in">pbansod@sgsits.ac.in</a></p>
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}



            {/* teacher 4 start */}
            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/downloads/DSAjnar.pdf"><Media
                    object
                    className="mr-3 fimage"
                    src={dsajnar}
                    alt="Mr. D. S. Ajnar"
                  />
                  </a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/DSAjnar.pdf">Mr. D. S. Ajnar</a></Media>
                  <p>Designation: Associate Professor</p>
                  <p>Employee ID: 3300244</p>
                  <p>Qualification:  M.E.</p>
                  <p>Date of joining:  7/4/1995</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:091-731-2582422">091-731-2582422</a></p>
                  <p><i class="fa fa-envelope"></i> :<a href="mailto:ajnards@gmail.com"> ajnards@gmail.com</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}
            {/* teacher 4 end */}



            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/downloads/DSAjnar.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={dsajnar}
                      alt="Dr. P. P. Bansod"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/DSAjnar.pdf">Mr. D. S. Ajnar</a></Media>
                  <p>Designation: Associate Professor</p>
                  <p>Employee ID: 3300244</p>
                  <p>Qualification:  M.E.</p>
                  <p>Date of joining:  7/4/1995</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:091-731-2582422">091-731-2582422</a></p>
                  <p><i class="fa fa-envelope"></i> :<a href="mailto:ajnards@gmail.com"> ajnards@gmail.com</a></p>
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}





            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/downloads/RajeshKhatri.pdf"><Media
                    object
                    className="mr-3 fimage"
                    src={khatrisir}
                    alt="Mr. Rajesh Khatri"
                  />
                  </a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/RajeshKhatri.pdf">Mr. Rajesh Khatri</a></Media>
                  <p>Designation: Associate Professor</p>
                  <p>Employee ID: 3300279</p>
                  <p>Qualification:  M.E.</p>
                  <p>Date of joining:  24/12/2003</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:091-731-2582425">091-731-2582425</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:rajeshkhatri1@rediffmail.com">rajeshkhatri1@rediffmail.com</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}


            {/* self card start - shubham pathak*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/downloads/RajeshKhatri.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={khatrisir}
                      alt="Dr. P. P. Bansod"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/RajeshKhatri.pdf">Mr. Rajesh Khatri</a></Media>
                  <p>Designation: Associate Professor</p>
                  <p>Employee ID: 3300279</p>
                  <p>Qualification:  M.E.</p>
                  <p>Date of joining:  24/12/2003</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:091-731-2582425">091-731-2582425</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:rajeshkhatri1@rediffmail.com">rajeshkhatri1@rediffmail.com</a></p>
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}



            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media >
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/downloads/RCGurjar.pdf"><Media
                    object
                    className="mr-3 fimage"
                    src={gurjarsir}
                    alt="Mr.R.C.Gurjar"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/RCGurjar.pdf">Mr. R.C. Gurjar</a></Media>
                  <p>Designation: Associate Professor</p>
                  <p>Employee ID: 3300307</p>
                  <p>Qualification:  M.E., Ph.D. Pursuing</p>
                  <p>Date of joining:  16/07/2007</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:091-731-2582424">091-731-2582424</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:rcgurjar94@gmail.com">rcgurjar94@gmail.com</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}



            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/downloads/RCGurjar.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={gurjarsir}
                      alt="Dr. P. P. Bansod"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/RCGurjar.pdf">Mr. R.C. Gurjar</a></Media>
                  <p>Designation: Associate Professor</p>
                  <p>Employee ID: 3300307</p>
                  <p>Qualification:  M.E., Ph.D. Pursuing</p>
                  <p>Date of joining:  16/07/2007</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:091-731-2582424">091-731-2582424</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:rcgurjar94@gmail.com">rcgurjar94@gmail.com</a></p>
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}







            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/downloads/GGS.pdf"><Media
                    object
                    className="mr-3 fimage"
                    src={soni}
                    alt="Dr. Gireesh Gaurav Soni"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/GGS.pdf">Dr. Gireesh Gaurav Soni</a></Media>
                  <p>Designation: Associate Professor</p>
                  <p>Employee ID: 9404</p>
                  <p>Qualification:  M.Tech, Ph.D.</p>
                  <p>Date of joining:  16/07/2007</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:0731-2582437">0731-2582437</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:gireeshsoni[at]gmail.com">gireeshsoni[at]gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}


            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/downloads/GGS.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={soni}
                      alt="Dr. Gireesh Gaurav Soni"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/GGS.pdf">Dr. Gireesh Gaurav Soni</a></Media>
                  <p>Designation: Associate Professor</p>
                  <p>Employee ID: 9404</p>
                  <p>Qualification:  M.Tech, Ph.D.</p>
                  <p>Date of joining:  16/07/2007</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:0731-2582437">0731-2582437</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:gireeshsoni[at]gmail.com">gireeshsoni[at]gmail.com</a></p>
                  {/* <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p> */}
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}



            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media >
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/downloads/NehaPande.pdf"><Media
                    object
                    className="mr-3 fimage"
                    src={neha}
                    alt="Ms. Neha Pande"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/NehaPande.pdf">Ms. Neha Pande</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305026</p>
                  <p>Qualification:  M.Tech</p>
                  <p>Date of joining:  28/06/2018</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel: 091-731-2582429"> 091-731-2582429</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:nehabakawale@gmail.com">nehabakawale@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}



            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/downloads/NehaPande.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={neha}
                      alt="Ms. Neha Pande"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/files/downloads/NehaPande.pdf">Ms. Neha Pande</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305026</p>
                  <p>Qualification:  M.Tech</p>
                  <p>Date of joining:  28/06/2018</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel: 091-731-2582429"> 091-731-2582429</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:nehabakawale@gmail.com">nehabakawale@gmail.com</a></p>
                  {/* <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p> */}
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}





            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/anuj.pdf"><Media
                    object
                    className="mr-3 fimage"
                    src={anuj}
                    alt="Dr. Anuj Rawat"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/files/anuj.pdf">Dr. Anuj Rawat</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: </p>
                  <p>Qualification:  M.Tech</p>
                  <p>Date of joining:   09/9/2021</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:  091-731-2582429">  091-731-2582429</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:anujrawat92@gmail.com">anujrawat92@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}



            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/anuj.pdf">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={anuj}
                      alt="Dr. Anuj Rawat"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/files/anuj.pdf">Dr. Anuj Rawat</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: </p>
                  <p>Qualification:  M.Tech</p>
                  <p>Date of joining:   09/9/2021</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:  091-731-2582429">  091-731-2582429</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:anujrawat92@gmail.com">anujrawat92@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}




            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media >
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/files/faculty_Data_Tarni_Joshi_EI.docx"><Media
                    object
                    className="mr-3 fimage"
                    src={tarni}
                    alt="Ms. Tarni Joshi"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/files/faculty_Data_Tarni_Joshi_EI.docx">Ms. Tarni Joshi</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 330119</p>
                  <p>Qualification:  M.Tech</p>
                  <p>Date of joining: </p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:07312582424">  07312582424</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:tarnijoshi88@gmail.com"> tarnijoshi88@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}



            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/files/faculty_Data_Tarni_Joshi_EI.docx">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={tarni}
                      alt="Ms. Tarni Joshi"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/files/faculty_Data_Tarni_Joshi_EI.docx">Ms. Tarni Joshi</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 330119</p>
                  <p>Qualification:  M.Tech</p>
                  <p>Date of joining: </p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:07312582424">  07312582424</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:tarnijoshi88@gmail.com"> tarnijoshi88@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}


            {/* 
            <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/970-ayushi-choukikar"><Media
                    object
                    className="mr-3 fimage"
                    src={ayushi}
                    alt="Ms. Ayushi Choukikar"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/970-ayushi-choukikar">Ms. Ayushi Choukikar</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305130</p>
                  <p>Qualification:  M.Tech</p>
                  <p>Date of joining:  24/08/2022</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:07312582423">  07312582423</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:imayushi02@gmail.com"> imayushi02@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}


            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/970-ayushi-choukikar">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={ayushi}
                      alt="Ms. Ayushi Choukikar"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/970-ayushi-choukikar">Ms. Ayushi Choukikar</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305130</p>
                  <p>Qualification:  M.Tech</p>
                  <p>Date of joining:  24/08/2022</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:07312582423">  07312582423</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:imayushi02@gmail.com"> imayushi02@gmail.com</a></p>
                  {/* <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p> */}
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}


            {/* 

            <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/973-ms-deepali-choudhary"><Media
                    object
                    className="mr-3 fimage"
                    src={deepali}
                    alt="Ms. Deepali Choudhary"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/973-ms-deepali-choudhary">Ms. Deepali Choudhary</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305126</p>
                  <p>Qualification:  M.E</p>
                  <p>Date of joining:   24/08/2022</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:07312582423">  07312582423</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:Choudharydepali11@gmail.com">Choudharydepali11@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}


            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/973-ms-deepali-choudhary">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={deepali}
                      alt="Ms. Deepali Choudhary"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/973-ms-deepali-choudhary">Ms. Deepali Choudhary</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305126</p>
                  <p>Qualification:  M.E</p>
                  <p>Date of joining:   24/08/2022</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel:07312582423">  07312582423</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:Choudharydepali11@gmail.com">Choudharydepali11@gmail.com</a></p>
                  {/* <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p> */}
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}






            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media >
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/971-ms-kirti-bhargava"><Media
                    object
                    className="mr-3 fimage"
                    src={kirti}
                    alt="Ms. Kirti Bhargava"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/971-ms-kirti-bhargava">Ms. Kirti Bhargava</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305127</p>
                  <p>Qualification:  M.E</p>
                  <p>Date of joining:   24/08/2022</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel: 07312582429">   07312582429</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:kirtirks@gmail.com">kirtirks@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}


            {/* self card start - shubham*/}
            <div className="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-5 teacherBox" >        {/* for the whole card */}

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ "textAlign": "center" }}>
                  <a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/971-ms-kirti-bhargava">
                    <Media
                      object
                      className="mr-2 fimage"
                      src={kirti}
                      alt="Ms. Kirti Bhargava"
                      style={{ "margin": "auto" }}
                    /></a>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <Media heading><a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/971-ms-kirti-bhargava">Ms. Kirti Bhargava</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305127</p>
                  <p>Qualification:  M.E</p>
                  <p>Date of joining:   24/08/2022</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel: 07312582429">   07312582429</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:kirtirks@gmail.com">kirtirks@gmail.com</a></p>
                  {/* <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p> */}
                  <p></p>
                </div>
              </div>

            </div>
            {/* self card end */}




            {/* <div className="col-lg-5 col-md-5 col-sm-12 mt-5 mt-5 border card-about">
              <Media>
                <Media left href="#">
                  <a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/972-ms-niharika-gour"><Media
                    object
                    className="mr-3 fimage"
                    src={niharika}
                    alt="Ms. Niharika Gour"
                  /></a>
                </Media>
                <Media body className="col-12 fbody">
                  <Media heading><a href="https://www.sgsits.ac.in/index.php/eie-faculty-members/972-ms-niharika-gour">Ms. Niharika Gour</a></Media>
                  <p>Designation: Assistant Professor</p>
                  <p>Employee ID: 3305127</p>
                  <p>Qualification:  M.E</p>
                  <p>Date of joining:   22/08/2022</p>
                  <p><i class="fa fa-phone"></i> : <a href="tel: 07312582424">   07312582424</a></p>
                  <p><i class="fa fa-envelope"></i> : <a href="mailto:niharikagour0204@gmail.com">niharikagour0204@gmail.com</a></p>
                  <p>: <a href="mailto:gsoni[at]sgsits.ac.in">gsoni[at]sgsits.ac.in</a></p>
                  <p></p>
                </Media>
              </Media>
            </div> */}
          </Media>
        </div>

      </div >
    </div >
  );
}

export default About;
