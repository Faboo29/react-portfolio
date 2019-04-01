import { TweenLite, Elastic, Power2 } from 'gsap';

const SkillAnimations = {

    animateStars: (stars) => {
        stars.forEach((star, index) => {
            TweenLite.to(star, 1, {
                y: '0', opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: (1.2 + index * 0.1)
            });
        });
    },
    animateLanguage: (languageBlock) => {
        TweenLite.to(languageBlock, 1, {
            y: '0', opacity: 1, scale: 1, ease: Power2.easeOut, delay: 0.4
        });
    },
    animateDescription: (descriptionBlock) => {
        TweenLite.to(descriptionBlock, 1, {
            y: '0', opacity: 1, scale: 1, ease: Power2.easeOut, delay: 0.6
        })
    }

}

export default SkillAnimations;