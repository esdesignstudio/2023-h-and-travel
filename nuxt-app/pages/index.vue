<template>
    <div class="page-index">
        <div class="page-index__kv">
            <ElementsKeyVisual
                :data="pageData?.data?.key_visual"
            />
        </div>
        <section
            class="page-index__flex"
            v-for="(flex, key) in pageData?.data?.flex"
            :key="key"
            :class="{isbg: flex.acf_fc_layout === 'ig_show'}"
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

    const { data: pageData } = await useAsyncData(
        'get_page_home',
        () => $fetch( useRuntimeConfig().apiUrl + '/get_page_custom', {
            method: 'POST',
            body: {
                slug: '/',
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

    // const cardRef = ref([])
    // const cardLength = ref(0)

    // onMounted(() => {
    //     cardLength.value = cardRef.value.length
    //     cardRef.value.forEach((el, i) => {
    //         if (i > 0) {
    //             el.style.marginTop = - 100 * (cardLength.value - i) + 'vh'
    //         }
    //         el.style.height = 100 * (cardLength.value - i) + 'vh'
    //     })
    // })
</script>
<style lang="scss">
    $class-name: page-index;
    .#{$class-name} {
        &__kv {
            @include size(100%, auto);
            z-index: 2;
            position: relative;
            background-color: map-get($colors, brand-2);
        }

        &__flex {
            z-index: 1;
            position: relative;
            display: flex;
            flex-direction: column;
            background-color: map-get($colors, brand-2);


            &.isbg {
                z-index: 0;
            }

            &-full {
                @include size(100%, auto);

                display: flex;
                flex-direction: column;
                
                &-cards {
                    &-sticky {
                        position: sticky;
                        top: map-get($header-height, desktop);
                    }
                }
            }
        }
    }
</style>