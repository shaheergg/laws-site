import React from "react";
import Table from "../components/Table";
import LawsTable from "../components/LawsTable";

const RevisionHeader = () => {
  return (
    <div>
      <div className="py-4 space-y-2">
        <h2 className="text-2xl font-semibold">2021 - Revised Laws</h2>
      </div>
      <div>
        <LawsTable />
      </div>
    </div>
  );
};

export default RevisionHeader;
