import Image from "next/image";
import Head from "next/head";
import { Metadata } from "next";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Facts from "./components/Facts";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Hello how are you bhai",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <main>
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-grow text-primary" role="status" />
        </div>
        {/* Spinner End */}
        <Carousel />
        <Facts />
        <AboutUs />
        <Service />
        <Project />
        <Blog />
        <Team />
        <Testimonial />
        <Contact />
        
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-secondary btn-square rounded-circle back-to-top"
        >
          <i className="fa fa-arrow-up text-white" />
        </a>
      </main>
    </>
  );
}
