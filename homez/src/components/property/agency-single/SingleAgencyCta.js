import { agentsData } from "@/data/agency";
import Image from "next/image";
import React from "react";



const SingleAgencyCta = ({id}) => {

  const data = agentsData.filter((elm) => elm.id == id)[0] || agentsData[0];

  const agentData = {
    name: data.name,
    company: data.agencyTitle,
    reviews: `${data.starRating} • 49 Reviews`,
    phone1: "+848 032 03 01",
    phone2: "+848 032 03 01",
  };
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center">
        <div className="single-img mb30-sm">
          <Image
            width={172}
            height={172}
            src={data.imgSrc}
            style={{borderRadius:'50%',objectFit:'cover'}}
            alt="agents"
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml30 ml0-xs">
          <h2 className="title mb-0 text-white">{agentData.name}</h2>
          <p className="fz15 text-white">
            Company Agent at <b>{agentData.company}</b>
          </p>
          <div className="agent-meta mb15 d-md-flex align-items-center">
            <a className="text fz15 pe-2 bdrr1 text-white" href="#">
              <i className="fas fa-star fz10 review-color2 pr10" />
              {agentData.reviews}
            </a>
            <a className="text fz15 pe-2 ps-2 bdrr1 text-white" href="#">
              <i className="flaticon-call pe-1" />
              {agentData.phone1}
            </a>
            <a className="text fz15 ps-2 text-white" href="#">
              <i className="flaticon-smartphone pe-1" />
              {agentData.phone2}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAgencyCta;
