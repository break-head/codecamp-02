import { useEffect, useState } from "react";
// import styled from "@emotion/styled";
import axios from "axios";
// import Image from 'next/image'

// const Image = styled.img``;

export default function OpenApi() {
  const [imgUrl, setImgUrl] = useState<string>("");

  console.log("reload");
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
