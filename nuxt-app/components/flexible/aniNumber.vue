<template>
    <div class="flexible-ani-number">
        <p
            v-text="data?.title"
            v-inview
            v-fade
        ></p>
        <h2
            v-text="data?.deco_title"
            v-inview
            v-fade
        ></h2>
        <div class="flexible-ani-number__row">
            <div
                class="flexible-ani-number__row-item"
                v-for="(item, key) in data?.number"
                :key="key"
                v-inview
                v-fade
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
                duration: 1.5,
                delay: 0.5,
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
        @include size(100%, calc(100vh - map-get($header-height, desktop)));

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @include media-breakpoint-down(medium) {
            @include size(100%, auto);

            padding: 8rem 0;
        }

        > p {
            @include typo('heading', 32);

            margin-bottom: 2rem;

            @include media-breakpoint-down(medium) {
                @include typo('body', 20);
            }
        }

        > h2 {
            @include typo('heading', 48);

            margin-bottom: 7.2rem;

            @include media-breakpoint-down(medium) {
                margin-bottom: 4rem;
            }
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

                    @include media-breakpoint-down(medium) {
                        margin-right: 1.6rem;
                    }
                }

                > figure {
                    @include size(auto, 3.6rem);

                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    @include media-breakpoint-down(medium) {
                        @include size(auto, 2.5rem);
                    }

                    > img {
                        @include size(auto, 100%);
                    }
                }

                > span {
                    @include typo('display', 180);

                    margin-top: 3.2rem;
                    margin-bottom: 3.2rem;
                    color: map-get($colors, brand-3);

                    @include media-breakpoint-down(medium) {
                        @include typo('display', 60);
                    }
                }

                > p {
                    @include typo('body', 20);

                    @include media-breakpoint-down(medium) {
                        @include typo('body', 16);
                    }
                }
            }
        }
    }
</style>