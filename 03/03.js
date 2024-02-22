function handleClick(n) {
    // 핸들클릭이라는 함수를 만들고 msgArea라는 div아이디를 잡아와서 속성값 안녕하세요를 적어줌(메시지영역 가져오기1)
    // document.getElementById("msgArea").innerHTML = "안녕하세요";(메시지영역 가져오기1)

    //태그를 넣고 스타일링도 해줄 수 있다(메시지영역 가져오기2)
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이(가) 눌러졌습니다.<h2>";(메시지영역 가져오기2)

    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이(가) 눌러졌습니다.<h2>`;
    //백틱문자열 ${} 엄청많이씀!
    
    
}

