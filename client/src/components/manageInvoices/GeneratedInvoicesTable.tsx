import {
  RiEdit2Fill,
  RiShareForward2Fill,
  RiDownloadCloud2Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useData } from "../../hooks/useData";
import { dateFormatter } from "../../utilities/dateFormatter";
import Paginate from "../pagination/Paginate";
import { useFirstLastPaginationIndex } from "../pagination/useFirstLastPaginationIndex";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export type Client = {
  _id: string;
  name: string;
  phone: number;
  email: string;
  address: string;
};

export type InvoiceItem = {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
};

export type FormData = {
  _id: string;
  invoice_id: string;
  status: string;
  opendate: string;
  duedate: string;
  client: Client;
  invoiceItems: InvoiceItem[];
  vat: number;
  total: number;
  grandTotal: number;
  createdAt: string;
};

export default function GeneratedInvoicesTable() {
  const { data, dataCount } = useData<FormData>("/invoice");
  const { postsPerPage, currentPage } = useSelector(
    (store: RootState) => store.paginationState
  );
  const { firstIndex, lastIndex } = useFirstLastPaginationIndex(
    postsPerPage,
    currentPage
  );

  const paginatedInvoices = data.slice(firstIndex, lastIndex);

  return (
    <>
      <div className="card mb-4">
        <div className="card-body" style={{ overflowX: "scroll" }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">InvoiceId</th>
                <th scope="col">Client</th>
                <th scope="col">Service</th>
                <th scope="col">Open Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedInvoices.map((invoice) => (
                <tr key={invoice._id}>
                  <td>{invoice.invoice_id}</td>
                  <td>{invoice.client.name}</td>
                  <td>
                    <ul>
                      {invoice.invoiceItems.map((item, index) => (
                        <li key={index}>{item.description}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{dateFormatter(invoice.opendate)}</td>
                  <td>{invoice.status}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <div>
                        {" "}
                        <Link
                          to={`/invoice/${invoice._id}`}
                          className="link-success"
                        >
                          <RiEdit2Fill />
                        </Link>
                      </div>
                      <div>
                        <Link to={"#"} className="link-success">
                          <RiShareForward2Fill />
                        </Link>
                      </div>
                      <div>
                        <Link to={"#"} className="link-success">
                          <RiDownloadCloud2Fill />
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <Paginate noOfItems={dataCount} />
        </div>
      </div>
    </>
  );
}
