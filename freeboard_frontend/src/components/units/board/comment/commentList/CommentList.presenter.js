import{}from './CommentList.styles'


export default function CommentListUi(props) {
  return (
    <Wrapper>
      <WrapperBody>
        <CommentWrapper>
         {props.data?.fetchBoardComments.map((data) => (
           <Row key = {data._id}>
            <CommentIcon src=""/>
            <CommentName>
             {data.writer} 
            </CommentName>
            <CommentContent>
              {data.content}
            </CommentContent>
            <CommentEditButton onClick={props.onClickUpdate}/>
            <CommentDeleteButton onClick={props.onClickDelete}/>
           </Row>
         ))} 
        </CommentWrapper>
      </WrapperBody>
    </Wrapper>
     
  );
}