import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="text-primary">Our Testimonial</h5>
            <h1>Our Client Saying!</h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeIn"
            data-wow-delay=".5s"
          >
            <div className="testimonial-item border p-4">
              <div className="d-flex align-items-center">
                <div className="">
                  <Image
                    src="/img/testimonial-1.jpg"
                    alt=""
                    width={400}
                    height={200}
                  />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                  leo cursus, ac viverra eros morbi quis quam mi.
                </p>
              </div>
            </div>
            <div className="testimonial-item border p-4">
              <div className=" d-flex align-items-center">
                <div className="">
                  <Image
                    src="/img/testimonial-2.jpg"
                    alt=""
                    width={400}
                    height={200}
                  />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                  leo cursus, ac viverra eros morbi quis quam mi.
                </p>
              </div>
            </div>
            <div className="testimonial-item border p-4">
              <div className=" d-flex align-items-center">
                <div className="">
                  <Image
                    src="/img/testimonial-3.jpg"
                    alt=""
                    width={400}
                    height={200}
                  />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                  leo cursus, ac viverra eros morbi quis quam mi.
                </p>
              </div>
            </div>
            <div className="testimonial-item border p-4">
              <div className=" d-flex align-items-center">
                <div className="">
                  <Image
                    src="/img/testimonial-4.jpg"
                    alt=""
                    width={400}
                    height={200}
                  />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                    <i className="fas fa-star me-1 text-primary" />
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                  leo cursus, ac viverra eros morbi quis quam mi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Testimonial;
