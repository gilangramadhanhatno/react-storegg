import React from "react";
import Desktop from "../../assets/icon/icon-desktop.svg";
import Mobile from "../../assets/icon/icon-mobile.svg";

import MobileLegends from "../../assets/img/overview-1.png";
import COD from "../../assets/img/overview-2.png";
import COC from "../../assets/img/overview-3.png";
import Valorant from "../../assets/img/overview-4.png";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                <div className="categories-card">
                  <div className="d-flex align-items-center mb-24">
                    <img src={Desktop} alt="Icon Desktop" />
                    <p className="color-palette-1 mb-0 ms-12">
                      Game
                      <br /> Desktop
                    </p>
                  </div>
                  <div>
                    <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                    <p className="text-2xl color-palette-1 fw-medium m-0">Rp 18.000.500</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                <div className="categories-card">
                  <div className="d-flex align-items-center mb-24">
                    <img src={Mobile} alt="Icon Mobile" />
                    <p className="color-palette-1 mb-0 ms-12">
                      Game
                      <br /> Mobile
                    </p>
                  </div>
                  <div>
                    <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                    <p className="text-2xl color-palette-1 fw-medium m-0">Rp 8.455.000</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                <div className="categories-card">
                  <div className="d-flex align-items-center mb-24">
                    <img src={Desktop} alt="Other" />

                    <p className="color-palette-1 mb-0 ms-12">
                      Other
                      <br /> Categories
                    </p>
                  </div>
                  <div>
                    <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                    <p className="text-2xl color-palette-1 fw-medium m-0">Rp 5.000.000</p>
                  </div>
                </div>
              </div>
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
                <tr className="align-middle">
                  <th scope="row">
                    <img className="float-start me-3 mb-lg-0 mb-3" src={MobileLegends} width="80" height="60" alt="" />
                    <div className="game-title-header">
                      <p className="game-title fw-medium text-start color-palette-1 m-0">Mobile Legends: The New Battle 2021</p>
                      <p className="text-xs fw-normal text-start color-palette-2 m-0">Desktop</p>
                    </div>
                  </th>
                  <td>
                    <p className="fw-medium color-palette-1 m-0">200 Gold</p>
                  </td>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">Rp 290.000</p>
                  </td>
                  <td>
                    <div>
                      <span className="float-start icon-status pending"></span>
                      <p className="fw-medium text-start color-palette-1 m-0 position-relative">Pending</p>
                    </div>
                  </td>
                </tr>
                <tr className="align-middle text-center">
                  <th scope="row">
                    <img className="float-start me-3 mb-lg-0 mb-3" src={COD} width="80" height="60" alt="" />
                    <div className="game-title-header">
                      <p className="game-title fw-medium text-start color-palette-1 m-0">Call of Duty:Modern</p>
                      <p className="text-xs fw-normal text-start color-palette-2 m-0">Desktop</p>
                    </div>
                  </th>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">550 Gold</p>
                  </td>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">Rp 740.000</p>
                  </td>
                  <td>
                    <div>
                      <span className="float-start icon-status success"></span>
                      <p className="fw-medium text-start color-palette-1 m-0 position-relative">Success</p>
                    </div>
                  </td>
                </tr>
                <tr className="align-middle text-center">
                  <th scope="row">
                    <img className="float-start me-3 mb-lg-0 mb-3" src={COC} width="80" height="60" alt="" />
                    <div className="game-title-header">
                      <p className="game-title fw-medium text-start color-palette-1 m-0">Clash of Clans</p>
                      <p className="text-xs fw-normal text-start color-palette-2 m-0">Mobile</p>
                    </div>
                  </th>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">100 Gold</p>
                  </td>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">Rp 120.000</p>
                  </td>
                  <td>
                    <div>
                      <span className="float-start icon-status failed"></span>
                      <p className="fw-medium text-start color-palette-1 m-0 position-relative">Failed</p>
                    </div>
                  </td>
                </tr>
                <tr className="align-middle text-center">
                  <th scope="row">
                    <img className="float-start me-3 mb-lg-0 mb-3" src={Valorant} width="80" height="60" alt="" />
                    <div className="game-title-header">
                      <p className="game-title fw-medium text-start color-palette-1 m-0">The Royal Game</p>
                      <p className="text-xs fw-normal text-start color-palette-2 m-0">Mobile</p>
                    </div>
                  </th>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">225 Gold</p>
                  </td>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">Rp 200.000</p>
                  </td>
                  <td>
                    <div>
                      <span className="float-start icon-status pending"></span>
                      <p className="fw-medium text-start color-palette-1 m-0 position-relative">Pending</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
