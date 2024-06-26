import Post from "./components/Post";

function App() {
  const posts = [
    {
      author: "Alice",
      comment: "Hello, World!",
    },
    {
      author: "Bob",
      comment: "Hi, there!",
    },
  ];

  return (
    <main>
      {posts.map((post, index) => (
        <Post key={index} author={post.author} comment={post.comment} />
      ))}
    </main>
  );
}

export default App;
