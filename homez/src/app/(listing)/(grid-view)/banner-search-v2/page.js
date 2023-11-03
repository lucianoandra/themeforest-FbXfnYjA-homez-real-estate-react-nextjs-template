import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import PropertyFilteringBannerTwo from "@/components/listing/grid-view/banner-search-v2/PropertyFilteringBannerTwo";

import React from "react";

export const metadata = {
  title: "Banner Search V2 || Homez - Real Estate NextJS Template",
};

const BannerSearchV2 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* property-banner-style2 */}
      <PropertyFilteringBannerTwo/>
      
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default BannerSearchV2;
