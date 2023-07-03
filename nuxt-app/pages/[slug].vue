<template>
    <div class="page-slug">
        <div class="page-slug__kv">
            <ElementsKeyVisual
                :data="pageData?.data?.key_visual"
            />
        </div>
        <section
            class="page-slug__flex"
            v-for="(flex, key) in pageData?.data?.flex"
            :key="key"
        >
            <FlexibleFullCards
                v-if="flex.acf_fc_layout === 'full_cards'"
                :data="flex"
            />
            <FlexibleAniNumber
                v-if="flex.acf_fc_layout === 'ani_number'"
                :data="flex"
            />
            <FlexibleIgShow
                v-if="flex.acf_fc_layout === 'ig_show'"
                :data="flex"
            />
            <FlexibleRoomShow
                v-if="flex.acf_fc_layout === 'room_show'"
                :data="flex"
            />
            <FlexibleBigSlider
                v-if="flex.acf_fc_layout === 'big_slider'"
                :data="flex"
            />
            <FlexibleHalfLayout
                v-if="flex.acf_fc_layout === 'half_layout'"
                :data="flex"
            />
            <FlexibleTitleBigImg
                v-if="flex.acf_fc_layout === 'title_big_img'"
                :data="flex"
            />
            <FlexibleFullBg
                v-if="flex.acf_fc_layout === 'full_bg'"
                :data="flex"
            />
            <FlexibleTitleDouble
                v-if="flex.acf_fc_layout === 'title_double'"
                :data="flex"
            />
        </section>
        <Footer />
    </div>
</template>
<script setup>
    const route = useRoute()
    const { data: pageData } = await useAsyncData(
        'get_page_custom',
        () => $fetch( useRuntimeConfig().apiUrl + '/get_page_custom', {
            method: 'POST',
            body: {
                slug: route.params.slug,
            }
        })
    )

    console.log('pageData', pageData.value);

    const pageloaded = usePageLoaded()
    if (pageData.value) {
        pageloaded.value = true
    } else {
        navigateTo('/404')
    }

    // Meta
    useHead({
        title: pageData?.value?.data?.data?.og_title,
        meta: [
            { property: 'og:locale', content: 'zh' },
            { name: 'description', content: pageData?.value?.data?.meta_description },
            { hid: 'og:title', property: 'og:title', content: pageData?.value?.data?.og_title },
            { hid: 'og:description', property: 'og:description', content: pageData?.value?.data?.meta_description },
            { hid: 'og:image', property: 'og:image', content: pageData?.value?.data.og_image?.url },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
        ],
    })
</script>
<style lang="scss">
    $class-name: page-slug;
    .#{$class-name} {
        &__kv {
            @include size(100%, auto);
        }

        &__flex {
            display: flex;
            flex-direction: column;
        }
    }
</style>