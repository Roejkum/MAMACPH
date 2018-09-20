import React from 'react';
import Link from 'gatsby-link';
import './Jumbotron.scss';
import Img from '../../img/jumbotron.svg';

const Jumbotron = (props) => {
   
    return (
        <section className="jumbotron">
            <img src={Img} className="jumbotron-image" alt="Jumbotron background image"/>
            <div className="jumbtron-bg jumbotron-content">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-sm-offset-2">
                    <h1 className="jumbotron-heading">
                        <span className="css-fisw11">
                            <span className="css-3w0cwq">
                                We design and build
                            </span>
                            <div className="slidingVertical">
                                <span >beautiful animations</span>
                                <span >fast websites</span>
                                <span >interactive products</span>
                            </div>
                        </span>
                    </h1>
                    <Link to="#contact" className="btn">Get in touch</Link>
                </div>
                <div className="col-xs-12 hidden-xs col-sm-5">
                    <div className="browser none">
                        <div className="dots"></div>
                    </div>

                    <div className="figure">
                        <div className="circle"></div>
                        <div className="square"></div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Jumbotron