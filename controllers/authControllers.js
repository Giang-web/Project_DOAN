import User from '../models/User.js';

export const register = async (req, res) => {
    const { username, password } = req.body; // Lấy tên người dùng và mật khẩu từ yêu cầu

    try {
        // Kiểm tra xem người dùng đã tồn tại hay chưa
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Người dùng đã tồn tại' });
        }

        // Tạo người dùng mới với mật khẩu chưa mã hóa
        const newUser = new User({ username, password });
        await newUser.save();

        return res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi xảy ra' });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body; // Lấy tên người dùng và mật khẩu từ yêu cầu

    try {
        // Kiểm tra xem người dùng có tồn tại hay không
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(400).json({ message: 'Tên người dùng hoặc mật khẩu không đúng' });
        }

        // Đăng nhập thành công
        return res.status(200).json({ message: 'Đăng nhập thành công' });
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi xảy ra' });
    }
};
