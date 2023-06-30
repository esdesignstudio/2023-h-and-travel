<template>
    <div class="flexible-full-cards">
        <div
            class="flexible-full-cards-item" 
            v-for="(item, key) in data.cards"
            :key="key"
            :ref="el => cardRef[key] = el"
        >
            <div class="flexible-full-cards-item-sticky">
                <ElementsFullCards
                    :data="item"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        data: {
            type: Object,
            default: {},
        },
    })

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
    $class-name: flexible-full-cards;
    .#{$class-name} {
        @include size(100%, auto);

        display: flex;
        flex-direction: column;
        
        &-item {
            &-sticky {
                position: sticky;
                top: map-get($header-height, desktop);

                @include media-breakpoint-down(medium) {
                    top: map-get($header-height, mobile);
                }
            }
        }
    }
</style>