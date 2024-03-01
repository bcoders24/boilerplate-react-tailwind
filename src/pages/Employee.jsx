import React, { useEffect, useState } from "react";
import instance from "../api/instance";

function Employee() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      const response = await instance.get("/users");
      console.log(response?.data?.items);
      setUsers(response?.data?.items);
    };
    GetUsers();
  }, []);
  return (
    <div className="p-5">
      <div className="bg-gray-200 rounded-t-xl">
        <div className="flex items-center justify-between py-4 px-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 lg:w-64 w-32 py-2 text-sm border shadow-md  rounded-xl focus:outline-none "
          />
          <button
            type="button"
            className="text-white bg-gradient-to-r py-2 from-orange-300 to-amber-500  font-medium rounded-md me-2 text-sm px-3 text-center "
          >
            + Add Employee
          </button>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden bg-white  rounded-t-xl">
                <table className="min-w-full overflow-x-scroll divide-y divide-gray-200 ">
                  <thead className="text-xs">
                    <tr>
                      <th
                        scope="col"
                        className="px-8 py-3 text-xs font-normal  tracking-wider text-left text-gray-500"
                      >
                        Details
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-normal  tracking-wider text-left text-gray-500"
                      >
                        Designation
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-xs font-normal  tracking-wider leading-none text-left text-gray-500"
                      >
                        Contact Details
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-xs font-normal tracking-wider text-left text-gray-500"
                      >
                        Joined on
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => {
                      return (
                        <tr
                          key={user.id}
                          className="transition-all bg-gray-100"
                        >
                          <td className="px-6 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm ml-2 font-medium text-black">
                                {user.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 text-sm text-red-600">
                            {user.profile.designation}
                          </td>
                          <td className="px-5 py-4 text-xs text-black whitespace-nowrap">
                            {user.phone}
                            <p>{user.email}</p>
                          </td>
                          <td className="px-5 py-4 text-xs text-black whitespace-nowrap">
                            {user.profile.dateOfJoining}
                          </td>
                        </tr>
                      );
                    })}
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
