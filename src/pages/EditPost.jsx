import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AddAndEditPost from "../components/AddAndEditPost";
import Spinner from "../components/Spinner";
import { editPost, fetchPost } from "../redux/post/postSlice";

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { post, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editPost({
        id: postId,
        body: { title, description, createdAt: post.createdAt },
      })
    );
    setTitle("");
    setDescription("");
    navigate(`/posts/${postId}`);
  };

  useEffect(() => {
    if (!post.id) {
      dispatch(fetchPost(postId));
    }
  }, [dispatch, post.id, postId]);

  useEffect(() => {
    setTitle(post.title);
    setDescription(post.description);
  }, [post]);

  if (loading) return <Spinner />;

  return (
    <div>
      <AddAndEditPost
        heading={"Edit the post here..."}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        btnText="Edit Post"
        onSubmitHandler={onSubmitHandler}
      />
    </div>
  );
};

export default EditPost;
