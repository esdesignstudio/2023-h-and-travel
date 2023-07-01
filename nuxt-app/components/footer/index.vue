<template>
    <div class="footer">
        <div class="footer__top container">
            <div class="footer__top-wrapper">
                <figure class="footer__top-wrapper-logo">
                    <img
                        :src="global?.footer?.logo?.url"
                        :alt="global?.footer?.logo?.alt"
                        v-inview
                        v-fade
                    >
                </figure>
                <p v-text="global?.footer?.copyright"></p>
                <div class="footer__top-wrapper-info">
                    <div class="footer__top-wrapper-info-left">
                        <p v-inview v-fade>聯絡資訊</p>
                        <p v-inview v-fade v-if="global?.footer.phone" v-text="`電話｜${global?.footer.phone}`"></p>
                        <p v-inview v-fade v-if="global?.footer.address" v-text="`地址｜${global?.footer.address}`"></p>
                        <p v-inview v-fade v-if="global?.footer.email" v-text="`信箱｜${global?.footer.email}`"></p>
                    </div>
                    <div class="footer__top-wrapper-info-right">
                        <p v-inview v-fade>追蹤我們</p>
                        <nuxt-link
                            v-for="(item, key) in global?.footer?.socials"
                            :key="key"
                            :to="item.link?.url"
                            :target="item.link?.target"
                            v-inview
                            v-fade
                        >
                            <p v-text="item.link.title"></p>
                            <nuxt-icon name="arrow_right" />
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="footer__bottom-wrapper" v-inview v-fade>
                    <span>
                        <nuxt-link to="/privacy-policy">Cookie Policy</nuxt-link>
                        <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                    </span>
                    <p v-text="global?.footer?.copyright"></p>
                </div>
            </div>
            <div
                class="footer__bottom-marquee"
                ref="marqueeRef"
            >
                <div
                    class="footer__bottom-marquee-group"
                    v-for="(item, key) in 3"
                    :key="key"
                    ref="marqueeGroupRef"
                >
                    <p
                        v-for="(item, key) in 3"
                        :key="key"
                        v-text="global?.footer?.marquee"
                    >

                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import gsap from "gsap"

    const global = useGlobal()
    const marqueeRef = ref()
    const marqueeGroupRef = ref()
    let timeline
    let groupWidth

    const init = () => {
        timeline = gsap.timeline()
        
        setTimeline()
    }

    const setTimeline = () => {
        timeline.add(createMarquee(marqueeRef.value), 0)
    }

    const createMarquee = (element) => {
        const distance = groupWidth
        return gsap.timeline().to(element, {
                duration: 80,
                ease: 'none',
                x: -distance,
                onComplete() {
                    timeline.play(0)
                },
                onReverseComplete() {
                    timeline.reverse(0)
                },
            },
        )
    }

    onMounted(() => {
        nextTick(() => {
            setTimeout(() => {
                groupWidth = marqueeGroupRef.value[0].clientWidth
                init()
            }, 701);
        })
    })
</script>
<style lang="scss">
$class-name: footer;
.#{$class-name} {
    @include size(100vw, auto);

    color: map-get($colors, brand-2);
    background-color: map-get($colors, brand-1);
    overflow: hidden;
    position: relative;
    z-index: 2;

    &__top {
        display: flex;
        justify-content: center;
        padding-top: 12rem;
        padding-bottom: 17rem;
        border-bottom: 1px solid map-get($colors, gray-line);

        @include media-breakpoint-down(medium) {
            padding-top: 4.5rem;
            padding-bottom: 4.7rem;
        }

        &-wrapper {
            @include set-col(10, 12, 0);

            display: flex;
            flex-direction: column;

            @include media-breakpoint-down(medium) {
                @include size(100%, auto);
            }

            &-logo {
                @include set-col(1, 10, 1);

                margin-bottom: 1.6rem;

                @include media-breakpoint-down(medium) {
                    @include size(100%, auto);

                    display: flex;
                    justify-content: center;
                    margin-bottom: 2rem;
                }

                > img {
                    @include size(100%, auto);

                    @include media-breakpoint-down(medium) {
                        @include size(9.6rem, auto);
                    }
                }
            }

            > p {
                display: none;

                @include media-breakpoint-down(medium) {
                    @include typo('small', 10);
                    @include size(100%, auto);

                    display: flex;
                    justify-content: center;
                    margin-bottom: 4.2rem;
                }
            }

            &-info {
                display: flex;
                justify-content: space-between;
                align-items: center;

                @include media-breakpoint-down(medium) {
                    flex-direction: column;
                }

                &-left {
                    display: flex;
                    flex-direction: column;

                    @include media-breakpoint-down(medium) {
                        @include size(100%, auto);

                        margin-bottom: 3.2rem;
                    }

                    > p {
                        @include typo('body', 20);

                        &:not(:last-child) {
                            margin-bottom: 1.2rem;
                        }

                        @include media-breakpoint-down(medium) {
                            @include typo('body', 16);
                        }
                    }
                }

                &-right {
                    @include set-col(2, 10, 0);

                    display: flex;
                    flex-direction: column;

                    @include media-breakpoint-down(medium) {
                        @include size(100%, auto);
                    }

                    > p {
                        @include typo('body', 20);

                        margin-bottom: 1.2rem;

                        @include media-breakpoint-down(medium) {
                            @include typo('body', 16);
                        }
                    }

                    > a {
                        display: flex;
                        align-items: center;

                        &:not(:last-child) {
                            margin-bottom: .4rem;
                        }

                        > p {
                            @include typo('body', 20);

                            margin-right: 2rem;

                            @include media-breakpoint-down(medium) {
                                @include typo('body', 16);

                                margin-right: 1.2rem;
                            }
                        }

                        > span {
                            @include size(2rem, auto);

                            @include media-breakpoint-down(medium) {
                                @include size(1.2rem, auto);
                            }

                            > svg {
                                @include size(100%, auto);

                                margin-bottom: 0;
                            }
                        }
                    }
                }
            }
        }
    }

    &__bottom {
        @include size(100%, auto);

        display: flex;
        flex-direction: column;

        .container {
            @include size(100%, auto);
        }

        &-wrapper {
            @include set-col(11, 12, 0);
            @include set-col-offset(1, 12, 1);
            
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            margin-bottom: 6rem;

            @include media-breakpoint-down(medium) {
                @include size(100%, auto);

                margin-left: 0;
                margin-bottom: 2rem;
            }

            > span {
                display: flex;

                @include media-breakpoint-down(medium) {
                    @include size(100%, auto);

                    justify-content: space-between;
                }

                > a {
                    @include typo('body', 16);

                    &:not(:last-child) {
                        margin-right: 3.2rem;
                    }
                }
            }

            > p {
                @include set-col(3, 12, 1);
                @include typo('body', 16);

                @include media-breakpoint-down(medium) {
                    display: none;
                }
            }
        }

        &-marquee {
            display: flex;
            justify-content: center;

            &-group {
                display: flex;
                flex: 0 0 auto;

                > p {
                    @include typo('display', 180);

                    flex: 0 0 auto;
                    margin-right: 4rem;
                    text-transform: uppercase;

                    @include media-breakpoint-down(medium) {
                        @include typo('display', 80);

                        margin-right: 2rem;
                    }
                }
            }
        }
    }
}
</style>