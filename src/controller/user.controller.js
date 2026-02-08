import * as userService from "../services/user.service.js";

export const getUsers = async (req, res) => {
  try {
    let isActive;

    if (req.query.isActive !== undefined) {
      const rawIsActive = String(req.query.isActive).toLowerCase();
      if (rawIsActive !== "true" && rawIsActive !== "false") {
        return res.status(400).json({
          message: "Validation Error",
          error: [
            {
              path: ["isActive"],
              message: 'Query param "isActive" must be "true" or "false"',
            },
          ],
        });
      }

      isActive = rawIsActive === "true";
    }

    const users = await userService.getUsers({ isActive });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
