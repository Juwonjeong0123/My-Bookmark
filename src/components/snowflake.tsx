const body = document.body;
const MIN_DURATION: number = 10;

export default function makeSnowFlake() {
    const snowFlake: HTMLDivElement = document.createElement("div")
    const delay: number = Math.random() * 10;
    const initialOpacity: string = String(Math.random());
    const duration: number = Math.random() * 20 + MIN_DURATION;
    const size: number = Math.random() + 0.5;

    snowFlake.classList.add("snowflake");
    snowFlake.style.left = `${Math.random() * window.screen.width}px`;
    snowFlake.style.animationDelay = `${delay}s`;
    snowFlake.style.opacity = initialOpacity;
    snowFlake.style.animation = `fall ${duration}s linear`
    snowFlake.style.scale = String(size);

    body?.appendChild(snowFlake);

    setTimeout(() => {
        body.removeChild(snowFlake);
        makeSnowFlake()
    }, (duration + delay) * 300);
}