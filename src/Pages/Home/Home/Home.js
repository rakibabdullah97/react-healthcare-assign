import React from 'react';
import Banner from '../Banner/Banner';
import FindDoc from '../FIndDoc/FindDoc';
import News from '../News/News/News';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <FindDoc></FindDoc>
            <News></News>
        </div>
    );
};

export default Home;