import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        age: ''
    });

   
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        const userData = {
            name: user.firstName,
            surname: user.lastName,
            age: user.age,
        };

        axios.post('http://localhost:8080/api/v1/users/add', userData)
            .then(response => {
                console.log('User added successfully', response.data);
                setUser({ firstName: '', lastName: '', age: '' });  
                alert('User added successfully!');
            })
            .catch(error => {
                console.error('Error adding user:', error);
                alert('There was an error adding the user. Please try again.');
            });
    };

    return (
        <div>
            <br/><br/><br/>
            <div className="container-fluid py-2 user">
                <h1 className="text-center text-black display-4">Add User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter User Name"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter User Surname"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter User Age"
                            name="age"
                            value={user.age}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
