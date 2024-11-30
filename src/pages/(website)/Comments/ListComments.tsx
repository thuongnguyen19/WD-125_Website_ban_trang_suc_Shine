import { useEffect, useState } from 'react'
import { Comment, fetchComment } from '../../../Interface/Order';
import { message } from 'antd';

const ListComments = () => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
        if (!token) {
            message.error("Bạn chưa đăng nhập.");
            return;
        }
        const loadComments = async () => {
        try {
            const data = await fetchComment();
            setComments(data.data);
            setLoading(false);
        } catch (err) {
            setError("Chưa có đánh giá nào");
                setLoading(false);
        }
        };
        loadComments();
    }, []);

    if (loading) {
        return <p>Đang tải...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
  return (
    <div>
      
      <div className="wd-form-order">
        {Array.isArray(comments) && comments.length > 0 ? (
          comments.map(comment => (
            <div className='list-comment'>
            <div key={comment.id} className="product-infor">
              <img
                  className="product-image"
                  src={comment.image_variant}
                  alt={comment.product_name}
              />
              <div className="product-details">
                  <div className="product-name">{comment.product_name}</div>
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                                                <span key={i} className={`star ${i < comment.rating ? "filled" : ""}`}>
                                                    ★
                                                </span>
                                            ))}
                  </div>
                  <div className="product-type">{new Date(comment.created_at).toLocaleString()} | Phân loại: {comment.color}, {comment.size}</div>
                  
                  <div className="review-details">{comment.content}</div>
              </div>
            </div>
        
            </div>
        ))
        ):(
          <p>Không có đánh giá nào để hiển thị.</p>
        )}
</div>

    </div>
  )
}

export default ListComments