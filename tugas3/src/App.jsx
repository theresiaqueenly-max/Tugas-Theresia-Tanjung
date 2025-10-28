import React, { useState, useEffect } from "react";

const UserListWithImages = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        console.error("Network response was not ok");
        return;
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#ffe6f0", minHeight: "100vh" }}>
      <h1 style={{ color: "deeppink", textAlign: "center" }}>Daftar Pengguna</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={`https://robohash.org/${user.id}?size=100x100`}
              alt={`${user.name}'s profile`}
              style={{
                borderRadius: "50%",
                marginRight: "10px",
                border: "3px solid pink",
              }}
            />
            <div>
              <h2 style={{ margin: 0, color: "#ff1493" }}>{user.name}</h2>
              <p style={{ margin: 0, color: "#555" }}>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListWithImages;
