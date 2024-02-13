import Link from 'next/link'; 
import Image from 'next/image';
import { Navigation } from "swiper"; 
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AngleArrow from "@/src/svg/angle-arrow"; 

import about_img_1 from "@assets/img/about/web-coding.png";
import about_img_2 from "@assets/img/about/web-development.png";
import about_img_3 from "@assets/img/about/testing.png";
import about_img_4 from "@assets/img/about/app-development.png";
import about_img_5 from "@assets/img/about/social-media-marketing.png";
import about_img_6 from "@assets/img/about/search-engine-optimization.png";
import about_img_7 from "@assets/img/about/content-marketing.png";
import about_img_8 from "@assets/img/about/article.png";
import about_img_9 from "@assets/img/about/email-marketing.png";
import about_img_10 from "@assets/img/about/monitor.png";
import about_img_11 from "@assets/img/about/ecommerce.png";
import about_img_12 from "@assets/img/about/ecommerce (1).png";
import about_img_13 from "@assets/img/about/graphic-design.png";
import about_img_14 from "@assets/img/about/marketing.png";
import about_img_15 from "@assets/img/about/social-media-marketing.png";
import about_img_16 from "@assets/img/about/web-domain.png";
import about_img_17 from "@assets/img/about/sms.png";
import LineArrowTwo from '@/src/svg/line-arrow-2';
import shape_1 from "@assets/img/about/shape-1.png";
import about from "@assets/img/about/about-1.png";

const about_data = [
    {
        id:1,
        img: about_img_1,
        title: "Web Development",
        description: <>Our web development services are designed to create dynamic, responsive,  <br />  and user-friendly websites that reflect your brand's
        <br />  ethos and meet your business objectives.</>,
    },
    {
        id:2,
        img: about_img_2,
        title: "Software Development",
        description: <>We specialize in developing high-quality software  <br /> solutions that streamline operations, enhance 
        <br /> productivity, and drive business growth.</>,
    },
    {
        id:3,
        img: about_img_3,
        title: "Custom Software Development",
        description: <>Tailored software solutions that cater specifically to your business's unique  <br /> requirements

        <br /> ensuring efficiency and competitive advantage.</>,
    },
    {
        id:4,
        img: about_img_4,
        title: "App Development ",
        description: <>From conceptualization to launch, we develop mobile applications <br />  that offer seamless 

        <br />user experiences on both Android and iOS platforms.</>,
    },
    {
        id:5,
        img: about_img_5,
        title: "Digital Marketing",
        description: <>Our digital marketing strategies encompass a broad spectrum of<br /> techniques to effectively enhance your online presence 
        <br /> and connect with your target audience.</>,
    },
    {
        id:6,
        img: about_img_6,
        title: "Search Engine Optimization (SEO)",
        description: <>Improve your website's visibility on search engines  <br /> through our comprehensive SEO strategies
        <br /> driving organic traffic and elevating your online presence.
</>,
    },
    {
        id:7,
        img: about_img_7,
        title: "Content Marketing",
        description: <>Engaging, informative content creation and marketing strategies   <br /> designed to attract 
        <br />and retain your target audience.
</>,
    },
    {
        id:8,
        img: about_img_8,
        title: "Article Writing",
        description: <>High-quality, SEO-friendly articles crafted by our team  <br /> of professional writers 
        <br /> to boost your content marketing efforts.
</>,
    },
    {
        id:9,
        img: about_img_9,
        title: "Email Marketing ",
        description: <>Strategic email marketing campaigns that engage your subscribers,<br />promote your brand and drive conversions.
        
</>,
    },
    {
        id:10,
        img: about_img_10,
        title: "Analytics and Data Analysis",
        description: <>Leverage the power of data with our analytics services to make  <br /> informed decisions and optimize 
        <br /> your digital marketing strategies.
</>,
    },
    {
        id:11,
        img: about_img_11,
        title: "E-commerce Marketing",
        description: <>Targeted marketing strategies to enhance your online store's visibility  <br /> through our comprehensive SEO strategies
        <br />  attract potential customers, and boost sales.
</>,
    },
    {
        id:12,
        img: about_img_12,
        title: "E-commerce Solutions ",
        description: <>Comprehensive e-commerce solutions, including website development, payment gateway   <br /> through our comprehensive SEO strategies
        <br />  attract potential customers, and boost sales.
</>,
    },
    {
        id:13,
        img: about_img_13,
        title: "Graphic Design ",
        description: <>Our graphic design services encompass logo design, branding materials,  <br /> and visual content 
        <br />  to enhance your brand's visual appeal.
</>,
    },
    {
        id:14,
        img: about_img_14,
        title: "Paid Ads",
        description: <>Maximize your ROI with our targeted paid advertising services across various platforms,<br /> including Google Ads and social media.
        
</>,
    },
    {
        id:15,
        img: about_img_15,
        title: "Social Media Marketing (SMM)",
        description: <>Engage with your audience and build your   <br /> brand presence across social media platforms
        <br />  with our tailored SMM strategies.
</>,
    },
    {
        id:16,
        img: about_img_16,
        title: "Domain & Hosting ",
        description: <>Reliable domain registration and hosting services <br /> to ensure your website's 
        <br /> optimal performance and accessibility.
</>,
    },
//     {
//         id:17,
//         img: about_img_3,
//         title: "Product Management",
//         description: <>Comprehensive product management services to oversee your  <br /> product's lifecycle,  from development 
//         <br />  to market launch and beyond.
// </>,
//     },
    {
        id:17,
        img: about_img_17,
        title: "Bulk SMS  ",
        description: <>Reach out to a wide audience instantly with our bulk SMS services<br /> ideal for promotions, alerts, and updates.
       
</>,
    },
]

