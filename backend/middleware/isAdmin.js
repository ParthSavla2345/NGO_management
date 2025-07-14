const isAdmin = (req, res, next) => {
    if (req.user.role !== 1) {
      return res.status(403).json({ message: 'Admin access required' });
    }
    next();
  };
  
  module.exports = isAdmin;