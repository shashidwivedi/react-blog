import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect in home ran');

        let promise = fetch('http://localhost:8000/blogs');

        let promise2 = promise.then((response) => response.json());

        promise2.then(blogs => setBlogs(blogs));

    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} handleDelete={handleDelete} />
        </div>
    );
}

export default Home;