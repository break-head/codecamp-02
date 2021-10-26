exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BoardPage; }
});

// UNUSED EXPORTS: INPUTS_INIT

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/board/write/BoardWrite.styles.js

const Wrapper = (styled_default()).div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;
const Wrapperbody = (styled_default()).div`
  width: 1200px;
  height: 1847px;
  margin-top: 100px;
  margin-bottom: 281px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 101px;
  padding-right: 103px;
`;
const HeadTitle = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  font-weight: bold;
  font-size: 36px;
`;
const Title = (styled_default()).div`
  font-size: 36px;
`;
const Account = (styled_default()).div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const LoginTitle = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 486px;
  height: 110px;
`;
const LoginInput = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 486px;
  height: 110px;
`;
const Name = (styled_default()).div`
  width: 100%;
  margin-bottom: 16px;
`;
const NameInput = (styled_default()).input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  /* color: ${props => props.active ? "green" : "red"}; */
`;
const Password = (styled_default()).div`
  width: 100%;
  margin-bottom: 16px;
`;
const PasswordInput = (styled_default()).input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  /* color: ${props => props.active ? "green" : "red"}; */
`;
const A = (styled_default()).div`
  color: red;
`;
const SubTitle = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 92px;
`;
const Subject = (styled_default()).div`
  width: 100%;
`;
const SubjectInput = (styled_default()).input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  /* color: ${props => props.active ? "green" : "red"}; */
`;
const Content = (styled_default()).div`
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContentTitle = (styled_default()).div``;
const ContentInput = (styled_default()).textarea`
  width: 100%;
  height: 480px;
  resize: none;
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  padding-left: 16px;
  border: 1px solid black;
  /* color: ${props => props.active ? "green" : "red"}; */
`;
const Address = (styled_default()).div`
  width: 100%;
  height: 242px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 16px;
`;
const AddressTitle = (styled_default()).div`
  margin-bottom: 16px; ;
`;
const AddressSearch = (styled_default()).div`
  height: 52px;
  display: flex;
  justify-content: flex-start;
`;
const AddressNumber = (styled_default()).input`
  padding-left: 16px;
  width: 77px;
  height: 52px;
`;
const AddressButton = (styled_default()).button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  color: white;
  font-size: 16px;
`;
const AddressMain = (styled_default()).input`
  width: 100%;
  height: 52px;
  margin-top: 30px;
`;
const AddressSub = (styled_default()).input`
  width: 100%;
  height: 52px;
  margin-top: 30px;
`;
const YouTubeWrapper = (styled_default()).div`
  width: 100%;
  height: 81px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const YouTubeTitle = (styled_default()).div`
  font-size: 16px;
`;
const YouTube = (styled_default()).input`
  width: 100%;
  height: 45.78px;
`;
const Photo = (styled_default()).div`
  padding-top: 10px;
  width: 996px;
`;
const PhotoTitle = (styled_default()).div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500px;
`;
const PhotoUpload = (styled_default()).button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
const OptionWrapper = (styled_default()).div`
  width: 996px;
  padding-top: 40px;
`;
const RadioButton = (styled_default()).input`
  cursor: pointer;
`;
const RadioLabel = (styled_default()).label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;
const Register = (styled_default()).div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const RegisterButton = (styled_default()).button`
  /* background-color: #ffd600; */
  width: 179px;
  height: 52px;
  border: 0;
  margin-bottom: 100px;
  font-size: 16px;
  background-color: ${props => props.active ? "#ffd600" : ""};
