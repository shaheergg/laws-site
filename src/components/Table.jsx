import { Link } from "react-router-dom";
import { useRegulations } from "../context/regulations";

export default function Table() {
  const regulations = useRegulations((state) => state.regulations);
  return (
    <div className="">
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      A85
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Regulation
                    </th>
                    <th
                      scope="col"
                      className="px-3 sr-only py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {regulations.map((law) => (
                    <tr key={law.email}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"></td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        <span className="font-semibold text-black">
                          {law.code}
                        </span>
                        <span className="block text-xs italic text-gray-600">
                          ({law.date})
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <Link
                          to={`/regulations/${regulations.id}`}
                          className="hover:underline text-cyan-500"
                        >
                          {" "}
                          {law.name}
                        </Link>
                      </td>

                      <td className="relative py-4 pl-3 pr-4 space-x-2 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                        <Link
                          to={`/regulations/${law.id}`}
                          className="text-cyan-600 hover:text-cyan-900"
                        >
                          View<span className="sr-only">, {law.name}</span>
                        </Link>
                        <a
                          href="#"
                          className="text-cyan-600 hover:text-cyan-900"
                        >
                          Download
                          <span className="sr-only">, {law.name}</span>
                        </a>
                      </td>
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
