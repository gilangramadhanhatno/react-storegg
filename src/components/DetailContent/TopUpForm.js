import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function TopUpForm(props) {
  const { data } = props;
  const [verifyID, setVerifyID] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalMethod, setNominalMethod] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});
  const navigate = useNavigate();

  const onNominalItemChange = (data) => {
    setNominalMethod(data);
  };

  const onPaymentItemChange = (payment, bank) => {
    const data = {
      payment,
      bank,
    };
    setPaymentMethod(data);
  };

  const onSubmit = () => {
    if (verifyID === "" || bankAccountName === "" || nominalMethod === {} || nominalMethod === "" || paymentMethod === {}) {
      toast.error("Silahkan isi semua data");
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalMethod,
        paymentMethod,
      };
      localStorage.setItem("data-topup", JSON.stringify(data));
      navigate("/checkout");
    }
  };

  return (
    <>
      <div className="pt-md-50 pt-30">
        <div className="">
          <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID" aria-describedby="verifyID" placeholder="Enter your ID" value={verifyID} onChange={(event) => setVerifyID(event.target.value)} />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {data?.voucher?.nominals.map((nominal) => {
            return (
              <label key={nominal._id} className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" htmlFor={nominal._id} onChange={() => onNominalItemChange(nominal)}>
                <input className="d-none" type="radio" id={nominal._id} name="topup" value={nominal._id} />
                <div className="detail-card">
                  <div className="d-flex justify-content-between">
                    <p className="text-3xl color-palette-1 m-0">
                      <span className="fw-medium">
                        {nominal.coinQuantity} {nominal.coinName}
                      </span>
                    </p>
                    <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                      <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-lg color-palette-1 m-0">
                    <NumberFormat value={nominal.price} prefix="Rp. " displayType="text" decimalSeparator="," thousandSeparator="." />
                  </p>
                </div>
              </label>
            );
          })}
          <div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {data?.payment?.map((pymnt) => {
              return pymnt.banks.map((bank) => {
                return (
                  <label key={bank._id} className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" htmlFor={bank._id}>
                    <input className="d-none" type="radio" id={bank._id} name="paymentMethod" value={bank._id} onChange={() => onPaymentItemChange(pymnt, bank)} />
                    <div className="detail-card">
                      <div className="d-flex justify-content-between">
                        <p className="text-3xl color-palette-1 fw-medium m-0">{pymnt.type}</p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                          <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-lg color-palette-1 m-0">{bank.bankName}</p>
                    </div>
                  </label>
                );
              });
            })}
            <div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button type="button" className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg" onClick={onSubmit}>
          Continue
        </button>
      </div>
    </>
  );
}
