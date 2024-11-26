const btn = document.getElementById('snowButton') as HTMLButtonElement;
const span = document.getElementById('span') as HTMLSpanElement;

let isSnowing: boolean = false;

export default function SnowButton() {
    btn.addEventListener('click', () => {
        isSnowing = !isSnowing;  // 상태를 토글
        if (isSnowing) {
            span.textContent = 'Snow On';
        } else {
            span.textContent = 'Snow Off';
        }
    });

    return () => isSnowing;  // 상태를 반환하는 함수 리턴
}