`;
const Label = (styled_default()).div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "react-daum-postcode"
var external_react_daum_postcode_ = __webpack_require__(3903);
var external_react_daum_postcode_default = /*#__PURE__*/__webpack_require__.n(external_react_daum_postcode_);
;// CONCATENATED MODULE: ./src/components/units/board/write/BoardWrite.presenter.js





function BoardPageUi(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [props.isOpen && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      title: "\uC8FC\uC18C\uAC80\uC0C9",
      visible: true,
      onOk: () => props.onClickAddressSearch(false),
      onCancel: () => props.onClickAddressSearch(false),
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_daum_postcode_default()), {
        onComplete: props.onCompleteAddressSearch,
        autoClose: true
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapperbody, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(HeadTitle, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Title, {
          children: props.isEdit ? "게시판 수정" : "게시물 등록"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Account, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LoginTitle, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Name, {
            children: "\uC791\uC131\uC790"
          }), /*#__PURE__*/jsx_runtime_.jsx(NameInput, {
            name: "writer",
            type: "text",
            onChange: props.onChangeInputs,
            placeholder: "\uC774\uB984\uC744 \uC801\uC5B4\uC8FC\uC138\uC694"
          }), /*#__PURE__*/jsx_runtime_.jsx(A, {
            children: props.inputsErrors.writer
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LoginInput, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Password, {
            children: "\uBE44\uBC00\uBC88\uD638"
          }), /*#__PURE__*/jsx_runtime_.jsx(PasswordInput, {
            name: "password",
            type: "password",
            onChange: props.onChangeInputs,
            placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), /*#__PURE__*/jsx_runtime_.jsx(A, {
            children: props.inputsErrors.password
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubTitle, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Subject, {
          children: "\uC81C\uBAA9"
        }), /*#__PURE__*/jsx_runtime_.jsx(SubjectInput, {
          type: "text",
          name: "title",
          onChange: props.onChangeInputs,
          placeholder: "\uC81C\uBAA9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694."
        }), /*#__PURE__*/jsx_runtime_.jsx(A, {
          children: props.inputsErrors.title
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ContentTitle, {
          children: "\uB0B4\uC6A9"
        }), /*#__PURE__*/jsx_runtime_.jsx(ContentInput, {
          name: "contents",
          placeholder: "\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694.",
          onChange: props.onChangeInputs
        }), /*#__PURE__*/jsx_runtime_.jsx(A, {
          children: props.inputsErrors.contents
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Address, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(AddressTitle, {
          children: "\uC8FC\uC18C"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AddressSearch, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(AddressNumber, {
            value: props.zipcode,
            placeholder: "07250",
            readOnly: true
          }), /*#__PURE__*/jsx_runtime_.jsx(AddressButton, {
            onClick: () => props.onClickAddressSearch(true),
            children: "\uC6B0\uD3B8\uC8FC\uC18C \uAC80\uC0C9"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(AddressMain, {
          value: props.address,
          readOnly: true
        }), /*#__PURE__*/jsx_runtime_.jsx(AddressSub, {
          onChange: props.onChangeAddressDetail,
          readOnly: props.address === ""
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(YouTubeWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(YouTubeTitle, {
          children: "\uC720\uD29C\uBE0C"
        }), /*#__PURE__*/jsx_runtime_.jsx(YouTube, {
          name: "youtubeUrl",
          placeholder: "\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD574\uC8FC\uC138\uC694.",
          onChange: props.onChangeInputs
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OptionWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
          children: "\uBA54\uC778\uC124\uC815"
        }), /*#__PURE__*/jsx_runtime_.jsx(RadioButton, {
          type: "radio",
          id: "youtube",
          name: "radio-button"
        }), /*#__PURE__*/jsx_runtime_.jsx(RadioLabel, {
          htmlFor: "youtube",
          children: "\uC720\uD29C\uBE0C"
        }), /*#__PURE__*/jsx_runtime_.jsx(RadioButton, {
          type: "radio",
          id: "image",
          name: "radio-button"
        }), /*#__PURE__*/jsx_runtime_.jsx(RadioLabel, {
          htmlFor: "image",
          children: "\uC0AC\uC9C4"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Photo, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PhotoTitle, {
          children: " \uC0AC\uC9C4 \uCCA8\uBD80"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PhotoUpload, {
          onClick: props.onClickGreyBox,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "+"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Upload"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PhotoUpload, {
          onClick: props.onClickGreyBox,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "+"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Upload"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PhotoUpload, {
          onClick: props.onClickGreyBox,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "+"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Upload"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          ref: props.fileRef,
          type: "file",
          onChange: props.onChangeFile
          /* multiple */
          ,
          style: {
            display: "none"
          }
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Register, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(RegisterButton, {
          onClick: props.isEdit ? props.onClickUpdate : props.onClickSubmit,
          active: props.active,
          children: [" ", props.isEdit ? "수정하기" : "등록하기"]
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/units/board/write/BoardWrite.queries.js

const CREATE_BOARD = client_.gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPDATE_BOARD = client_.gql`
  mutation updateBoard(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
    }
  }
