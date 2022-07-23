import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import cx from "classnames";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import { getMemberTransactions } from "../../services/member";

export default function TransactionsContent() {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [tab, setTab] = useState("all");

  const statusClass = cx({
    "float-start icon-status": true,
  });
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
  });

  const getMemberTransactionsAPI = useCallback(async (value) => {
    const response = await getMemberTransactions(value);
    if (response.error) {
      toast.error(response.message);
    } else {
      setTotal(response.data.total);
      setTransactions(response.data.data);
    }
  }, []);

  useEffect(() => {
    getMemberTransactionsAPI("all");
  }, []);

  const onTabClick = (value) => {
    setTab(value);
    getMemberTransactionsAPI(value);
  };

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
              <button type="button" onClick={() => onTabClick("all")} className={`${btnClass} ${tab === "all" ? "btn-active" : ""}`}>
                All Trx
              </button>
              <button type="button" onClick={() => onTabClick("success")} className={`${btnClass} ${tab === "success" ? "btn-active" : ""}`}>
                Success
              </button>
              <button type="button" onClick={() => onTabClick("pending")} className={`${btnClass} ${tab === "pending" ? "btn-active" : ""}`}>
                Pending
              </button>
              <button type="button" onClick={() => onTabClick("failed")} className={`${btnClass} ${tab === "failed" ? "btn-active" : ""}`}>
                Failed
              </button>
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
                        <Link to={`/member/transactions/${transaction._id}`} className="btn btn-status rounded-pill text-sm">
                          Details
                        </Link>
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
