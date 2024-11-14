import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch all users from the backend
        fetch("http://localhost:8080/api/v1/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    // Handle user deletion
    const handleDelete = (id) => {
        console.log("Attempting to delete user with ID:", id);
        fetch(`http://localhost:8080/api/v1/users/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    console.log("User deleted successfully");
                    setUsers(users.filter((user) => user.id !== id));
                } else {
                    console.error("Failed to delete user: Server responded with", response.status);
                }
            })
            .catch((error) => console.error("Error deleting user:", error));
    };
    

    // Placeholder for handleEdit function
    const handleEdit = (id) => {
        console.log("Edit user with ID:", id);
        // Add logic to open a form/modal for editing user data
    };

    return (
        <>
            <table className="table px-5">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.age}</td>
                            <td>
                                <button onClick={() => handleEdit(user.id)} className="btn btn-primary btn-sm mx-1">Edit</button>
                                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm mx-1">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Dashboard;
