import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요한 페이지입니다.");
      router.push("/22-login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
