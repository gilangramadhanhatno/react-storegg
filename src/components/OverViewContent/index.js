import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import cx from "classnames";

import NumberFormat from "react-number-format";
import Desktop from "../../assets/icon/icon-desktop.svg";

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const statusClass = cx({
    "float-start icon-status": true,
  });

  const getMemberOverview = async () => {
    const url = `https://bwamern-storegg-backend.herokuapp.com/api/v1/players/dashboard`;

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
      const response = await getMemberOverview();
      if (response.error) {
        toast.error(response.message);
      } else {
        setCount(response.data.count);
        setData(response.data.data);
      }
    })();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((item) => {
                return (
                  <div key={item._id} className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                    <div className="categories-card">
                      <div className="d-flex align-items-center mb-24">
                        <img src={Desktop} alt="Icon Desktop" />
                        <p className="color-palette-1 mb-0 ms-12">
                          Game
                          <br /> {item.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                        <p className="text-2xl color-palette-1 fw-medium m-0">
                          <NumberFormat value={item.value} prefix="Rp. " displayType="text" decimalSeparator="," thousandSeparator="." />
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item._id} className="align-middle">
                      <th scope="row">
                        <img className="float-start me-3 mb-lg-0 mb-3" src={`https://bwamern-storegg-backend.herokuapp.com/uploads/${item.historyVoucherTopup.thumbnail}`} width="80" height="60" alt="" />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-1 m-0">{item.historyVoucherTopup.gameName}</p>
                          <p className="text-xs fw-normal text-start color-palette-2 m-0">{item.historyVoucherTopup.category}</p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          {item.historyVoucherTopup.coinQuantity} {item.historyVoucherTopup.coinName}
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          <NumberFormat value={item.value} prefix="Rp. " displayType="text" decimalSeparator="," thousandSeparator="." />
                        </p>
                      </td>
                      <td>
                        <div>
                          <span
                            className={`${statusClass} ${item.status === "pending" || item.status === "Pending" ? "pending" || "Pending" : ""} ${item.status === "success" || item.status === "Success" ? "success" || "Success" : ""} ${
                              item.status === "failed" || item.status === "Failed" ? "failed" || "Failed" : ""
                            }`}
                          ></span>
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{item.status}</p>
                        </div>
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
