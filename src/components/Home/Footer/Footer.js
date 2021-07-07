import React from 'react';
// import './Product.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className="container-fluid" style={{background:'black', height:'100px', color:'white'}}>
            <div className="container">
           <div className="row d-flex justify-content-between align-items-center">
               <p className='' style={{ fontsize:'1em'}}>© 2021 Tania Chanda, All Rights Reserved</p>
                <div className="">
                    <p className="ml-3">Follow Us
                <FaFacebook color="white" size="1em" className='ml-3' />
                <FaInstagram color="white" size="1em"  className='ml-3' />
                <FaTwitter color="white" size="1em"   className='ml-3'/>
                </p>
                </div>
           </div>
           </div>
        </div>
    );
};

export default Footer;