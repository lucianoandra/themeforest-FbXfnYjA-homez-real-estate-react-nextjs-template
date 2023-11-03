
'use client'

import AdvanceFilterModal from "@/components/common/advance-filter-two";
import HeroContent from "./HeroContent";

const Hero = ({filterFunctions}) => {
  return (
    <>
      <div className="inner-banner-style1 text-center">
        <h2 className="hero-title animate-up-3">Find Your Dream Home</h2>
        <p className="hero-text animate-up-3">
          We’ve more than 745,000 apartments, place &amp; plot.
        </p>
        <HeroContent filterFunctions={filterFunctions} />
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
