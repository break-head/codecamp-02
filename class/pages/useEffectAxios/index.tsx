import { useEffect, useState } from "react";
import axios from "axios";
export default function UseEffectAxiosPage() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get("https://randomfox.ca/floof/");
      console.log(result.data);
      // setImgUrl(result);
      setImgUrl(result.data.image);
    };
    getImg();
  }, []);

  return <img src={imgUrl} />;
}