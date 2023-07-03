<template>
    <div class="page-rooms">
        <div class="container">
            <div class="page-rooms__wrap">
               <div class="page-rooms__wrap-title">
                    <h1>房型一覽</h1>
                    <span>ROOMS</span>
               </div>
               <div class="page-rooms__wrap-cate">
                    <div
                        class="btn"
                        :class="{'-active': roomType === 'all'}"
                        @click="roomType = 'all'"
                    >
                        所有房型
                    </div>
                    <div
                        v-if="pagePage?.twins?.title.title"
                        class="btn"
                        :class="{'-active': roomType === 'twins'}"
                        @click="roomType = 'twins'"
                    >
                        {{ pagePage?.twins?.title.title }}
                    </div>
                    <div
                        v-if="pagePage?.triple?.title.title"
                        class="btn"
                        :class="{'-active': roomType === 'triple'}"
                        @click="roomType = 'triple'"
                    >
                        {{ pagePage?.triple?.title.title }}
                    </div>
                    <div
                        v-if="pagePage?.quadruple?.title.title"
                        class="btn"
                        :class="{'-active': roomType === 'quadruple'}"
                        @click="roomType = 'quadruple'"
                    >
                        {{ pagePage?.quadruple?.title.title }}
                    </div>
               </div>
            </div>
        </div>
        <div class="page-rooms__wrap__room">
            <div class="container">
                <!-- 雙人房 -->
                <div 
                    class="page-rooms__wrap__room__list"
                    v-if="pagePage?.twins?.rooms.length && roomType === 'all' || roomType === 'twins'"
                >
                    <div class="page-rooms__wrap__room__list-title">
                        <span class="-en" v-if="pagePage?.twins?.title.deco_title">
                            {{ pagePage?.twins?.title.deco_title }}
                        </span>
                        <h3 v-if="pagePage?.twins?.title.title">
                            {{ pagePage?.twins?.title.title }}
                        </h3>
                    </div>
                    <div class="page-rooms__wrap__room__list-item">
                        <ElementsRoomCard 
                            v-for="(room, key) in pagePage?.twins?.rooms"
                            :key="key"
                            v-inview
                            v-fade
                            :data="room" 
                        />
                    </div>
                    <div
                        class="page-rooms__wrap__swiper"
                        ref="twinsSwiperRef"
                    >
                        <div class="page-rooms__wrap__swiper-wrapper swiper-wrapper">
                            <div
                                class="page-rooms__wrap__swiper-slide swiper-slide"
                                v-for="(room, key) in pagePage?.twins?.rooms"
                                :key="key"
                            >
                                <ElementsRoomCard
                                    v-inview
                                    v-fade
                                    :data="room" 
                                />
                            </div>
                        </div>
                        <div class="page-rooms__wrap__swiper-navigation">
                            <div
                                class="page-rooms__wrap__swiper-navigation-prev"
                                @click="swiper.slidePrev()"
                            >
                                <nuxt-icon name="arrow_right"/>
                            </div>
                            <div class="page-rooms__wrap__swiper-navigation-text">
                                <span v-text="twinsSwiperIndex + 1"></span>
                                <span>/</span>
                                <span v-text="pagePage?.twins?.rooms.length"></span>
                            </div>
                            <div
                                class="page-rooms__wrap__swiper-navigation-next"
                                @click="swiper.slideNext()"
                            >
                                <nuxt-icon name="arrow_right"/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 三人房 -->
                <div 
                    class="page-rooms__wrap__room__list"
                    v-if="pagePage?.triple?.rooms.length && roomType === 'all' || roomType === 'triple'"
                >
                    <div class="page-rooms__wrap__room__list-title">
                        <span class="-en" v-if="pagePage?.triple?.title.deco_title">
                            {{ pagePage?.triple?.title.deco_title }}
                        </span>
                        <h3 v-if="pagePage?.triple?.title.title">
                            {{ pagePage?.triple?.title.title }}
                        </h3>
                    </div>
                    <div class="page-rooms__wrap__room__list-item">
                        <ElementsRoomCard 
                            v-for="(room, key) in pagePage?.triple?.rooms"
                            :key="key"
                            v-inview
                            v-fade
                            :data="room" 
                        />
                    </div>
                    <div
                        class="page-rooms__wrap__swiper"
                        ref="tripleSwiperRef"
                    >
                        <div class="page-rooms__wrap__swiper-wrapper swiper-wrapper">
                            <div
                                class="page-rooms__wrap__swiper-slide swiper-slide"
                                v-for="(room, key) in pagePage?.triple?.rooms"
                                :key="key"
                            >
                                <ElementsRoomCard
                                    v-inview
                                    v-fade
                                    :data="room" 
                                />
                            </div>
                        </div>
                        <div class="page-rooms__wrap__swiper-navigation">
                            <div
                                class="page-rooms__wrap__swiper-navigation-prev"
                                @click="swiper.slidePrev()"
                            >
                                <nuxt-icon name="arrow_right"/>
                            </div>
                            <div class="page-rooms__wrap__swiper-navigation-text">
                                <span v-text="tripleSwiperIndex + 1"></span>
                                <span>/</span>
                                <span v-text="pagePage?.triple?.rooms.length"></span>
                            </div>
                            <div
                                class="page-rooms__wrap__swiper-navigation-next"
                                @click="swiper.slideNext()"
                            >
                                <nuxt-icon name="arrow_right"/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 四人房 -->
                <div 
                    class="page-rooms__wrap__room__list"
                    v-if="pagePage?.quadruple?.rooms.length && roomType === 'all' || roomType === 'quad'"
                >
                    <div class="page-rooms__wrap__room__list-title">
                        <span class="-en" v-if="pagePage?.quadruple?.title.deco_title">
                            {{ pagePage?.quadruple?.title.deco_title }}
                        </span>
                        <h3 v-if="pagePage?.quadruple?.title.title">
                            {{ pagePage?.quadruple?.title.title }}
                        </h3>
                    </div>
                    <div class="page-rooms__wrap__room__list-item">
                        <ElementsRoomCard 
                            v-for="(room, key) in pagePage?.quadruple?.rooms"
                            :key="key"
                            v-inview
                            v-fade
                            :data="room" 
                        />
                    </div>
                    <div
                        class="page-rooms__wrap__swiper"
                        ref="quadrupleSwiperRef"
                    >
                        <div class="page-rooms__wrap__swiper-wrapper swiper-wrapper">
                            <div
                                class="page-rooms__wrap__swiper-slide swiper-slide"
                                v-for="(room, key) in pagePage?.quadruple?.rooms"
                                :key="key"
                            >
                                <ElementsRoomCard
                                    v-inview
                                    v-fade
                                    :data="room" 
                                />
                            </div>
                        </div>
                        <div class="page-rooms__wrap__swiper-navigation">
                            <div
                                class="page-rooms__wrap__swiper-navigation-prev"
                                @click="swiper.slidePrev()"
                            >
                                <nuxt-icon name="arrow_right"/>
                            </div>
                            <div class="page-rooms__wrap__swiper-navigation-text">
                                <span v-text="quadrupleSwiperIndex + 1"></span>
                                <span>/</span>
                                <span v-text="pagePage?.quadruple?.rooms.length"></span>
                            </div>
                            <div
                                class="page-rooms__wrap__swiper-navigation-next"
                                @click="swiper.slideNext()"
                            >
                                <nuxt-icon name="arrow_right"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <Footer />
    </div>
