import React from 'react';
import person from '../../../assets/assets/images/about_us/person.jpg'
import parts from '../../../assets/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen  ">
        <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
          <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className=" w-1/2 absolute right-5 top-1/2 border-8 
          border-white  rounded-lg shadow-2xl" />
        </div>
          <div className='lg:w-1/2 space-y-3'>
            <p className='text-orange-700 text-3xl font-bold'>About us</p>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className=" ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className=" ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <button className="btn border-0 bg-red-700">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;