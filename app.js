import express from 'express'; // Nhập mô-đun Express để tạo ứng dụng web
import bodyParser from 'body-parser'; // Nhập body-parser để phân tích dữ liệu từ yêu cầu HTTP
import cors from 'cors'; // Nhập cors để cho phép chia sẻ tài nguyên giữa các nguồn (CORS)
import authRoutes from './routes/authRoutes.js'; // Nhập các route liên quan đến xác thực từ file authRoutes.js
import postRouters from './routes/postRoutes.js';
import dotenv from 'dotenv'; // Nhập dotenv để xử lý biến môi trường từ file .env

dotenv.config(); // Tải biến môi trường từ file .env để sử dụng trong ứng dụng

const app = express(); // Khởi tạo một instance của ứng dụng Express
const PORT = process.env.PORT || 5000; // Đặt cổng cho ứng dụng, lấy từ biến môi trường hoặc sử dụng 5000 nếu không có

app.use(cors()); // Sử dụng middleware CORS để cho phép chia sẻ tài nguyên giữa các nguồn
app.use(bodyParser.json()); // Sử dụng body-parser để phân tích các yêu cầu có dạng JSON

app.use('/api/auth', authRoutes); // Định tuyến cho các yêu cầu đến đường dẫn /api/auth bằng router được cấu hình trong authRoutes
app.use('/api/post',postRouters);

app.listen(PORT, () => { // Lắng nghe các yêu cầu HTTP trên cổng đã được cấu hình
    console.log(`Server running on port ${PORT}`); // In ra console thông báo rằng máy chủ đang chạy trên cổng đã chỉ định
});

// Xuất app để có thể sử dụng ở các file khác nếu cần
export default app;
