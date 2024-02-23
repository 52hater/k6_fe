//버튼 누르는거
document.addEventListener("DOMContentLoaded", () => {//돔이 만들어져야 쿼리셀렉터 사용가능, 왜?

    //버튼을 가져와
    const bt1 = document.querySelector("#bt1");//ID가 bt1인걸 다큐.쿼리 메서드로 잡아옴//
    //const bt1 = document.querySelector("div > button");
    //const bt1 = document.querySelector("div > button");

    //버튼 이벤트 달기(쿼리셀렉터로 집어왔으니까 이제 bt1사용가능)
    bt1.addEventListener("click", () => {//두개의 매개변수, 1. 이벤트유형:click이라는 이벤트를 처리, 2. 이벤트발생시 실행하는 함수(핸들클릭이라고 정해준 이름의 콜백함수)
        handleClick();
    })
});

const handleClick = () => {//const로 변수선언(상수값)
    const n1 = Math.floor(Math.random() * 6) + 1;
    const n2 = Math.floor(Math.random() * 6) + 1;
    const n3 = Math.floor(Math.random() * 6) + 1;

    const img1 = document.querySelector("#img1");//이 시점에 써야지(순서생각)
    const img2 = document.querySelector("#img2");
    const img3 = document.querySelector("#img3");

    img1.setAttribute("src", `./img/${n1}.png`);//변수쓸때 ${n}, 셋어트리뷰트로
    img2.setAttribute("src", `./img/${n2}.png`);//변수쓸떄 그 안에도 따로 123 붙여야되네
    img3.setAttribute("src", `./img/${n3}.png`);
    console.log("click", n1, n2, n3)//콘솔창확인

}