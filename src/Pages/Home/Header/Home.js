import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useChangeTitle from "../../../hooks/changeTitle";
import img from "../../../images/Home/home.webp";
import ServiceCard from "../Services/ServiceCard/ServiceCard";
import { BeatLoader } from "react-spinners";
import BlogPage from "../BlogPage/BlogPage";
import AboutMe from "../../AboutMe/AboutMe";
import Page from "../Page/Page";
import Team from "../Team/Team";
import Step from "../Step/Step";
import HomePage2 from "./HomePage2";
import Destination from "../../Destination/Destination";

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
      <HomePage2></HomePage2>
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
      <AboutMe></AboutMe>
      <Team></Team>
      <Step></Step>
      <Destination></Destination>
    </div>
  );
};

export default Home;
