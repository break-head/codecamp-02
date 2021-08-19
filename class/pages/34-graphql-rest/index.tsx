import axios from "axios";

export default function GraphQlRestPage() {
  const onClickSubmit = async () => {
    const result = await axios.post(
      "http://backend02.codebootcamp.co.kr/graphql",
      {
        query: `
                mutation createBoard{
                    createBoard(createBoardInput :{ 
                        writer : "chulsu",
                        password: "1234", 
                        title: "title", 
                        contents: "hi!"
                    }){
                        _id
                        writer
                    }
                }
            `,
      }
    );
    console.log(result);
  };
  return <button onClick={onClickSubmit}>submit</button>;
}
