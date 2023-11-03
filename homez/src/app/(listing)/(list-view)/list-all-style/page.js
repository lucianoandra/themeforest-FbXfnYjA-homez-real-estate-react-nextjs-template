import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Listing1 from "@/components/listing/list-view/all-list-style/Listing1";
import Listing2 from "@/components/listing/list-view/all-list-style/Listing2";
import Listing3 from "@/components/listing/list-view/all-list-style/Listing3";
import Listing4 from "@/components/listing/list-view/all-list-style/Listing4";
import Listing5 from "@/components/listing/list-view/all-list-style/Listing5";
import Listing6 from "@/components/listing/list-view/all-list-style/Listing6";
import Listing7 from "@/components/listing/list-view/all-list-style/Listing7";
import Listing8 from "@/components/listing/list-view/all-list-style/Listing8";
import React from "react";

export const metadata = {
  title: "List V1 || Homez - Real Estate NextJS Template",
};

const ListV1 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">All List Style</h2>
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

      {/* Start All List Style form here */}
      <section className="pt0 pb90 bgc-f7">
        <div className="container">
          <div className="mb30">
            <h4 className="mb30">List Style V1</h4>
            <div className="row">
              <Listing1 />
            </div>
          </div>
          {/* End listing 1 */}

          <div className="mb30">
            <h4 className="mb30">List Style V2</h4>
            <div className="row">
              <Listing2 />
            </div>
          </div>
          {/* End listing 2 */}

          <div className="mb30">
            <h4 className="mb30">List Style V3</h4>
            <div className="row">
              <Listing3 />
            </div>
          </div>
          {/* End listing 3 */}

          <div className="mb30">
            <h4 className="mb30">List Style V4</h4>
            <div className="row">
              <Listing4 />
            </div>
          </div>
          {/* End listing 4 */}

          <div className="mb30">
            <h4 className="mb30">List Style V5</h4>
            <div className="row">
              <Listing5 />
            </div>
          </div>
          {/* End listing 5 */}

          <div className="mb30">
            <h4 className="mb30">List Style V6</h4>
            <div className="row">
              <Listing6 />
            </div>
          </div>
          {/* End listing 6 */}

          <div className="mb30">
            <h4 className="mb30">List Style V7</h4>
            <div className="row">
              <Listing7 />
            </div>
          </div>
          {/* End listing 7 */}

          <div className="mb0">
            <h4 className="mb30">List Style V</h4>
            <div className="row">
              <Listing8 />
            </div>
          </div>
          {/* End listing 8 */}
        </div>
      </section>
      {/* End All List Style start form here */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default ListV1;
