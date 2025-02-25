import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { setStepNumber } from "../../slices/invoice/invoiceFormSteps";
import { setInvoiceFormData } from "../../slices/invoice/invoiceFormData";
import {
  invoiceDateSchema,
  InvoiceDatesType,
} from "../../schemas/invoiceFormSchemas/invoiceItemsSchema";
import { formattedDate } from "../../utilities/formatDate";

export default function InvoiceDates() {
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceDatesType>({
    resolver: zodResolver(invoiceDateSchema),
  });

  const onSubmit = (data: FieldValues) => {
    data.opendate = formattedDate(data.opendate);
    data.duedate = formattedDate(data.duedate);
    dispatch(setInvoiceFormData(data));
    dispatch(setStepNumber(2));
  };

  return (
    <form className="rounded" onSubmit={handleSubmit(onSubmit)}>
      <div className="card border-0">
        <div className="card-header rounded-0 border-bottom-0">
          <h6 className="fw-bold text-primary">Invoice Status & Dates</h6>
        </div>
        <div className="card-body">
          <div className="mb-3 row">
            <div className="col-6">
              <label htmlFor="status" className="form-label">
                Invoice status:
              </label>
              <select
                {...register("status")}
                id="status"
                className="form-control"
              >
                <option value=""></option>
                <option value="closed">Closed</option>
                <option value="open">open</option>
              </select>
              {errors.status && (
                <p className="text-danger">{errors.status.message}</p>
              )}
            </div>
            <div className="col-6">
              <label htmlFor="service" className="form-label">
                Service:
              </label>
              <select
                {...register("service")}
                id="service"
                className="form-control"
              >
                <option value=""></option>
                <option value="installation">Installation</option>
                <option value="maintainance">Maintainance</option>
                <option value="supplies">Supplies</option>
              </select>
              {errors.service && (
                <p className="text-danger">{errors.service.message}</p>
              )}
            </div>
          </div>
          <div className="mb-3 row">
            <div className="mb-3 col-lg-6">
              <label htmlFor="opendate">Invoice Date:</label>
              <input
                {...register("opendate")}
                type="date"
                id="opendate"
                className="form-control"
              />
              {errors.opendate && (
                <p className="text-danger">{errors.opendate.message}</p>
              )}
            </div>
            <div className="col-lg-6">
              <label htmlFor="duedate">Due Date:</label>
              <input
                {...register("duedate")}
                type="date"
                id="duedate"
                className="form-control"
              />
              {errors.duedate && (
                <p className="text-danger">{errors.duedate.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 d-flex justify-content-end">
        <button className="btn btn-danger" type="submit">
          Add Invoice Dates
        </button>
      </div>
    </form>
  );
}
