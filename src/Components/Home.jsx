import React from 'react';
import home from "../images/nss-hands.jpg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='FOOD WASTE MANAGEMENT' 
                imgsrc={home} 
                isCompName={true}
                colName="NSS VNR VJIET"
                visit='/register' 
                btnname="Get Started" 
            />
        </>
    )
}

export default Home;