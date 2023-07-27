<template>
    <div class="elements-room-list">
        <div class="elements-room-list__title">
            <span class="-en" v-if="data?.title.deco_title">
                {{ data?.title.deco_title }}
            </span>
            <h3 v-if="data?.title.title">
                {{ data?.title.title }}
            </h3>
        </div>
        <div class="elements-room-list__item">
            <ElementsRoomCard 
                v-for="(room, key) in data?.rooms"
                :key="key"
                v-inview
                v-fade
                :data="room" 
            />
        </div>
        <div
            class="elements-room-list__swiper"
            ref="swiperRef"
        >
            <div class="elements-room-list__swiper-wrapper swiper-wrapper">
                <div
                    class="elements-room-list__swiper-slide swiper-slide"
                    v-for="(room, key) in data?.rooms"
                    :key="key"
                >
                    <ElementsRoomCard
                        v-inview
                        v-fade
                        :data="room" 
                    />
                </div>
            </div>
            <div class="elements-room-list__swiper-navigation">
                <div
                    class="elements-room-list__swiper-navigation-prev"
                    @click="swiper.slidePrev()"
                >
                    <nuxt-icon name="arrow_right"/>
                </div>
                <div class="elements-room-list__swiper-navigation-text">
                    <span v-text="swiperIndex + 1"></span>
                    <span>/</span>
                    <span v-text="data?.rooms.length"></span>
                </div>
                <div
                    class="elements-room-list__swiper-navigation-next"
                    @click="swiper.slideNext()"
                >
                    <nuxt-icon name="arrow_right"/>
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

    const swiper = ref()
    const swiperRef = ref()
    const swiperIndex = ref(0)

    const swiperInit = (ref, indexRef) => {
        if (ref.value) {
            return new Swiper(ref.value, {
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: ref.value.querySelectorAll('.swiper-slide').length < 2 ? true : false,
                on: {
                    slideChangeTransitionEnd: function () {
                        indexRef.value = this.realIndex;
                    },
                },
            })
        }
    }

    onMounted(() => {
        nextTick(() => {
            swiper.value = swiperInit(swiperRef, swiperIndex)
        })
    })
</script>
<style lang="scss">
    $class-name: elements-room-list;
    .#{$class-name} {
        @include size(100%, auto);
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        @include media-breakpoint-down(medium) {
            padding: 0;
            margin-bottom: 8rem;
        }

        &__item {
            @include set-col(10, 12, 0);

            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .elements-room-card {
                &:not(:nth-child(3n)) {
                    margin-right: calc((100% - (3 * (3 * ((100% - ((10 - 1) * 2.4rem)) / 10) + ((3 - 1) * 2.4rem) + (1 * 2.4rem))))/2);
                }
            }

            @include media-breakpoint-down(medium) {
                display: none;
            }
        }

        &__title {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            padding: 8rem 0;

            @include media-breakpoint-down(medium) {
                gap: 1.2rem;
                padding: 0;
                margin-bottom: 4.2rem;
            }

            span {
                @include typo('heading', 48);

                @include media-breakpoint-down(medium) {
                    @include typo('heading', 32);
                }
            }

            h3 {
                @include typo('body', 20);

                @include media-breakpoint-down(medium) {
                    @include typo('body', 16);
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
                @include size(100%, auto);

                display: flex;
            }

            &-slide {
                @include set-col(3.5, 4, 0);
            }

            &-navigation {
                display: flex;
                margin-top: 4.2rem;

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