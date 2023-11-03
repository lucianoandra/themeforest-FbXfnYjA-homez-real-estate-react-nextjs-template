"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Funfact = () => {
  const funFacts = [
    { number: 400, text: "Stores around the world" },
    { number: 200, text: "Stores around the world" },
    { number: 1000, text: "Stores around the world" },
    // Add more fun facts if needed
  ];

  return (
    <>
      {funFacts.map((fact, index) => (
        <div className="col-sm-6 col-lg-4 col-xl-2" key={index}>
          <div className="funfact_one text-center">
            <div className="details">
              <ul className="ps-0 mb-0">
                <li>
                  <div className="timer">
                    <CounterWithAnimation end={fact.number} />
                  </div>
                </li>
              </ul>
              <p className="text mb-0">{fact.text}</p>
            </div>
          </div>
        </div>
      ))}
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

  const formatNumber = (value) => {
    if (value >= 1000) {
      return `${Math.floor(value / 1000)}k+`;
    } else if (value === 400) {
      return `${value}`;
    } else {
      return `${value}+`;
    }
  };

  return (
    <span ref={countRef}>
      {inView ? (
        <CountUp
          end={end}
          duration={2}
          separator=","
          formattingFn={formatNumber}
        />
      ) : (
        "0"
      )}
    </span>
  );
};

export default Funfact;
