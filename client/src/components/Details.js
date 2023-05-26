import React from 'react'
import Navbar from './Navbar';
import ReactStars from "react-rating-stars-component";

function Details() {

    return (
        <div className='details m-auto w-75 '>
            <div className='row details-header'>
                <Navbar></Navbar>
                <div className='col-md-4'>
                    <img src="https://enews.hamariweb.com/wp-content/uploads/2020/09/burger-making-machine-the-burger-bot.jpg" className='w-100 ' alt=""/>
                </div>
                <div className='col-md-7 offset-1'>
                    <h3 className='text-capitalize'>
                        pizza
                    </h3>
                    <p>cheif loay
                        <ReactStars/>
                    </p>
                </div>
            </div>
            <div className='row details-content'>
                <div className='col-md-12'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ducimus dicta nulla? Cupiditate odio et officiis provident inventore impedit maiores in voluptates exercitationem accusamus, fuga ad iure!</p>
                </div>
            </div>
            <div className='row details-cart'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-md-4'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <span>
                                        quantity:</span>
                                </div>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-1'>
                                            <span className='counter'>
                                                1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p id="price">6.99$</p>
                        </div>
                        <div className='col-md-4'>
                            <button className='btn btn-danger text-capitalize'>
                                add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Details;
