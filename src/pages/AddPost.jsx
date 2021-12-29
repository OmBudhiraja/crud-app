import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddAndEditPost from "../components/AddAndEditPost";
import { addPost } from "../redux/posts/postsSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAddingPost } = useSelector((state) => state.posts);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, description, createdAt: Date.now() }));
    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <div>
      <AddAndEditPost
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        onSubmitHandler={onSubmitHandler}
        loading={isAddingPost}
      />
    </div>
  );
};

export default AddPost;
