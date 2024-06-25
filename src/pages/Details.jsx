import React, { useEffect } from "react";
import Table from "../components/Table";
import RootLayout from "../layouts/RootLayout";
import { useRegulations } from "../context/regulations";
import { useParams } from "react-router-dom";

const Details = () => {
  const regulations = useRegulations((state) => state.regulations);
  const fetchRegulations = useRegulations((state) => state.fetchRegulations);
  const { lawId } = useParams();
  useEffect(() => {
    fetchRegulations(lawId);
  }, [fetchRegulations]);
  if (!regulations) {
    return <div>Loading...</div>;
  }
  console.log(regulations);
  return (
    <RootLayout>
      <section>
        <div className="py-4 space-y-2">
          <h2 className="text-2xl font-semibold">
            {regulations.code} - {regulations.name}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Table
            pdf_url={regulations.pdf_url}
            lawCode={regulations.code}
            regulations={regulations}
          />
        </div>
      </section>
    </RootLayout>
  );
};

export default Details;
