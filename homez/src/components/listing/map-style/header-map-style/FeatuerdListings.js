import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({data,colstyle}) => {
  return (
    <>
      {data.map((listing) => (
        <div  className={` ${colstyle ? 'col-sm-12':'col-sm-6 col-lg-4'}  `} key={listing.id}>
          <div className={colstyle ? "listing-style6 listCustom listing-type" : "listing-style6"}>
            <div className="list-thumb"    >
              <Image
                width={386}
                height={334}
                className="w-100  cover"
                style={{height:'309px'}}
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {listing.forRent && (
                  <div className="list-tag rounded-0 fz12">
                    <span className="flaticon-electricity" />
                    FEATURED
                  </div>
                )}
                <div className="list-tag2 rounded-0 fz12">FOR SALE</div>
              </div>
              <div className="list-meta">
                <a className="rounded-0 mr5" href="#">
                  <span className="flaticon-like"></span>
                </a>
                <a className="rounded-0 mr5" href="#">
                  <span className="flaticon-new-tab"></span>
                </a>
                <a className="rounded-0" href="#">
                  <span className="flaticon-fullscreen"></span>
                </a>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/single-v4/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
