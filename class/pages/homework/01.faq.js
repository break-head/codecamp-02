import {
  Wrapper,
  WrapperBody,
  WrapperHead,
  WrapperHeadTop,
  SearchBox,
  WrapperHeadMid,
  MyPage,
  Profile,
  Name,
  NameIcon,
  WrapperHeadBottom,
  WrapperHeadBottomMenu,
  Notice,
  Event,
  Faqq,
  Qa,
  WrapperMiddle,
  WrapperMiddleQuestion,
  Question,
  QuestionNumber,
  QuestionTitle,
  WrapperMiddleIcon,
  ArrowIcon,
  WrapperFooter,
  WrapperFooterMenuIcon,
  HomeIcon,
  LocationIcon,
  LikeIcon,
  MyIcon,
  WrapperFooterMenuTitle,
  Title,
} from "../../styles/homework/01.Faq.styles";

export default function faq() {
  return (
    <Wrapper>
      <WrapperBody>
        <WrapperHead>
          <WrapperHeadTop>
            <SearchBox src="/Homework/01.faq/search.png" />
          </WrapperHeadTop>
          <WrapperHeadMid>
            <MyPage>마이</MyPage>
            <Profile src="/Homework/01.faq/profile.png" />
            <Name>임정아</Name>
            <NameIcon src="/Homework/01.faq/arrow.png" />
          </WrapperHeadMid>
          <WrapperHeadBottom>
            <WrapperHeadBottomMenu>
              <Notice>공지사항</Notice>
              <Event>이벤트</Event>
              <Faqq>FAQ</Faqq>
              <Qa>Q&amp;A</Qa>
            </WrapperHeadBottomMenu>
          </WrapperHeadBottom>
        </WrapperHead>

        <WrapperMiddle>
          <WrapperMiddleQuestion>
            <Question>
              <QuestionNumber>Q.01</QuestionNumber>
              <QuestionTitle>리뷰 작성은 어떻게 하나요?</QuestionTitle>
            </Question>
            <Question>
              <QuestionNumber>Q.02</QuestionNumber>
              <QuestionTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestionTitle>
            </Question>
            <Question>
              <QuestionNumber>Q.03</QuestionNumber>
              <QuestionTitle>아이디/비밀번호를 잊어버렸어요.</QuestionTitle>
            </Question>
            <Question>
              <QuestionNumber>Q.04</QuestionNumber>
              <QuestionTitle>회원탈퇴를 하고싶어요.</QuestionTitle>
            </Question>
            <Question>
              <QuestionNumber>Q.05</QuestionNumber>
              <QuestionTitle>출발지 설정은 어떻게 하나요?</QuestionTitle>
            </Question>
            <Question>
              <QuestionNumber>Q.06</QuestionNumber>
              <QuestionTitle>비밀번호를 변경하고 싶어요.</QuestionTitle>
            </Question>
          </WrapperMiddleQuestion>
          <WrapperMiddleIcon>
            <ArrowIcon
              src="/homework/01.faq/arrowright.png
            "
            />
            <ArrowIcon
              src="/homework/01.faq/arrowright.png
            "
            />
            <ArrowIcon
              src="/homework/01.faq/arrowright.png
            "
            />
            <ArrowIcon
              src="/homework/01.faq/arrowright.png
            "
            />
            <ArrowIcon
              src="/homework/01.faq/arrowright.png
            "
            />
            <ArrowIcon
              src="/homework/01.faq/arrowright.png
            "
            />
          </WrapperMiddleIcon>
        </WrapperMiddle>
        <WrapperFooter>
          <WrapperFooterMenuIcon>
            <HomeIcon src="/homework/01.faq/home.png" />
            <LocationIcon src="/homework/01.faq/location.png" />
            <LikeIcon src="/homework/01.faq/like.png" />
            <MyIcon src="/homework/01.faq/myicon.png" />
          </WrapperFooterMenuIcon>
          <WrapperFooterMenuTitle>
            <Title>홈</Title>
            <Title>잇츠로드</Title>
            <Title>마이찜</Title>
            <Title>마이</Title>
          </WrapperFooterMenuTitle>
        </WrapperFooter>
      </WrapperBody>
    </Wrapper>
  );
}
