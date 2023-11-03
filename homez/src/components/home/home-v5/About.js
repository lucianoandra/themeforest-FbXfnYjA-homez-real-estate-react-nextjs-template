import Image from "next/image";
import Link from "next/link";

const About = () => {
  const featureList = [
    "Find excellent deals",
    "Friendly host & Fast support",
    "List your own property",
  ];
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <div
            className="about-box-1 pe-4 mt100 mt0-lg mb30-lg "
            data-aos="fade-left"
          >
            <h2 className="title mb30">
              Let’s find the right selling option for you
            </h2>
            <p className="text mb25 fz15">
              As the complexity of buildings to increase, the field of
              architecture
            </p>
            <div className="list-style1 mb50">
              <ul>
                {featureList.map((list, index) => (
                  <li key={index}>
                    <i className="far fa-check text-white bgc-dark fz15"></i>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/single-v1/2" className="ud-btn btn-white2">
              Learn More<i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-lg-9 col-xl-8 col-xxl-7 offset-xxl-1">
          <div className="position-relative mb35 mb0-sm" data-aos="fade-right">
            <div className="img-box-1 list-inline-item me-0">
              <Image
                width={270}
                height={350}
                className="img-1"
                src="/images/about/about-1.jpg"
                alt="about"
              />
            </div>
            <div className="img-box-2 list-inline-item me-0">
              <Image
                width={370}
                height={520}
                className="img-1"
                src="/images/about/about-2.jpg"
                alt="about"
              />
            </div>
            <div className="img-box-3">
              <Image
                width={276}
                height={146}
                className="img-1 bounce-y"
                src="/images/about/about-1.png"
                alt="about"
              />
            </div>
            <div className="img-box-4">
              <Image
                width={193}
                height={193}
                className="img-1 spin-right"
                src="/images/about/element-1.png"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
