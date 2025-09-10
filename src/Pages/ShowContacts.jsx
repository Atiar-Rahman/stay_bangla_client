import React, { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";

const ShowContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await authApiClient.get("/contacts/");
        setContacts(res.data);
      } catch (err) {
        console.error("Failed to fetch contacts:", err);
        setError("Failed to load contacts.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleContactDelete = async (contactId) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await authApiClient.delete(`/contacts/${contactId}/`);
        // Remove deleted contact from state
        setContacts(contacts.filter((c) => c.id !== contactId));

        Swal.fire({
          title: "Deleted!",
          text: "The contact has been deleted.",
          icon: "success",
        });
      } catch (err) {
        console.error(err);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete contact.",
          icon: "error",
        });
      }
    }
  };

  if (loading) return <p className="text-gray-500">Loading contacts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (contacts.length === 0)
    return <p className="text-gray-500">No contacts found.</p>;

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          <p className="text-gray-800 font-semibold">Name: {contact.name}</p>
          <p className="text-gray-600">Email: {contact.email}</p>
          <p className="text-gray-700 mt-2">{contact.comment}</p>
          <button
            className="btn btn-outline mt-2"
            onClick={() => handleContactDelete(contact.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowContacts;
