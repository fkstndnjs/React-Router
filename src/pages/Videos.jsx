import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const [text, setText] = useState("");

  // 특정 라우터로 이동할 수 있는 방법이 2가지 있음
  // 1. <Link to="/">temp</Link>
  // 2. useNavigate()
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/videos/${text}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={text} onChange={handleChange} />
        <button>submit</button>
      </form>
    </div>
  );
}
