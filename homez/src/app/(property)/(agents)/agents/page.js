import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FilteringAgent from "@/components/property/FilteringAgent";

import React from "react";

export const metadata = {
  title: "Agents || Homez - Real Estate NextJS Template",
};

const Agents = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Agents</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">For Rent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Agent Section Area */}
      <FilteringAgent/>
      
      {/* End Agent Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Agents;
