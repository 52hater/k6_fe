// document.addEventListener("click", () => ) {

// let arr = [];

// while (i <= 45) {
//     arr.push(i);
//     i++;
// }

// let arr2 = [];

// while (arr2.length <= 6){
//     let rand = Math.floor(Math.random() * arr.length) + 1;
//     arr2.push(arr[rand]);
// }

// document.getElementById().

// }


document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("button"); //버튼찝어와
    const numDisp = document.querySelector("#numDisp");

    let nums = [];//배열만듦

    bt.addEventListener("click", () => {//버튼이 눌러질때마다 nums배열이 채워지게 1~45까지 랜덤수 7개로(중복x) / 중복될수있지 > 몇번돌려야될 지 몰라 > while
        //nums = []; //버튼누를때마다 새로만들어져야되니까 버튼 초기화
        nums.length = 0; // 이렇게도 가능
        while (nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!nums.includes(n)) nums.push(n);///그대로 들어가면 안됨, 중복되지않아야함 그래서 무조건 푸쉬(nums.push(n))가 아니라 if문알아서 없을떄 집어넣어야지
        }

        // //문자열로 처리하는 법
        // let tags = ''; //한번돌때마다 저 tags에다가 한개씩 한개씩 붙임 v가 돌면서 하나씩 넣음
        // nums.map((v, i) => {//i가 5가 되고나면 그 뒤에 + 붙이면 보너스번호앞에 + 나오지
        //     tags = tags + `<span class="sp${parseInt(v/5)}">${v}</span>`;//색깔 9가지 만들었으니까 숫자5개씩 색깔 다르게(45/9=5)//클래스가 붙어야하는 이유는?
        //     if (i === 5)//보너스번호앞에 + 붙이게
        //         tags = tags + `<span>+</span>`
        // });
        // numDisp.innerHTML = tags;

        //맵을 써서 좀 더 리액트스럽게
        // let tags = []; //tags의 역할 : 변수를 모으는 것
        // tags = nums.map((v) => //넘즈 7개만들고 다시 spn7개 만들었다 > 그럴필요x > nums.push(n)에서 숫자 만들었음
        //     `<span class = "sp${parseInt(v / 5)}">${v}</span>`
        // );//tags를 출력하면 문자열배열이 나옴
        // tags.splice(6, 0, `<span>+</span>`);
        // let s = tags.toString().replaceAll(',' , '');//문자열안에 쉼표가 있었는데 쉼표를 아무것도 없도록 (',' => '')
        // //단순히 배열이라서 쉼표가 생긴건지 투스트링이라서 생긴거?(아닌듯)
        // console.log(s)
        // numDisp.innerHTML = s;

        //s변수, tags변수를 쓸 필요가 없음
        //아래처럼 바꿔서

        nums = nums.map((v) =>
            `<span class = "sp${parseInt(v / 5)}">${v}</span>`
        );
        nums.splice(6, 0, `<span>+</span>`);
        numDisp.innerHTML = nums.toString().replaceAll(',', '');
    });

});