import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/offer/logo.png";
import webdev from "public/images/offer/web-design.png";
import ecomsol from "public/images/offer/web-design.png";
import mobile from "public/images/offer/mobileapp.png";
import animation from "public/images/offer/animation.png";
import bbranding from "public/images/offer/branding.png";
import digimark from "public/images/offer/digimarketing.png";
import star from "public/images/offer/star.png";

const HomeOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5">
            <div className="offer__content section__content">
              <span className="sub-title">
                OUR SERVICES
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Services we can help you with
              </h2>
              <div className="paragraph">
                <p>
                  At ISBTechs, we blend technology, design, and strategy to deliver smart, scalable digital solutions. Our forward-thinking approach helps businesses adapt, 
                  grow, and thrive in a competitive digital world with performance-driven results.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="our-services" className="btn btn--secondary">
                  view all services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="service-single">
                    Logo design
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={logo} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="service-single">
                    Web Development
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={webdev} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="service-single">
                    Ecommerce Solutions
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ecomsol} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="service-single">
                    Mobile Application
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={mobile} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="service-single">
                    Animation
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={animation} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="service-single">
                    Business Branding
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={bbranding} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="service-single">
                    Digital Marketing
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={digimark} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeOffer;
