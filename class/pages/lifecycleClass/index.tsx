import { Component, createRef } from "react";
import Router from "next/router";

interface IPrev {
  count: number;
}
export default class LifecycleClassPage extends Component {
  state = {
    count: 0,
    // aaa: 1
  };

  inputRef = createRef<HTMLInputElement>();

  componentDidMount() {
    console.log("마운트 완료!!");
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    console.log("컴포넌트 변경됨!!");
  }

  componentWillUnmount() {
    alert("잘가요~");
  }

  onClickCount = () => {
    this.setState((prev: IPrev) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        <input type="password" ref={this.inputRef} />
        <div>카운트: {this.state.count}</div>
        <button onClick={this.onClickCount}>카운트 +1</button>
        <div>클래스 컴포넌트 입니다~</div>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}
