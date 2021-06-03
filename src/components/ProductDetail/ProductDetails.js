import React from 'react';
import NavigationBar from '../Home/Navbar/NavigationBar';
import { FaStar, FaStarHalfAlt, FaPen } from 'react-icons/fa';
import { VscCompareChanges } from "react-icons/vsc";
import { SiWish } from "react-icons/si";
import { Link } from 'react-router-dom';
import './ProductDetails.css';
// import { connect } from 'react-redux';
// import _ from 'lodash';
// const Foo = ({ item }) => <div>{JSON.stringify(item)}</div>;

const ProductDetails = (props) => {
    console.log(props);
    // const mapStateToProps = (state, ownProps) => ({
    //     item: _.find(state, {id: ownProps.params.id}),
    //     // console.log(mapStateToProps)
    //   }); 
    // const {id} = useParams();
    // const furniture = products.find(furniture => furniture.id === id);
    // const {title,price, img} = furniture
    return (
        <div className="container-fluid ">
            <NavigationBar></NavigationBar>
            <div className="container-fluid detail-container">
                <div className="row d-flex justify-content-evenly align-items-center ">
                    <div className="col-md-6">
                        <div className="p-2">
                            <h4>Chair</h4>
                        </div>
                        <div className="p-2 d-flex mr-3" style={{ borderBottom: '1px solid rgb(167 159 156 / 45%)' }}>
                            <FaStar color="cornflowerblue" size="1em" />
                            <FaStar color="cornflowerblue" size="1em" />
                            <FaStar color="cornflowerblue" size="1em" />
                            <FaStar color="cornflowerblue" size="1em" />
                            <FaStarHalfAlt color="cornflowerblue" size="1em" />
                            <p className="ml-3" style={{ color: '#777777' }}>2 Review</p>
                            {/* <p>{props.data}</p> */}
                            <p className="ml-3" style={{ color: '#777777' }}><FaPen /> Write a review</p>
                        </div>
                        <div className="p-2" style={{ borderBottom: '1px solid rgb(167 159 156 / 45%)' }}>
                            <p>Brand: <span className="ml-5" style={{ color: '#777777' }} >Otobi</span> </p>
                            <p>Product Code:<span className="" style={{ color: '#777777' }} > Product 77</span></p>
                            <p>Availability:<span className="ml-3" style={{ color: '#777777' }} >In Stock</span></p>
                        </div>
                        <div className="p-2" style={{ borderBottom: '1px solid rgb(167 159 156 / 45%)' }}>
                            <h4 className="mb-3" style={{ color: '#D49C4F' }}>$244</h4>
                            <p>Tax: <span className="ml-3" style={{ color: '#777777' }}>$50</span></p>
                        </div>
                        <div className="p-2" style={{ borderBottom: '1px solid rgb(167 159 156 / 45%)' }}>
                            {/* <p>Qty</p>
                            <FaPlus/>
                            <FaMinus/> */}
                            <Link to="/payment"> <button className="btn" style={{ backgroundColor: '#D49C4F' }}>Add To Card</button></Link>
                            <div className="d-flex mt-3">
                                <VscCompareChanges /><p> <span className="" style={{ color: '#777777' }}>Add To Compare</span></p>
                                <SiWish className="ml-3" /><p><span className="" style={{ color: '#777777' }}>Add To WishList</span></p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="">
                            <img src="https://i.ibb.co/d42RvLg/chair8.jpg" alt="/" className="d-img" Style={{ height: '150px', width: '200px' }} />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;
// import { connect } from 'react-redux';
// import _ from 'lodash';

// const Foo = ({ item }) => <div>{JSON.stringify(item)}</div>;

// const mapStateToProps = (state, ownProps) => ({
//   item: _find(state, {id: ownProps.params.id}) 
// });

// export default connect(mapStateToProps)(Foo);