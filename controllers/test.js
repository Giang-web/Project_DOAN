import { json } from "body-parser";

export const register = async(req, res) =>{
    const {username, password} = req.body;

    try {
       //kiểm tra người dùng đã tồn tại chưa
       const exsitingUser = await User.findOne({username});
       if(exsitingUser){
          return res.status(400).json({message:'Người dùng này đã tồn tại '})
       }

       const newUser = new User({username, password})
       await newUser.save()

       return res.status(201),json({message:'Đăng ký thành công'})

    }catch(error){
        return res.status(500).jon({message:'lỗi xảy ra'})

    }
}

export const login = async (req, res)=>{
    const {username, password } = req.body
    try {
      const user = await User.findOne({username , password})
      if(!user){
         return res.status(400).json({message: 'Tên người dùng hoặc mật khẩu không đúng'})
      }
     
      return res.status(200).json({message:'Đăng nhập thành công '})
    }
    catch(error){
        return res.status(500).json({message:'lỗi xảy ra'})
    }

}

