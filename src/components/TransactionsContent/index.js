import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import cx from "classnames";

import NumberFormat from "react-number-format";

export default function TransactionsContent() {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const statusClass = cx({
    "float-start icon-status": true,
  });

  const getMemberTransactions = async () => {
    const url = `https://bwamern-storegg-backend.herokuapp.com/api/v1/players/history`;

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

    const { length } = Object.keys(response.data);

    const res = {
      error: false,
      message: "success",
      data: length > 1 ? response.data : response.data.data,
    };
    return res;
  };

  useEffect(() => {
    (async () => {
      const response = await getMemberTransactions();
      if (response.error) {
        toast.error(response.message);
      } else {
        setTotal(response.data.total);
        setTransactions(response.data.data);
      }
    })();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat value={total} prefix="Rp. " displayType="text" decimalSeparator="," thousandSeparator="." />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <a data-filter="*" href="/" className="btn btn-status rounded-pill text-sm btn-active me-3">
                All Trx
              </a>
              <a data-filter="success" href="/" className="btn btn-status rounded-pill text-sm me-3">
                Success
              </a>
              <a data-filter="pending" href="/" className="btn btn-status rounded-pill text-sm me-3">
                Pending
              </a>
              <a data-filter="failed" href="/" className="btn btn-status rounded-pill text-sm me-3">
                Failed
              </a>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transactions.map((transaction) => {
                  return (
                    <tr key={transaction._id} data-category="pending" className="align-middle">
                      <th scope="row">
                        <img className="float-start me-3 mb-lg-0 mb-3" src={`https://bwamern-storegg-backend.herokuapp.com/uploads/${transaction.historyVoucherTopup.thumbnail}`} width="80" height="60" alt="" />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-1 m-0">{transaction.historyVoucherTopup.gameName}</p>
                          <p className="text-xs fw-normal text-start color-palette-2 m-0">{transaction.historyVoucherTopup.category}</p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">{`${transaction.historyVoucherTopup.coinQuantity} ${transaction.historyVoucherTopup.coinName}`}</p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          <NumberFormat value={transaction.value} prefix="Rp. " displayType="text" decimalSeparator="," thousandSeparator="." />
                        </p>
                      </td>
                      <td>
                        <div>
                          <span
                            className={`${statusClass} ${transaction.status === "pending" || transaction.status === "Pending" ? "pending" || "Pending" : ""} ${
                              transaction.status === "success" || transaction.status === "Success" ? "success" || "Success" : ""
                            } ${transaction.status === "failed" || transaction.status === "Failed" ? "failed" || "Failed" : ""}`}
                          ></span>
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{transaction.status}</p>
                        </div>
                      </td>
                      <td>
                        <a href="../member/transactions-detail.html" className="btn btn-status rounded-pill text-sm">
                          Details
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
