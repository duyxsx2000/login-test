import authService from '../services/authService.js';

export const test = async (req, res) => {
  try {
    const user = await authService.test()
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const authLogin = async (req, res) => {
  try {
    const dataLogin = req.body;
    console.log(dataLogin);
    const user = await authService.login(dataLogin)
    res.status(201).json({
      message: "login success",
      token:'token'
    });
  } catch (err) {
    res.status(400).json({message: err.message });
  }
};

