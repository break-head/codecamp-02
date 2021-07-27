import { useEffect, useState } from "react";
import axios from "axios";

export default function openApi() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get("https://randomfox.ca/floof/");

      setImgUrl(result.data.image);
    };
    getImg();
  }, []);

  return (
    <>
      <img src={imgUrl} />
    </>
  );
}
