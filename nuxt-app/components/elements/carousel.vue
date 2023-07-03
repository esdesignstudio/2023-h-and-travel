<template>
    <div class="page-carousel">
        <div class="page-carousel__inner" ref="swiperRef">
            <div class="swiper-wrapper">
                <figure 
                    class="swiper-slide" 
                    v-for="(item, index) in data"
                    :key="index + item?.id"
                >
                    <img :src="item?.url" :alt="item?.url">
                </figure>
            </div>
        </div>
        <div class="page-carousel__tool" v-if="data.length > 1">
            <div class="swiper-button-prev"><FormKitIcon icon="arrowLeft" /></div>
            <div class="swiper-pagination -en" :class="{'-larger' : !center}"></div>
            <div class="swiper-button-next"><FormKitIcon icon="arrowRight" /></div>
        </div>
    </div>
</template>
<script setup>
    import Swiper from 'swiper/bundle'
    import 'swiper/css'
    import { FormKitIcon } from '@formkit/vue'

    const props = defineProps({
        data: {
            type: Array,
            default: [],
        },
        center: {
            type: Boolean,
            default: true,
        },
    })

    const swiper = ref(null)
    const swiperRef = ref()

    onMounted(() => {
        nextTick(() => {
            setTimeout(() => {
                if (props.data.length > 1) {
                    swiper.value = new Swiper(swiperRef.value, {
                        slidesPerView: props.center ? 1.3 : 'auto',
                        spaceBetween: 25,
                        slidesOffsetBefore: props.center ? false : window.innerWidth / 4,
                        loop: true,
                        centeredSlides: props.center,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'fraction',
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    })
                }
            }, 701);
        })
    })
</script>
<style lang="scss">
    $class-name: page-carousel;
    .#{$class-name} {
        @include size(100%, auto);

        margin: 5rem 0;
        position: relative;

        &__inner {
            @include size(100%);

            overflow: hidden;
        }

        &__tool {
            position: absolute;
            bottom: -3.5rem;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem;

            .swiper-button-prev, .swiper-button-next {
                @include media-breakpoint-down(medium) {
                    @include size(3.2rem, auto);
                }
            }
        }

        .swiper {
            &-slide {
                @include size(100%, 45vw);

                img {
                    @include size(100%);

                    object-fit: cover;
                }
            }

            &-pagination {
                @include typo('heading', 32); 

                min-width: 70px;

                &.-larger {
                    @include typo('heading', 48);

                    .swiper-pagination-current {
                        @include typo('heading', 64);

                        font-family: map-get($font-family, en);
                    }
                }

                &-current {
                    @include typo('heading', 48); 
                }
            }

            &-button-prev, &-button-next {
                transition: all .3s;

                &:hover {
                    transform: scale(1.2);
                }

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        @include size(5rem);
                    }
                }
            }
        }


    }
</style>