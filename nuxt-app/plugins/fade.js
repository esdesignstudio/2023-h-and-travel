export default defineNuxtPlugin( nuxtApp => {
    const scrollAndShow = (el) => {
        if (el.classList.contains('is-inview')) {
            el.style.transform = 'translateY(0)'
            el.style.opacity = '1'
        } else {
            el.style.transform = 'translateY(8rem)'
            el.style.opacity = '0'
        }
    }

    nuxtApp.vueApp.directive('fade', {
        created (el, binding) {
            const { $LCscroll } = useNuxtApp()
            setTimeout(() => {
                const originTransition = getComputedStyle(el).transition
                // el.style.transform = 'translateY(64px)'
                // el.style.opacity = '0'
                el.style.transition = `${originTransition}, opacity 0.6s 0.1s, transform 2s cubic-bezier(0.075, 0.82, 0.165, 1)`
                if ($LCscroll) {
                    $LCscroll.on('scroll', () => {
                        scrollAndShow(el)
                    })
                } else {
                    window.addEventListener('scroll', () => {
                        scrollAndShow(el)
                    })
                }
                window.addEventListener('resize', () => {
                    scrollAndShow(el)
                })
            }, 701)

        },
        updated (el, binding) {
        },
    });
});