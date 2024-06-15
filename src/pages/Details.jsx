import React from "react";

import Table from "../components/Table";
import RootLayout from "../layouts/RootLayout";

const Details = () => {
  return (
    <RootLayout>
      <section>
        <div className="py-4 space-y-2">
          <h2 className="text-2xl font-semibold">
            A85 - Animal (Disease and Importation) Act
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Table />
        </div>
      </section>
    </RootLayout>
  );
};

export default Details;
