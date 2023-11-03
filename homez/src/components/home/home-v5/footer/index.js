import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mx-auto">
            <Subscribe />
          </div>
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="footer-widget mb-4 mb-lg-5">
              <Link className="footer-logo" href="/">
                <Image
                  width={138}
                  height={44}
                  className="mb40"
                  src="/images/header-logo.svg"
                  alt=""
                />
              </Link>
              <ContactMeta />
            </div>
          </div>
          {/* End .col */}

          <MenuWidget />
          {/* End MenuWidget */}

          <div className="col-sm-6 col-lg-3">
            <div className="footer-widget mb-4 mb-lg-5">
              <AppWidget />
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;
