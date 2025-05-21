export default function AddOrder() {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Add Order</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Order ID</label>
            <input type="text" className="border w-full px-3 py-2 rounded" placeholder="e.g. ORD031" />
          </div>
          <div>
            <label className="block font-medium">Customer Name</label>
            <input type="text" className="border w-full px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">Status</label>
            <select className="border w-full px-3 py-2 rounded">
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Total Price</label>
            <input type="number" className="border w-full px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">Order Date</label>
            <input type="date" className="border w-full px-3 py-2 rounded" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    );
  }
  