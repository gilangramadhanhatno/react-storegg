import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import NumberFormat from "react-number-format";
import cx from "classnames";

export default function DetailTransaction() {
  let { id } = useParams();
  const [data, setData] = useState({});

  const statusClass = cx({
    "fw-medium text-center label m-0 rounded-pill": true,
  });

  const getDetailTransactions = async () => {
    const url = `https://bwamern-storegg-backend.herokuapp.com/api/v1/players/history/${id}/detail`;

    let headers = {};
    const tokenCookies = Cookies.get("tkn");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }

    const response = await axios({
      url,
      method: "GET",
      headers,
      token: true,
    }).catch((error) => error.response);

    if (response.status > 300) {
      const res = {
        error: true,
        message: response.data.message,
        data: null,
      };
      return res;
    }
    const res = {
      error: false,
      message: "success",
      data: response.data.count ? response.data : response.data.data,
    };
    return res;
  };

  useEffect(() => {
    (async () => {
      const response = await getDetailTransactions();
      if (response.error) {
        toast.error(response.message);
      } else {
        setData(response.data);
      }
    })();
  }, [id]);

  return (
    <section className="transactions-detail overflow-auto">
      {/* <Sidebar activeMenu="transactions" /> */}
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #{data._id}</h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                  <div className="game-checkout d-flex flex-row align-items-center">
                    <div className="pe-4">
                      <div className="cropped">
                        <img src={`https://bwamern-storegg-backend.herokuapp.com/uploads/${data?.historyVoucherTopup?.thumbnail}`} width="200" height="130" className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div>
                      <p className="fw-bold text-xl color-palette-1 mb-10">{data?.historyVoucherTopup?.gameName}</p>
                      <p className="color-palette-2 m-0">Category: {data?.historyVoucherTopup?.category}</p>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`${statusClass} ${data.status === "pending" || data.status === "Pending" ? "pending" || "Pending" : ""} ${data.status === "success" || data.status === "Success" ? "success" || "Success" : ""} ${
                        data.status === "failed" || data.status === "Failed" ? "failed" || "Failed" : ""
                      }`}
                    >
                      {data.status}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                  <p className="text-lg color-palette-1 mb-20">
                    Your Game ID <span className="purchase-details">{data?.accountUser}</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Order ID <span className="purchase-details">#{data._id}</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Item{" "}
                    <span className="purchase-details">
                      {data?.historyVoucherTopup?.coinQuantity} {data?.historyVoucherTopup?.coinName}
                    </span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Price{" "}
                    <span className="purchase-details">
                      <NumberFormat value={data?.historyVoucherTopup?.price} prefix="Rp. " displayType="text" decimalSeparator="," thousandSeparator="." />
                    </span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Tax (10%){" "}
                    <span className="purchase-details">
                      <NumberFormat value={data.tax} prefix="Rp. " displayType="text" decimalSeparator="," thousandSeparator="." />
                    </span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Total{" "}
                    <span className="purchase-details color-palette-4">
                      <NumberFormat value={data.value} prefix="Rp. " displayType="text" decimalSeparator="," thousandSeparator="." />
                    </span>
                  </p>
                </div>
                <div className="payment pt-10 pb-10">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                  <p className="text-lg color-palette-1 mb-20">
                    Your Account Name <span className="purchase-details">{data.name}</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Type <span className="payment-details">{data?.historyPayment?.type}</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Bank Name <span className="payment-details">{data?.historyPayment?.bankName}</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Bank Account Name <span className="payment-details">{data?.historyPayment?.name}</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Bank Number <span className="payment-details">{data?.historyPayment?.noRekening}</span>
                  </p>
                </div>
                <div className="d-md-block d-flex flex-column w-100">
                  <Link to="/member/transactions" className="btn btn-status rounded-pill fw-medium text-lg" role="button">
                    Kembali
                  </Link>
                  <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" href="#" role="button">
                    WhatsApp ke Admin
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
