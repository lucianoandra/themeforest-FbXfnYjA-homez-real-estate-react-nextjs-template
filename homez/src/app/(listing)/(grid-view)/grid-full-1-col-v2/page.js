import DefaultHeader from "@/components/common/DefaultHeader";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import PropertyFilteringCol from "@/components/listing/grid-view/grid-full-1-col-v2/PropertyFilteringCol";



import React from "react";

export const metadata = {
  title: "Gird Full 1 Column V2 || Homez - Real Estate NextJS Template",
};

const GridFull1ColV2 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Advance Search */}
      
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <PropertyFilteringCol/>
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default GridFull1ColV2;
