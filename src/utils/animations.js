import {gsap} from "gsap"

export const animationEnter = (text)=> {
    text.chars.forEach((char, index) => {     
        const charsHover = ()=> {
            gsap.timeline()
            .to(char, {
                y: gsap.utils.random(-30, 0),
                x: gsap.utils.random(-20, 20),
                rotate: gsap.utils.random(-30, 30),
                scale: gsap.utils.random(0.5, 1.5),
                duration: .3,
                ease: "back.out",
                color: "#7304ce9f",
                onStart: () => {
                    char.removeEventListener("mouseenter", charsHover);
                }
            })
            .to(char, {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                color: "#fff",
                delay: 1,
                duration: .5,
                ease: "back.out",
                onComplete: () => {
                    setTimeout(() => {
                        char.addEventListener("mouseenter", charsHover);
                    }, 100);
                }
            })
        }

        char.addEventListener("mouseenter", charsHover);
    })
}