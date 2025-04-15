import React from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <>
      <MainHeader onCreatePost={setIsModalVisible} />
      <PostsList
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
}

export default App;
