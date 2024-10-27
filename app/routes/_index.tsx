import type { MetaFunction } from "@remix-run/node";
import { Trash2, Pencil } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const todoList = [
  {
    id: "todo-1",
    name: "test todo1",
    isCompletion: false,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "todo-2",
    name: "test todo2",
    isCompletion: false,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "todo-3",
    name: "test todo3",
    isCompletion: false,
    createdAt: "",
    updatedAt: "",
  },
];

export default function Index() {
  const handleCompletion = (id: string) => {
    console.log(id);
  };
  return (
    <div className="w-2/3 bg-red-200 mx-auto">
      <h1 className="text-center">TODO</h1>
      <div className="flex flex-col items-center">
        {todoList.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between h-10 w-full"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={() => handleCompletion(todo.id)}
                className=""
              />
              <p className="ml-2">{todo.name}</p>
            </div>
            <div>
              <button className="py-1 px-3 bg-green-500 rounded-md text-white hover:bg-green-700">
                <Pencil />
              </button>
              <button className="ml-2 py-1 px-3 bg-red-500 rounded-md text-white hover:bg-red-700">
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
