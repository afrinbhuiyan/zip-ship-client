import React from 'react';
import location from '../../../assets/location-merchant.png';
import BeAMerchantBG from '../../../assets/be-a-merchant-bg.png';

const BeMerchant = () => {
    return (
        <div 
            data-aos="zoom-in-up" 
            className="bg-[#03373D] rounded-4xl p-8 md:p-20 relative overflow-hidden"
            style={{ backgroundImage: `url(${BeAMerchantBG})`,  backgroundRepeat: 'no-repeat' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
                    <img
                        src={location}
                        className="w-full max-w-md lg:max-w-lg rounded-lg"
                        alt="Merchant location illustration"
                    />
                    <div className="text-white lg:w-1/2">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Merchant and Customer Satisfaction is Our First Priority
                        </h1>
                        <p className="text-lg mb-8">
                            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn bg-[#CAEB66] text-[#03373D] hover:bg-[#9bc44e] border-none rounded-full px-8 py-3 font-medium">
                                Become A Merchant
                            </button>
                            <button className="btn bg-transparent text-[#CAEB66] hover:bg-[#CAEB66] hover:text-[#03373D] border-[#CAEB66] rounded-full px-8 py-3 font-medium">
                                Earn with Profast Courier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;