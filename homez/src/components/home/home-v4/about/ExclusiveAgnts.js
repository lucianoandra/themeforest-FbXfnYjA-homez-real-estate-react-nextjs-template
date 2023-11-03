import Image from "next/image";

const ExclusiveAgnts = () => {
  const agents = [
    {
      name: "Marvin McKinney",
      role: "Designer",
      image: "/images/team/ea-1.png",
    },
    {
      name: "Ralph Edwards",
      role: "Designer",
      image: "/images/team/ea-2.png",
    },
    {
      name: "Annette Black",
      role: "Designer",
      image: "/images/team/ea-3.png",
    },
    {
      name: "Jane Cooper",
      role: "Designer",
      image: "/images/team/ea-4.png",
    },
  ];

  return (
    <div className="exclusive-agent-widget mb30-sm">
      <h4 className="title mb20">
        <span className="text-thm">{agents.length}+</span> Exclusive Agents
      </h4>
      {agents.map((agent, index) => (
        <div className="thumb d-flex align-items-center mb20" key={index}>
          <div className="flex-shrink-0">
            <Image
              width={55}
              height={55}
              className="wa"
              src={agent.image}
              alt="team"
            />
          </div>
          <div className="flex-grow-1 ml20">
            <h6 className="title fz14 mb-0">{agent.name}</h6>
            <p className="fz13 mb-0">{agent.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExclusiveAgnts;
