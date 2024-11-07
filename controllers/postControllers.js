import Post from '../models/Post.js';
// tạo mới bài viết 
export const creatpost = async(req, res)=>{
    const {title, content} = req.body 

    try {
      const newPost = new Post({title, content, author:req.user.id})
      await newPost.save()
      return res.status(201).json({message:'Bài viết mới tạo thành công'})

    }catch(error){
      return res.status(500).json({message:'Lỗi khi tạo bài viết mới'})
    }
}
// lất tất cả bài viết
export const getAllPosts = async(req, res)=>{
    try{
      const posts = await Post.find().populate('author','username')
      return res.status(200).json(posts)
    }catch(error){
     return res.status(500).json({message:'lỗi xảy ra '})
    }


}
//populate() tìm kiếm tài liệu trong collectipn User mà có _id tương ứng với giá trị trường Author