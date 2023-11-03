import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="footer-widget light-style mb-4 mb-lg-5">
              <Link className="footer-logo" href="/">
                <Image
                  width={138}
                  height={44}
                  className="mb40"
                  src="/images/header-logo2.svg"
                  alt=""
                />
              </Link>

              <ContactMeta />
            </div>
          </div>

          <MenuWidget />

          <div className="col-sm-6 col-lg-3">
            <div className="footer-widget mb-4 mb-lg-5">
              <div className="mailchimp-widget mb30">
                <h6 className="title mb30">Keep Yourself Up to Date</h6>
                <Subscribe />
              </div>

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
