document.addEventListener("DOMContentLoaded", () => {
    //DOM 생성후에 img, input, button 가져오기
    const upDownImg = document.querySelector("img");
    const numInput = document.getElementById("num1");
    // getElementByID 하면 #쓰면 안됨
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    //input에 포커스 >> 새로고침을하면 내가 안찍어도 커서 들어옴
    numInput.focus();

    //랜덤수 생성 변수
    let n;
    let flag = false;//완료되기전까지 생성하지 않도록, if문과 연계해서

    // 버튼의 클릭이벤트 달기
    bt.addEventListener("click", (event) => {//event나 e 로 씀
        event.preventDefault();//화면이 다시로딩이 안되고 우리가 처리하는대로 되도록
        //랜덤수생성
        // if (flag == false) {
        if (!flag) {
            n = Math.floor(Math.random() * 100) + 1;
            // Math.floor로 소수점 빼주고 1~100까지 난수생성
            console.log("n=", n);
            flag = true;

            numInput.style.display = "inline";//재시작을 하고나서
            numInput.value = "";//재시작이니까 초기화(공백)
            numInput.focus();//재시작이니까 초기화(커서)
            bt.innerHTML = "확인";
        }

        //input박스 내용 가져오기
        if (numInput.value == '') {
            // alert("숫자를 입력하세요.");
            msg.innerHTML = "<span>숫자를 입력하세요.</span>";
            numInput.focus();
            return; //그 밑으로 안내려가지게
        }

        //여기로 내려온거면 숫자비교(n이랑 내가 입력받은 숫자랑)
        //===쓰면 타입까지 비교함, input으로 들어오는건 숫자일지라도 텍스트 > parseInt > if (n === parseInt(numInput.value)) {
        msg.innerHTML = ""
        if (n === parseInt(numInput.value)) {
            upDownImg.setAttribute("src", "/08/img/good.png")
            numInput.style.display = "none";//이 시점에서 쓴 숫자 안보이게
            bt.innerHTML = "재시작";//맞은시점에 재시작을해서 새로운 랜덤번호가 생성되게(flag)
            flag = false;//새로운 랜덤번호로 생성하도록 초기화 > 이벤트클릭 다시 발생, if(!flag)로 돌아가서 재시작 >> 그 플래그로 돌아가서 초기화작업까지(순서대로 내려오는거, 시점중요)
            msg.innerHTML = "<span>정답입니다<span>"
        }
        else if ( n > numInput.value) {
            upDownImg.setAttribute("src", "/08/img/up.png")
            msg.innerHTML = "<span>up<span>";
        }
        else {
            upDownImg.setAttribute("src", "/08/img/down.png")
            msg.innerHTML = "<span>down<down>"
        }

        //인풋값가져올땐 .밸류
        //프론트에서 아이디 패스워드받고 로그인 누르면 아이디 패스워드값이 서버로 날아가
        //백엔드에서 아이디 패스워드 받아서 데이터베이스 처리해서 프론트로 돌려줘
        //아이디 패스워드 없으면 안보내야지, 인풋값이 있는지 없는지 체크가 중요

    });

});

function generateLottoNumbers() {
    var numbers = [];
    
    // 1부터 45까지의 숫자를 배열에 추가
    for (var i = 1; i <= 45; i++) {
        numbers.push(i);
    }
    
    var lottoNumbers = [];
    
    // 6개의 번호를 랜덤으로 선택하여 로또 번호로 저장
    for (var i = 0; i < 6; i++) {
        // 배열에서 랜덤으로 번호 선택
        var randomIndex = Math.floor(Math.random() * numbers.length);
        // 선택된 번호를 결과 배열에 추가
        lottoNumbers.push(numbers[randomIndex]);
        // 선택된 번호를 배열에서 제거하여 중복 선택 방지
        numbers.splice(randomIndex, 1);
    }
    
    // 로또 번호를 오름차순으로 정렬
    lottoNumbers.sort(function(a, b) {
        return a - b;
    });
    
    // 결과 출력
    document.getElementById("result").innerText = "로또 번호: " + lottoNumbers.join(", ");
}
</script>
</body>
</html>

document.getElementById("generateButton").addEventListener("click", function() {
    let arr = [];
    let i = 1;
    
    // 1부터 45까지의 숫자를 배열에 추가
    while (i <= 45) {
        arr.push(i);
        i++;
    }
    
    let lottoNumbers = [];
    
    // 6개의 번호를 랜덤으로 선택하여 로또 번호로 저장
    while (lottoNumbers.length < 6) {
        // 배열에서 랜덤으로 번호 선택
        let randomIndex = Math.floor(Math.random() * arr.length);
        // 선택된 번호를 결과 배열에 추가
        lottoNumbers.push(arr[randomIndex]);
        // 선택된 번호를 배열에서 제거하여 중복 선택 방지
        arr.splice(randomIndex, 1);
    }
    
    // 로또 번호를 오름차순으로 정렬
    lottoNumbers.sort(function(a, b) {
        return a - b;
    });
    
    // 결과 출력
    document.getElementById("result").innerText = "로또 번호: " + lottoNumbers.join(", ");
});