"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";

const images = [
  {
    src: "/images/listings/listing-single-3.jpg",
    alt: "2.jpg",
  },
  {
    src: "/images/listings/listing-single-2.jpg",
    alt: "3.jpg",
  },
];

const PropertyGallery = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  return (
    <>
      <Gallery>
        <div className="col-sm-9">
          <div className="sp-img-content mb15-md ">
            <div className="popup-img preview-img-1 sp-img ">
              <Item
                original={"/images/listings/listing-single-10.jpg"}
                thumbnail={"/images/listings/listing-single-10.jpg"}
                width={890}
                height={680}
              >
                {({ ref, open }) => (
                  <Image
                    src={"/images/listings/listing-single-10.jpg"}
                    width={890}
                    height={680}
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

        <div className="col-sm-3">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-sm-12 ps-lg-0" key={index}>
                <div className="sp-img-content at-sp-v10">
                  <div
                    className={` popup-img preview-img-2 sp-img${
                      index < 2 ? "  mb10" : ""
                    }`}
                  >
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
