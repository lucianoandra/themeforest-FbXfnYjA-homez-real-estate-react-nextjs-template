const Faq1 = () => {
  const faqItems = [
    {
      id: "headingOne",
      question: "Can a home depreciate in value?",
      answer:
        "It doesn’t matter how organized you are — a surplus of toys will always ensure your house",
    },
    {
      id: "headingTwo",
      question: "Is an older home as good a value as a new home?",
      answer:
        "It doesn’t matter how organized you are — a surplus of toys will always ensure your house",
    },
    {
      id: "headingThree",
      question: "What is a broker?",
      answer:
        "It doesn’t matter how organized you are — a surplus of toys will always ensure your house is a mess waiting to happen. Fortunately, getting kids on board with the idea of ditching their stuff is a lot easier than it sounds. <br /><br /> The trick is to make it an opportunity for them to define themselves and their interests. Encourage kids to make a pile of ”baby toys” to donate, and have them set aside any toys that no longer interest them, such as action figures from a forgotten TV show. Separating these toys will help them appreciate how much they’ve grown and rediscover the toys they love.",
    },
    {
      id: "headingFour",
      question: "Can I pay my own taxes and insurance?",
      answer:
        "It doesn’t matter how organized you are — a surplus of toys will always ensure your house",
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={item.id}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index + 1}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={item.id}
            data-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq1;
