import React from "react";
import SettingsContent from "../../components/SettingsContent";
import Sidebar from "../../components/Sidebar";

export default function Settings() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <SettingsContent />
    </section>
  );
}
