import React from "react";
import OverviewContent from "../../components/OverViewContent";
import Sidebar from "../../components/Sidebar";

export default function Overview() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
