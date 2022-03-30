import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('sumit');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body , author};

        console.log(blog);
    }

    return (
        <div className="create">
            <h2> add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="sumit">sumit</option>
                </select>
                <button>add blog</button>
                <p>{body}</p>
                <p>{title}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;