import React from "react";
import AppLayout from "../../layouts/AppLayout";
import DataTable from "../../components/DataTable";
import { useRevisions } from "../../context/revisions";
import { useLaws } from "../../context/laws";
const Laws = () => {
  const revisions = useRevisions((state) => state.revisions);
  const laws = useLaws((state) => state.laws);
  return (
    <AppLayout>
      <div>
        <DataTable
          data={laws}
          title={"Laws"}
          entity={"Law"}
          addLink={"/admin/laws/add"}
          description={`
            This table contains all the laws of a revision.
            You can add, edit, or delete laws.
          `}
          keys={[
            {
              label: "Title",
              key: "title",
            },
            {
              label: "Code",
              key: "code",
            },
            {
              label: "Information",
              key: "information",
            },
            {
              label: "Date",
              key: "date",
            },
          ]}
        />
      </div>
    </AppLayout>
  );
};

export default Laws;
