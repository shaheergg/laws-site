import { useState } from "react";
import { Document, Page } from "react-pdf";

function PDFViewer({ pdf }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <div>
      <Document
        file={pdf}
        renderMode="canvas"
        onLoadSuccess={onDocumentLoadSuccess}
        className={"shadow border rounded"}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                renderAnnotationLayer={false}
                renderTextLayer={false}
                pageNumber={page}
              />
            );
          })}
      </Document>
      <div className="flex items-center justify-center gap-2 p-2 py-2 bg-white rounded-md">
        <button
          type="button"
          disabled={pageNumber <= 1}
          className="p-2 rounded hover:bg-gray-50"
          onClick={previousPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <p className="text-sm">
          Page {pageNumber} of {numPages}
        </p>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          className="p-2 rounded hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PDFViewer;
