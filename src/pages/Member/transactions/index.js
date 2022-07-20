import React from "react";
import Sidebar from "../../../components/Sidebar";
import TransactionsContent from "../../../components/TransactionsContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}
