import { Link } from "react-router-dom";

export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4">
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold">
          {title}
        </span>
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          <span id="breadcrumb-text" className="text-gray-500">{breadcrumb}</span>
        </div>
      </div>

      <div id="action-button" className="space-x-2 flex">
        <Link to="/add-customer">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Customer
          </button>
        </Link>
        <Link to="/add-order">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add Order
          </button>
        </Link>
        {children}
      </div>
    </div>
  );
}
