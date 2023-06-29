<template>
    <div class="rooms-sigle">
        <div class="rooms-sigle__wrap">
            <div class="container">
                <h1 v-if="pageData.data?.post?.post_title">
                    {{ pageData.data?.post?.post_title }}
                </h1>
                <span class="deco -en" v-if="pageData.data?.key_visual?.deco_title">
                    {{ pageData.data?.key_visual?.deco_title }}
                </span>
            </div>
            <ElementsCarousel v-if="pageData.data?.key_visual?.slider" :data="pageData.data?.key_visual?.slider" />
            <div class="container">
                <div class="rooms-sigle__wrap__hero">
                    <div 
                        v-if="pageData.data?.key_visual?.description" 
                        v-html="pageData.data?.key_visual?.description"
                        v-inview
                        v-fade
                    />
                    <nuxt-link
                        v-if="pageData.data?.key_visual?.link"
                        class="rooms-sigle__wrap__hero__btn"
                        :to="pageData.data?.key_visual?.link.url"
                        v-inview
                        v-fade
                        :target="pageData.data?.key_visual?.link.target"
                    >
                        {{ pageData.data?.key_visual?.link.title }}
                    </nuxt-link>
                </div>
            </div>
            <FlexibleRoomFacilities :data="pageData.data?.room_settings" />
            <FlexibleTitleDouble :data="pageData.data?.checkin_list"/>
            <!-- <div class="container">
                <div class="rooms-sigle__wrap__paragragh">
                    <div class="rooms-sigle__wrap__paragragh-title">
                        <h4 v-inview v-fade>入住須知</h4>
                        <span v-inview v-fade>INFORMATION</span>
                    </div>
                    <div class="rooms-sigle__wrap__paragragh__inner">
                        <div v-html="pageData.data?.checkin_list" />
                    </div>
                </div>
            </div> -->
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

    const route = useRoute()

    const { data: pageData } = await useAsyncData(
        'get_page_rooms_slug' + route.params.slug,
        () => $fetch( useRuntimeConfig().apiUrl + '/get_single_room', {
            method: 'POST',
            body: {
                slug: route.params.slug,
            }
        })
    )

    const pageloaded = usePageLoaded()
    if (pageData.value) {
        pageloaded.value = true
    } else {
        navigateTo('/404')
    }

    console.log('pageData', pageData.value)
</script>
<style lang="scss">
    $class-name: rooms-sigle;
    .#{$class-name} {
        &__wrap {
            padding: 5rem 0;

            .container {
                > h1 {
                    @include typo('heading', 64);
    
                    padding: 0 0 1rem;
                }
            }
            

            .deco {
                @include typo('heading', 32);

                color: map-get($colors, brand-3);
            }

            &__hero {
                padding: 8rem 0;
                text-align:center;

                > div {
                    padding: 0 0 2rem;
                }

                &__btn {
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

            &__paragragh {
                @include editor-setting;

                padding: 8rem 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                &-title {
                    text-align: left;
                    padding: 8rem 0;

                    h4 {
                        @include typo('heading', 32);

                        padding: 0 0 1rem 0;
                    }

                    span {
                        @include typo('display', 140);
                    }
                }

                &__inner {
                    @include set-col(6, 12, 0);


                }
            }
        }
    }
</style>