import React, { useEffect } from "react";
import LawsTable from "../components/LawsTable";
import RootLayout from "../layouts/RootLayout";
import { useLaws } from "../context/laws";
import { useParams } from "react-router-dom";

const RevisionHeader = () => {
  const laws = useLaws((state) => state.laws);
  const fetchLaws = useLaws((state) => state.fetchLaws);
  const { revisionId } = useParams();
  useEffect(() => {
    fetchLaws(Number(revisionId));
  }, [revisionId]);
  return (
    <RootLayout>
      <div>
        <div className="py-4 space-y-2">
          <h2 className="text-2xl font-semibold">
            {laws.name}{" "}
            <span className="text-sm font-medium">
              {laws?.created_at?.split("T")[0]}
            </span>
          </h2>
        </div>
        <div>
          <LawsTable laws={laws} />
        </div>
      </div>
    </RootLayout>
  );
};

export default RevisionHeader;
