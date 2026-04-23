import "./App.css";
import axios from "axios";

function App() {
  const handleClick = async () => {
    const response = await axios.get("/board/list");
    console.log(response.data);
  };
  return (
    <>
      <h1>CI/CD 자동 배포 테스트 완료!</h1>
      <button onClick={handleClick}>데이터 가져오기</button>
    </>
  );
}

export default App;
