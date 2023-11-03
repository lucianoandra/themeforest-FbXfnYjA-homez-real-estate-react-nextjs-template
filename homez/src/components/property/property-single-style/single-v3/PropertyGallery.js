"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";

const images = [
  {
    src: "/images/listings/listing-single-2.jpg",
    alt: "2.jpg",
  },
  {
    src: "/images/listings/listing-single-2a.jpg",
    alt: "2a.jpg",
  },
  {
    src: "/images/listings/listing-single-3.jpg",
    alt: "3.jpg",
  },
  {
    src: "/images/listings/listing-single-3a.jpg",
    alt: "3a.jpg",
  },
  {
    src: "/images/listings/listing-single-3b.jpg",
    alt: "3b.jpg",
  },
  {
    src: "/images/listings/listing-single-3c.jpg",
    alt: "3c.jpg",
  },
  {
    src: "/images/listings/listing-single-4a.jpg",
    alt: "4a.jpg",
  },
  {
    src: "/images/listings/listing-single-4b.jpg",
    alt: "4b.jpg",
  },
  {
    src: "/images/listings/listing-single-5.jpg",
    alt: "5.jpg",
  },
];

const PropertyGallery = ({id}) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  return (
    <>
      <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-lg">
            <div className="popup-img preview-img-1 sp-v3 sp-img">
              <Item
                original={'/images/listings/listing-single-9.jpg'}
                thumbnail={'/images/listings/listing-single-9.jpg'}
                width={610}
                height={507}
              >
                {({ ref, open }) => (
                  <Image
                    src={'/images/listings/listing-single-9.jpg'}
                    width={610}
                    height={507}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-4 ps-sm-0" key={index}>
                <div className="sp-img-content at-sp-v3">
                  <div className="popup-img preview-img-4 sp-img mb10">
                    <Item
                      original={image.src}
                      thumbnail={image.src}
                      width={270}
                      height={250}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={250}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={image.src}
                          alt={image.alt}
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
