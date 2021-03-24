const BlogList = ({ blogs, handleDelete }) => {
    return (
        <div>
            {blogs ? blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            )) : "No blogs to show"}
        </div>
    );
}

export default BlogList;