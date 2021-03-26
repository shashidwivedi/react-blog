import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const handleSubmit = (event) => {
        event.preventDefault();

        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setTitle('');
        setBody('');
        setAuthor('mario');
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="blog-title">Blog Title:</label>
                <input
                    id="blog-title"
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label htmlFor="blog-body">Blog Body:</label>
                <textarea
                    id="blog-body"
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <label htmlFor="blog-author">Blog Author:</label>
                <select
                    name=""
                    id="blog-author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="luigi">luigi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;