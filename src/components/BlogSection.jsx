import React, { useState } from "react";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", editIndex: null });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, editIndex } = form;

    if (editIndex !== null) {
      const updatedBlogs = blogs.map((blog, idx) =>
        idx === editIndex ? { title, content } : blog
      );
      setBlogs(updatedBlogs);
    } else {
      setBlogs([{ title, content }, ...blogs]);
    }

    setForm({ title: "", content: "", editIndex: null });
  };

  const handleEdit = (index) => {
    const blog = blogs[index];
    setForm({ ...blog, editIndex: index });
  };

  const handleDelete = (index) => {
    const updated = blogs.filter((_, idx) => idx !== index);
    setBlogs(updated);
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">➜ StatFLEX Blog</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-4 rounded-lg shadow mb-8 hover:border-2 border-green-500"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Blog Title"
              className="p-3 border rounded-md w-full"
              required
            />
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Blog Content"
              className="p-3 border rounded-md w-full h-28 md:h-full"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-block border-2 border-green-400 text-green-400 px-4 py-2 rounded-md hover:bg-green-400 hover:text-black transition"
          >
            {form.editIndex !== null ? "Update Post" : "Add Post"}
          </button>
        </form>

        {blogs.length === 0 ? (
          <p className="text-gray-500 text-center">No blogs yet. Start by adding one.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg p-4 hover:border-2 border-green-500 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600">{blog.content}</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="text-sm px-3 py-1 bg-green-400 text-white rounded hover:bg-green-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
