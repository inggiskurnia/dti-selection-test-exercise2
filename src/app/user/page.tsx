"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC, useEffect, useState } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
}

const UserPage: FC = () => {
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllUser = async (): Promise<UserData[]> => {
    try {
      setIsLoading(true);
      const response = await axios.get<UserData[]>(
        "http://localhost:3000/users"
      );
      console.log(response.data);
      setUsersData(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      alert(error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []); // Dependency array is empty to run the effect only once

  return (
    <div>
      {isLoading && <p>Loading.....</p>}
      {usersData.length === 0 && !isLoading && <p>No users found.</p>}{" "}
      {/* Added no users message */}
      {usersData &&
        usersData.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default UserPage;
