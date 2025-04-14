import Post from "./components/Post";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Timer />
      <Post author={"Mike"} content={"No data available"} />
    </>
  );
}

export default App;
