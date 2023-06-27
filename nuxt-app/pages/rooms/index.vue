<template>
    <div class="page-rooms">
        <div class="container">
            <div class="page-rooms__wrap">
               <div class="page-rooms__wrap-title">
                    <h1>房型一覽</h1>
                    <span>ROOMS</span>
               </div>
               <div class="page-rooms__wrap-cate">
                    <div class="btn">
                        所有房型
                    </div>
                    <div class="btn" v-if="pagePage?.twins?.title.title">
                        {{ pagePage?.twins?.title.title }}
                    </div>
                    <div class="btn" v-if="pagePage?.triple?.title.title">
                        {{ pagePage?.triple?.title.title }}
                    </div>
                    <div class="btn" v-if="pagePage?.twins?.title.title">
                        {{ pagePage?.twins?.title.title }}
                    </div>
               </div>
            </div>
        </div>
        <div class="page-rooms__wrap__room">
            <div class="container">
                <!-- 雙人房 -->
                <div 
                    class="page-rooms__wrap__room__list"
                    v-if="pagePage?.twins"
                >
                    <div class="page-rooms__wrap__room__list-title">
                        <span v-if="pagePage?.twins?.title.deco_title">
                            {{ pagePage?.twins?.title.deco_title }}
                        </span>
                        <h3 v-if="pagePage?.twins?.title.title">
                            {{ pagePage?.twins?.title.title }}
                        </h3>
                    </div>
                    <div
                        class="page-rooms__wrap__room__list-item"
                        v-for="(room, key) in pagePage?.twins?.rooms"
                        :key="key"
                        v-inview
                        v-fade
                    >
                        <ElementsRoomCard 
                            :data="room" 
                        />
                    </div>
                </div>

                <!-- 三人房 -->
                <div 
                    class="page-rooms__wrap__room__list"
                    v-if="pagePage?.triple"
                >
                    <div class="page-rooms__wrap__room__list-title">
                        <span v-if="pagePage?.triple?.title.deco_title">
                            {{ pagePage?.triple?.title.deco_title }}
                        </span>
                        <h3 v-if="pagePage?.triple?.title.title">
                            {{ pagePage?.triple?.title.title }}
                        </h3>
                    </div>
                    <div
                        class="page-rooms__wrap__room__list-item"
                        v-for="(room, key) in pagePage?.triple?.rooms"
                        :key="key"
                        v-inview
                        v-fade
                    >
                        <ElementsRoomCard 
                            :data="room" 
                        />
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>
<script setup>
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

    const { data: pagePage } = await useAsyncData(
        'get_page_cate',
        () => $fetch( useRuntimeConfig().apiUrl + '/get_rooms_by_cate', {
            method: 'GET',
        })
    )
    console.log('pagePage', pagePage.value)
</script>
<style lang="scss">
    $class-name: page-rooms;
    .#{$class-name} {
        &__wrap {
            padding: 5rem 0;

            &-title {

                text-align: center;

                h1 {
                    @include typo('heading', 64);

                    padding: 0 0 1rem;
                }

                span {
                    @include typo('display', 140);
                }
            }

            &-cate {
                display: flex;
                justify-content: center;
                gap: 2rem;
                padding: 5rem 0;

                > .btn {
                    @include typo('body', 20);

                    padding: 0.8rem 3.2rem;
                    color: map-get($colors, brand-3);
                    border-radius: 8rem;
                    border: 1px solid map-get($colors, brand-3);
                    transition: background-color .3s ease-in-out, color .3s ease-in-out;

                    @include media-breakpoint-up(medium) {
                        &:hover {
                            background-color: map-get($colors, brand-3);
                            color: map-get($colors, white);
                        }
                    }
                }
            }

            &__room {
                background-color: map-get($colors, white);

                &__list {
                    padding: 5rem 0;

                    &-title {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;

                        span {
                            @include typo('heading', 48);
                        }

                        h3 {
                            @include typo('body', 20);
                        }
                    }
                }
            }
        }
    }
</style>