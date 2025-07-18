import React from "react";
import Navbar from "./Components/Navbar";
import { Button } from "@headlessui/react";
import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Footer from "./Components/Footer";

const solutions = [
  {
    title: "Business Solutions",
    description:
      "Helping you strategize and scale with Websites and Technology for your Business.",
    icon: BriefcaseIcon,
  },
  {
    title: "Fintech Solutions",
    description:
      "Secure and scalable applications for financial services and payments.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Data Analytics",
    description:
      "Unlock insights and trends with powerful analytics dashboards.",
    icon: ChartBarIcon,
  },
  {
    title: "Innovation Lab",
    description: "Explore and test bold ideas in a risk-free tech sandbox.",
    icon: LightBulbIcon,
  },
  {
    title: "Custom Development",
    description: "Web & mobile apps crafted exactly for your business needs.",
    icon: DocumentTextIcon,
  },
  {
    title: "Startup Launchpad",
    description: "Launch fast with MVPs built for scale and market fit.",
    icon: RocketLaunchIcon,
  },
];

function App() {
  const scrollToSection = () => {
    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div
        id="home"
        className="h-screen scroll-mt-20 flex items-center justify-center bg-whitebg"
      >
        <div className="background-section bg-custom bg-cover lg:bg-center bg-no-repeat w-full h-screen"></div>
        <div className="absolute w-auto lg:w-5xl left-8">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Empowering Businesses with Scalable Web & Mobile Solutions
          </h1>
          <h2 className="text-xl py-3">
            Building Future-Ready Applications for Startups, Enterprises, and
            Everything in Between.
          </h2>
        </div>
      </div>

      <div
        id="about"
        className="h-auto scroll-mt-20 py-5 lg:p-0 lg:h-50 flex items-center justify-center bg-bluebg"
      >
        <div className="flex-col lg:flex lg:flex-row text-white">
          <h1 className="text-4xl font-bold px-5 w-auto lg:w-120 lg:border-r-2">
            Providing solutions for reliable growth.
          </h1>
          <h2 className="text-xl py-5 lf:py-3 w-auto lg:w-180 px-5 lg:px-10 text-blue-100 lg:border-r-2">
            Whether you're a startup seeking an MVP or an established enterprise
            looking to modernize your systems, our team delivers end-to-end tech
            solutions that grow with you.
          </h2>
          <Button
            onClick={scrollToSection}
            className="rounded bg-white h-10 px-4 my-4 lg:my-8 mx-5 lg:mx-13 text-sm text-black data-active:bg-black data-hover:bg-black data-hover:text-white"
          >
            CONTACT US
          </Button>
        </div>
      </div>

      <div id="solutions" className="scroll-mt-20 py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR SOLUTIONS</h2>
        <div className="w-24 h-1 bg-gray-400 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
          {solutions.map((sol, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <sol.icon className="h-12 w-12 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                {sol.title}
              </h3>
              <p className="text-gray-600 max-w-xs">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="contact"
        className="text-white scroll-mt-20 h-auto flex flex-col flex-wrap justify-center items-center bg-bluebg p-20"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold  mb-4">Contact Us</h2>

            <div>
              <h4 className="font-semibold ">Email</h4>
              <p className="">support@telepathystudios.icu</p>
            </div>

            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="">+91 8902161213</p>
            </div>

            <div>
              <h4 className="font-semibold ">Address</h4>
              <p className="">
                9B/1, Kenaram Ganguly Rd, Paschim Barisha
                <br />
                Kolkata, West Bengal 700008
                <br />
                India
              </p>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="w-full h-80 md:h-full">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1550.0849896591849!2d88.30241734461276!3d22.476245073158545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027ba939b8016b%3A0x2c58c82854464f3e!2sTelepathy%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1752850230880!5m2!1sen!2sin"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
