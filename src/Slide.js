import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './main.css';
 class Slide extends React.Component{
     constructor(props){
         super(props)
     }
     render(){
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              partialVisibilityGutter: 3,
              items: 4
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 3
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return(<div style={{backgroundColor:'#6195C3',width:'100vw',marginBottom:'60px',marginTop:'40px',padding:'10px'}}> <Carousel style={{position:'absolute',zIndex:'25px',width:'100vw'}}
        arrows={false}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoFocus={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
autoPlaySpeed={500}
customTransition="all .5"
transitionDuration={2000}
containerClass="carousel-container"
deviceType={this.props.deviceType}
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"
centerMode={true}
      >


            {this.props.array.map(book=>{
                 const name_top=book.name,author_top=book.author;
                 return(<div className="slider-image" style={{width:'200px',height:'200px',marginRight:'20px'}} ><div className="name-slide">{name_top}</div><div className="author-slide">By-{author_top}</div></div>)
            })}
      </Carousel></div>);
     }
 }
 export default Slide;