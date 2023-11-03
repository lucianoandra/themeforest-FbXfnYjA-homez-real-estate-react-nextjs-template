"use client";
import React from "react";

const PrintInvoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      className="ud-btn btn-dark invoice_down_print"
      onClick={handlePrint}
    >
      Print Invoice
      <i className="fal fa-arrow-right-long" />
    </button>
  );
};

export default PrintInvoice;
