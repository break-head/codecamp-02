exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 7252:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalContext": function() { return /* binding */ GlobalContext; },
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "@apollo/client/link/error"
var error_ = __webpack_require__(3245);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/commons/layout/banner/LayoutBanner.styles.ts

const Wrapper = (styled_default()).div`
  /* min-height: 30%; */
  min-width: 100%;
`;
const SliderItem = (styled_default()).img`
  height: 25%;
  width: 100%;
  margin: auto;
`;
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/commons/layout/banner/LayoutBanner.present.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function LayoutBannerUI() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000 // cssEase: "linear",

  };
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, setting), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: "flex",
          justifyContent: "center"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(SliderItem, {
          src: "/images/Layout/KakaoTalk_20200305_212308763.gif"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(SliderItem, {
          src: "/images/Layout/KakaoTalk_20200305_212308763.gif"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(SliderItem, {
          src: "/images/Layout/KakaoTalk_20200305_212308763.gif"
        })
      })]
    }))
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/banner/LayoutBanner.container.tsx


function LayoutBanner() {
  return /*#__PURE__*/jsx_runtime_.jsx(LayoutBannerUI, {});
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/commons/layout/header/LayoutHeader.styles.ts

const LayoutHeader_styles_Wrapper = (styled_default()).div`
  background-color: #fbdf14;
  display: flex;
  flex-direction: row;
  min-width: 100%;
`;
const InnerWrapper = (styled_default()).div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding-right: 30px;
`;
const InnerLogo = (styled_default()).img`
  cursor: pointer;
  width: 300px;
`;
const InnerButton = (styled_default()).span`
  margin: 10px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  margin-right: 50px;
`;
const ProfileWrapper = (styled_default()).div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserWrapper = (styled_default()).div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const UserLogo = (styled_default()).img`
  width: 70px;
  height: 70px;
`;
const UserInfoWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserName = (styled_default()).div`
  font-size: 25px;
`;
const UserPoint = (styled_default()).div`
  font-size: 12px;
`;
const LogOut = (styled_default()).div`
  text-align: center;
`;
const Payment = (styled_default()).div`
  text-align: center;
`;
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/units/login/login.queries.ts
var login_queries = __webpack_require__(9954);
;// CONCATENATED MODULE: ./src/components/commons/payment/index.tsx









const CREATE_POINT_TRANSACTION_OF_LOADING = client_.gql`
  mutation createPoinTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;
function PaymentPage() {
  const {
    0: amount,
    1: setAmount
  } = (0,external_react_.useState)(0);
  const [createPointTransactionOfLoading] = (0,client_.useMutation)(CREATE_POINT_TRANSACTION_OF_LOADING);
  const client = (0,client_.useApolloClient)();
  const router = (0,router_.useRouter)();
  const {
    setUserInfo,
    accessToken
  } = (0,external_react_.useContext)(GlobalContext);

  function onChangeAmount(event) {
    setAmount(event.target.value);
  }

  function onClickPayment() {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    IMP.init("imp49910675"); // @ts-ignore
    // eslint-disable-next-line no-undef

    IMP.request_pay({
      pg: "html5_inicis",
      pay_method: "card",
      // merchant_uid: "ORD20180131-0000013",
      name: "포인트충전",
      amount: amount,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181",
      m_redirect_url: "/market"
    }, async rsp => {
      console.log(rsp);

      if (rsp.success) {
        await createPointTransactionOfLoading({
          variables: {
            impUid: rsp.imp_uid
          }
        }); // 결제 성공 시 로직,

        alert("결제에 성공하셨습니다.");
        const resultUser = await client.query({
          query: login_queries/* FETCH_USER_LOGGED_IN */.l,
          context: {
            headers: {
              authorization: `Bearer ${accessToken}`
            }
          }
        });
        setUserInfo((resultUser === null || resultUser === void 0 ? void 0 : resultUser.data.fetchUserLoggedIn) || "");
        localStorage.setItem("userInfo", JSON.stringify(resultUser.data.fetchUserLoggedIn));
        router.push("/market");
      } else {
        // 결제 실패 시 로직,
        alert("결제에 실패하셨습니다.");
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("script", {
        type: "text/javascript",
        src: "https://code.jquery.com/jquery-1.12.4.min.js"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        type: "text/javascript",
        src: "https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
      onChange: onChangeAmount,
      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
        "aria-readonly": true,
        children: "\uC120\uD0DD"
      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: "500",
        children: "500"
      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: "1000",
        children: "1000"
      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: "2000",
        children: "2000"
      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: "2500",
        children: "2500"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: onClickPayment,
      children: "\uACB0\uC81C\uD558\uAE30"
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/header/LayoutHeader.present.tsx









function LayoutHeaderUI(props) {
  var _userInfo$userPoint;

  const {
    accessToken,
    userInfo
  } = (0,external_react_.useContext)(GlobalContext);

  const menu = /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu, {
    style: {
      width: "200px",
      display: "flex",
      flexDirection: "column",
      borderRadius: "16px"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(UserLogo, {
          src: "/market/login/\uB300\uD45C\uC774\uBBF8\uC9C0.png"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserInfoWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(UserName, {
            children: userInfo.name
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserPoint, {
            children: [(_userInfo$userPoint = userInfo.userPoint) === null || _userInfo$userPoint === void 0 ? void 0 : _userInfo$userPoint.amount, " p"]
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Divider, {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Payment, {
        onClick: () => props.onClickPayment(true),
        children: "\uCDA9\uC804\uD558\uAE30"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
      children: /*#__PURE__*/jsx_runtime_.jsx(LogOut, {
        onClick: props.onClickLogout,
        children: " \uB85C\uADF8\uC544\uC6C3 "
      })
    })]
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [props.isOpen && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      title: "\uCDA9\uC804\uD558\uAE30",
      visible: true,
      onOk: () => props.onClickPayment(false),
      onCancel: () => props.onClickPayment(false),
      children: /*#__PURE__*/jsx_runtime_.jsx(PaymentPage, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(LayoutHeader_styles_Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InnerWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(InnerLogo, {
          onClick: props.onClickBoards,
          src: "/images/Layout/peng.png"
        }), accessToken ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileWrapper, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(UserName, {
            children: [userInfo.name, " \uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4"]
          }), /*#__PURE__*/jsx_runtime_.jsx(UserLogo, {
            src: "/market/login/\uB300\uD45C\uC774\uBBF8\uC9C0.png"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Dropdown, {
            overlay: menu,
            trigger: ["click"],
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ant-dropdown-link",
              onClick: e => e.preventDefault(),
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DownOutlined, {
                style: {
                  color: "black",
                  fontSize: "20px"
                }
              })
            })
          })]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(InnerButton, {
            onClick: props.onClickLogin,
            children: "\uB85C\uADF8\uC778"
          }), /*#__PURE__*/jsx_runtime_.jsx(InnerButton, {
            onClick: props.onClickRegister,
            children: "\uD68C\uC6D0\uAC00\uC785"
          })]
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/header/LayoutHeader.query.ts

const LOGOUT_USER = client_.gql`
  mutation logoutUser {
    logoutUser
  }
`;
;// CONCATENATED MODULE: ./src/components/commons/layout/header/LayoutHeader.container.tsx







function LayoutHeader() {
  const router = (0,router_.useRouter)();
  const [logoutUser] = (0,client_.useMutation)(LOGOUT_USER);
  const {
    setAccessToken,
    setUserInfo
  } = (0,external_react_.useContext)(GlobalContext);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);

  function onClickLogin() {
    router.push("/market/login");
  }

  function onClickRegister() {
    router.push("/market/register");
  }

  function onClickBoards() {
    router.push("/boards");
  }

  function onClickPayment(bool) {
    setIsOpen(bool);
  }

  async function onClickLogout() {
    try {
      await logoutUser();
      alert("로그아웃이 되었습니다.");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userInfo");
      setAccessToken("");
      setUserInfo("");
    } catch (error) {
      alert(error.message);
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx(LayoutHeaderUI, {
    onClickLogin: onClickLogin,
    onClickRegister: onClickRegister,
    onClickBoards: onClickBoards,
    onClickLogout: onClickLogout,
    onClickPayment: onClickPayment,
    isOpen: isOpen
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/navigation/LayoutNavigation.styles.ts

const LayoutNavigation_styles_Wrapper = (styled_default()).div`
  min-height: 64px;
  width: 100%;
  background-color: #fbdf14;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
`;
const MenuItem = (styled_default()).div`
  margin: 0px 60px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  :hover {
    color: orange;
  }
`;
;// CONCATENATED MODULE: ./src/components/commons/layout/navigation/LayoutNavigation.presenter.tsx



function LayoutNavigationUI(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LayoutNavigation_styles_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      onClick: props.onClickMove,
      children: "\uC5EC\uC6B0\uAC8C\uC2DC\uD310"
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      onClick: props.onClickMoveBoards,
      children: "\uB77C\uC774\uBE0C\uAC8C\uC2DC\uD310"
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      onClick: props.onClickMoveMarket,
      children: "\uB77C\uC774\uBE0C\uC0C1\uD488"
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      onClick: props.onClickMoveMypage,
      children: "\uB9C8\uC774\uD398\uC774\uC9C0"
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/navigation/LayoutNavigation.container.tsx



function LayoutNavigation(props) {
  const router = (0,router_.useRouter)();

  function onClickMove() {
    router.push("/openApi");
  }

  function onClickMoveBoards() {
    router.push("/boards");
  }

  function onClickMoveMarket() {
    router.push("/market");
  }

  function onClickMoveMypage() {
    router.push("/mypage/mypick");
  }

  return /*#__PURE__*/jsx_runtime_.jsx(LayoutNavigationUI, {
    onClickMove: onClickMove,
    onClickMoveBoards: onClickMoveBoards,
    onClickMoveMarket: onClickMoveMarket,
    onClickMoveMypage: onClickMoveMypage
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/footer/LayoutFooter.styles.ts


const LayoutFooter_styles_Wrapper = (styled_default()).div`
  background-color: #fbdf14;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const InnerBoxWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const TitleIcon = (styled_default()).img`
  height: 50px;
  width: 90px;
`;
const IconWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const FacebookIcon = styled_default()(icons_.FacebookOutlined)`
  font-size: 30px;
  padding-left: 10px;
`;
const InstagramIcon = styled_default()(icons_.InstagramOutlined)`
  font-size: 30px;
  padding-left: 10px;
`;
const YoutubeIcon = styled_default()(icons_.YoutubeOutlined)`
  font-size: 30px;
  padding-left: 10px;
`;
const CopyRightWrapper = (styled_default()).div`
  padding-top: 20px;
  border-top: black solid 1px;
`;
;// CONCATENATED MODULE: ./src/components/commons/layout/footer/LayoutFooter.presenter.tsx



function LayoutFooterUI() {
  return /*#__PURE__*/jsx_runtime_.jsx(LayoutFooter_styles_Wrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InnerBoxWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TitleIcon, {
        src: "/ebs_logo.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(FacebookIcon, {}), /*#__PURE__*/jsx_runtime_.jsx(InstagramIcon, {}), /*#__PURE__*/jsx_runtime_.jsx(YoutubeIcon, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx(CopyRightWrapper, {
        children: "Copyright \u24D2 EBS. All Rights Reserved."
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/footer/LayoutFooter.container.tsx


function LayoutFooter() {
  return /*#__PURE__*/jsx_runtime_.jsx(LayoutFooterUI, {});
}
;// CONCATENATED MODULE: ./src/components/commons/layout/mypageside/mypageside.styles.tsx

const mypageside_styles_Wrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding-top: 100px;
`;
const Title = (styled_default()).div`
  font-size: 24px;
  padding-bottom: 48px;
`;
const ProfileImage = (styled_default()).img`
  height: 110px;
  width: 80px;
  padding-bottom: 10px;
`;
const Name = (styled_default()).div`
  font-size: 24px;
  padding-bottom: 10px;
`;
const MypageListPointWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  padding-bottom: 77px;
`;
const MyPageListWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  padding-bottom: 28px;
`;
const ListIcon = (styled_default()).img`
  height: 20px;
  width: 20px;
`;
const IconName = (styled_default()).div`
  font-size: 18px;
  padding-left: 10px;
`;
;// CONCATENATED MODULE: ./src/components/commons/layout/mypageside/mypageside.presenter.tsx




function MyPageSideUI(props) {
  var _props$userInfo$userP;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(mypageside_styles_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: "MYPAGE"
    }), props.accessToken ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ProfileImage, {
        src: "/market/login/\uB300\uD45C\uC774\uBBF8\uC9C0.png"
      }), /*#__PURE__*/jsx_runtime_.jsx(Name, {
        children: props.userInfo.name
      }), " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)(MypageListPointWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListIcon, {
          src: "/pigicon.png"
        }), /*#__PURE__*/jsx_runtime_.jsx(IconName, {
          children: (_props$userInfo$userP = props.userInfo.userPoint) === null || _props$userInfo$userP === void 0 ? void 0 : _props$userInfo$userP.amount
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MyPageListWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListIcon, {
          src: "/carticon.png"
        }), /*#__PURE__*/jsx_runtime_.jsx(IconName, {
          onClick: props.onClickMoveMymarket,
          children: "\uB0B4 \uC7A5\uD130"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MyPageListWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListIcon, {
          src: "/greypig.png"
        }), /*#__PURE__*/jsx_runtime_.jsx(IconName, {
          onClick: props.onClickMoveMypoint,
          children: "\uB0B4 \uD3EC\uC778\uD2B8"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MyPageListWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListIcon, {
          src: "/miniuser.png "
        }), /*#__PURE__*/jsx_runtime_.jsx(IconName, {
          children: "\uB0B4 \uD504\uB85C\uD544"
        })]
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/mypageside/mypageside.container.tsx





function MyPageSide() {
  const {
    userInfo,
    accessToken
  } = (0,external_react_.useContext)(GlobalContext);
  const router = (0,router_.useRouter)();

  const onClickMoveMymarket = () => {
    router.push("/mypage/myproduct");
  };

  const onClickMoveMypoint = () => {
    router.push("/mypage/totallist");
  };

  return /*#__PURE__*/jsx_runtime_.jsx(MyPageSideUI, {
    userInfo: userInfo,
    onClickMoveMymarket: onClickMoveMymarket,
    onClickMoveMypoint: onClickMoveMypoint,
    accessToken: accessToken
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/index.tsx










const Body = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 100px;
`;
const MypageWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
`;
function Layout(props) {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(LayoutHeader, {}), /*#__PURE__*/jsx_runtime_.jsx(LayoutBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(LayoutNavigation, {}), router.pathname.includes("/mypage") ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(MypageWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(MyPageSide, {}), /*#__PURE__*/jsx_runtime_.jsx(Body, {
        children: props.children
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(Body, {
      children: props.children
    }), /*#__PURE__*/jsx_runtime_.jsx(LayoutFooter, {})]
  });
}
// EXTERNAL MODULE: external "apollo-upload-client"
var external_apollo_upload_client_ = __webpack_require__(3483);
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(9421);
// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__(9714);
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(7435);
;// CONCATENATED MODULE: ./src/commons/libraries/getAccessToken.ts


const RESTORE_ACCESS_TOKEN = client_.gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`; // 1. refreshToken으로 새로운 accessToken을 발급 받기

const getAccessToken = async setAccessToken => {
  try {
    const graphQLClient = new external_graphql_request_.GraphQLClient("https://backend02.codebootcamp.co.kr/graphql10", {
      credentials: "include"
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
};
// EXTERNAL MODULE: external "@sentry/nextjs"
var nextjs_ = __webpack_require__(8300);
;// CONCATENATED MODULE: ./pages/_app.tsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import { GraphQLClient, gql } from "graphql-request";

// import "../styles/globals.css"

 // import { Global } from "@emotion/react";
// import { globalStyles } from "../src/commons/styles/globalStyles";







nextjs_.init({
  dsn: "https://0f85b5e981834e92a1d676c8a84a863f@o965498.ingest.sentry.io/5916350"
}); // import Head from "next/head";

if (false) {}

// @ts-ignore
const GlobalContext = /*#__PURE__*/(0,external_react_.createContext)({});

function MyApp({
  Component,
  pageProps
}) {
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,external_react_.useState)("");
  const {
    0: userInfo,
    1: setUserInfo
  } = (0,external_react_.useState)({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo
  };
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
    const localUserInfo = localStorage.getItem("userInfo");
    if (localUserInfo) setUserInfo(JSON.parse(localUserInfo));
  }, []);
  const errorLink = (0,error_.onError)(({
    graphQLErrors,
    operation,
    forward
  }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        var _err$extensions;

        if (((_err$extensions = err.extensions) === null || _err$extensions === void 0 ? void 0 : _err$extensions.code) === "UNAUTHENTICATED") {
          // 2. 발급 받은 accessToken으로 방금 실패했던 쿼리 재실행하기
          operation.setContext({
            headers: _app_objectSpread(_app_objectSpread({}, operation.getContext().headers), {}, {
              authorization: `Bearer ${getAccessToken(setAccessToken)}`
            })
          });
          return forward(operation);
        }
      }
    }
  });
  const uploadLink = (0,external_apollo_upload_client_.createUploadLink)({
    uri: "https://backend02.codebootcamp.co.kr/graphql10",
    headers: {
      authorization: `Bearer ${accessToken}`
    },
    credentials: "include"
  });
  const client = new client_.ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: client_.ApolloLink.from([errorLink, uploadLink]),
    cache: new client_.InMemoryCache(),
    connectToDevTools: true
  });
  return /*#__PURE__*/jsx_runtime_.jsx(GlobalContext.Provider, {
    value: value,
    children: /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
      client: client,
      children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      })
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 9954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ LOGIN_USER; },
/* harmony export */   "l": function() { return /* binding */ FETCH_USER_LOGGED_IN; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const LOGIN_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
    }
  }
`;

/***/ }),

/***/ 4722:
/***/ (function() {



/***/ })

};
;