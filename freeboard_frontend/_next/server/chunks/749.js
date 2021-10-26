exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 8749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MarketWrite; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/market/write/marketWrite.styles.ts

const Wrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding: 80px 102px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
const Title = (styled_default()).div`
  height: 53px;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
`;
const Input = (styled_default()).input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
`;
const Label = (styled_default()).div`
  font-weight: bold;
  font-size: 16px;
`;
const Contents = (styled_default()).div`
  width: 100%;
  padding-top: 40px;
`;
const ContentsEditor = (styled_default()).div`
  width: 100%;
  height: 320px;
  margin-top: 16px;
`;
const ContentsEdit = (styled_default()).div`
  width: 100%;
  height: 52px;
  border: 1px solid;
  border-bottom: none;
`;
const ErrorMessage = (styled_default()).div`
  color: red;
  text-align: center;
`;
const Location = (styled_default()).div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;
const LocationMap = (styled_default()).div`
  width: 38%;
`;
const Map = (styled_default()).div`
  width: 100%;
  height: 252px;
  margin-top: 16px;
  border: 1px solid;
`;
const LocationDetail = (styled_default()).div`
  width: 59%;
`;
const GPS = (styled_default()).div`
  width: 100%;
`;
const Geography = (styled_default()).div`
  width: 100%;
  margin-top: 16px;
`;
const GeographyInput = (styled_default()).input`
  width: 18.367347%;
  height: 52px;
  padding: 0 16px;
  font-size: 16px;
`;
const LocationOnIcon = (styled_default()).img`
  margin: 0 16px;
`;
const Address = (styled_default()).div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
const AddressInput = (styled_default()).input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding: 0 16px;
  font-size: 16px;
`;
const Images = (styled_default()).div`
  width: 100%;
  padding-top: 40px;
`;
const Image = (styled_default()).div`
  margin-top: 16px;
`;
const Settings = (styled_default()).div`
  width: 100%;
  padding-top: 40px;
`;
const Setting = (styled_default()).div`
  display: flex;
  margin-top: 16px;
`;
const Button = (styled_default()).button`
  width: 17.971888%;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  color: whitesmoke;
  background-color: #1c1c1c;
  cursor: pointer;
`;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./src/commons/libraries/validations.ts

function checkValidationFile(file) {
  if (!(file !== null && file !== void 0 && file.size)) {
    external_antd_.Modal.error({
      content: "파일이 없습니다."
    });
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    external_antd_.Modal.error({
      content: "파일이 너무 큽니다.(제한: 5MB)"
    });
    return false;
  }

  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    external_antd_.Modal.error({
      content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)"
    });
    return false;
  }

  return true;
}
;// CONCATENATED MODULE: ./src/components/commons/uploads/01/Uploads01.styles.ts

const UploadImage = (styled_default()).img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;
const UploadButton = (styled_default()).button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
const UploadFileHidden = (styled_default()).input`
  display: none;
`;
;// CONCATENATED MODULE: ./src/components/commons/uploads/01/Uploads01.presenter.tsx




