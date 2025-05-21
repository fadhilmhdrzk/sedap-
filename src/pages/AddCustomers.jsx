export default function AddCustomer() {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Add Customer</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Customer ID</label>
            <input type="text" className="border w-full px-3 py-2 rounded" placeholder="e.g. CUST031" />
          </div>
          <div>
            <label className="block font-medium">Customer Name</label>
            <input type="text" className="border w-full px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input type="email" className="border w-full px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input type="text" className="border w-full px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">Loyalty</label>
            <select className="border w-full px-3 py-2 rounded">
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    );
  }
  