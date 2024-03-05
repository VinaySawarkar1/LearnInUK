import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = ({ token }) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Added state for loading indicator
  const [error, setError] = useState(null); // Added state for error handling

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get('/api/contacts', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setContacts(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch contacts. Please try again later.');
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    if (token) {
      fetchContacts();
    }
  }, [token]); // Re-fetch contacts when token changes

  return (
    <div>
      <h2>Admin Page</h2>
      {isLoading ? (
        <p>Loading contacts...</p> // Display loading indicator while fetching data
      ) : error ? (
        <p className="error-message">{error}</p> // Display error message if encountered
      ) : contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Message: {contact.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default AdminPage;
