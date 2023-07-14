<template>
    <div
        class="flexible-ig-show container"
        v-inview
    >
        <div 
            class="flexible-ig-show__bg" 
            :style="{ backgroundImage: 'url(' + data?.bg_img?.url + ')' }"
        ></div>
        <div class="flexible-ig-show__wrapper">
            <div class="flexible-ig-show__wrapper-title">
                <p
                    v-text="data?.title"
                    v-inview
                    v-fade
                ></p>
                <ElementsDecoTitle :data="data?.deco_title"/>
            </div>
            <div class="flexible-ig-show__wrapper-ig">
                <div
                    class="flexible-ig-show__wrapper-ig-wrapper"
                    v-for="(card, key) in data?.ig_cards"
                    :key="key"
                    v-inview
                    v-fade
                >
                    <ElementsIgCard :data="card" />
                </div>
            </div>
            <div class="flexible-ig-show__swiper" ref="swiperRef">
                <div class="flexible-ig-show__swiper-wrapper swiper-wrapper">
                    <div
                        class="flexible-ig-show__swiper-wrapper-slide swiper-slide"
                        v-for="(card, key) in data?.ig_cards"
                        :key="key"
                    >
                        <ElementsIgCard :data="card" />
                    </div>
                </div>
                <div class="flexible-ig-show__swiper-navigation">
                    <div
                        class="flexible-ig-show__swiper-navigation-prev"
                        @click="swiper.slidePrev()"
                    >
                        <nuxt-icon name="arrow_right"/>
                    </div>
                    <div class="flexible-ig-show__swiper-navigation-text">
                        <span v-text="swiperIndex + 1"></span>
                        <span>/</span>
                        <span v-text="data?.ig_cards.length"></span>
                    </div>
                    <div
                        class="flexible-ig-show__swiper-navigation-next"
                        @click="swiper.slideNext()"
                    >
                        <nuxt-icon name="arrow_right"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import Swiper from 'swiper/bundle'
    import 'swiper/css'

    const props = defineProps({
        data: {
            type: Object,
            default: {},
        },
    })

    const swiper = ref(null)
    const swiperRef = ref()
    const swiperIndex = ref(0)

    onMounted(() => {
        swiper.value = new Swiper(swiperRef.value, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            on: {
                slideChangeTransitionEnd: function () {
                    swiperIndex.value = this.realIndex
                },
            },
        })
    })
</script>
<style lang="scss">
    $class-name: flexible-ig-show;
    .#{$class-name} {
        @include size(100%, auto);

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20rem;
        padding-bottom: 12rem;
        color: map-get($colors, white);

        @include media-breakpoint-down(medium) {
            padding-top: 6.4rem;
            padding-bottom: 6.4rem;
            overflow: hidden;
        }

        &.is-inview {
            .#{$class-name}__bg {
                opacity: 1;
            }
        }

        &__bg {
            @include size(100vw, 100vh);

            position: fixed;
            z-index: 0;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            opacity: 0;

            &.-show {
                opacity: 1;
            }

            &::after {
                @include size(100%);

                content: '';
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(#484036, .4);
            }
        }

        &__wrapper {
            @include set-col(10, 12, 0);

            display: flex;
            flex-direction: column;
            z-index: 1;

            @include media-breakpoint-down(medium) {
                @include size(100%, auto);
            }

            &-title {
                display: flex;
                flex-direction: column;
                margin-bottom: 10.8rem;

                @include media-breakpoint-down(medium) {
                    margin-bottom: 4rem;
                }

                > p {
                    @include typo('heading', 32);

                    margin-bottom: 2rem;

                    @include media-breakpoint-down(medium) {
                        @include typo('body', 20);

                        margin-bottom: 1.2rem;
                    }
                }
            }

            &-ig {
                @include size(100%, auto);

                display: flex;
                flex-wrap: wrap;

                @include media-breakpoint-down(medium) {
                    display: none;
                }

                &-wrapper {
                    @include set-col(3.33, 10, 0);

                    margin-bottom: 4.8rem;

                    &:nth-child(3n + 1) {
                        padding-top: 11.8rem;
                    }

                    &:nth-child(3n + 2) {
                        padding-top: 26.4rem;
                    }

                    &:not(:first-child) {
                        @include set-col-offset(0, 10, 2);
                    }

                }
            }
        }

        &__swiper {
            display: flex;
            flex-direction: column;
            align-items: center;
            @include media-breakpoint-up(medium) {
                display: none;
            }
            
            &-wrapper {
                display: flex;

                &-slide {
                    @include size(27.2rem, auto);
                }
            }

            &-navigation {
                display: flex;
                margin-top: 4rem;

                &-prev {
                    @include size(2.6rem, auto);

                    display: flex;

                    > span {
                        @include size(100%, auto);

                        display: flex;

                        > svg {
                            @include size(100%, auto);

                            transform: rotate(180deg);
                        }
                    }
                }

                &-next {
                    @include size(2.6rem, auto);

                    display: flex;

                    > span {
                        @include size(100%, auto);

                        display: flex;

                        > svg {
                            @include size(100%, auto);
                        }
                    }
                }

                &-text {
                    display: flex;
                    align-items: baseline;
                    margin: 0 3.2rem;

                    > span {
                        @include typo('heading', 28);

                        &:first-child {
                            @include typo('heading', 48);
                        }
                    }
                }
            }
        }
    }
</style>