<template>
    <div class="flexible-half-layout">
        <div
            class="flexible-half-layout__block"
            v-for="(item, key) in data?.block"
            :key="key"
        >
            <figure>
                <img
                    :src="item.image.url"
                    :alt="item.image.alt"
                >
            </figure>
            <div class="flexible-half-layout__block-content">
                <h3
                    v-if="item?.title"
                    v-text="item?.title"
                    v-inview
                    v-fade
                ></h3>
                <span v-if="item?.deco_title">
                    <ElementsDecoTitle
                        :data="item?.deco_title"
                        :small="true"
                        :center="true"
                    />
                </span>
                <span
                    v-else
                    v-text="key + 1 > 9 ? key + 1 : `0${key + 1}`"
                    v-inview
                    v-fade
                    class="-en"
                ></span>
                <p
                    v-if="item?.des"
                    v-text="item?.des"
                    v-inview
                    v-fade
                ></p>
                <figure
                    v-inview
                    v-fade
                    v-if="item?.s_img"
                >
                    <img
                        :src="item?.s_img.url"
                        :alt="item?.s_img.alt"
                    >
                </figure>
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
</script>
<style lang="scss">
    $class-name: flexible-half-layout;
    .#{$class-name} {
        @include size(100%, auto);

        display: flex;
        flex-direction: column;

        &__block {
            display: flex;

            @include media-breakpoint-down(medium) {
                flex-direction: column-reverse;
            }

            &:nth-child(even) {
                flex-direction: row-reverse;

                @include media-breakpoint-down(medium) {
                    flex-direction: column-reverse;
                }
            }

            > figure {
                @include size(50vw);

                @include media-breakpoint-down(medium) {
                    @include size(100%, auto);
                }
    
                > img {
                    @include size(100%);
    
                    object-fit: cover;
                }
            }

            &-content {
                @include size(50vw, auto);

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                @include media-breakpoint-down(medium) {
                    @include size(100%, auto);

                    padding-top: 6.4rem;
                    margin-bottom: 1.2rem;
                }

                > h3 {
                    @include typo('body', 20);

                    margin-bottom: 2.4rem;
                    max-width: 22vw;

                    @include media-breakpoint-down(medium) {
                        max-width: 100%;
                    }
                }

                > span {
                    @include typo('heading', 48);

                    margin-bottom: 2.4rem;
                    color: map-get($colors, brand-3);

                    @include media-breakpoint-down(medium) {
                        @include typo('heading', 32);
                    }
                }

                > p {
                    @include typo('body', 16);

                    white-space: pre-line;
                    text-align: center;
                    margin-bottom: 5.2rem;
                    max-width: 22vw;

                    @include media-breakpoint-down(medium) {
                        padding: 0 map-get($container-padding, mobile);
                        max-width: 100%;
                    }
                }

                > figure {
                    @include set-col(3.5, 6, 1);
                    @include aspect(0.35);

                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    @include media-breakpoint-down(medium) {
                        @include size(100%, auto);
                    }

                    > img {
                        @include size(100%);

                        position: absolute;
                        object-fit: cover;
                    }
                }
            }
        }
    }
</style>