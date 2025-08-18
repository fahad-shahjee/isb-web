import React from "react";
import Image from "next/image";
import modalbg from "public/images/modal-bg.jpg";
import frame from "public/images/video-frame-two.png";

const HomeTwoModal = () => {
  return (
    <>
      <div className="video-modal">
        <Image src={modalbg} alt="Image" className="modal-bg" />
        <a
          href="tel:(786)949-4620" // Replace with your phone number
          className="video-frame video-btn"
        >
          <Image src={frame} alt="Image" />
          <i className="fa-solid fa-phone"></i>
          
        </a>
      </div>
    </>
  );
};

export default HomeTwoModal;
