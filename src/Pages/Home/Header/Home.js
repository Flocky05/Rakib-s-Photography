import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useChangeTitle from "../../../hooks/changeTitle";
import img from "../../../images/Home/home.webp";
import ServiceCard from "../Services/ServiceCard/ServiceCard";
import { BeatLoader } from "react-spinners";
import BlogPage from "../BlogPage/BlogPage";
import AboutMe from "../../AboutMe/AboutMe";
import Page from "../Page/Page";

export const Home = () => {
  const [services, setServices] = useState([]);
  useChangeTitle("Home");

  useEffect(() => {
    fetch(`https://rakibs-photography-server.vercel.app/services?size=3`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={img}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <button>
                <Link
                  to="/"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg "
                >
                  Get started
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center p-6">
          Some are Services are here
        </h2>
        {services?.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 w-max mx-auto md:grid-cols-2 p-4 gap-8">
            {services?.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        ) : (
          <div className="flex justify-center mt-[10%]">
            <BeatLoader color="#36d7b7" />
          </div>
        )}
      </div>
      <div className="flex justify-end mx-28 py-3">
        <button>
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg "
          >
            See more
          </Link>
        </button>
      </div>
      <BlogPage></BlogPage>
      <AboutMe></AboutMe>
      <Page></Page>
    </div>
  );
};

export default Home;
