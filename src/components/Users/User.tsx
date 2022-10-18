import styled from "styled-components";

import { UsersInterface } from "api/types";

import { Todo } from "./Todo";

const UserInfo = styled.div`
  margin-bottom: 10px;
  .name {
    font-size: 20px;
    color: black;
    font-weight: bold;
  }
`;

export const User = ({
  name,
  phone,
  todos,
}: Pick<UsersInterface, "name" | "phone" | "todos">) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <UserInfo>
        <div className="name">{name}</div>
        <div className="phone">Phone: {phone}</div>
      </UserInfo>
      <div>Current tasks:</div>
      {todos.map((item, index) => (
        <Todo key={index + "todokey"} {...item} />
      ))}
    </div>
  );
};
