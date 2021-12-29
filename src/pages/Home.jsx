import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import Spinner from "../components/Spinner";
import { fetchPosts } from "../redux/posts/postsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  // const dummyPost = [
  //   {
  //     _id: 1,
  //     title: "test blog",
  //     description:
  //       "test descripton Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero? Quis ea consectetur ullam laborum explicabo harum officiis nostrum ducimus?",
  //     createdAt: "1640711290411",
  //   },
  //   {
  //     _id: 2,
  //     title: "test blog",
  //     description:
  //       "test descripton Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero? Quis ea consectetur ullam laborum explicabo harum officiis nostrum ducimus?",
  //     createdAt: "1640711290411",
  //   },
  //   {
  //     _id: 3,
  //     title: "test blog",
  //     description:
  //       "test descripton Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero? Quis ea consectetur ullam laborum explicabo harum officiis nostrum ducimus?",
  //     createdAt: "1640711290411",
  //   },
  //   {
  //     _id: 4,
  //     title: "test blog",
  //     description:
  //       "test descripton Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero? Quis ea consectetur ullam laborum explicabo harum officiis nostrum ducimus?",
  //     createdAt: "1640711290411",
  //   },
  //   {
  //     _id: 5,
  //     title: "test blog",
  //     description:
  //       "test descripton Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero? Quis ea consectetur ullam laborum explicabo harum officiis nostrum ducimus?",
  //     createdAt: "1640711290411",
  //   },
  // ];

  useState(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="container mx-auto px-5 md:px-24 py-10 min-h-[90vh]">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold"> All Posts</h2>
        <Link to={"/add"} className="bg-zinc-800 text-white px-3 md:px-6 py-3">
          Create New Post
        </Link>
      </div>
      <div className="w-full flex items-center flex-col mt-5">
        {!loading && posts.length === 0 && (
          <div className="h-[73vh] flex items-center justify-center text-4xl">
            No Posts Yet. Create Now to see here...
          </div>
        )}
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
