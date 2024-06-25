import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useLocation, useParams } from "react-router-dom";
import { useLaws } from "../context/laws";
import PDFViewer from "../components/PDFViewer";
import { useRegulations } from "../context/regulations";
import RootLayout from "../layouts/RootLayout";
import { BASE_URL } from "../constants";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Viewer = ({ pdf_url }) => {
  const { regulation } = useLocation()?.state;
  console.log("regulation:", regulation);
  return (
    <RootLayout>
      <section>
        <div className="flex items-center justify-end py-4"></div>
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="text-xl font-semibold">
            {regulation.code} - {regulation.name}
          </h2>
          <a
            href={regulation.pdf}
            title="Download PDF"
            download={true}
            className="flex items-center gap-4 p-2 text-sm rounded-md hover:bg-gray-50"
          >
            Download
          </a>
        </div>
        <div className="h-[80vh] py-4 w-full">
          {regulation.pdf && (
            <PDFViewer pdf={BASE_URL + "/storage/" + regulation.pdf} />
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default Viewer;
