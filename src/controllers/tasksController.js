const tasksModel = require('../models/tasksModel');

const getAll = async (_request, response) => {
  const tasks = await tasksModel.getAll();
  return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.deleteTask(id);
  return response.status(204).json();
};

const updateTast = async (request, response) => {
  const { id } = request.params;
  const taskBody = request.body;

  await tasksModel.updateTask(id, taskBody);

  return response.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTast
};