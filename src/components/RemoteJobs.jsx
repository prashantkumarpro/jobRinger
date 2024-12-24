import React from 'react'
import JobCard from './JobCard';
import Slider from 'react-slick';
import '../styles/JobSection.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
        &#10094; {/* Left arrow icon */}
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
        &#10095; {/* Right arrow icon */}
    </div>
);



const RemoteJobs = () => {

    const featuredJobs = [
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Work From Home/ WFH Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Work From Home/ WFH Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Work From Home/ WFH Job",
            title: "E-commerce Web Development",
            company: "SourceMan",
            location: "Sahibzada Ajit Singh Nagar / India",
            experience: "4-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Work From Home/ WFH Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Remote Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Remote Job",
            title: "E-commerce Web Development",
            company: "SourceMan",
            location: "Sahibzada Ajit Singh Nagar / India",
            experience: "4-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Remote Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        {
            jobType: "Hybrid Job",
            title: "Business Development Executive",
            company: "moschip",
            location: "Indore / India",
            experience: "2-5 Years",
            jobTypeClass: "in-office",
        },
        // Add more job details here
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />, // Use custom previous arrow
        nextArrow: <CustomNextArrow />, // Use custom next arrow
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
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="job-section">
            <h3 className="section-title">Remote Jobs</h3>
            <div className="job-cards-container">
                <Slider  {...settings}>
                    {featuredJobs.map((job, index) => (
                        <JobCard key={index} {...job} />
                    ))}
                </Slider>

            </div>
        </div >
    )
}

export default RemoteJobs