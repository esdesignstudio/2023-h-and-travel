<template>
    <div class="flexible-room-facilities">
        <div class="flexible-room-facilities__wrap container">
            <div class="flexible-room-facilities__wrap-title">
                <h3 v-if="data?.title">{{ data?.title }}</h3>
                <ElementsDecoTitle class="-en" v-if="data?.deco_title" :data="data?.deco_title"/>
            </div>
            <ul 
                class="flexible-room-facilities__wrap-icons" 
                v-if="data?.icons.length > 0"
                v-inview
                v-fade
            >
                <li 
                    v-for="(icon, iconindex) in data?.icons"
                    :key="iconindex"
                >
                    <figure>
                        <img :src="icon.icon.url" :alt="icon.text">
                    </figure>
                    <span>{{ icon.text }}</span>
                </li>
            </ul>
            <ul class="flexible-room-facilities__wrap-imgs" v-if="data?.setting_imgs.length > 0">
                <li 
                    v-for="(img, imgindex) in data?.setting_imgs"
                    :key="imgindex"
                >
                    <figure>
                        <img :src="img.image.url" :alt="img.text">
                    </figure>
                    <span v-inview v-fade>{{ img.text }}</span>
                </li>
            </ul>
            <div
                class="flexible-room-facilities__swiper"
                ref="swiperRef"
            >
                <div class="flexible-room-facilities__swiper-wrapper swiper-wrapper">
                    <div
                        class="flexible-room-facilities__swiper-slide swiper-slide"
                        v-for="(img, imgindex) in data?.setting_imgs"
                        :key="imgindex"
                    >
                        <figure>
                            <img :src="img.image.url" :alt="img.text">
                        </figure>
                        <span v-inview v-fade>{{ img.text }}</span>
                    </div>
                </div>
                <div class="flexible-room-facilities__swiper-navigation">
                    <div
                        class="flexible-room-facilities__swiper-navigation-prev"
                        @click="swiper.slidePrev()"
                    >
                        <nuxt-icon name="arrow_right"/>
                    </div>
                    <div class="flexible-room-facilities__swiper-navigation-text">
                        <span v-text="swiperIndex + 1"></span>
                        <span>/</span>
                        <span v-text="data?.setting_imgs.length"></span>
                    </div>
                    <div
                        class="flexible-room-facilities__swiper-navigation-next"
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
    $class-name: flexible-room-facilities;
    .#{$class-name} {
        background-color: map-get($colors, brand-1);
        text-align:center;
        overflow: hidden;

        &__wrap {
            padding-top: 8rem;
            padding-bottom: 8rem;
            color: map-get($colors, white);
            display: flex;
            flex-direction: column;
            align-items: center;

            &-title {
                @include media-breakpoint-down(medium) {
                    margin-bottom: 4rem;
                }

                h3 {
                    @include typo('heading', 32);

                    padding: 0 0 3rem;

                    @include media-breakpoint-down(medium) {
                        padding: 0;
                        margin-bottom: 1.2rem;
                    }
                }

                span {
                    @include typo('display', 80);

                    @include media-breakpoint-down(medium) {
                        @include typo('heading', 32);
                    }
                }
            }

            &-icons {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 3rem;
                padding: 8rem;

                @include media-breakpoint-down(medium) {
                    @include size(65vw, auto);

                    flex-wrap: wrap;
                    padding: 2.2rem 0;
                    margin-bottom: 4rem;
                    gap: 2.4rem
                }

                li {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    @include media-breakpoint-down(medium) {
                        @include size(calc(50% - 1.2rem), auto);
                    }

                    figure {
                        @include size(2rem);

                        display: flex;

                        > img {
                            @include size(100%);
                            
                            object-fit: cover;
                        }
                    }
                }
            }

            &-imgs {
                @include set-col(10, 12, 0);

                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                @include media-breakpoint-down(medium) {
                    display: none;
                }

                li {
                    @include set-col(3, 10, 1);

                    margin-bottom: 6.4rem;
                    text-align: left;

                    figure {
                        @include size(100%, auto);
                        @include aspect(1);

                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        margin-bottom: 1.6rem;

                        > img {
                            @include size(100%);

                            position: absolute;
                            object-fit: cover;
                        }
                    }
                }
            }
        }

        &__swiper {
            @include size(100%, auto);

            display: flex;
            flex-direction: column;
            align-items: center;

            @include media-breakpoint-up(medium) {
                display: none;
            }

            &-wrapper {
                display: flex;
            }

            &-slide {
                @include set-col(3.5, 4, 0);

                display: flex;
                flex-direction: column;
                align-items: flex-start;

                > figure {
                    @include size(100%, auto);
                    @include aspect(1);

                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    margin-bottom: 1.2rem;

                    > img {
                        @include size(100%);

                        position: absolute;
                        object-fit: cover;
                    }
                }

                > p {
                    @include typo('body', 16);
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