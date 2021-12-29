import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { deletePost, fetchPost } from "../redux/post/postSlice";
import { filterPost } from "../redux/posts/postsSlice";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { post, error, loading, isDeleting } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  const deletePostHandler = () => {
    dispatch(deletePost(postId));
    dispatch(filterPost(postId));
    navigate("/");
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="flex justify-center min-h-[91vh] px-5">
      <div className="w-[65rem] max-w-full mt-10">
        <p className="text-6xl uppercase">{post?.title}</p>
        <div className=" mt-4 mb-2 flex items-center justify-between">
          <p className="text-lg text-gray-600">
            Created At {new Date(+post?.createdAt).toLocaleString()}
          </p>
          <div>
            <button className="bg-blue-800 p-2 text-white rounded-md hover:bg-opacity-80 mx-3">
              <Link to={`/posts/edit/${post?.id}`}>
                <AiFillEdit size={"22px"} />
              </Link>
            </button>
            <button
              disabled={isDeleting}
              onClick={deletePostHandler}
              className="bg-red-600 p-2 text-white rounded-md hover:bg-opacity-80"
            >
              <AiFillDelete size={"22px"} />
            </button>
          </div>
        </div>
        <p className="mt-11 text-lg text-gray-900 leading-7 pb-10">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default PostDetailsPage;
