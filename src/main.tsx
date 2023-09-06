import React from "react";

const Header = () => {
  return <header>
    <h1>Anyway HOME</h1>
  </header>
}

const InputAddress = () => {
  return <input type="text" placeholder="주소를 입력하세요.">
  </input>
}

const ButtonSearchAddress = () => {
  return <button>
    검색
  </button>
}

const DestinationPreview = () => {
  return <div>
    space for preview
  </div>
}

const ButtonStart = () => {
  return <button>
    시작
  </button>
}


function App() {
  return (
    <div className="App">
      <Header></Header>
      <InputAddress></InputAddress>
      <ButtonSearchAddress></ButtonSearchAddress>
      <DestinationPreview></DestinationPreview>
      <ButtonStart></ButtonStart>
    </div>
  );
}



export default App;


//