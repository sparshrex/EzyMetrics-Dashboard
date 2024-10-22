import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
import { CSVLink } from "react-csv";

const Reports = () => {
  const csvData = [
    ["ID", "Name", "Email", "Status"],
    [1, "John Doe", "john@example.com", "Interested"],
    [2, "Jane Smith", "jane@example.com", "Contacted"],
  ];

  const [selectedReport, setSelectedReport] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const handleGenerateReport = () => {
    // In a real application, this would trigger the report generation process
    console.log(
      "Generating report:",
      selectedReport,
      "for date range:",
      dateRange
    );
    // Here you would typically make an API call to generate the report
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Generate Report</h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="report-type"
              className="block text-sm font-medium text-gray-700"
            >
              Report Type
            </label>
            <select
              id="report-type"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
            >
              <option value="">Select a report</option>
              <option value="lead-summary">Lead Summary</option>
              <option value="conversion-rates">Conversion Rates</option>
              <option value="revenue-forecast">Revenue Forecast</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="start-date"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={dateRange.start}
                onChange={(e) =>
                  setDateRange({ ...dateRange, start: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="end-date"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={dateRange.end}
                onChange={(e) =>
                  setDateRange({ ...dateRange, end: e.target.value })
                }
              />
            </div>
          </div>
          <button
            onClick={handleGenerateReport}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FileText className="mr-2 h-5 w-5" />
           
            <CSVLink data={csvData}> Generate Report</CSVLink>
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[
              "Lead Summary - June 2023",
              "Conversion Rates - Q2 2023",
              "Revenue Forecast - 2023",
            ].map((report, index) => (
              <li key={index}>
                <a href=" " className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <FileText className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-sm font-medium text-indigo-600 truncate">
                            {report}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <span className="truncate">
                              Generated on {new Date().toLocaleDateString()}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Download className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
