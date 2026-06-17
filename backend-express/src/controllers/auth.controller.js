import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
    try {
        await authService.registerAsync(req.body);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const token = await authService.loginAsync(req.body);
        res.json({ token });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}