function Uploads01UI(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [props.prevImg[props.index] && /*#__PURE__*/jsx_runtime_.jsx(UploadImage, {
      onClick: props.onClickUpload,
      src: `https://storage.googleapis.com/${props.prevImg[props.index]}`
    }), !props.prevImg[props.index] && props.fileUrl && /*#__PURE__*/jsx_runtime_.jsx(UploadImage, {
      onClick: props.onClickUpload,
      src: props.fileUrl
    }), !props.prevImg[props.index] && !props.fileUrl && /*#__PURE__*/(0,jsx_runtime_.jsxs)(UploadButton, {
      onClick: props.onClickUpload,
      type: "button",
      children: [/*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "+"
      }), /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "Upload"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(UploadFileHidden, {
      type: "file",
      ref: props.fileRef,
      onChange: props.onChangeFile
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/commons/uploads/01/Uploads01.container.tsx




function Uploads01(props) {
  const fileRef = (0,external_react_.useRef)(null);
  const {
    0: fileUrl,
    1: setFileUrl
  } = (0,external_react_.useState)("");

  function onClickUpload() {
    var _fileRef$current;

    (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 ? void 0 : _fileRef$current.click();
  }

  async function onChangeFile(event) {
    var _event$target$files;

    const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
    if (!file) return; // @ts-ignore

    if (!checkValidationFile(file)) return;

    if (props.prevImg[props.index]) {
      props.setPrevImg(prev => {
        const temp = [...prev];
        temp[props.index] = null;
        return temp;
      });
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = data => {
      var _data$target;

      setFileUrl((_data$target = data.target) === null || _data$target === void 0 ? void 0 : _data$target.result);
      props.onChangeFiles(file, props.index);
    };
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Uploads01UI, {
    fileRef: fileRef,
    fileUrl: fileUrl,
    onClickUpload: onClickUpload,
    onChangeFile: onChangeFile,
    prevImg: props.prevImg,
    index: props.index
  });
}
;// CONCATENATED MODULE: ./src/components/commons/inputs/Input01.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Input01_Title = (styled_default()).div`
  width: 100%;
  font-size: 16px;

  margin-top: 40px;
  display: flex;
  justify-content: left;
`;
const Input01_Input = (styled_default()).input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  background-color: white;
`;
const Input01_ErrorMessage = (styled_default()).div`
  color: red;
`;
function Input01(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Input01_Title, {
      children: props.inputName
    }), /*#__PURE__*/jsx_runtime_.jsx(Input01_Input, _objectSpread({
      type: props.type
    }, props.register)), /*#__PURE__*/jsx_runtime_.jsx(Input01_ErrorMessage, {
      children: props.errorMessage
    })]
  });
}
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./src/components/commons/map/mapWrite/index.tsx



let map;
let marker;
function KakaoMapWrite(props) {
  const {
    0: isLoadedMap,
    1: setIsLoadedMap
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (!(props.lat && props.lng)) return;
    setIsLoadedMap(true); // console.log("=====================");
    // console.log("props.address", props.address);
    // console.log("props.lat", props.lat);
    // console.log("props.lng", props.lng);
    // console.log("실행!!!");
    // console.log("=====================");

    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=46a088defe4208f8cfd94b08223db61a&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소로 좌표를 검색합니다

        geocoder.addressSearch(props.address, function (result, status) {
          var _marker;

          // console.log("result", result);
          // console.log("status", status);
          // 정상적으로 검색이 완료됐으면
          // if (status === window.kakao.maps.services.Status.OK) {
          // console.log(result);
          const lat = status ? Number(result[0].y) : props.lat;
          const lng = status ? Number(result[0].x) : props.lng;
          props.setLat(lat);
          props.setLng(lng);
          const mapContainer = document.getElementById("map"); // 지도를 표시할 div

          const mapOption = {
            center: new window.kakao.maps.LatLng(lat, lng),
            // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨

          };
          (_marker = marker) === null || _marker === void 0 ? void 0 : _marker.setMap(null);

          if (!isLoadedMap) {
            map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            const coords = new window.kakao.maps.LatLng(lat, lng);
            marker = new window.kakao.maps.Marker({
              position: coords
            });
          }

          const coords = new window.kakao.maps.LatLng(lat, lng);
          marker = new window.kakao.maps.Marker({
            position: coords
          }); // 이동할 위도 경도 위치를 생성합니다
          // 지도 중심을 이동 시킵니다

          map.setCenter(coords);
          marker.setMap(map); // map.setCenter(lat, lng);
          // const coords2 = new window.kakao.maps.LatLng(lat, lng);
          // marker
          // const map2 = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
          // const coords2 = new window.kakao.maps.LatLng(lat, lng);
          // const marker2 = new window.kakao.maps.Marker({ position: coords2 });
          // marker2.setMap(map2);
          // console.log(coords);
          // 결과값으로 받은 위치를 마커로 표시합니다
          // 마커가 지도 위에 표시되도록 설정합니다
          // const coords = new window.kakao.maps.LatLng(lat, lng);
          // const marker = new window.kakao.maps.Marker({ position: coords });
          // marker.setMap(map);
          // }
        });
      });
    };
  }, [props.address]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "map",
      style: {
        width: "100%",
        height: "300px"
      }
    })
  });
}
// EXTERNAL MODULE: external "react-daum-postcode"
var external_react_daum_postcode_ = __webpack_require__(3903);
var external_react_daum_postcode_default = /*#__PURE__*/__webpack_require__.n(external_react_daum_postcode_);
;// CONCATENATED MODULE: ./src/components/units/market/write/marketWrite.presenter.tsx



