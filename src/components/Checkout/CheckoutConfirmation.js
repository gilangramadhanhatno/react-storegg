import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CheckoutConfirmation() {
  const [checkbox, setCheckBox] = useState(false);

  const navigate = useNavigate();

  const setCheckout = async (data, token) => {
    const url = `https://bwamern-storegg-backend.herokuapp.com/api/v1/players/checkout`;

    let headers = {};
    if (token) {
      const tokenCookies = Cookies.get("tkn");
      if (tokenCookies) {
        const jwtToken = atob(tokenCookies);
        headers = {
          Authorization: `Bearer ${jwtToken}`,
        };
      }
    }

    const response = await axios({
      url,
      method: "POST",
      data,
      headers,
      token: true,
    }).catch((error) => error.response);

    const axiosResponse = response.data;
    if (response.status > 300) {
      const res = {
        error: true,
        message: axiosResponse.message,
        data: null,
      };
      return res;
    }
    const res = {
      error: false,
      message: "success",
      data: axiosResponse.data,
    };
    return res;
  };

  const onSubmit = async (token) => {
    const dataItem = localStorage.getItem("data-item");
    const dataTopUp = localStorage.getItem("data-topup");

    const dataItemLocal = JSON.parse(dataItem);
    const dataTopUpLocal = JSON.parse(dataTopUp);

    if (!checkbox) {
      toast.error("Pastikan Anda telah melakukan pembayaran");
    } else {
      const data = {
        voucher: dataItemLocal._id,
        nominal: dataTopUpLocal.nominalMethod._id,
        payment: dataTopUpLocal.paymentMethod.payment._id,
        bank: dataTopUpLocal.paymentMethod.bank._id,
        name: dataTopUpLocal.bankAccountName,
        accountUser: dataTopUpLocal.verifyID,
      };
      const response = await setCheckout(data, token);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Checkout Berhasil");
        navigate("/complete-checkout");
      }
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckBox(!checkbox)} />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" type="button" onClick={onSubmit}>
          Confirm Payment
        </button>
      </div>
    </>
  );
}
