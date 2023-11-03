
'use client'

import React from 'react'
import BlogFilter from './BlogFilter'
import Pagination from '../Pagination'

export default function BlogFilterContainer() {
  return (
    <section className="our-blog pt-0">
    <div className="container">
      <div className="row" data-aos="fade-up" data-aos-delay="300">
        <div className="col-xl-12 navpill-style1">
          <BlogFilter />
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        <div className="mbp_pagination text-center">
          <Pagination />

        </div>
      </div>
    </div>
  </section>
  )
}