`;
const UPLOAD_FILE = client_.gql`
  mutation uploadFile($aaa: Upload!) {
    uploadFile(file: $aaa) {
      url
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/units/board/write/BoardWrite.container.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: ""
};
function BoardPage(props) {
  const router = (0,router_.useRouter)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(false);
  const {
    0: inputs,
    1: setInputs
  } = (0,external_react_.useState)(INPUTS_INIT);
  const {
    0: inputsErrors,
    1: setInputsErrors
  } = (0,external_react_.useState)(INPUTS_INIT);
  const [createBoard] = (0,client_.useMutation)(CREATE_BOARD);
  const [updateBoard] = (0,client_.useMutation)(UPDATE_BOARD);
  const {
    0: zipcode,
    1: setZipcode
  } = (0,external_react_.useState)("");
  const {
    0: address,
    1: setAddress
  } = (0,external_react_.useState)("");
  const {
    0: addressDetail,
    1: setAddressDetail
  } = (0,external_react_.useState)("");
  const {
    0: imageUrl,
    1: setImageurl
  } = (0,external_react_.useState)("");
  const [uploadFile] = (0,client_.useMutation)(UPLOAD_FILE);
  const fileRef = (0,external_react_.useRef)();

  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  function onChangeInputs(event) {
    const newInputs = _objectSpread(_objectSpread({}, inputs), {}, {
      [event.target.name]: event.target.value
    });

    setInputs(newInputs);
    setActive(Object.values(inputs).every(data => data));
    setInputsErrors(_objectSpread(_objectSpread({}, inputsErrors), {}, {
      [event.target.name]: ""
    }));
  }

  async function onClickSubmit() {
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요",
      title: inputs.title ? "" : "제목을 입력해주세요",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
      youtubeUrl: ""
    });
    const isEvery = Object.values(inputs).filter(data => data !== "yourubeUrl").every(data => data);

    if (isEvery) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: _objectSpread(_objectSpread({}, inputs), {}, {
              images: [imageUrl],
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail
              }
            })
          }
        });
        external_antd_.Modal.confirm({
          content: "게시물이 성공적으로 등록되었습니다",
          onOk: () => router.push(`/boards/${result.data.createBoard._id}`)
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  async function onClickUpdate() {
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
      youtubeUrl: ""
    });

    if (Object.values(inputs).every(data => data)) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password: inputs.password,
            updateBoardInput: {
              title: inputs.title,
              contents: inputs.contents,
              youtubeUrl: inputs.youtubeUrl,
              images: [imageUrl]
            }
          }
        });
        external_antd_.Modal.confirm({
          content: "게시물이 성공적으로 수정되었습니다.",
          onOk: () => router.push(`/boards/${result.data.updateBoard._id}`)
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  async function onChangeFile(event) {
    var _event$target$files;

    const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];

    if (!(file !== null && file !== void 0 && file.size)) {
      alert("파일이 없습니다.");
      return;
    }

    if (!(file !== null && file !== void 0 && file.size) > 5 * 1024 * 1024) {
      alert("파일사이즈가 너무 큽니다(제한: 5MB)");
      return;
    }

    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      alert("png 또는 jpeg 파일만 전송이 가능합니다");
      return;
    }

    try {
      const result = await uploadFile({
        variables: {
          aaa: file
        }
      });
      setImageurl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickGreyBox() {
    var _fileRef$current;

    (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 ? void 0 : _fileRef$current.click();
  }

  function onClickAddressSearch(bool) {
    setIsOpen(bool);
  }

  function onCompleteAddressSearch(data) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(BoardPageUi, {
    isOpen: isOpen,
    isEdit: props.isEdit,
    active: active,
    zipcode: zipcode,
    address: address,
    inputsErrors: inputsErrors,
    onChangeInputs: onChangeInputs,
    onClickSubmit: onClickSubmit,
    onClickUpdate: onClickUpdate,
    onClickAddressSearch: onClickAddressSearch,
    onCompleteAddressSearch: onCompleteAddressSearch,
    onChangeAddressDetail: onChangeAddressDetail,
    onChangeFile: onChangeFile,
    onClickGreyBox: onClickGreyBox,
    fileRef: fileRef
  });
}

/***/ })

};
;