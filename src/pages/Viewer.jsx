import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useParams } from "react-router-dom";
import { useLaws } from "../context/laws";
import PDFViewer from "../components/PDFViewer";
import { useRegulations } from "../context/regulations";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Viewer = () => {
  const regulations = useRegulations((state) => state.regulations);
  return (
    <section>
      <div className="flex items-center justify-end py-4"></div>
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-xl font-semibold">
          {regulations[0].code} - {regulations[0].name}
        </h2>
        <a
          href={regulations[0].url}
          title="Download PDF"
          download={true}
          className="flex items-center gap-4 p-2 text-sm rounded-md hover:bg-gray-50"
        >
          Download
        </a>
      </div>
      <div className="h-[80vh] py-4 w-full">
        {regulations[0].url && <PDFViewer pdf={regulations[0].url} />}
      </div>
    </section>
  );
};

export default Viewer;
