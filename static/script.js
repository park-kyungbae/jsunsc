// 임시 데이터 (학번-이름으로 구글 계정 정보 저장)
const userData = [
    { studentNumber: "2023001", studentName: "홍길동", googleId: "hong.gildong@g.com", googlePw: "password123" },
    { studentNumber: "2023002", studentName: "김철수", googleId: "kim.chulsoo@g.com", googlePw: "password456" },
    { studentNumber: "2023003", studentName: "이영희", googleId: "lee.younghee@g.com", googlePw: "password789" }
];

// 폼 요소 가져오기
const searchForm = document.getElementById('searchForm');
const resultArea = document.getElementById('result');
const googleId = document.getElementById('googleId');
const googlePw = document.getElementById('googlePw');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();  // 폼 제출 방지

    // 입력값 가져오기
    const studentNumber = document.getElementById('studentNumber').value.trim();
    const studentName = document.getElementById('studentName').value.trim();

    // 데이터 검색
    const user = userData.find(user => user.studentNumber === studentNumber && user.studentName === studentName);

    if (user) {
        // 결과 출력
        googleId.textContent = user.googleId;
        googlePw.textContent = user.googlePw;
        resultArea.style.display = 'block';
    } else {
        // 결과 없음 처리
        googleId.textContent = "일치하는 정보 없음";
        googlePw.textContent = "일치하는 정보 없음";
        resultArea.style.display = 'block';
    }
});