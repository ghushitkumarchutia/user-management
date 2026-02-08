import { User } from "../models/user.model.js";

export const getUsers = async (filters = {}) => {
  const query = {};

  if (filters.isActive !== undefined) {
    query.isActive = filters.isActive;
  }

  return User.find(query).sort({ createdAt: -1 });
};

export const createUser = async (data) => {
  return User.create(data);
};

export const updateUser = async (id, data) => {
  const updated = await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updated;
};

export const deleteUser = async (id) => {
  const deleted = await User.findByIdAndDelete(id);
  return deleted;
};

export const getAll = getUsers;
export const create = createUser;
export const update = updateUser;
export const remove = deleteUser;
