import React from "react";

export default function Time() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Available Time to Work</h2>
      <table className="table-auto w-full text-center border mx-12 mt-6">
        <thead>
          <tr>
            <th className="border px-4 py-2">Day</th>
            <th className="border px-4 py-2">Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Sunday</td>
            <td className="border px-4 py-2">All day</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Monday</td>
            <td className="border px-4 py-2">9 AM - 2:30 PM</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Tuesday</td>
            <td className="border px-4 py-2">Unavailable</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Wendnesday</td>
            <td className="border px-4 py-2">All day</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Thursday</td>
            <td className="border px-4 py-2">9 AM - 2:30 PM</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Friday</td>
            <td className="border px-4 py-2">9 AM - 2:30 PM</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Saturday</td>
            <td className="border px-4 py-2">Unavailable</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </>
  );
}
