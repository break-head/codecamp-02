import Button01 from "../../commons/buttons/Buttons01";
import Input01 from "../../commons/inputs/Inputs01";

export default function FormUI(props) {
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>폼 화면입니다</div>
      <Input01
        inputName="이메일"
        type="text"
        register={{ ...props.register("email") }}
        errorMessage={props.errors.email?.message}
      />
      <Input01
        inputName="비밀번호"
        errorMessage={props.errors.password?.message}
        type="password"
        register={{ ...props.register("password") }}
      />
      <Button01
        buttonName="로그인하기"
        type="submit"
        isActive={props.isActive}
      />
      {/* <MyButton type="submit" isActive={props.isActive}>
        로그인하기
      </MyButton> */}
    </form>
  );
}
