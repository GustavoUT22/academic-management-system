import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
    try {
        await authService.register(req.body);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}