function marketWrite_presenter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function marketWrite_presenter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { marketWrite_presenter_ownKeys(Object(source), true).forEach(function (key) { marketWrite_presenter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { marketWrite_presenter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function marketWrite_presenter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const ReactQuill = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5038, 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5038)],
    modules: ["../src/components/units/market/write/marketWrite.presenter.tsx -> " + "react-quill"]
  }
});
function MarketWriteUI(props) {
  var _props$errors$name, _props$errors$remarks, _props$errors$content, _props$errors$price, _props$errors$tags, _props$data, _props$data$fetchUsed;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    onSubmit: props.handleSubmit(props.isEdit ? props.onClickUpdate : props.onSubmit),
    children: [props.isOpen && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      title: "\uC8FC\uC18C\uAC80\uC0C9",
      visible: true,
      onOk: () => props.onClickAddressSearch(false),
      onCancel: () => props.onClickAddressSearch(false),
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_daum_postcode_default()), {
        onComplete: props.onCompleteAddressSearch,
        autoClose: true
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [props.isEdit ? /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: "\uC0C1\uD488 \uC218\uC815\uD558\uAE30"
      }) : /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: "\uC0C1\uD488 \uB4F1\uB85D\uD558\uAE30"
      }), /*#__PURE__*/jsx_runtime_.jsx(Input01, {
        inputName: "\uC0C1\uD488\uBA85",
        placeholder: "\uC0C1\uD488\uBA85\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694",
        type: "text",
        register: marketWrite_presenter_objectSpread({}, props.register("name")),
        errorMessage: (_props$errors$name = props.errors.name) === null || _props$errors$name === void 0 ? void 0 : _props$errors$name.message
      }), /*#__PURE__*/jsx_runtime_.jsx(Input01, {
        inputName: "\uD55C\uC904\uC694\uC57D",
        placeholder: "\uD310\uB9E4 \uAC00\uACA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
        type: "text",
        register: marketWrite_presenter_objectSpread({}, props.register("remarks")),
        errorMessage: (_props$errors$remarks = props.errors.remarks) === null || _props$errors$remarks === void 0 ? void 0 : _props$errors$remarks.message
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Contents, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
          children: "\uC0C1\uD488\uC124\uBA85"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentsEditor, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ReactQuill, {
            onChange: props.onChangeContents,
            value: props.contents,
            style: {
              height: "100%"
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage, {
            children: (_props$errors$content = props.errors.contents) === null || _props$errors$content === void 0 ? void 0 : _props$errors$content.message
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Input01, {
        inputName: "\uD310\uB9E4\uAC00\uACA9",
        placeholder: "\uD310\uB9E4 \uAC00\uACA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
        type: "text",
        register: marketWrite_presenter_objectSpread({}, props.register("price")),
        errorMessage: (_props$errors$price = props.errors.price) === null || _props$errors$price === void 0 ? void 0 : _props$errors$price.message
      }), /*#__PURE__*/jsx_runtime_.jsx(Input01, {
        inputName: "\uD0DC\uADF8\uC785\uB825",
        placeholder: "#\uD0DC\uADF8 #\uD0DC\uADF8 #\uD0DC\uADF8",
        type: "text",
        register: marketWrite_presenter_objectSpread({}, props.register("tags")),
        errorMessage: (_props$errors$tags = props.errors.tags) === null || _props$errors$tags === void 0 ? void 0 : _props$errors$tags.message
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Location, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LocationMap, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
            children: "\uAC70\uB798\uC704\uCE58"
          }), /*#__PURE__*/jsx_runtime_.jsx(KakaoMapWrite, {
            lat: props.lat,
            lng: props.lng,
            setLat: props.setLat,
            setLng: props.setLng,
            address: props.address
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LocationDetail, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(GPS, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
              children: "GPS"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Geography, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(GeographyInput, {
                value: props.lat
              }), /*#__PURE__*/jsx_runtime_.jsx(LocationOnIcon, {
                src: "/images/ic_location_on-24px.svg"
              }), /*#__PURE__*/jsx_runtime_.jsx(GeographyInput, {
                value: props.lng
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Address, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
              children: "\uC8FC\uC18C"
            }), /*#__PURE__*/jsx_runtime_.jsx(AddressInput, {
              onClick: () => props.onClickAddressSearch(true),
              value: props.address,
              defaultValue: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : (_props$data$fetchUsed = _props$data.fetchUseditem.useditemAddress) === null || _props$data$fetchUsed === void 0 ? void 0 : _props$data$fetchUsed.address
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Images, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
          children: "\uC0AC\uC9C4 \uCCA8\uBD80"
        }), new Array(4).fill(1).map((data, index) => /*#__PURE__*/jsx_runtime_.jsx(Uploads01, {
          prevImg: props.prevImg,
          index: index,
          onChangeFiles: props.onChangeFiles,
          setPrevImg: props.setPrevImg
        }, `${data}_${index}`))]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Settings, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
          children: "\uBA54\uC778 \uC0AC\uC9C4 \uC124\uC815"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Setting, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
            children: "\uC0AC\uC9C4 1"
          }), /*#__PURE__*/jsx_runtime_.jsx(Label, {
            children: "\uC0AC\uC9C4 2"
          })]
        })]
      }), props.isEdit ? /*#__PURE__*/jsx_runtime_.jsx(Button, {
        type: "submit",
        children: "\uC218\uC815\uD558\uAE30"
      }) : /*#__PURE__*/jsx_runtime_.jsx(Button, {
        type: "submit",
        children: "\uB4F1\uB85D\uD558\uAE30"
      })]
    })]
  });
}
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
;// CONCATENATED MODULE: ./src/components/units/market/write/marketWrite.queries.ts

