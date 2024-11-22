// import useInvoices from "../../hooks/useInvoices";
// import { InvoiceData } from "../../types/typeDefinitions";

export default function DashAnalytics() {
  //   const { data } = useInvoices();
  //   const totalOPenInvoices = openInvoices(data);
  //   const dueMoneies = amountDue(data);
  //   const salesMonies = sales(data);

  return (
    <div className="rounded" style={{ overflow: "hidden" }}>
      <div className="row justify-content-center gap-1 mb-1">
        <div className="col-md-3 bg-warning text-center rounded-top py-3">
          <h3>{3000}</h3>
          <h6>SALES AMOUNT</h6>
        </div>

        {/* <div className="col-md-3 bg-info text-center rounded-bottom py-3">
          <h3>{data.length}</h3>
          <h6>TOTAL INVOICES</h6>
        </div> */}
        <div className="col-md-3 bg-danger text-center rounded-bottom  py-3">
          <h3>{2500}</h3>
          <h6>OPEN INVOICES</h6>
        </div>
        <div className="col-md-3 bg-primary text-center rounded-top  py-3">
          <h3>{5400}</h3>
          <h6>DUE AMOUNT</h6>
        </div>
      </div>
      <div className="row justify-content-center gap-1"></div>
    </div>
  );
}
