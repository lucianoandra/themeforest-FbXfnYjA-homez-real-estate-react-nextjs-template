'use client'


import Image from "next/image";
import Link from "next/link";
import React from "react";



const AllAgents = ({data}) => {
  return (
    <>
      {data.map((agent) => (
        <div key={agent.id} className="col-md-6 col-lg-4">
          <div className="agency-style1 p30 bdrs12 bdr1 mb30">
            <div className="agency-img">
              <Image
                width={324}
                height={209}
                className="w-100 contain"
                src={agent.imgSrc}
                alt="agency"
              />
              <div className="tag">{agent.propertiesCount}</div>
            </div>
            <div className="agency-details pt40">
              <h6 className="fw400">
                <i className="fas fa-star review-color2 pr10 fz10" />
                {agent.starRating}
              </h6>
              <h6 className="agency-title mb-1">{agent.agencyTitle}</h6>
              <p className="fz15">{agent.address}</p>
              <div className="d-grid">
                <Link href={`/agency-single/${agent.id}`} className="ud-btn btn-white2">
                  View Listings
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllAgents;
