import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((err) => {
                setError("Gagal memuat data user");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-4">Memuat data user...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">User List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-200 text-gray-700 text-left">
                        <tr>
                            <th className="py-2 px-4">#</th>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Email</th>
                            <th className="py-2 px-4">Phone</th>
                            <th className="py-2 px-4">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="border-t">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{user.firstName} {user.lastName}</td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4">{user.phone}</td>
                                <td className="py-2 px-4">{user.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
