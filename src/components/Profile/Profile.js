// src/components/Profile.js
import React, { useState } from 'react';
import styles from './Profile.module.css';
// import profilePic from '../Assets/profile-pic.png';

const Profile = () => {
    // State to store user details
    const [userDetails, setUserDetails] = useState({
        name: 'Balu',
        email: 'tanikonda@example.com',
        address: '123 Ongole,Andhra pradesh.',
    });

    // State to manage form inputs
    const [formInput, setFormInput] = useState({ ...userDetails });

    // State to control form visibility
    const [isEditing, setIsEditing] = useState(false); // New state to track edit mode

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserDetails(formInput); // Update user details
        setIsEditing(false); // Hide form after submission
    };

    return (
        <div className={styles.profileContainer}>
            <h2>User Profile</h2>
            <div className={styles.profileCard}>
                {/* <img src={profilePic} alt="Profile" className={styles.profileImage} /> */}
                <div className={styles.profileDetails}>
                    <p><strong>Name:</strong> {userDetails.name}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <p><strong>Address:</strong> {userDetails.address}</p>
                </div>
            </div>

            {isEditing ? ( // Conditional rendering based on isEditing state
                <>
                    <h3>Edit Details</h3>
                    <form onSubmit={handleSubmit} className={styles.profileForm}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formInput.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formInput.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Address:
                            <input
                                type="text"
                                name="address"
                                value={formInput.address}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <button type="submit">Update Profile</button>
                    </form>
                </>
            ) : (
                <button onClick={() => setIsEditing(true)} className={styles.editButton}>Edit Profile</button> // Button to enter edit mode
            )}
        </div>
    );
};

export default Profile;
