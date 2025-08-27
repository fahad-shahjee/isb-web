import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          {/* Phone & Fax */}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>
                  <Link href="tel:7869494620">(786) 949-4620</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Mail Address */}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>E-mail Address</h4>
                <p>
                  <Link href="mailto:info@isbtechs.com">
                    Info@isbtechs.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://maps.app.goo.gl/eNyyzKMGg4qm2hXi8"
                    target="_blank"
                  >
                    1322 N Pine Hills Road, Orlando, Fl, 32808
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map + Form Section */}
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.945590841432!2d-81.4524677!3d28.5713965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e779c19e429641%3A0xcbc0d79393afdf5e!2s1322%20N%20Pine%20Hills%20Rd%2C%20Orlando%2C%20FL%2032808%2C%20USA!5e0!3m2!1sen!2s!4v1755528129342!5m2!1sen!2s"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form fade-top">
                    <h3>Leave Your Message</h3>
                    <form action="#" method="post" className="section__content-cta">
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input type="text" name="contact-name" id="contactName" placeholder="Name" />
                        </div>
                        <div className="group-input">
                          <input type="email" name="contact-email" id="contactEmail" placeholder="Email" />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select className="subject">
                          <option data-display="Subject">Select Services</option>
                          <option value="1">Logo Design</option>
                          <option value="2">Website Design</option>
                          <option value="3">Ecommerce Solution</option>
                          <option value="4">Branding</option>
                          <option value="5">Mobile Application</option>
                          <option value="6">Software Development</option>
                          <option value="7">Animation</option>
                          <option value="8">Digital Marketing</option>
                        </select>
                      </div>
                      <div className="group-input">
                        <textarea name="contact-message" id="contactMessage" placeholder="Message"></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;





