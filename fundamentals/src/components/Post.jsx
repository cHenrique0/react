const posts = [
  {
    username: "Alice",
    content: "Hello, World!",
  },
  {
    username: "Bob",
    content: "Hi, there!",
  },
];

export default function Post() {
  const chosenPost = Math.random() > 0.5 ? posts[0] : posts[1];

  return (
    <div>
      <p>{chosenPost.username}</p>
      <p>{chosenPost.content}</p>
    </div>
  );
}
