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
            <ElementsCarousel :data="pageData.data?.key_visual?.slider" />
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
            text-align:center;
            
            h1 {
                @include typo('heading', 64);

                padding: 0 0 1rem;
            }

            .deco {
                @include typo('heading', 32);

                color: map-get($colors, brand-3);
            }
        }
    }
</style>