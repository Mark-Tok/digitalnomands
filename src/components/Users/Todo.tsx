import { TodosInterface } from "api/types";

export const Todo = ({
  title,
  completed,
}: Pick<TodosInterface, "title" | "completed">) => {
  return (
    <div style={{ display: "flex", margin: "10px 0", alignItems: "center" }}>
      <input
        style={{ pointerEvents: "none" }}
        type="checkbox"
        defaultChecked={completed}
      />
      <div>{title}</div>
    </div>
  );
};
