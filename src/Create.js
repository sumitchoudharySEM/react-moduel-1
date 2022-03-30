import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('sumit');
    const [peanding , setPeanding] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body , author};
        console.log(blog);

        setPeanding(true);

        fetch('http://localhost:8000/blogs' ,{
            method : 'POST',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(blog),
        }).then(() => {
            console.log("new blog added");
            setPeanding(false);
        })
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
                { !peanding && <button>add blog</button>}
                { peanding && <button disabled >Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;