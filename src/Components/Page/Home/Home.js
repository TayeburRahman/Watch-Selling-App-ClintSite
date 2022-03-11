import React from 'react';
import HomeBanner from '../../Banner/HomeBanner';
import HomeFastSection from '../../HomeFastSection/HomeFastSection';
 import HomeProduct from '../../HomeProduct/HomeProduct'
import DashboardHome from '../../DashbordHome/DashboardHome';
import Footer from '../../Sheard/Footer';
import Costomheader from '../../Sheard/Costomheader';
import TestiMonials from '../../TestMonial/TestiMonials/TestiMonials';
import Slideshow from '../../ImgSlider/Slideshow';
import ImageCard1 from '../../ImageCardHome/ImageCard1';
import ImagecardMain from '../../ImageCardHome/ImageCartMain';
 
const Home = () => {
     return (
        <div>
            <Costomheader></Costomheader>
              <HomeBanner></HomeBanner>
               <ImagecardMain></ImagecardMain>
             <HomeFastSection></HomeFastSection>
             <HomeProduct></HomeProduct>
              <Slideshow></Slideshow>
             <DashboardHome></DashboardHome>
             <TestiMonials></TestiMonials>
              <Footer></Footer>
        </div>
    );
};

export default Home;