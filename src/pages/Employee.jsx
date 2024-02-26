import React from "react";

function Employee() {
  return (
    <div className="p-5">
      <div className="bg-gray-300 rounded-t-xl">
        <div className="flex flex-col  pt-12">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full   align-middle ">
              <div className="overflow-hidden bg-white h-full rounded-t-xl">
                <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
                  <thead className="text-xs">
                    <tr>
                      <th
                        scope="col"
                        className="px-7 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Details
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Designation
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Contact Details
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Joined on
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="transition-all bg-gray-100">
                      <td className="px-6  whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-black">
                              6600311
                            </div>
                            <div className="text-xs text-gray-500">
                              Johanson Swiss
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="text-sm text-red-600">Designer</div>
                      </td>

                      <td className="px-4 py-4 text-xs text-black whitespace-nowrap">
                        +91-986356790
                      </td>

                      <td className="text-black px-6 py-4 text-sm">
                        11-01-2020
                      </td>
                    </tr>
                    <tr className="transition-al">
                      <td className="px-6  whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-black">
                              6600311
                            </div>
                            <div className="text-xs text-gray-500">
                              Lavern Simonis
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="text-sm text-green-600">
                          Web Developer
                        </div>
                      </td>

                      <td className="px-4 py-4 text-xs text-black whitespace-nowrap">
                        +91-986356790
                      </td>
                      <td className="text-black px-6 py-4 text-sm">
                        11-01-2020
                      </td>
                    </tr>
                    <tr className="transition-all bg-gray-100">
                      <td className="px-6  whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-black">
                              6600311
                            </div>
                            <div className="text-xs text-gray-500">
                              Laury Waters
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="text-sm text-blue-600">
                          IOS Developer
                        </div>
                      </td>

                      <td className="px-4 py-4 text-xs text-black whitespace-nowrap">
                        +91-986356790
                      </td>
                      <td className="text-black px-6 py-4 text-sm">
                        11-01-2020
                      </td>
                    </tr>
                    <tr className="transition-all bg-white">
                      <td className="px-6  whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-black">
                              6600311
                            </div>
                            <div className="text-xs text-gray-500">
                              Laury Waters
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="text-sm text-red-600">Designer</div>
                      </td>

                      <td className="px-4 py-4 text-xs text-black whitespace-nowrap">
                        +91-986356790
                      </td>
                      <td className="text-black px-6 py-4 text-sm">
                        11-01-2020
                      </td>
                    </tr>
                    <tr className="transition-all bg-gray-100">
                      <td className="px-6  whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-black">
                              6600311
                            </div>
                            <div className="text-xs text-gray-500">
                              Laury Waters
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="text-sm text-green-600">
                          IOS Developer
                        </div>
                      </td>

                      <td className="px-4 py-4 text-xs text-black whitespace-nowrap">
                        +91-986356790
                      </td>
                      <td className="text-black px-6 py-4 text-sm">
                        11-01-2020
                      </td>
                    </tr>
                    <tr className="transition-all bg-white">
                      <td className="px-6  whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-black">
                              6600311
                            </div>
                            <div className="text-xs text-gray-500">
                              Laury Waters
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="text-sm text-red-600">Designer</div>
                      </td>

                      <td className="px-4 py-4 text-xs text-black whitespace-nowrap">
                        +91-986356790
                      </td>
                      <td className="text-black px-6 py-4 text-sm">
                        11-01-2020
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
