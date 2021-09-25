import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
function Dashboard() {
  const [clinicData, setClinicData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  async function handleDelete(id) {
    try {
      await fetch("/api/clinic", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      await fetchData();
    } catch (error) {}
  }

  async function fetchData() {
    try {
      const res = await axios.get("/api/clinic");
      setClinicData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="px-2 overflow-x-scroll">
      <table className="divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {tables.map((table) => (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                key={table}
              >
                {table}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {clinicData.map((data) => (
            <tr key={data.id}>
              <td className="px-6 py-4 whitespace-nowrap"> {data.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.pincode}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.city}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.telephone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.height}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.occupation}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.dob}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {data.maritalStatus}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{data.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.weight}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.reffredBy}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.state}</td>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="btn btn--danger"
                  onClick={() => handleDelete(data.id)}
                >
                  delete
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/edit/${data.id}`}>
                  <button className="btn btn--warning">edit</button>
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tables = [
  "ID",
  "Pincode",
  "Gender",
  "Email",
  "Address",
  "City",
  "Telephone",
  "Height",
  "Occupation",
  "DOB",
  "Marital Status",
  "Name",
  "Age",
  "Weight",
  "Reffred By",
  "State",
  // "Delete",
  // "Edit",
];

export default Dashboard;
