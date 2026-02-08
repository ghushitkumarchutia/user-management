let users = [];

export const getUsers = async (filters = {}) => {
  let result = users;

  if (filters.isActive !== undefined) {
    result = result.filter((u) => u.isActive === filters.isActive);
  }

  return result;
};

export const createUser = async (data) => {
  const newUser = { id: Date.now().toString(), ...data };
  users.push(newUser);
  return newUser;
};

export const updateUser = async (id, data) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;

  users[index] = { ...users[index], ...data };
  return users[index];
};

export const deleteUser = async (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;

  const [deleted] = users.splice(index, 1);
  return deleted;
};

export const getAll = getUsers;
export const create = createUser;
export const update = updateUser;
export const remove = deleteUser;