const setting = {
    slidesPerView: 3,
    spaceBetween: 82,  
    navigation: {
        nextEl: ".about-button-next-1",
        prevEl: ".about-button-prev-1",
    },
    breakpoints: {
        '1860': {
            
        },
        '1800': {
            spaceBetween: 40,
        },
        '1701': {
            
        },
        '1600': {
            
        },
        '1560': {
            
        },
        '1400': {
            spaceBetween:60,
        },
        '1200': {
            spaceBetween:30,
            slidesPerView: 2,
        },
        '992': {
            spaceBetween:60,
            slidesPerView: 2,
        },
        '767': {
            slidesPerView:2
        },
        '576': {
            slidesPerView:2
        },
        '0': {
            slidesPerView:1
        },
    },
}


const AboutArea = () => {
    const [isLoop, setIsLoop]  = useState(false)
    useEffect(()  => {
        setIsLoop(true)
    }, [])

    return (
        <>
            <section className="tp-about-area pb-45 box-plr p-relative">
            <div className="tp-about-shape d-none d-xl-block">
               <Image className="shape-1" src={shape_1} alt="theme-pure" />
            </div>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-xl-4 col-lg-12">
                     <div className="tp-about-wrapper-thumb text-center text-xl-start fadeLeft">
                        <Image src={about} alt="theme-pure" />
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-10">
                     <div className="tp-about-wrapper pl-50">

                        <div className="row">

                           <div className="col-lg-8">
                              <div className="tp-about-title-wrapper p-relative">
                                 <span className="tp-section-title__pre">
                                    best <span className="title-pre-color">it service</span>
                                    <AngleArrow /> 
                                 </span>
                                 <h3 className="tp-section-title">Digital Hub Offering Services
                                    <span className="title-left-shape">
                                    <LineArrowTwo /> 
                                    </span>
                                 </h3>
                       
                                 {/* <h3 className="tp-section-title">It Industries We’re Offering
                                    <span className="title-left-shape">
                                    <LineArrowTwo /> 
                                    </span>
                                 </h3> */}


                              </div>
                           </div>

                           <div className="col-lg-4">
                              <div className="tp-about-nav d-none d-md-block p-relative">
                                 <button type="button" className="about-button-prev-1">
                                    <i className="fa-regular fa-arrow-left"></i>
                                 </button>
                                 <button type="button" className="about-button-next-1">
                                    <i className="fa-regular fa-arrow-right"></i>
                                 </button>
                              </div>
                           </div>
                        </div>

                        <div className="tp-about-item-wrapper"> 
                            <Swiper {...setting}  
                                    modules={[Navigation]} 
                                    loop={isLoop} 
                                    className="about-active swiper-container"
                                    >
                                {about_data.map((item, i)  =>  
                                    <SwiperSlide key={i} className="tp-about-item mb-30">
                                        <div className="tp-about-item-thumb">
                                            <Image src={item.img} alt="theme-pure" />
                                        </div>
                                        <div className="tp-about-item-content">
                                            <h4 className="about-title">{item.title}</h4>
                                            <p>{item.description}</p>
                                            <div className="tp-about-item-btn">
                                                <Link href="/about">
                                                    <i className="fa-regular fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>  
                                )} 
                                </Swiper> 

                           <div className="tp-about-call">
                              <a href="tel:+88 01309-514133">
                                 <p><i className="fa-solid fa-phone"></i> 
                                 Provide Digital Services to hundreds of customers  <span>+88 01309-514133</span></p>
                              </a>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </> 
    );
};

export default AboutArea;