</template>
<script setup>
    import Swiper from 'swiper/bundle'
    import 'swiper/css'

    const props = defineProps({
        template: {
            type: Object,
            default: {},
        },
    })

    const pageloaded = usePageLoaded()
    // if (pageData.value) {
        pageloaded.value = true
    // } else {
    //     navigateTo('/404')
    // }

    const roomType = ref('all')

    const { data: pagePage } = await useAsyncData(
        'get_page_cate',
        () => $fetch( useRuntimeConfig().apiUrl + '/get_rooms_by_cate', {
            method: 'GET',
        })
    )
    console.log('pagePage', pagePage.value)
    
    const swiper = ref([])

    // twin
    const twinsSwiperRef = ref()
    const twinsSwiperIndex = ref(0)

    // triple
    const tripleSwiperRef = ref()
    const tripleSwiperIndex = ref(0)

    // quadruple
    const quadrupleSwiperRef = ref()
    const quadrupleSwiperIndex = ref(0)

    onMounted(() => {
        swiper.value.push(new Swiper(twinsSwiperRef.value, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            on: {
                slideChangeTransitionEnd: function () {
                    twinsSwiperIndex.value = this.realIndex
                },
            },
        }))
        swiper.value.push(new Swiper(tripleSwiperRef.value, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            on: {
                slideChangeTransitionEnd: function () {
                    tripleSwiperIndex.value = this.realIndex
                },
            },
        }))
        swiper.value.push(new Swiper(quadrupleSwiperRef.value, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            on: {
                slideChangeTransitionEnd: function () {
                    quadrupleSwiperIndex.value = this.realIndex
                },
            },
        }))
    })
</script>
<style lang="scss">
    $class-name: page-rooms;
    .#{$class-name} {
        &__wrap {
            padding: 5rem 0;

            @include media-breakpoint-down(medium) {
                padding: 0;
                margin-top: 6.4rem;
                margin-bottom: 4rem;
                overflow: hidden;
            }

            &-title {

                text-align: center;

                @include media-breakpoint-down(medium) {
                    margin-bottom: 4rem;
                }

                h1 {
                    @include typo('heading', 32);

                    padding: 0 0 1rem;

                    @include media-breakpoint-down(medium) {
                        @include typo('body', 20);
                    }
                }

                span {
                    @include typo('display', 140);

                    @include media-breakpoint-down(medium) {
                        @include typo('heading', 48);
                    }
                }
            }

            &-cate {
                display: flex;
                justify-content: center;
                gap: 2rem;
                padding: 5rem 0;

                @include media-breakpoint-down(medium) {
                    flex-wrap: wrap;
                    padding: 0;
                }

                > .btn {
                    @include typo('body', 20);

                    padding: 0.8rem 3.2rem;
                    color: map-get($colors, brand-3);
                    border-radius: 8rem;
                    border: 1px solid map-get($colors, brand-3);
                    transition: background-color .3s ease-in-out, color .3s ease-in-out;
                    cursor: pointer;

                    &.-active {
                        background-color: map-get($colors, brand-1);
                        color: map-get($colors, white);
                    }

                    @include media-breakpoint-up(medium) {
                        &:hover {
                            background-color: map-get($colors, brand-3);
                            color: map-get($colors, white);
                        }
                    }

                    @include media-breakpoint-down(medium) {
                        @include typo('body', 16);
                    }
                }
            }

            &__room {
                background-color: map-get($colors, white);

                @include media-breakpoint-down(medium) {
                    background-color: transparent;
                    overflow: hidden;
                }

                &__list {
                    padding: 5rem 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    @include media-breakpoint-down(medium) {
                        padding: 0;
                        margin-bottom: 8rem;
                    }

                    &-item {
                        @include set-col(10, 12, 0);

                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;

                        .elements-room-card {
                            &:not(:last-child) {
                                margin-right: 4rem;
                            }
                        }

                        @include media-breakpoint-down(medium) {
                            display: none;
                        }
                    }

                    &-title {
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
    }
</style>