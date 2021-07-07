import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
// import NavigationBar from '../Navbar/NavigationBar';
import Product from '../Products/Product';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            {/* <NavigationBar/> */}
            <HeaderMain/>
            <Product/>
            <Footer/>
        </div>
    );
};

export default Home;