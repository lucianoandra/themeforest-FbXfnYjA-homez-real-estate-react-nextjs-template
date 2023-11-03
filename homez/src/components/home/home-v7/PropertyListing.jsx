'use client'
import listings from "@/data/listings";
import Link from 'next/link';

import React, { useEffect, useState } from 'react'

import FeaturedListings from './FeatuerdListings'

export default function PropertyListing() {
    const [pageData, setPageData] = useState([])
  const [currentType, setCurrentType] = useState('rent')
  useEffect(() => {
      if (currentType == 'rent') {
          const filtered = listings.filter((elm)=>elm.forRent)
          setPageData(filtered)
          
      } else {
          const filtered = listings.filter((elm)=> !elm.forRent)
          setPageData(filtered)
          
      }
    
  }, [currentType])
  return (
    <section className="bgc-f7">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Discover Popular Properties</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End .col-lg-9 */}

            <div className="col-lg-3">
              <div className="dark-light-navtab style2 text-start text-lg-end mt-0 mt-lg-4 mb-4">
                <ul
                  className="nav nav-pills justify-content-start justify-content-lg-end"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation" onClick={()=>setCurrentType('rent')} >
                    <button className={`nav-link ${currentType == 'rent' ? 'active':''} `} type="button">
                      For Rent
                    </button>
                  </li>
                  <li className="nav-item" role="presentation" onClick={()=>setCurrentType('sale')}>
                    <button className={`nav-link me-0 ${currentType == 'sale' ? 'active':''} `} type="button">
                      For Sale
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <FeaturedListings data={pageData} />
          </div>
          {/* End .row */}

          <div className="d-grid d-md-block text-center mt30 mt0-md">
            <Link href="/grid-full-2-col" className="ud-btn btn-dark bdrs0">
              Learn More<i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>
  )
}
