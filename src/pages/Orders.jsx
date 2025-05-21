import orders from "../assets/orders.json";

function getStatusColor(status) {
  switch (status) {
    case "Pending":
      return "text-yellow-600";
    case "Completed":
      return "text-green-600";
    case "Cancelled":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
}

export default function Orders() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Customer Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Total Price</th>
            <th className="border px-4 py-2">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId} className="text-center">
              <td className="border px-4 py-2">{order.orderId}</td>
              <td className="border px-4 py-2">{order.customerName}</td>
              <td className={`border px-4 py-2 ${getStatusColor(order.status)}`}>
                {order.status}
              </td>
              <td className="border px-4 py-2">Rp {order.totalPrice.toLocaleString()}</td>
              <td className="border px-4 py-2">{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
