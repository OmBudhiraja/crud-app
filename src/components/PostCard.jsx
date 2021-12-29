import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="w-full max-w-lg px-5 py-3 border-2 border-gray-700 mb-4">
      <p className="uppercase text-xl font-semibold">{post.title}</p>
      <p className="text-xs text-gray-600 mt-1 mb-2">
        {new Date(+post.createdAt).toLocaleString()}
      </p>
      <p className="mt-3 text-lg inline">
        {post.description?.substring(0, 30)}...&nbsp;
      </p>
      <Link
        className="inline text-blue-500 hover:underline"
        to={`/posts/${post.id}`}
      >
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
