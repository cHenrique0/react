import PostsList from "./components/PostsList";

function App() {
  const posts = [
    {
      id: Math.floor(Math.random() * 1000),
      author: "Alice",
      comment: "Hello, World!",
    },
    {
      id: Math.floor(Math.random() * 1000),
      author: "Bob",
      comment: "Hi, there!",
    },
    {
      id: Math.floor(Math.random() * 1000),
      author: "Charlie",
      comment: "Howdy, folks!",
    },
  ];

  return (
    <main>
      <PostsList posts={posts} />
    </main>
  );
}

export default App;
