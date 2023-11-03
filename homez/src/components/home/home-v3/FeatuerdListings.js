
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({cities}) => {
  return (
    <>
      {cities.slice(0, 8).map((listing) => (
        <div className="col-sm-6 col-lg-4 col-xl-3" key={listing.id}>
          <div className="listing-style5">
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100 h-100 cover"
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {listing.featured && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>
              <div className="list-meta2">
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
            <div className="list-content">
              <div className="list-price mb-2">
                {listing.price} / <span>mo</span>
              </div>
              <h6 className="list-title">
                <Link href={`/single-v3/${listing.id}`}>{listing.title}</Link>
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
