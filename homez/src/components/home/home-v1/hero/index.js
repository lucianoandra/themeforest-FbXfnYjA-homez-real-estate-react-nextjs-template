import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <>
      <div className="inner-banner-style1 text-center">
        <h6 className="hero-sub-title animate-up-1">THE BEST WAY TO</h6>
        <h2 className="hero-title animate-up-2">Find Your Dream Home</h2>
        <p className="hero-text fz15 animate-up-3">
          We’ve more than 745,000 apartments, place &amp; plot.
        </p>
        <HeroContent />
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
          <AdvanceFilterModal />
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
