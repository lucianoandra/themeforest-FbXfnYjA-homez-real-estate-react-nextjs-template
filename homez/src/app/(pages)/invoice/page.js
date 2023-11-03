import InvoiceFooter from "@/components/pages/invoice/InvoiceFooter";
import InvoiceTable from "@/components/pages/invoice/InvoiceTable";
import InvoiceTopData from "@/components/pages/invoice/InvoiceTopData";
import PrintInvoice from "@/components/pages/invoice/PrintInvoice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Invoice = () => {
  return (
    <>
      {/* Our Invoice Page */}
      <section className="our-invoice bgc-gmart-gray pb200">
        <div className="container" data-aos-delay="300">
          <div className="row mb30">
            <div className="col-lg-12">
              <div className="float-end">
                <PrintInvoice />
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="invoice_table">
                <div className="wrapper">
                  <div className="row mb20 align-items-center">
                    <div className="col-lg-7">
                      <div className="main_logo mb30-md">
                        <Link href="/">
                          <Image
                            width={138}
                            height={44}
                            src="/images/header-logo2.svg"
                            alt="header-logo2"
                          />
                        </Link>
                      </div>
                    </div>
                    {/* End .col-lg-7 */}

                    <div className="col-lg-5">
                      <div className="invoice_deails">
                        <h4 className="float-start">Invoice #</h4>
                        <h6 className="float-end">0043128641</h6>
                      </div>
                    </div>
                    {/* End .col-lg-5 */}
                  </div>
                  {/* End row */}

                  <div className="row mt55">
                    <InvoiceTopData />
                  </div>
                  {/* End .row */}

                  <div className="row mt50">
                    <div className="col-lg-12">
                      <div className="table-responsive invoice_table_list">
                        <InvoiceTable />
                      </div>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End wrapper */}

                <div className="invoice_footer">
                  <div className="row justify-content-center">
                    <InvoiceFooter />
                  </div>
                </div>
                {/* invoice_footer */}
              </div>
              {/* invoice_table */}
            </div>
            {/* End col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End  Our Invoice Page */}
    </>
  );
};

export default Invoice;
