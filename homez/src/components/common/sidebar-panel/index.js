import ContactInfo from "./ContactInfo";
import MenuItems from "./MenuItems";
import SocialLinks from "./SocialLinks";

const SidebarPanel = () => {
  return (
    <div className="rightside-hidden-bar">
      <div className="hsidebar-header">
        <div
          className="sidebar-close-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span className="far fa-times"></span>
        </div>
        <h4 className="title">Welcome to Realton</h4>
      </div>
      {/* End header */}

      <div className="hsidebar-content">
        <div className="hiddenbar_navbar_content">
          <div className="hiddenbar_navbar_menu">
            <MenuItems />
          </div>
          {/* End .hiddenbar_navbar_menu */}

          <div className="hiddenbar_footer position-relative bdrt1">
            <div className="row pt45 pb30 pl30">
              <ContactInfo />
            </div>
            {/* End .row */}

            <div className="row pt30 pb30 bdrt1">
              <div className="col-auto">
                <div className="social-style-sidebar d-flex align-items-center pl30">
                  <h6 className="me-4 mb-0">Follow us</h6>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
          {/* hiddenbar_footer */}
        </div>
      </div>
      {/* End hsidebar-content */}
    </div>
  );
};

export default SidebarPanel;
