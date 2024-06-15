import React from "react";
import AppLayout from "../../layouts/AppLayout";
import DataTable from "../../components/DataTable";
import { useRevisions } from "../../context/revisions";
const Dashboard = () => {
  const revisions = useRevisions((state) => state.revisions);
  return (
    <AppLayout>
      <div>
        <DataTable
          data={revisions}
          title={"Revisions"}
          entity={"Revision"}
          addLink={"/admin/revisions/add"}
          description={`
            This table contains all the revisions of the laws.
            You can add, edit, or delete revisions.
          `}
          keys={[
            {
              label: "Name",
              key: "name",
            },
            {
              label: "Year",
              key: "year",
            },
          ]}
        />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
