import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, DollarSign, Users, TrendingUp, CheckCircle } from 'lucide-react';

const initialTasks = [
  { id: 'task1', content: 'Follow up with John Doe', status: 'todo' },
  { id: 'task2', content: 'Prepare proposal for XYZ Corp', status: 'inProgress' },
  { id: 'task3', content: 'Schedule meeting with marketing team', status: 'todo' },
  { id: 'task4', content: 'Review Q2 sales report', status: 'inProgress' },
  { id: 'task5', content: 'Send invoice to ABC Inc', status: 'done' },
];

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTasks = Array.from(tasks);
    const [reorderedItem] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, reorderedItem);

    setTasks(newTasks);
  };

  const addTask = (status) => {
    const newTask = {
      id: `task${tasks.length + 1}`,
      content: 'New task',
      status,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 ">Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard title="Total Revenue" value="$45,000" icon={DollarSign} color="bg-green-500" />
        <SummaryCard title="New Leads" value="120" icon={Users} color="bg-blue-500" />
        <SummaryCard title="Conversion Rate" value="8.5%" icon={TrendingUp} color="bg-yellow-500" />
        <SummaryCard title="Tasks Completed" value="25" icon={CheckCircle} color="bg-purple-500" />
      </div>


      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Task Board</h2>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TaskColumn title="To Do" status="todo" tasks={tasks} addTask={addTask} />
            <TaskColumn title="In Progress" status="inProgress" tasks={tasks} addTask={addTask} />
            <TaskColumn title="Done" status="done" tasks={tasks} addTask={addTask} />
          </div>
        </DragDropContext>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, icon: Icon, color }) => (
  <div className={`${color} text-white rounded-lg shadow p-6 flex items-center`}>
    <div className="mr-4">
      <Icon size={32} />
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const TaskColumn = ({ title, status, tasks, addTask} ) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="space-y-4"
        >
          {tasks
            .filter((task) => task.status === status)
            .map((task , index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white p-4 rounded shadow"
                  >
                    {task.content}
                  </div>
                )}
              </Draggable>
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    <button
      onClick={() => addTask(status)}
      className="mt-4 flex items-center text-indigo-600 hover:text-indigo-800"
    >
      <Plus size={20} className="mr-1" /> Add Task
    </button>
  </div>
);

export default Dashboard;