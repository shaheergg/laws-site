import React, { useEffect } from "react";
import { useLaws } from "../context/laws";
import { Link, useLocation } from "react-router-dom";
import { useRevisions } from "../context/revisions";
function SideNav() {
  const revisions = useRevisions((state) => state.revisions);
  const fetchRevisions = useRevisions((state) => state.fetchRevisions);
  const location = useLocation();
  useEffect(() => {
    fetchRevisions();
  }, [fetchRevisions]);
  return (
    <aside className="h-[100vh] py-8 w-[250px] overflow-y-auto">
      <nav>
        <div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Revised Laws</h2>
            {revisions &&
              revisions?.map((revision) => {
                return (
                  <Link to={`/revisions/${revision.id}`} className={`text-sm`}>
                    <span
                      className={`${
                        location.pathname === `/revisions/${revision.id}`
                          ? "text-cyan-500"
                          : "text-gray-600"
                      }`}
                    >
                      {" "}
                      {location.pathname === `/revisions/${revision.id}`
                        ? "•"
                        : " "}{" "}
                      {revision.year + " "} {revision.name}
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
