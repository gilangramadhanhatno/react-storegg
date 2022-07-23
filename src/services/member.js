import callAPI from "../config/api";

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

export async function coba() {
  return null;
}
