import React from "react";
import AppLayout from "../../layouts/AppLayout";
import DataTable from "../../components/DataTable";
import { useRevisions } from "../../context/revisions";
import { useLaws } from "../../context/laws";
import { useRegulations } from "../../context/regulations";
const Regulations = () => {
  const revisions = useRevisions((state) => state.revisions);
  const laws = useLaws((state) => state.laws);
  const regulations = useRegulations((state) => state.regulations);
  return (
    <AppLayout>
      <div>
        <DataTable
          data={regulations}
          title={"Regulations"}
          entity={"Regulation"}
          addLink={"/admin/regulations/add"}
          description={`
            This table contains all the regulation of a law.
            You can add, edit, or delete regulations.
          `}
          keys={[
            {
              label: "Name",
              key: "name",
            },
            {
              label: "Code",
              key: "code",
            },
            {
              label: "Date",
              key: "date",
            },
            {
              label: "PDF link",
              key: "url",
            },
          ]}
        />
      </div>
    </AppLayout>
  );
};

export default Regulations;
