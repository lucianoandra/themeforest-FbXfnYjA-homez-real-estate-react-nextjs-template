import Image from "next/image";
import React from "react";

const energyMetrics = [
  {
    label: "Global Energy Performance Index",
    value: "A+",
  },
  {
    label: "Renewable energy performance index",
    value: "92.42 kWh / m²a",
  },
  {
    label: "Energy performance of the building",
    value: "00.00 kWh / m²a",
  },
  {
    label: "EPC Current Rating",
    value: "92",
  },
  {
    label: "EPC Potential Rating",
    value: "80+",
  },
];

const EnergyClass = () => {
  return (
    <>
      <div className="col-sm-12">
        {energyMetrics.map((metric, index) => (
          <div className="pd-list d-flex justify-content-between" key={index}>
            <p className="text mb10">{metric.label}</p>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="col-lg-12 mt20">
        <Image
          width={736}
          height={94}
          className="w-100 contain"
          src="/images/resource/energy-class.png"
          alt=""
        />
      </div>
    </>
  );
};

export default EnergyClass;
