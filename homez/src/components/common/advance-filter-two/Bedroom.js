'use client'

const Bedroom = ({filterFunctions}) => {
  const bedOptions = [
    { id: "xany", label: "any",value:0 },
    { id: "xoneplus", label: "1+",value:1 },
    { id: "xtwoplus", label: "2+",value:2 },
    { id: "xthreeplus", label: "3+",value:3 },
    { id: "xfourplus", label: "4+",value:4 },
    { id: "xfiveplus", label: "5+",value:5 },
  ];

  return (
    <>
      {bedOptions.map((option, index) => (
        <div className="selection" key={option.id}>
          <input
            id={option.id}
           
            type="radio"
            onChange={(e)=>filterFunctions?.handlebedrooms(option.value)}
            checked={filterFunctions?.bedrooms == option.value}
            
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default Bedroom;