const CREATE_USED_ITEM = client_.gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = client_.gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const FETCH_USED_ITEM = client_.gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      useditemAddress {
        address
        addressDetail
        lng
        lat
      }
    }
  }
`;
const UPDATE_USED_ITEM = client_.gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
;// CONCATENATED MODULE: ./src/components/units/market/write/marketWrite.validations.ts

const schema = external_yup_.object().shape({
  name: external_yup_.string().required("상품명은 필수 입력입니다."),
  remarks: external_yup_.string().required("한줄요약은 필수 입력입니다."),
  contents: external_yup_.string().required("설명은 필수 입력입니다."),
  price: external_yup_.number().typeError("숫자입력하세요").required("가격은 필수 입력입니다."),
  tags: external_yup_.string().required("태그는 필수 입력입니다.")
});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/units/market/write/marketWrite.container.tsx










function MarketWrite(props) {
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger
  } = (0,external_react_hook_form_.useForm)({
    mode: "onChange",
    resolver: (0,yup_.yupResolver)(schema)
  });
  const router = (0,router_.useRouter)();
  const [createUseditem] = (0,client_.useMutation)(CREATE_USED_ITEM);
  const [updateUseditem] = (0,client_.useMutation)(UPDATE_USED_ITEM);
  const [uploadFile] = (0,client_.useMutation)(UPLOAD_FILE);
  const {
    0: files,
    1: setFiles
  } = (0,external_react_.useState)([null, null, null, null]);
  const {
    0: lat,
    1: setLat
  } = (0,external_react_.useState)(33.450701);
  const {
    0: lng,
    1: setLng
  } = (0,external_react_.useState)(126.570667);
  const {
    0: contents,
    1: setContents
  } = (0,external_react_.useState)("");
  const {
    0: address,
    1: setAddress
  } = (0,external_react_.useState)("");
  const {
    0: detailAddress,
    1: setDetailAddress
  } = (0,external_react_.useState)("");
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: prevImg,
    1: setPrevImg
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    if (props.data) {
      var _props$data, _props$data2, _props$data3, _props$data4, _props$data5, _props$data6, _props$data6$fetchUse, _props$data7, _props$data7$fetchUse, _props$data8;

      setValue("name", (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditem.name);
      setValue("remarks", (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.fetchUseditem.remarks);
      setValue("price", (_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.fetchUseditem.price);
      setValue("tags", (_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.fetchUseditem.tags);
      setContents((_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.fetchUseditem.contents);
      setAddress((_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : (_props$data6$fetchUse = _props$data6.fetchUseditem.useditemAddress) === null || _props$data6$fetchUse === void 0 ? void 0 : _props$data6$fetchUse.address);
      setDetailAddress((_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : (_props$data7$fetchUse = _props$data7.fetchUseditem.useditemAddress) === null || _props$data7$fetchUse === void 0 ? void 0 : _props$data7$fetchUse.addressDetail);
      setPrevImg((_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : _props$data8.fetchUseditem.images);
    }
  }, [props.data]);

  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  console.log(files);

  function onClickAddressSearch(bool) {
    setIsOpen(bool);
  }

  function onCompleteAddressSearch(data) {
    setAddress(data.address);
    setDetailAddress(data.detailAddress);
    setIsOpen(false);
  }

  const onChangeContents = value => {
    const isBlank = "<p><br></p>";
    setContents(value);
    setValue("contents", value === isBlank ? "" : value);
    trigger("contents");
  };

  async function onSubmit(data) {
    const uploadFiles = files.filter(data => data).map(data => uploadFile({
      variables: {
        file: data
      }
    }));
    const results = await Promise.all(uploadFiles);
    const images = results.map(data => data.data.uploadFile.url);

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: images,
            useditemAddress: {
              address: address,
              addressDetail: detailAddress,
              lat: lat,
              lng: lng
            }
          }
        }
      });
      external_antd_.Modal.info({
        content: "게시물등록완료!!"
      });
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      external_antd_.Modal.error({
        content: error.message
      });
    }
  }

  async function onClickUpdate(data) {
    const filterPrevImg = prevImg.filter(data => data);
    const uploadFiles = files.filter(data => data).map(data => uploadFile({
      variables: {
        file: data
      }
    }));
    const results = await Promise.all(uploadFiles);
    const images = results.map(data => data.data.uploadFile.url);

    try {
      var _result$data;

      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: [...filterPrevImg, ...images],
            useditemAddress: {
              address: address,
              addressDetail: detailAddress,
              lat: lat,
              lng: lng
            }
          },
          useditemId: router.query.marketId
        }
      });
      console.log(result);
      external_antd_.Modal.info({
        content: "게시물수정완료!!"
      });
      router.push(`/market/${(_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.updateUseditem._id}`);
    } catch (error) {
      external_antd_.Modal.error({
        content: error.message
      });
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx(MarketWriteUI, {
    register: register,
    handleSubmit: handleSubmit,
    onSubmit: onSubmit,
    isActive: formState.isValid,
    errors: formState.errors,
    onChangeFiles: onChangeFiles,
    onChangeContents: onChangeContents,
    lat: lat,
    lng: lng,
    setLat: setLat,
    setLng: setLng,
    address: address,
    detailAddress: detailAddress,
    onCompleteAddressSearch: onCompleteAddressSearch,
    onClickAddressSearch: onClickAddressSearch,
    isOpen: isOpen,
    data: props.data,
    contents: contents,
    onClickUpdate: onClickUpdate,
    isEdit: props.isEdit,
    prevImg: prevImg,
    setPrevImg: setPrevImg
  });
}

/***/ })

};
;