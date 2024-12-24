import React from 'react';
import googlePlayIcon from '../assets/anroid.png';
import appStoreIcon from '../assets/ios.png';
import mobileImage from '../assets/plays-storeimg.jpg';
import '../styles/MobileAppSection.css';

const MobileAppSection = () => {
    return (
        <div className="mobile-app-section">
            <div className="content">
                <h3>APPLY TO JOBS ON-THE-GO</h3>
                <p>Jobringer Mobile App</p>
                <div className="store-icons">
                    <img src={googlePlayIcon} alt="Google Play" className="store-icon" />
                    <img src={appStoreIcon} alt="App Store" className="store-icon" />
                </div>
                <p className="download-link">
                    Mobile App <a href="#download">Download</a>
                </p>
            </div>
            <div className="mobile-image">
                <img src={mobileImage} alt="Mobile App" />
            </div>
        </div>
    );
};

export default MobileAppSection;
