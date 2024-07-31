import React from "react";

const Topbar = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark py-2 d-none d-md-flex">
        <div className="container">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              <small className="me-3 text-white-50">
                <a href="#">
                  <i className="fas fa-map-marker-alt me-2 text-secondary" />
                </a>
                23 Ranking Street, New York
              </small>
              <small className="me-3 text-white-50">
                <a href="#">
                  <i className="fas fa-envelope me-2 text-secondary" />
                </a>
                Email@Example.com
              </small>
            </div>
            <div id="note" className="text-secondary d-none d-xl-flex">
              <small>Note : We help you to Grow your Business</small>
            </div>
            <div className="top-link">
              <a
                href=""
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-facebook-f text-primary" />
              </a>
              <a
                href=""
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-twitter text-primary" />
              </a>
              <a
                href=""
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-instagram text-primary" />
              </a>
              <a
                href=""
                className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"
              >
                <i className="fab fa-linkedin-in text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
};

export default Topbar;
