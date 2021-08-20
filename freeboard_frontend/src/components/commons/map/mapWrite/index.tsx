import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapWrite(props) {
  useEffect(() => {
    console.log("=====================");
    console.log("props.address", props.address);
    console.log("props.lat", props.lat);
    console.log("props.lng", props.lng);
    console.log("실행!!!");
    console.log("=====================");

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=46a088defe4208f8cfd94b08223db61a&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(props.lat, props.lng), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면

          if (status === window.kakao.maps.services.Status.OK) {
            // console.log(result);
            props.setLat(Number(result[0].y));
            props.setLng(Number(result[0].x));
            const coords = new window.kakao.maps.LatLng(props.lat, props.lng);

            // console.log(coords);
            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              position: coords,
            });
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
          }
        });
      });
    };
  }, [props.address, props.lat, props.lng]);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "500px",
        }}
      ></div>
    </>
  );
}
