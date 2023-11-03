import DefaultHeader from "@/components/common/DefaultHeader";

import MobileMenu from "@/components/common/mobile-menu";

import PropertyFilteringThree from "@/components/listing/map-style/map-v2/PropertyFilteringThree";

import React from "react";

export const metadata = {
  title: "Map V2 || Homez - Real Estate NextJS Template",
};

const MapV2 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
            {/* Property Filtering */}
      <PropertyFilteringThree/>

     
      {/* Property Filtering */}
    </>
  );
};

export default MapV2;
