import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useParams } from "react-router-dom";
import { useLaws } from "../context/laws";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

const Viewer = () => {
  const { revisionId, statuteId } = useParams();
  //   const url =
  //     "https://gov.tc/agc/component/edocman/2021-revised-laws-list-of-titles-and-chapters/viewdocument/2021?Itemid=";
  //   const [pageNumber, setPageNumber] = useState(1);
  //   const [numPages, setNumPages] = useState(null);
  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }
  const selectStatute = useLaws((state) => state.selectStatute);
  const statute = useLaws((state) => state.statute);
  useEffect(() => {
    selectStatute(Number(revisionId), Number(statuteId));
  }, [revisionId, statuteId]);
  return (
    <section>
      <div className="flex items-center justify-end py-4">
        <a
          href="#"
          title="Download PDF"
          className="flex p-2 text-sm rounded-md hover:bg-gray-50 items-center gap-4"
        >
          Download Regulation
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-xl font-semibold">{statute.title}</h2>
      </div>
      <div>
        {/* <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p> */}
        <div className="py-4 flex items-center justify-center">
          "PDF Viewer will be here"
        </div>
      </div>
    </section>
  );
};

export default Viewer;
