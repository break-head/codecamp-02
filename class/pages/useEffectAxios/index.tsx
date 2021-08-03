import { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffectAxiosPage() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImgUrl(result.data.message);
    };
    getImg();
  }, []);

  return <img src={imgUrl} />;
}
