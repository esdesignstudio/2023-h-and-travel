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
                        v-for="(item, key) in pageData"
                        :key="key"
                        class="btn"
                        :class="{'-active': roomType === key}"
                        @click="roomType = key"
                    >
                        {{ item?.title.title }}
                    </div>
               </div>
            </div>
        </div>
        <div class="page-rooms__wrap__room">
            <div class="container">
                <transition-group name="list">
                    <div
                        v-for="(item, key) in pageData"
                        :key="key"    
                    >
                        <ElementsRoomList
                            v-if="roomType === 'all' || roomType === key"
                            :data="item"
                        />
                    </div>
                </transition-group>
            </div>    
        </div>
        <Footer />
    </div>
</template>
<script setup>
    const route = useRoute()
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
    // console.log('pageData', pageData.value)

    onMounted(() => {
        nextTick(() => {
            route.query.roomType && (roomType.value = route.query.roomType)
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
            }
        }
    }
</style>