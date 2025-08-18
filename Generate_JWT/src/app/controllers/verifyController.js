require('dotenv').config();

class verifyController {
    static users = [];
    static SECRET_KEY = process.env.SECRET_KEY;
    
    //Đăng ký tài khoản
    async register(req, res) {
        //Lấy username, password từ req.body
        const {username, password} = req.body;
        //Kiểm tra user đã tồn tại hay chưa
        if(users.find(u => u.username === username)) {
            return res.status(400).json({message: 'Username already exits!!!'});
        }

        //Hash mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        //Lưu user
        users.push({username, password: hashedPassword});
        res.status(201).json({message: 'Regist account successfully!!!'})
    }; 

    async login(req, res) {
        const {username, password} = req.body;
        //Lấy dữ liệu và tìm user tương ứng với username
        const user = users.find(u => u.username === username);

        if(!user) return res.status(400).json({message: 'User not found!!!'});

        //So sánh mật khẩu
        const check = await bcrypt.compare(password, user.password);

        if(!check) return res.status(401).json({ message: 'Password is wrong!!!' });
        
        //Tạo vào trả về mảng JWT token
        const token = jwt.sign({username}, process.env.SECRET_KEY, {expiresIn: process.env.expiresIn});
        res.json({token});
    };

    async profile(req, res) {
        res.json({message: `Hello, ${req.user.username}`})
    };
}

module.exports = new verifyController;
