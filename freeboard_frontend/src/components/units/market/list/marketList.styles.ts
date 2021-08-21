import styled from "@emotion/styled";
export const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
`;
export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;
export const PageTitle = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  min-width: 80%;
  padding: 50px 50px;
`;
export const BestProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 100%;
`;
export const Column = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 16px;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const Image = styled.img`
  width: 280px;
  height: 220px;
  border: solid 1px black;
  border-radius: 16px;
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 10px;
`;
export const ContentsTextWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
export const ContentsIconWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const Title = styled.div`
  font-size: 18px;
`;
export const Remarks = styled.div`
  font-size: 12px;
`;
export const LikeIcon = styled.img`
  height: 20px;
  width: 20px;
`;
export const Price = styled.div`
  font-size: 18px;
`;
export const LikeCount = styled.div`
  font-size: 16px;
`;
export const Body = styled.div`
  min-width: 100%;
  height: 1000px;
  padding-top: 40px;
  overflow: hidden;
`;
export const SettingWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SettingTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
`;
export const SellingProductButton = styled.div`
  font-size: 18px;
`;
export const SelledProductButton = styled.div`
  font-size: 18px;
  padding-left: 18px;
`;
export const SettingButtonWrapper = styled.div`
  width: 70%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SearchBox = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 16px;
`;
export const SearchDate = styled.div`
  border: black 1px solid;
  border-radius: 16px;
  height: 40px;
  width: 200px;
  text-align: center;
`;
export const SearchButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 16px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const ColumnImage = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 16px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  :active {
    position: relative;
    top: 2px;
  }
`;
export const ColumnProductWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 16px;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ColumnTitle = styled.div`
  font-size: 24px;
`;
export const ColumnRemark = styled.div`
  font-size: 16px;
`;
export const ColumnTags = styled.div`
  font-size: 16px;
`;
export const ColumnSellerInfo = styled.div`
  padding-top: 20px;
  width: 250px;
  display: flex;
`;
export const ColumnSellerName = styled.span``;
export const ColumnSellerIcon = styled.img`
  height: 20px;
  width: 20px;
  background-color: gray;
`;
export const ColumnLikeIcon = styled.img`
  height: 20px;
  width: 20px;
  background-color: gray;
`;
export const ColumnLikeCount = styled.span``;
export const ColumnPrice = styled.div`
  font-size: 24px;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
`;
export const CreateProductButton = styled.button`
  width: 124px;
  height: 52px;
`;

export const SideWrapper = styled.div`
  width: 150px;
  height: 100%;
  margin-top: 150px;
  padding-bottom: 100px;
  position: sticky;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WatchedTitle = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
`;
export const WatchedContents = styled.div`
  display: flex;
  width: 150px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  margin-top: 15px;
`;
export const WatchedIconWrapper = styled.div`
  display: flex;
`;
export const WatchedIcon = styled.img``;
export const WatcedPicked = styled.div``;
export const WatchedImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 16px;
`;
export const WatchedRemark = styled.div``;
export const WatchedPrice = styled.div``;
export const WatchedTags = styled.div``;
