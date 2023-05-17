import React from "react";
import {  HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { description, img, price, service_id, title, _id, facility } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src= {img}
          alt="Services"
        />
      </figure>
      <div className="card-body mt-5">
        <h2 className="card-title">
           {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-orange-600"> Price: {price}</p>
        <div className="card-actions  justify-end text-3xl text-orange-700">
        <Link to={`/book/${_id}`}> <button className="btn btn-warning"> Book Now <HiArrowSmRight/></button> </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
