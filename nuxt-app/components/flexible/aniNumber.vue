<template>
    <div class="flexible-ani-number">
        <p v-text="data?.title"></p>
        <h2 v-text="data?.deco_title"></h2>
        <div class="flexible-ani-number__row">
            <div
                class="flexible-ani-number__row-item"
                v-for="(item, key) in data?.number"
                :key="key"
            >
                <figure>
                    <img
                        :src="item.logo_img.url"
                        :alt="item.logo_img.alt"
                    />
                </figure>
                <span
                    v-text="item?.num"
                    :ref="el => numberRef[key] = el"
                ></span>
                <p v-text="item?.des"></p>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { gsap } from 'gsap'

    const props = defineProps({
        data: {
            type: Object,
            default: {},
        },
    })

    const numberRef = ref([])

    onMounted(() => {
        numberRef.value.forEach((item, key) => {
            gsap.fromTo(item, {
                innerHTML: 0,
            }, {
                innerHTML: props.data.number[key].num,
                roundProps: {
                    'innerHTML': 0.1
                },
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                }
            })
        })
        
    })
</script>
<style lang="scss">
    $class-name: flexible-ani-number;
    .#{$class-name} {
        @include size(100%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > p {
            @include typo('heading', 32);

            margin-bottom: 2rem;
        }

        > h2 {
            @include typo('heading', 48);

            margin-bottom: 7.2rem;
        }

        &__row {
            display: flex;
            justify-content: center;

            &-item {
                display: flex;
                flex-direction: column;
                align-items: center;

                &:not(:last-child) {
                    margin-right: 14.4rem;
                }

                > figure {
                    @include size(auto, 3.6rem);

                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    > img {
                        @include size(auto, 100%);
                    }
                }

                > span {
                    @include typo('display', 180);

                    margin-top: 3.2rem;
                    margin-bottom: 3.2rem;
                    color: map-get($colors, brand-3);
                }

                > p {
                    @include typo('body', 20);
                }
            }
        }
    }
</style>