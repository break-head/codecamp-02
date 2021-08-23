import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapRead(props: any) {
  useEffect(() => {
    if (!(props.lat && props.lng)) return;
    console.log("=====================");
    console.log("props.lat", props.lat);
    console.log("props.lng", props.lng);
    console.log("실행!!!");
    console.log("=====================");

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=46a088defe4208f8cfd94b08223db61a&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map2"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(props.lat, props.lng), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.lat,
          props.lng
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, [props.lat, props.lng]);
  return (
    <>
      <div
        id="map2"
        style={{
          width: "500px",
          height: "500px",
        }}
      ></div>
    </>
  );
}
