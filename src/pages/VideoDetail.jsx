import { useParams } from "react-router-dom";

export default function VideoDetail() {
  // useParams()로 해당 페이지의 params 객체를 넘겨받을 수 있음
  const { videoId } = useParams();

  return <p>{videoId}</p>;
}
