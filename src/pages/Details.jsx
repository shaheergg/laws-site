import React, { useEffect } from "react";
import { useLaws } from "../context/laws";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { revisionId } = useParams();
  const selectRevision = useLaws((state) => state.selectRevision);
  const revision = useLaws((state) => state.revision);
  useEffect(() => {
    selectRevision(Number(revisionId));
  }, [revisionId]);
  return (
    <section>
      <h2 className="text-4xl font-semibold">
        {revision.year + " " + revision.title}{" "}
      </h2>

      <div className="grid grid-cols-1  py-10 gap-4">
        {revision.statutes.map((statute) => {
          return (
            <div key={statute.id} className="p-4 col-span-1 border rounded-md">
              <h3 className="text-lg font-semibold">{statute.title}</h3>
              <div className="flex items-center gap-2 justify-end">
                <a
                  href="#"
                  title="Download PDF"
                  className="flex p-2 text-sm rounded-md hover:bg-gray-50 items-center gap-4"
                >
                  Download Regulation
                </a>
                <Link
                  to={`/revisions/${revisionId}/statutes/${statute.id}`}
                  title="Download PDF"
                  className="flex p-2 text-sm rounded-md
                  hover:bg-gray-50 items-center gap-4"
                >
                  {" "}
                  View PDF
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Details;
