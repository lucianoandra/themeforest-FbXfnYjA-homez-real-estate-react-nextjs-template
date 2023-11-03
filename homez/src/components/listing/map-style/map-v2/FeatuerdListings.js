import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({data,colstyle}) => {
  return (
    <>
      {data.map((listing) => (
        <div className={` ${colstyle ? 'col-sm-12':'col-sm-12 col-lg-6 '}  `} key={listing.id}>
          <div className={colstyle ? "listing-style1 listCustom listing-type" : "listing-style1"}>
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100 cover"
                style={{height:'277px'}}
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

              <div className="list-price">
                {listing.price} / <span>mo</span>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/single-v4/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} bed
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} bath
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.sqft} sqft
                </a>
              </div>
              <p className="list-text2">
                An exceptional exclusive five bedroom apartment for sale in this
                much sought after development in Knightsbridge.
              </p>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">For Rent</span>
                <div className="icons d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
