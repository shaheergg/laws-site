import React from "react";
import { Link } from "react-router-dom";
import { useRevisions } from "../context/revisions";
import RootLayout from "../layouts/RootLayout";

function Home() {
  const revisions = useRevisions((state) => state.revisions);

  return (
    <RootLayout>
      <div className="">
        <h2 className="text-4xl font-semibold">Revised Laws</h2>
        <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-3">
          {revisions.map((revisions) => {
            return (
              <Link
                to={`/revisions/${revisions.id}`}
                className="col-span-1 p-4 border rounded-md hover:bg-cyan-50 hover:border-cyan-800"
              >
                <h3 className="text-lg font-semibold">
                  {revisions.year + " "} {revisions.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </RootLayout>
  );
}

export default Home;
