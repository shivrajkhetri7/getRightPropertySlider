import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

// Component
import PropertySliderCard from '../PropertySliderCard/PropertySliderCard'

export class PropertySlider extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            },
        },
    }
    render() {
        return (
            <div>
                <div class='container-fluid' >
                    <OwlCarousel margin={20} autoplay={true} items={4}
                        responsive={this.state.responsive} >
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                        <div className="items" >
                            <PropertySliderCard />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}


export default PropertySlider;