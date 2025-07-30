import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import banneronethumb from "public/images/banner/banner-one-thumb.png";
import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";



gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  Creativity
                  <span className="text-stroke">in our</span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> Bloodline
                  </span>
                </h1>
                <div className="banner__content-inner">
                  <p>
                    Fueling Success with Creative Brilliance. ISBTechs: Where Innovation Meets Imagination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={banneronethumb}
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@isbtechs.com">mail : info@isbtechs.com</Link>
          <Link href="tel:7869494620">Call : (746) 949-4620</Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link href="https://www.instagram.com/isbtechs/?igsh=MXRsd3VoY2FteWJtdQ%3D%3D" target="_blank">
            instagram
          </Link>
          <Link href="https://www.facebook.com/ISBtechsolutions/" target="_blank">
            facebook
          </Link>
        </div>
        {/* <button
          className="video-frame video-btn"
          onClick={() => router.push('/contact')}
        >
          <Image src={videoframe} alt="Image" priority />
          <i className="fa-solid fa-arrow-up-right"></i>
        </button> */}
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
    </>
  );
};

export default HomeOneBanner;
