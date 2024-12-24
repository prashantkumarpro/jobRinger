import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/FeaturedEmployers.css'
import logo1 from '../assets/logos/logo1.png'
import logo2 from '../assets/logos/logo2.png'
import logo3 from '../assets/logos/logo3.png'
import logo4 from '../assets/logos/logo4.png'
import logo5 from '../assets/logos/logo5.png'
import logo6 from '../assets/logos/logo6.png'
import logo7 from '../assets/logos/logo7.png'
import logo8 from '../assets/logos/logo8.png'
import logo9 from '../assets/logos/logo9.png'
import logo10 from '../assets/logos/logo10.png'



const FeaturedEmployers = () => {

    const employers = [
        { id: 1, logo: logo1, name: 'Employer 1' },
        { id: 2, logo: logo2, name: 'Employer 2' },
        { id: 3, logo: logo3, name: 'Employer 3' },
        { id: 4, logo: logo4, name: 'Employer 4' },
        { id: 5, logo: logo5, name: 'Employer 5' },
        { id: 6, logo: logo6, name: 'Employer 6' },
        { id: 7, logo: logo7, name: 'Employer 7' },
        { id: 8, logo: logo8, name: 'Employer 8' },
        { id: 9, logo: logo9, name: 'Employer 9' },
        { id: 10, logo: logo10, name: 'Employer 10' },
    ];


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
           
        ],
    };

    return (
        <div className="featured-employers-section">
            <h3 className="section-title">
                <span>FEATURED</span> EMPLOYERS
            </h3>
            <div className="employers-container">
                <Slider {...settings}>
                    {employers.map((employer) => (
                        <div className="employer-card" key={employer.id}>
                            <img src={employer.logo} alt={employer.name} className="employer-logo" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default FeaturedEmployers

