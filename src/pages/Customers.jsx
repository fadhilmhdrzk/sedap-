import customers from "../assets/customers.json";

export default function Customers(){
    return(
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Customers</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Customer ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customerId}>
                <td className="border px-4 py-2">{customer.customerId}</td>
                <td className="border px-4 py-2">{customer.customerName}</td>
                <td className="border px-4 py-2">{customer.email}</td>
                <td className="border px-4 py-2">{customer.phone}</td>
                <td className="border px-4 py-2">{customer.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }