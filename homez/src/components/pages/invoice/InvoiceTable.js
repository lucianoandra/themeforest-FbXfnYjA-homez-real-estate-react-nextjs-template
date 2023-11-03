import React from "react";

const InvoiceTable = () => {
  const tableData = [
    {
      description: "Standard Plan",
      price: "$443.00",
      vat: "$921.80",
      total: "$9243",
    },
    {
      description: "Extra Plan",
      price: "$443.00",
      vat: "$921.80",
      total: "$9243",
    },
    {
      description: "Total Due",
      price: "",
      vat: "",
      total: "$9,750",
    },
  ];

  return (
    <table className="table table-borderless">
      <thead className="thead-light">
        <tr className="tblh_row">
          <th className="tbleh_title" scope="col">
            Description
          </th>
          <th className="tbleh_title" scope="col">
            Price
          </th>
          <th className="tbleh_title" scope="col">
            VAT (20%)
          </th>
          <th className="tbleh_title" scope="col">
            Total
          </th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((row, index) => (
          <tr
            key={index}
            className={index === tableData.length - 1 ? "tblp_row" : "bdrb1"}
          >
            <th
              className={
                index === tableData.length - 1 ? "tblp_title" : "tbl_title"
              }
              scope="row"
            >
              {row.description}
            </th>
            <td className="tbl_title">{row.price}</td>
            <td className="tbl_title">{row.vat}</td>
            <td
              className={
                index === tableData.length - 1 ? "tblp_title" : "tblpr_title"
              }
            >
              {row.total}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
