const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function route(app) {
    const users = [];
    const SECRET_KEY = 'supersecret123';
    
    app.post('/register', async (req, res) => {
        const {username, password} = req.body;
        if(users.find(u => u.username === username)) {
            return res.status(400).json({message: 'Username đã tồn tại!'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        users.push({username, password: hashedPassword});
        res.status(201).json({message: 'Đăng ký tài khoản thành công!'})
    }); 

    app.post('/login', async (req, res) => {
        const {username, password} = req.body;
        const user = users.find(u => u.username === username);

        if(!user) return res.status(400).json({message: 'Người dùng không tồn tại!'});

        const check = await bcrypt.compare(password, user.password);

        if(!check) return res.status(401).json({ message: 'Mật khẩu không đúng!' });

        const token = jwt.sign({username}, SECRET_KEY, {expiresIn: '1h'});
        res.json({token});
    });

    app.get('/profile', verifyToken, (req, res) => {
        res.json({message: `Hello, ${req.user.username}`})
    });

    function verifyToken(req, res, next) {
      const authHeader = req.headers['authorization'];
      const token = authHeader?.split(' ')[1]; 
    
      if (!token) return res.sendStatus(401);
    
      try {
        const user = jwt.verify(token, SECRET_KEY);
        req.user = user;
        next();
      } catch (err) {
        return res.sendStatus(403); 
      }
    }
}

module.exports = route;