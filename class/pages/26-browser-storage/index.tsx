export default function BrowserStorage() {
  const onSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "bbb=훈이";
    document.cookie = "ccc=맹구";
  };
  const onSaveLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onSaveSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onLoadCookie = () => {
    // document.cookie = "aaa=철수";
    let asdf;
    document.cookie.split("; ").forEach((data) => {
      if (data.startsWith("bbb=")) asdf = data;
    });
    console.log(asdf.split("=")[1]);
    // console.log(document.cookie);
  };
  const onLoadLocalStorage = () => {
    // localStorage.setItem("bbb", "영희");
    const asdf = localStorage.getItem("bbb");
    console.log("asdf", asdf);
  };
  const onLoadSessionStorage = () => {
    const qwer = sessionStorage.getItem("ccc");
    console.log("qwer", qwer);
    // sessionStorage.setItem("ccc", "훈이");
  };

  return (
    <>
      <button onClick={onSaveCookie}>쿠키저장</button>
      <button onClick={onSaveLocalStorage}>로컬저장</button>
      <button onClick={onSaveSessionStorage}>섹션저장</button>
      <br />
      =====================================================================
      <br />
      <button onClick={onLoadCookie}>쿠키불러오기</button>
      <button onClick={onLoadLocalStorage}>로컬불러오기</button>
      <button onClick={onLoadSessionStorage}>섹션불러오기</button>
    </>
  );
}
