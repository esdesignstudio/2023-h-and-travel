<template>
    <div class="flexible-room-show container">
        <div class="flexible-room-show__title">
            <h2
                v-text="data?.title"
                v-inview
                v-fade
            ></h2>
            <ElementsDecoTitle :data="data?.deco_title"/>
        </div>
        <div class="flexible-room-show__rooms">
            <div
                class="flexible-room-show__rooms-item"
                v-for="(room, key) in data?.rooms"
                :key="key"
                v-inview
                v-fade
            >
                <figure>
                    <img :src="room.room_type?.image.url" alt="">
                </figure>
                <div class="flexible-room-show__rooms-item-info">
                    <h3 class="-en" v-text="room.room_type?.deco_title"></h3>
                    <h4 v-text="room.room_type?.name"></h4>
                    <nuxt-link>
                        查看房型
                        <nuxt-icon name="arrow_right"/>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="flexible-room-show__swiper" ref="swiperRef">
            <div class="flexible-room-show__swiper-wrapper swiper-wrapper">
                <div
                    class="flexible-room-show__swiper-wrapper-slide swiper-slide"
                    v-for="(room, key) in data?.rooms"
                    :key="key"
                >
                    <figure>
                        <img :src="room.room_type?.image.url" alt="">
                    </figure>
                    <div class="flexible-room-show__swiper-wrapper-slide-info">
                        <h3 class="-en" v-text="room.room_type?.deco_title"></h3>
                        <h4 v-text="room.room_type?.name"></h4>
                        <nuxt-link>
                            查看房型
                            <nuxt-icon name="arrow_right"/>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="flexible-room-show__swiper-navigation">
                <div
                    class="flexible-room-show__swiper-navigation-prev"
                    @click="swiper.slidePrev()"
                >
                    <nuxt-icon name="arrow_right"/>
                </div>
                <div class="flexible-room-show__swiper-navigation-text">
                    <span v-text="swiperIndex + 1"></span>
                    <span>/</span>
                    <span v-text="data.rooms.length"></span>
                </div>
                <div
                    class="flexible-room-show__swiper-navigation-next"
                    @click="swiper.slideNext()"
                >
                    <nuxt-icon name="arrow_right"/>
                </div>
            </div>
        </div>
        <nuxt-link
            class="flexible-room-show__btn"
            to="/rooms"
            v-inview
            v-fade
        >
            所有房型
        </nuxt-link>
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
    $class-name: flexible-room-show;
    .#{$class-name} {
        @include size(100%, auto);

        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: map-get($colors, white);
        padding-top: 14.8em;
        padding-bottom: 17rem;

        @include media-breakpoint-down(medium) {
            padding-top: 8rem;
            padding-bottom: 8rem;
            overflow: hidden;
        }

        &__title {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 7.2rem;

            @include media-breakpoint-down(medium) {
                margin-bottom: 4rem;
            }

            > h2 {
                @include typo('heading', 32);

                margin-bottom: 2rem;

                @include media-breakpoint-down(medium) {
                    @include typo('body', 20);

                    margin-bottom: 1.2rem;
                }
            }

            h1 {
                @include media-breakpoint-down(medium) {
                    @include typo('heading', 48);
                }
            }
        }

        &__rooms {
            @include set-col(10, 12, 0);

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @include media-breakpoint-down(medium) {
                display: none;
            }

            &-item {
                @include set-col(3, 10, 1);

                margin-bottom: 6.4rem;

                > figure {
                    @include size(100%, auto);
                    @include aspect(1.18);

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

                &-info {
                    padding: .8rem 0;
                    border-top: 1px solid map-get($colors, gray-line);
                    border-bottom: 1px solid map-get($colors, gray-line);

                    > h3 {
                        @include typo('heading', 32);
    
                        margin-bottom: 0.8rem;
                    }
    
                    > h4 {
                        @include typo('body', 20);
    
                        margin-bottom: 1rem;
                    }
    
                    > a {
                        @include typo('body', 16);
    
                        color: map-get($colors, brand-3);
                        cursor: pointer;

                        > span {
                            transition: margin-left .3s ease-in-out;
                        }

                        @include media-breakpoint-up(medium) {
                            &:hover {
                                span {
                                    margin-left: .8rem;
                                }
                            }
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
            margin-bottom: 4rem;

            @include media-breakpoint-up(medium) {
                display: none;
            }

            &-wrapper {
                display: flex;

                &-slide {
                    @include size(27.2rem, auto);

                    > figure {
                        @include size(100%, auto);
                        @include aspect(1.18);

                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;

                        > img {
                            @include size(100%);

                            position: absolute;
                            object-fit: cover;
                        }
                    }

                    &-info {
                        padding: .8rem 0;
                        border-top: 1px solid map-get($colors, gray-line);
                        border-bottom: 1px solid map-get($colors, gray-line);

                        > h3 {
                            @include typo('heading', 32);
        
                            margin-bottom: 0.8rem;
                        }
        
                        > h4 {
                            @include typo('body', 20);
        
                            margin-bottom: 1rem;
                        }
        
                        > a {
                            @include typo('body', 16);
        
                            color: map-get($colors, brand-3);
                            cursor: pointer;

                            > span {
                                transition: margin-left .3s ease-in-out;
                            }

                            @include media-breakpoint-up(medium) {
                                &:hover {
                                    span {
                                        margin-left: .8rem;
                                    }
                                }
                            }
                        }
                    }
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

        &__btn {
            @include typo('body', 20);

            padding: 0.8rem 3.2rem;
            color: map-get($colors, brand-3);
            border-radius: 8rem;
            border: 1px solid map-get($colors, brand-3);
            transition: background-color .3s ease-in-out, color .3s ease-in-out;

            @include media-breakpoint-down(medium) {
                @include typo('body', 16);

                padding: 0.4rem 3.2rem;
            }

            @include media-breakpoint-up(medium) {
                &:hover {
                    background-color: map-get($colors, brand-3);
                    color: map-get($colors, white);
                }
            }
        }
    }
</style>