import mongoose from "mongoose";

// Khởi tạo một schema mới cho bài đăng
const postSchema = new mongoose.Schema({
    title: String, // Thuộc tính tiêu đề bài đăng, kiểu chuỗi
    content: String, // Thuộc tính nội dung bài đăng, kiểu chuỗi
    author: {
        type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến ObjectId của bảng User
        ref: 'User' // Tên của mô hình tham chiếu là 'User'
    }
});

// Xuất mô hình Post để có thể sử dụng ở các file khác
export default mongoose.model('Post', postSchema);
