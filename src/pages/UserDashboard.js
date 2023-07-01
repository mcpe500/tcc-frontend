import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../utils/authentication";
import { serverURL } from "../config/env";

function UserDashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const token = getToken();
        
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        
        const response = await axios.get(`${serverURL}/api/dashboard`);
        console.log(response);
        
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <h2>Welcome, {userData.username}!</h2>
          <p>Email: {userData.email}</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserDashboard;
