"use client";
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FilterProperties = () => {
  const [selectedTag, setSelectedTag] = useState("house");

  const filteredListings = listings.filter(
    (listing) => listing.tags && listing.tags.includes(selectedTag)
  );

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <div className="row wow fadeInUp" data-wow-delay="100ms">
        <div className="col-lg-6">
          <div className="main-title2">
            <h2 className="title">Discover Popular Properties</h2>
            <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="dark-light-navtab style2 text-start text-lg-end mt-0 mt-lg-4 mb-4">
            <ul className="nav nav-pills justify-content-start justify-content-lg-end">
              <li className="nav-item">
                <button
                  className={`nav-link mb10-sm ${
                    selectedTag === "house" ? "active" : ""
                  }`}
                  onClick={() => handleTagClick("house")}
                >
                  House
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mb10-sm ${
                    selectedTag === "villa" ? "active" : ""
                  }`}
                  onClick={() => handleTagClick("villa")}
                >
                  Villa
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mb10-sm ${
                    selectedTag === "office" ? "active" : ""
                  }`}
                  onClick={() => handleTagClick("office")}
                >
                  Office
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mb10-sm ${
                    selectedTag === "apartments" ? "active" : ""
                  }`}
                  onClick={() => handleTagClick("apartments")}
                >
                  Apartments
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
          <div className="tab-content">
            <div className="row">
              {filteredListings.slice(1, 7).map((listing) => (
                <div className="col-md-6 col-xl-4" key={listing.id}>
                  <div className="listing-style6">
                    <div className="list-thumb">
                      <Image
                        width={386}
                        height={334}
                        className="w-100 cover"
                        src={listing.image}
                        alt="listings"
                      />

                      <div className="sale-sticker-wrap">
                        {!listing.forRent && (
                          <div className="list-tag fz12">
                            <span className="flaticon-electricity me-2" />
                            FEATURED
                          </div>
                        )}
                      </div>

                      <div className="list-meta">
                        <div className="icons">
                          <a href="#">
                            <span className="flaticon-like" />
                          </a>
                          <a href="#">
                            <span className="flaticon-new-tab" />
                          </a>
                          <a href="#">
                            <span className="flaticon-fullscreen" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-content">
                      <div className="list-price mb-2">{listing.price}</div>
                      <h6 className="list-title">
                        <Link href={`/single-v4/${listing.id}`}>{listing.title}</Link>
                      </h6>
                      <p className="list-text">{listing.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterProperties;
