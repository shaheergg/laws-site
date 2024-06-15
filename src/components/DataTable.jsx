import { Link } from "react-router-dom";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export default function DataTable({
  data,
  keys,
  title,
  addLink,
  description,
  entity,
}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            to={addLink}
            type="button"
            className="block px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            Add {entity}
          </Link>
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {keys.map((key) => {
                      return (
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          {key.label}
                        </th>
                      );
                    })}
                    {entity !== "Regulation" && (
                      <th className="sr-only">Actions</th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.id}>
                      {keys.map((key) => {
                        return key.key === "url" ? (
                          <td
                            key={key.key}
                            className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                          >
                            <a
                              className="text-cyan-500 hover:underline"
                              href={item["url"]}
                            >
                              Link to PDF
                            </a>
                          </td>
                        ) : (
                          <td
                            key={key.key}
                            className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                          >
                            {item[key.key]}
                          </td>
                        );
                      })}
                      {entity !== "Regulation" && (
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                          <Link
                            to={`/admin/${
                              entity === "Revision"
                                ? `laws/${item.id}`
                                : `regulations/${item.id}`
                            }`}
                            className="text-cyan-500 hover:underline"
                          >
                            View
                          </Link>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
