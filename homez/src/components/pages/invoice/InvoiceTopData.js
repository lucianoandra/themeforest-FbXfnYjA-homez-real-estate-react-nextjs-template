import React from "react";

const InvoiceTopData = () => {
  const invoiceData = [
    {
      title: "Invoice date:",
      date: "22 April 2022",
      heading: "Supplier",
      name: "Realton LLC",
      address: (
        <>
          2301 Ravenswood Rd Madison, <br /> WI 53711
        </>
      ),
      columns: "col-sm-6 col-lg-7",
    },
    {
      title: "Due date:",
      date: "22 April 2022",
      heading: "Customer",
      name: "John Doe",
      address: (
        <>
          329 Queensberry Street, North Melbourne VIC <br /> 3051, Australia.
        </>
      ),
      columns: "col-sm-6 col-lg-5",
    },
  ];

  return (
    <>
      {invoiceData.map((data, index) => (
        <div className={data.columns} key={index}>
          <div className="invoice_date mb60">
            <div className="title mb5 ff-heading">{data.title}</div>
            <h6 className="fw400 mb0">{data.date}</h6>
          </div>
          <div className="invoice_address">
            <h6 className="mb20">{data.heading}</h6>
            <h6 className="fw400">{data.name}</h6>
            <p className="body-light-color ff-heading">{data.address}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default InvoiceTopData;
