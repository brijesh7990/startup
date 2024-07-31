import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <>
      {/* Project Start */}
      <div className="container-fluid project py-5 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="text-primary">Our Project</h5>
            <h1>Our Recently Completed Projects</h1>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="project-item">
                <div className="project-img">
                  <Image
                    src="/img/project-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">Web design</h4>
                      <p className="m-0 text-white">Web Analysis</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="project-item">
                <div className="project-img">
                  <Image
                    src="/img/project-2.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">Cyber Security</h4>
                      <p className="m-0 text-white">Cyber Security Core</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="project-item">
                <div className="project-img">
                  <Image
                    src="/img/project-3.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">Mobile Info</h4>
                      <p className="m-0 text-white">Upcomming Phone</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="project-item">
                <div className="project-img">
                  <Image
                    src="/img/project-4.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">Web Development</h4>
                      <p className="m-0 text-white">Web Analysis</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="project-item">
                <div className="project-img">
                  <Image
                    src="/img/project-5.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">Digital Marketing</h4>
                      <p className="m-0 text-white">Marketing Analysis</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="project-item">
                <div className="project-img">
                  <Image
                    src="/img/project-6.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="project-content">
                    <a href="#" className="text-center">
                      <h4 className="text-secondary">keyword Research</h4>
                      <p className="m-0 text-white">keyword Analysis</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}
    </>
  );
};

export default Project;
