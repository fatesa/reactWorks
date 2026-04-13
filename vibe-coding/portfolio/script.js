// 모바일 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// 햄버거 클릭 이벤트
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // 햄버거 애니메이션
    hamburger.classList.toggle('active');
});

// 메뉴 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Contact 폼 제출
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 폼 데이터 가져오기
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // 간단한 유효성 검사
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        showMessage('모든 필드를 입력해주세요.', 'error');
        return;
    }
    
    // 이메일 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('유효한 이메일 주소를 입력해주세요.', 'error');
        return;
    }
    
    // 실제 환경에서는 여기서 서버로 데이터를 전송
    console.log('폼 데이터:', { name, email, subject, message });
    
    // 성공 메시지 표시
    showMessage('메시지가 성공적으로 전송되었습니다! 감사합니다.', 'success');
    
    // 폼 리셋
    contactForm.reset();
    
    // 3초 후 메시지 숨기기
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 3000);
});

// 메시지 표시 함수
function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// 프로젝트 보기 버튼 클릭 시 프로젝트 섹션으로 스크롤
document.querySelector('.btn-primary').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// 네비게이션 스크롤 효과
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 페이지가 안정화된 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 초기 설정
    console.log('포트폴리오 웹사이트가 로드되었습니다.');
});

// 윈도우 리사이즈 시 모바일 메뉴 초기화
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
