import callAPI from "../config/api";
// import { useParams } from "react-router-dom";

const ROOT_API = "https://bwamern-storegg-backend.herokuapp.com";
const API_VERSION = "api/v1";

export async function getMemberTransactions(valueParams) {
  let params = "";
  if (valueParams === "all") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getTransactionDetail() {
  return null;
  // let { id } = useParams();
  // const url = `${ROOT_API}/${API_VERSION}/players/history${id}/detail`;
  // return callAPI({
  //   url,
  //   method: "GET",
  //   token: true,
  //   id,
  // });
}

export async function updateProfile(data, id) {
  const url = `${ROOT_API}/${API_VERSION}/players/profile${id}`;
  return callAPI({
    url,
    method: "PUT",
    data,
    token: true,
  });
}
