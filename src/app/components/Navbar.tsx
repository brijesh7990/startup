import Link from "next/link";
const Navbar = () => {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid bg-primary">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <Link href={"/"} className="navbar-brand">
              <h1 className="text-white fw-bold d-block">
                Brijesh<span className="text-secondary">Tech</span>{" "}
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse bg-transparent"
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <Link
                  href={"/"}
                  className="nav-item nav-link active text-secondary"
                >
                  Home
                </Link>
                <Link href={"/about"} className="nav-item nav-link">
                  About
                </Link>
                <Link href={"/services"} className="nav-item nav-link">
                  Services
                </Link>
                <Link href={"/project"} className="nav-item nav-link">
                  Projects
                </Link>
                <Link href={"/contact"} className="nav-item nav-link">
                  Contact
                </Link>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4"
              >
                <a href="" className="position-relative animated tada infinite">
                  <i className="fa fa-phone-alt text-white fa-2x" />
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: 20 }}
                  >
                    <span>
                      <i className="fa fa-comment-dots text-secondary" />
                    </span>
                  </div>
                </a>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="text-secondary">Call: + 0123 456 7890</span>
              </div>
              <div className="d-flex align-items-center justify-content-center ms-4 ">
                <a href="#">
                  <i className="bi bi-search text-white fa-2x" />{" "}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
