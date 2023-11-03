import DefaultHeader from "@/components/common/DefaultHeader";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Pagination from "@/components/listing/Pagination";
import FeaturedListings from "@/components/listing/map-style/header-map-style/FeatuerdListings";
import PropertyFilteringMap from "@/components/listing/map-style/header-map-style/PropertyFilteringMap";
import TopFilterBar from "@/components/listing/map-style/header-map-style/TopFilterBar";
import TopFilterBar2 from "@/components/listing/map-style/header-map-style/TopFilterBar2";
import React from "react";

export const metadata = {
  title: "Header Map Style || Homez - Real Estate NextJS Template",
};

const HeaderMapStyle = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

     <PropertyFilteringMap/>
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default HeaderMapStyle;
