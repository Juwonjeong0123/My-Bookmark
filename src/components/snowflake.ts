const body = document.body;
const MIN_DURATION: number = 10;

export function MakeSnowFlake(isSnowing: boolean) {
    if (!isSnowing) return; // isSnowing이 false일 경우 눈송이 생성하지 않음

    const snowFlake: HTMLDivElement = document.createElement("div");
    const delay: number = Math.random() * 10;
    const initialOpacity: string = String(Math.random());  // 눈송이가 보이도록 랜덤한 opacity 값 설정
    const duration: number = Math.random() * 20 + MIN_DURATION;
    const size: number = Math.random() + 0.5;

    snowFlake.classList.add("snowflake");
    snowFlake.style.left = `${Math.random() * window.screen.width}px`;
    snowFlake.style.animationDelay = `${delay}s`;
    snowFlake.style.opacity = initialOpacity;
    snowFlake.style.animation = `fall ${duration}s linear`;
    snowFlake.style.transform = `scale(${size})`; // `scale`은 `transform`으로 적용해야 함

    body?.appendChild(snowFlake);

    setTimeout(() => {
        body.removeChild(snowFlake);
        MakeSnowFlake(isSnowing);  // 계속 눈송이를 생성
    }, (duration + delay) * 300);
}
