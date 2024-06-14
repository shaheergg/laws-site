import React from "react";
import { useLaws } from "../context/laws";
import { Link, useLocation } from "react-router-dom";
function SideNav() {
  const revisions = useLaws((state) => state.revisions);
  const location = useLocation();
  return (
    <aside className="h-[100vh] py-8 w-[350px] overflow-y-auto">
      <nav>
        <div>
          {revisions.map((revision) => {
            return (
              <div>
                <h2
                  className={`text-sm font-semibold ${
                    location.pathname === `/revisions/${revision.id}`
                      ? "text-cyan-500"
                      : "text-black"
                  }`}
                >
                  {revision.year + " "} {revision.title}
                </h2>
                <div className="py-4 flex flex-col gap-2 text-sm">
                  {revision.statutes.map((statute) => {
                    return (
                      <Link
                        to={`/revisions/${revision.id}/statutes/${statute.id}`}
                        className={`py-1 text-gray-600 truncate ${
                          location.pathname ===
                          `/revisions/${revision.id}/statutes/${statute.id}`
                            ? "text-cyan-500"
                            : ""
                        }`}
                      >
                        {statute.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
