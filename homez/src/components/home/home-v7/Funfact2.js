"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Funfact2 = () => {
  const funFacts = [
    {
      number: 2500,
      text: (
        <>
          Listing for <br /> sale
        </>
      ),
    },
    {
      number: 900,
      text: (
        <>
          Listing for <br /> rent
        </>
      ),
    },
    {
      number: 1350,
      text: (
        <>
          Prooperty for <br /> sold
        </>
      ),
    },

    // Add more fun facts if needed
  ];
  // Split the funFacts array into two arrays: firstTwoFacts and remainingFacts
  const firstTwoFacts = funFacts.slice(0, 2);
  const remainingFacts = funFacts.slice(2);
  return (
    <>
      <div className="col-sm-6">
        {firstTwoFacts.map((fact, index) => (
          <div className="funfact-style1 text-center" key={index}>
            <ul className="ps-0 mb-0 d-flex justify-content-center">
              <li>
                <div className="timer title mb15">
                  <CounterWithAnimation end={fact.number} />+
                </div>
              </li>
            </ul>
            <p className="fz15 dark-color">{fact.text}</p>
          </div>
        ))}
      </div>
      <div className="col-sm-6">
        {remainingFacts.map((fact, index) => (
          <div className="funfact-style1 text-center" key={index}>
            <ul className="ps-0 mb-0 d-flex justify-content-center">
              <li>
                <div className="timer title mb15">
                  <CounterWithAnimation end={fact.number} />+
                </div>
              </li>
            </ul>
            <p className="fz15 dark-color">{fact.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const CounterWithAnimation = ({ end }) => {
  const countRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, options);

    const currentRef = countRef.current; // Create a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <span ref={countRef}>
      {inView ? (
        <CountUp
          end={end}
          duration={2}
          separator=","
          // formattingFn={formatNumber}
        />
      ) : (
        "0"
      )}
    </span>
  );
};

export default Funfact2;
