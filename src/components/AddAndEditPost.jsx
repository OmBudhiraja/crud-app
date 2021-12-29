import { BiLoaderAlt } from "react-icons/bi";

const AddAndEditPost = ({
  heading = "Create A New Post",
  title,
  description,
  setTitle,
  setDescription,
  onSubmitHandler,
  loading,
  btnText = "Add Post ",
}) => {
  return (
    <div className="flex justify-center h-screen items-center px-4">
      <div className="px-3 py-7 sm:p-6 rounded-xl w-[28rem] max-w-full bg-gray-300">
        <h1 className="text-4xl text-center mb-8 text-zinc-900 font-semibold">
          {heading}
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <label className="block text-zinc-800 mb-2" htmlFor="title">
              Post Title*
            </label>
            <input
              className="bg-gray-100 border-none outline-none px-3 py-2 rounded w-full placeholder-gray-400"
              type="title"
              name="title"
              id="title"
              required
              placeholder="Eg. HTML Basics"
              autoFocus={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-zinc-800 mb-2" htmlFor="description">
              Post Descripton*
            </label>
            <textarea
              className="bg-gray-100 border-none outline-none px-3 py-2 rounded w-full placeholder-gray-400 "
              type={"text"}
              id="description"
              name="description"
              rows={"5"}
              required
              placeholder="post description goes here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            role="form"
            disabled={loading}
            className="bg-zinc-800 text-white px-5 py-2 w-full rounded-md mt-5 text-center disabled:bg-zinc-700 hover:bg-opacity-80 active:outline outline-2 outline-gray-400"
          >
            {loading ? (
              <BiLoaderAlt size={"20px"} className="inline animate-spin	" />
            ) : (
              <>{btnText}</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAndEditPost;
