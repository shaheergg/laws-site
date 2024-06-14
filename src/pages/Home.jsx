import React from "react";
import { useLaws } from "../context/laws";
import { Link } from "react-router-dom";

function Home() {
  const revisions = useLaws((state) => state.revisions);

  return (
    <div className="">
      <h2 className="text-4xl font-semibold">Revised Laws</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-4">
        {revisions.map((revisions) => {
          return (
            <Link
              to={`/revisions/${revisions.id}`}
              className="p-4 col-span-1 border rounded-md hover:bg-cyan-50 hover:border-cyan-800"
            >
              <h3 className="text-lg font-semibold">
                {revisions.year + " "} {revisions.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
