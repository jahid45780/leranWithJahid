import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Task = () => {
    const [task, setTask] = useState({
        name: "",
        userId: "",
        title: "",
        description: "",
        date: "",
        status: "pending",
      });
    
      const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Submitted:", task);
        // alert("Task Submitted Successfully!");
        toast.success("Task Submitted Successfully!💖")
      };
    return (
      <section>
          <div className="max-w-lg bg-white mx-auto mt-10 p-6  shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Daily Task Submission</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">User ID</label>
          <input
            type="text"
            name="userId"
            value={task.userId}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Task Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={task.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Task
        </button>
      </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      </section>
    );
};

export default Task;