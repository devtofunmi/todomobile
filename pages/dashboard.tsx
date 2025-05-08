import { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learning Programming by 12PM", done: true },
    { id: 2, text: "Clean Room to cook by 1PM", done: false },
    { id: 3, text: "Learn How to play at 3PM", done: false },
    { id: 4, text: "Read Books at 4PM", done: false },
    { id: 5, text: "Going to travel 5PM", done: false },
    { id: 6, text: "Call Mom at 6PM", done: false },
    { id: 7, text: "Finish Homework by 7PM", done: false },
    { id: 8, text: "Watch a tutorial at 8PM", done: false },
    { id: 9, text: "Plan next day at 9PM", done: false },
    { id: 10, text: "Go to bed at 10PM", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#eff4f3] font-poppins">
      <div className="relative bg-cyan-400 min-h-[250px] flex flex-col items-center justify-end pb-4 md:pb-40">
        <div className="absolute top-0 left-0">
          <img src="/shape2.png" alt="shapeicon" className="w-40" />
        </div>
        <img src="/guy.png" alt="Profile" className="w-20 h-20 rounded-full mb-2 md:mt-10 " />
        <h2 className="text-white font-semibold text-[18px] lg:text-base">Welcome Jeegar Goyani</h2>
      </div>

      <div className="flex w-full max-w-md px-6 mx-auto  flex-col flex-grow justify-center">
        <p className="text-[18px] font-poppins font-semibold text-right text-black mt-5 mb-4">Good Afternoon</p>

        <div className="flex justify-center items-center mb-2">
          <img src="/clock.png" alt="clock" className="w-32" />
        </div>

        <div>
          <h3 className="font-semibold text-black text-sm">Task list</h3>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 mt-5 mb-20">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-semibold text-gray-500 mb-2">Daily Task</p>
            <img src="/plus.png" alt="clock" className="" />
          </div>

          {/* Scrollable Task List */}
          <ul className="space-y-4 max-h-52 mt-10 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-cyan-400">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                  className={`w-4 h-4  border-2 border-black appearance-none
                    ${task.done ? "bg-cyan-500" : "bg-white"}
                    transition-colors duration-200 cursor-pointer`}
                />
                <span className="text-gray-800">{task.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
  