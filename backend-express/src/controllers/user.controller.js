import * as userService from '../services/user.service.js';

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsersAsync();
    res.status(200).json(users);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserByIdAsync(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}

export const updateUser = async (req, res) => {
  try {
    await userService.updateUserAsync(req.params.id, req.body);
    res.status(200).json({ message: "Usuario actualizado exitosamente" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  try {
    await userService.deleteUserAsync(req.params.id);
    res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
}