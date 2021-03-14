import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(400).json({ msg: 'Không hợp lệ' });
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: 'Không shợp lệ' });
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(400).json({ msg: 'Không shợp lệ' });
  }
};

export default auth;
