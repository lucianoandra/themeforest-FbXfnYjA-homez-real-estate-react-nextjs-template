"use client";

import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "MAIN",
      items: [
        {
          icon: "flaticon-discovery",
          text: "Dashboard",
          href: "/dashboard-home",
        },
        {
          icon: "flaticon-chat-1",
          text: "Message",
          href: "/dashboard-message",
        },
      ],
    },
    {
      title: "MANAGE LISTINGS",
      items: [
        {
          icon: "flaticon-new-tab",
          text: "Add New Property",
          href: "/dashboard-add-property",
        },
        {
          icon: "flaticon-home",
          text: "My Properties",
          href: "/dashboard-my-properties",
        },
        {
          icon: "flaticon-like",
          text: "My Favorites",
          href: "/dashboard-my-favourites",
        },
        {
          icon: "flaticon-search-2",
          text: "Saved Search",
          href: "/dashboard-saved-search",
        },
        { icon: "flaticon-review", text: "Reviews", href: "/dashboard-review" },
      ],
    },
    {
      title: "MANAGE ACCOUNT",
      items: [
        {
          icon: "flaticon-protection",
          text: "My Package",
          href: "/dashboard-my-package",
        },
        {
          icon: "flaticon-user",
          text: "My Profile",
          href: "/dashboard-my-profile",
        },
        { icon: "flaticon-exit", text: "Logout", href: "/login" },
      ],
    },
  ];

  return (
    <>
      <header className="header-nav nav-homepage-style light-header position-fixed menu-home4 main-menu">
        <nav className="posr">
          <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-start d-flex align-items-center">
                  <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                    <Link className="logo" href="/">
                      <Image
                        width={138}
                        height={44}
                        src="/images/header-logo2.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <a
                    className="dashboard_sidebar_toggle_icon text-thm1 vam"
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#SidebarPanel"
                    aria-controls="SidebarPanelLabel"
                  >
                    <Image
                      width={25}
                      height={9}
                      className="img-1"
                      src="/images/dark-nav-icon.svg"
                      alt="humberger menu"
                    />
                  </a>
                </div>
              </div>
              {/* End .col-auto */}

              <div className="d-none d-lg-block col-lg-auto">
                <MainMenu />
                {/* End Main Menu */}
              </div>
              {/* End d-none d-lg-block */}

              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-end header_right_widgets">
                  <ul className="mb0 d-flex justify-content-center justify-content-sm-end p-0">
                    <li className="d-none d-sm-block">
                      <Link className="text-center mr15" href="/login">
                        <span className="flaticon-email" />
                      </Link>
                    </li>
                    {/* End email box */}

                    <li className="d-none d-sm-block">
                      <a className="text-center mr20 notif" href="#">
                        <span className="flaticon-bell" />
                      </a>
                    </li>
                    {/* End notification icon */}

                    <li className=" user_setting">
                      <div className="dropdown">
                        <a className="btn" href="#" data-bs-toggle="dropdown">
                          <Image
                            width={44}
                            height={44}
                            src="/images/resource/user.png"
                            alt="user.png"
                          />
                        </a>
                        <div className="dropdown-menu">
                          <div className="user_setting_content">
                            {menuItems.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <p
                                  className={`fz15 fw400 ff-heading ${
                                    sectionIndex === 0 ? "mb20" : "mt30"
                                  }`}
                                >
                                  {section.title}
                                </p>
                                {section.items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    className={`dropdown-item ${
                                      pathname == item.href ? "-is-active" : ""
                                    } `}
                                    href={item.href}
                                  >
                                    <i className={`${item.icon} mr10`} />
                                    {item.text}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* End avatar dropdown */}
                  </ul>
                </div>
              </div>
              {/* End .col-6 */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default DashboardHeader;
