import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto – your trusted partner for easy and
            hassle-free doctor appointments. Book, manage, and consult with top
            doctors anytime, anywhere.
          </p>
          <p>
            Prescripto helps you book doctor appointments, manage prescriptions,
            and access healthcare with ease. Your health, simplified in one app.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision is to make quality healthcare accessible to everyone,
            anytime, anywhere. We strive to bridge the gap between patients and
            doctors through technology.
          </p>
        </div>
      </div>

      <div className="text-xL my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency</b>
          <p>
            Achieve more in less time with optimized solutions. Work smarter,
            not harder.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>
            Seamlessly access everything you need, anytime. Simplifying tasks
            has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization </b>
          <p>
            Tailored experiences designed just for you. Your needs, your way,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
