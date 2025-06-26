import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <Services/>
            <ClientLogosMarquee/>
            <WhyChooseUs/>
            <BeMerchant/>
        </div>
    );
};

export default Home;