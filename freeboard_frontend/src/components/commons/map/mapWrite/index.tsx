import { useState, useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
  map: any;
};

let map: any;
let marker: any;
export default function KakaoMapWrite(props) {
  const [isLoadedMap, setIsLoadedMap] = useState(false);
  useEffect(() => {
    if (!(props.lat && props.lng)) return;
    setIsLoadedMap(true);
    // console.log("=====================");
    // console.log("props.address", props.address);
    // console.log("props.lat", props.lat);
    // console.log("props.lng", props.lng);
    // console.log("실행!!!");
    // console.log("=====================");

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=46a088defe4208f8cfd94b08223db61a&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.address, function (result, status) {
          // console.log("result", result);
          // console.log("status", status);
          // 정상적으로 검색이 완료됐으면

          // if (status === window.kakao.maps.services.Status.OK) {
          // console.log(result);
          const lat = status ? Number(result[0].y) : props.lat;
          const lng = status ? Number(result[0].x) : props.lng;
          props.setLat(lat);
          props.setLng(lng);
          const mapContainer = document.getElementById("map");
          // 지도를 표시할 div
          const mapOption = {
            center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

          marker?.setMap(null);
          if (!isLoadedMap) {
            map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            const coords = new window.kakao.maps.LatLng(lat, lng);
            marker = new window.kakao.maps.Marker({ position: coords });
          }

          const coords = new window.kakao.maps.LatLng(lat, lng);
          marker = new window.kakao.maps.Marker({ position: coords });
          // 이동할 위도 경도 위치를 생성합니다
          // 지도 중심을 이동 시킵니다
          map.setCenter(coords);
          marker.setMap(map);

          // map.setCenter(lat, lng);

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

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "300px",
        }}
      ></div>
    </>
  );
}
