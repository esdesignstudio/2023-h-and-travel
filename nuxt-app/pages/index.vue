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
        >
            <div
                class="page-index__flex-full"
                v-if="flex.acf_fc_layout === 'full_cards'"
            >
                <div
                    class="page-index__flex-full-cards" 
                    v-for="(item, key) in flex.cards"
                    :key="key"
                    :ref="el => cardRef[key] = el"
                >
                    <div class="page-index__flex-full-cards-sticky">
                        <FlexibleFullCards
                            :data="item"
                        />
                    </div>
                </div>
            </div>
            <div
                class="page-index__flex-number"
                v-if="flex.acf_fc_layout === 'ani_number'"
            >
                <FlexibleAniNumber
                    :data="flex"
                />
            </div>
            <div
                class="page-index__flex-ig"
                v-if="flex.acf_fc_layout === 'ig_show'"
            >
                <FlexibleIgShow
                    :data="flex"
                />
            </div>
            <div
                class="page-index__flex-room"
                v-if="flex.acf_fc_layout === 'room_show'"
            >
                <FlexibleRoomShow
                    :data="flex"
                />
            </div>
            <div
                class="page-index__flex-slider"
                v-if="flex.acf_fc_layout === 'big_slider'"
            >
                <FlexibleBigSlider
                    :data="flex"
                />
            </div>
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

    const cardRef = ref([])
    const cardLength = ref(0)

    onMounted(() => {
        cardLength.value = cardRef.value.length
        cardRef.value.forEach((el, i) => {
            if (i > 0) {
                el.style.marginTop = - 100 * (cardLength.value - i) + 'vh'
            }
            el.style.height = 100 * (cardLength.value - i) + 'vh'
        })
    })
</script>
<style lang="scss">
    $class-name: page-index;
    .#{$class-name} {
        &__kv {
            @include size(100%, auto);
        }

        &__flex {
            display: flex;
            flex-direction: column;

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

            &-number {
                @include size(100%, calc(100vh - map-get($header-height, desktop)));
            }
        }

        &__ig {
            @include size(100%, auto);
        }
    }
</style>