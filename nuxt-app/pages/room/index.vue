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
                        v-if="pageData?.twins?.title.title"
                        class="btn"
                        :class="{'-active': roomType === 'twins'}"
                        @click="roomType = 'twins'"
                    >
                        {{ pageData?.twins?.title.title }}
                    </div>
                    <div
                        v-if="pageData?.triple?.title.title"
                        class="btn"
                        :class="{'-active': roomType === 'triple'}"
                        @click="roomType = 'triple'"
                    >
                        {{ pageData?.triple?.title.title }}
                    </div>
                    <div
                        v-if="pageData?.quadruple?.title.title"
                        class="btn"
                        :class="{'-active': roomType === 'quadruple'}"
                        @click="roomType = 'quadruple'"
                    >
                        {{ pageData?.quadruple?.title.title }}
                    </div>
               </div>
            </div>
        </div>
        <div class="page-rooms__wrap__room">
            <div class="container">
                <transition-group name="list">
                    <!-- 雙人房 -->
                    <div 
                        class="page-rooms__wrap__room__list"
                        v-if="pageData?.twins?.rooms.length && roomType === 'all' || roomType === 'twins'"
                    >
                        <div class="page-rooms__wrap__room__list-title">
                            <span class="-en" v-if="pageData?.twins?.title.deco_title">
                                {{ pageData?.twins?.title.deco_title }}
                            </span>
                            <h3 v-if="pageData?.twins?.title.title">
                                {{ pageData?.twins?.title.title }}
                            </h3>
                        </div>
                        <div class="page-rooms__wrap__room__list-item">
                            <ElementsRoomCard 
                                v-for="(room, key) in pageData?.twins?.rooms"
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
                                    v-for="(room, key) in pageData?.twins?.rooms"
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
                                    @click="twinsSwiper.slidePrev()"
                                >
                                    <nuxt-icon name="arrow_right"/>
                                </div>
                                <div class="page-rooms__wrap__swiper-navigation-text">
                                    <span v-text="twinsSwiperIndex + 1"></span>
                                    <span>/</span>
                                    <span v-text="pageData?.twins?.rooms.length"></span>
                                </div>
                                <div
                                    class="page-rooms__wrap__swiper-navigation-next"
                                    @click="twinsSwiper.slideNext()"
                                >
                                    <nuxt-icon name="arrow_right"/>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!-- 三人房 -->
                    <div 
                        class="page-rooms__wrap__room__list"
                        v-if="pageData?.triple?.rooms.length && roomType === 'all' || roomType === 'triple'"
                    >
                        <div class="page-rooms__wrap__room__list-title">
                            <span class="-en" v-if="pageData?.triple?.title.deco_title">
                                {{ pageData?.triple?.title.deco_title }}
                            </span>
                            <h3 v-if="pageData?.triple?.title.title">
                                {{ pageData?.triple?.title.title }}
                            </h3>
                        </div>
                        <div class="page-rooms__wrap__room__list-item">
                            <ElementsRoomCard 
                                v-for="(room, key) in pageData?.triple?.rooms"
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
                                    v-for="(room, key) in pageData?.triple?.rooms"
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
                                    @click="tripleSwiper.slidePrev()"
                                >
                                    <nuxt-icon name="arrow_right"/>
                                </div>
                                <div class="page-rooms__wrap__swiper-navigation-text">
                                    <span v-text="tripleSwiperIndex + 1"></span>
                                    <span>/</span>
                                    <span v-text="pageData?.triple?.rooms.length"></span>
                                </div>
                                <div
                                    class="page-rooms__wrap__swiper-navigation-next"
                                    @click="tripleSwiper.slideNext()"
                                >
                                    <nuxt-icon name="arrow_right"/>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!-- 四人房 -->
                    <div 
                        class="page-rooms__wrap__room__list"
                        v-if="pageData?.quadruple?.rooms.length && roomType === 'all' || roomType === 'quad'"
                    >
                        <div class="page-rooms__wrap__room__list-title">
                            <span class="-en" v-if="pageData?.quadruple?.title.deco_title">
                                {{ pageData?.quadruple?.title.deco_title }}
                            </span>
                            <h3 v-if="pageData?.quadruple?.title.title">
                                {{ pageData?.quadruple?.title.title }}
                            </h3>
                        </div>
                        <div class="page-rooms__wrap__room__list-item">
                            <ElementsRoomCard 
                                v-for="(room, key) in pageData?.quadruple?.rooms"
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
                                    v-for="(room, key) in pageData?.quadruple?.rooms"
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
                                    @click="quadrupleSwiper.slidePrev()"
                                >
                                    <nuxt-icon name="arrow_right"/>
                                </div>
                                <div class="page-rooms__wrap__swiper-navigation-text">
                                    <span v-text="quadrupleSwiperIndex + 1"></span>
                                    <span>/</span>
                                    <span v-text="pageData?.quadruple?.rooms.length"></span>
                                </div>
                                <div
                                    class="page-rooms__wrap__swiper-navigation-next"
                                    @click="quadrupleSwiper.slideNext()"
                                >
                                    <nuxt-icon name="arrow_right"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition-group>
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

    const { data: pageData } = await useAsyncData(
        'get_page_cate',
        () => $fetch( useRuntimeConfig().apiUrl + '/get_rooms_by_cate', {
            method: 'GET',
        })
    )
    console.log('pageData', pageData.value)
    
    
    // twins
    const twinsSwiper = ref()
    const twinsSwiperRef = ref()
    const twinsSwiperIndex = ref(0)

    // triple
    const tripleSwiper = ref()
    const tripleSwiperRef = ref()
    const tripleSwiperIndex = ref(0)

    // quadruple
    const quadrupleSwiper = ref()
    const quadrupleSwiperRef = ref()
    const quadrupleSwiperIndex = ref(0)

    watch(() => roomType.value, (val) => {
        nextTick(() => {
            setTimeout(() => {
                twinsSwiper.value = swiperInit(twinsSwiperRef, twinsSwiperIndex);
                tripleSwiper.value = swiperInit(tripleSwiperRef, tripleSwiperIndex);
                quadrupleSwiper.value = swiperInit(quadrupleSwiperRef, quadrupleSwiperIndex);
            }, 1);
        })
    })

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
            twinsSwiper.value = swiperInit(twinsSwiperRef, twinsSwiperIndex)
            tripleSwiper.value = swiperInit(tripleSwiperRef, tripleSwiperIndex)
            quadrupleSwiper.value = swiperInit(quadrupleSwiperRef, quadrupleSwiperIndex)
        })
    })

    // Meta
    useHead({
        title: pageData?.value?.data?.og_title,
        meta: [
            { property: 'og:locale', content: 'zh' },
            { name: 'description', content: pageData?.value?.data?.meta_description },
            { hid: 'og:title', property: 'og:title', content: pageData?.value?.data?.og_title },
            { hid: 'og:description', property: 'og:description', content: pageData?.value?.data?.meta_description },
            { hid: 'og:image', property: 'og:image', content: pageData?.value?.data?.og_image?.url },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
        ],
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