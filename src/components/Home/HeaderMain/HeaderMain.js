import React from 'react';
import './HeaderMain.css';
import NavigationBar from '../Navbar/NavigationBar';
import Carousel from 'react-bootstrap/Carousel'
import bg1 from '../../../Images/newbg1.jpg'
import bg3 from '../../../Images/bed2.jpg'
import bg2 from '../../../Images/newbg5.jpg'
import bg4 from '../../../Images/bgSofa2.jpg'
import bg5 from '../../../Images/bgSofa3.jpg'
import bg6 from '../../../Images/newbg4.jpg'

const HeaderMain = () => {
  return (
    <div className="" >
      <div className="">
        <NavigationBar />
      </div>
      <div className="container-fluid px-0" style={{
        paddingBottom: '100px',
        background: 'black'
      }}>
        <div className="" >
          <div className=" text-center" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className="">
              <Carousel >
                <Carousel.Item interval={1000}>
                  <img style={{ height: '600px'}}
                    className="d-block w-100"
                    src={bg1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h1 className="mt-5 px-5" style={{ fontSize: '100px', color:'black' }}>Luxury Furniture</h1>
                    <p style={{ fontSize: '40px', color:'' }}>One-click import feature lets you import the complete Depot demo content with a single mouse click.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img style={{ height: '600px' }}
                    className="d-block w-100"
                    src={bg2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                  <h1 className="mt-5 px-5" style={{ fontSize: '100px' }}>We Carry Only The Finest</h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ height: '600px' }}
                    className="d-block w-100"
                    src={bg3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h1 className="mt-5 px-5" style={{ fontSize: '100px', color:'black' }}>Think Different</h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ height: '600px' }}
                    className="d-block w-100"
                    src={bg4}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h1 className="mt-5 px-5" style={{ fontSize: '100px',  }}>Contemporary Design</h1>
                  <p style={{ fontSize: '40px', color:'' }}>One-click import feature lets you import the complete Depot demo content with a single mouse click.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ height: '600px' }}
                    className="d-block w-100"
                    src={bg5}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h1 className="mt-5 px-5" style={{ fontSize: '100px', color:'#98001c' }}>Premium Comfort</h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ height: '600px' }}
                    className="d-block w-100"
                    src={bg6}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h1 className="mt-5 px-5" style={{ fontSize: '100px', color:'black' }}>Comfort & Elegant </h1>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default HeaderMain;