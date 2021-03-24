import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {

        let promise = fetch('http://localhost:8000/blogs');

        let promise2 = promise.then((response) => response.json());

        promise2.then(blogs => setBlogs(blogs));

    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;