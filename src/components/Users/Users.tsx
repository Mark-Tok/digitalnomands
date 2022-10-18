import React from "react";

import { useSelector } from "react-redux";

import { ModulesType } from "api/types";

import { User } from "./User";

export const Users: React.FC = () => {
  const users = useSelector((state: ModulesType) => state.users);
  return (
    <div style={{margin:'20px'}}>
      <div style={{ fontWeight: "bold" }}>Users:</div>
      {users?.map((item, index) => (
        <User key={index + "userskey"} {...item} />
      ))}
    </div>
  );
};
