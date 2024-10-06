import React from "react";

export default function Time({ language }) {
  return (
    <>
      <h2 className="text-2xl font-semibold lg:mx-0 mx-6">
        {language === "EN" ? (
          <span>Available Time to Work</span>
        ) : (
          <span>ช่วงเวลาที่ว่างพร้อมทำงาน</span>
        )}
      </h2>
      <div className="flex justify-center">
        <table className="table-auto w-[95%] text-center border mx-12 mt-6 items-center">
          <thead>
            <tr>
              <th className="border px-4 py-2">
                {language === "EN" ? <span>Day</span> : <span>วัน</span>}
              </th>
              <th className="border px-4 py-2">
                {language === "EN" ? <span>Time</span> : <span>เวลา</span>}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Sunday</span>
                ) : (
                  <span>วันอาทิตย์</span>
                )}
              </td>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>All day</span>
                ) : (
                  <span>ทั้งวัน</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Monday</span>
                ) : (
                  <span>วันจันทร์</span>
                )}
              </td>
              <td className="border px-4 py-2">9 AM - 2:30 PM</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Tuesday</span>
                ) : (
                  <span>วันอังคาร</span>
                )}
              </td>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Unavailable</span>
                ) : (
                  <span>ไม่ว่าง</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Wednesday</span>
                ) : (
                  <span>วันพุธ</span>
                )}
              </td>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>All day</span>
                ) : (
                  <span>ทั้งวัน</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Thursday</span>
                ) : (
                  <span>วันพฤหัสบดี</span>
                )}
              </td>
              <td className="border px-4 py-2">9 AM - 2:30 PM</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Friday</span>
                ) : (
                  <span>วันศุกร์</span>
                )}
              </td>
              <td className="border px-4 py-2">9 AM - 2:30 PM</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Saturday</span>
                ) : (
                  <span>วันเสาร์</span>
                )}
              </td>
              <td className="border px-4 py-2">
                {language === "EN" ? (
                  <span>Unavailable</span>
                ) : (
                  <span>ไม่ว่าง</span>
                )}
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}
