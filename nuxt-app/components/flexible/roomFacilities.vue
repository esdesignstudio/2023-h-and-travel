<template>
    <div class="flexible-room-facilities">
        <div class="flexible-room-facilities__wrap container">
            <div class="flexible-room-facilities__wrap-title">
                <h3 v-if="data?.title">{{ data?.title }}</h3>
                <ElementsDecoTitle class="-en" :data="data?.deco_title"/>
            </div>
            <ul 
                class="flexible-room-facilities__wrap-icons" 
                v-if="data?.icons.length > 0"
                v-inview
                v-fade
            >
                <li 
                    v-for="(icon, iconindex) in data?.icons"
                    :key="iconindex"
                >
                    <figure>
                        <img :src="icon.icon.url" :alt="icon.text">
                    </figure>
                    <span>{{ icon.text }}</span>
                </li>
            </ul>
            <ul class="flexible-room-facilities__wrap-imgs" v-if="data?.setting_imgs.length > 0">
                <li 
                    v-for="(img, imgindex) in data?.setting_imgs"
                    :key="imgindex"
                >
                    <figure>
                        <img :src="img.image.url" :alt="img.text">
                    </figure>
                    <span v-inview v-fade>{{ img.text }}</span>
                </li>
            </ul>
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
    $class-name: flexible-room-facilities;
    .#{$class-name} {
        background-color: map-get($colors, brand-1);

        &__wrap {
            padding-top: 8rem;
            padding-bottom: 8rem;
            color: map-get($colors, white);
            display: flex;
            flex-direction: column;
            align-items: center;

            &-title {
                h3 {
                    @include typo('heading', 32);

                    padding: 0 0 3rem;
                }

                span {
                    @include typo('display', 80);
                }
            }

            &-icons {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 3rem;
                padding: 8rem;

                li {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    figure {
                        @include size(2rem);

                        > img {
                            @include size(100%);
                            
                            object-fit: cover;
                        }
                    }
                }
            }

            &-imgs {
                @include set-col(10, 12, 0);

                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                li {
                    @include set-col(3, 10, 1);

                    margin-bottom: 6.4rem;
                    text-align: left;

                    figure {
                        @include size(100%, auto);
                        @include aspect(1);

                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        margin-bottom: 1.6rem;

                        > img {
                            @include size(100%);

                            position: absolute;
                            object-fit: cover;
                        }
                    }
                }
            }
        }
    }
</style>