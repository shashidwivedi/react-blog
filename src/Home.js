import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        let promise = fetch('http://localhost:8000/blogs');

        let promise2 = promise.then((response) => response.json());

        promise2.then(blogs => {
            setBlogs(blogs);
            setIsLoading(false);
        });

    }, []);

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;