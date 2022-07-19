import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import ContentOverview from "../../components/Dashboard/ContentOverview";

export default function Overview() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <ContentOverview />
    </section>
  );
}
