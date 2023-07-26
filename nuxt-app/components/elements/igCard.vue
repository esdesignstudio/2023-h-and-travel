<template>
    <nuxt-link
        class="elements-ig-card"
        :to="data?.url"
        target="_blank"
    >
        <div class="elements-ig-card__top">
            <figure>
                <img
                    :src="data?.user_img?.url"
                    :alt="data?.user_img?.alt"
                />
            </figure>
            <p v-text="data?.user_name"></p>
            <div class="elements-ig-card__top-dot">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <figure>
            <img
                :src="data?.image?.url"
                :alt="data?.image?.alt"
            />
        </figure>
        <div class="elements-ig-card__bottom">
            <div class="elements-ig-card__bottom-top">
                <nuxt-icon name="heart" />
                <nuxt-icon name="comment" />
                <nuxt-icon name="share" />
                <nuxt-icon name="save" />
            </div>
            <p v-text="`${data.like} likes`"></p>
            <span>
                <p v-text="data.text"></p>
                <p>...more</p>
            </span>
            <p v-text="data.s_text"></p>
        </div>
    </nuxt-link>
</template>
<script setup>
    const props = defineProps({
        data: {
            type: Object,
            default: {},
        },
    })

    console.log(props.data)
</script>
<style lang="scss">
    $class-name: elements-ig-card;
    .#{$class-name} {
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease-in-out;

        @include media-breakpoint-up(medium) {
            &:hover {
                transform: scale(1.05);
            }
        }

        &__top {
            display: flex;
            align-items: center;
            padding: 1.6rem 1.6rem 1.2rem;
            background-color: map-get($colors, white);
            color: map-get($colors, black-1);

            > figure {
                @include size(2.4rem);

                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                border-radius: 50%;

                > img {
                    @include size(100%);

                    position: absolute;
                    object-fit: cover
                }
            }

            > p {
                @include typo('small', 12);

                margin-left: 1.2rem;
            }

            > span {
                @include size(.2rem);

                display: flex;
                border-radius: 50%;
                margin-left: auto;
                background-color: map-get($colors, black-1);

                &::before, &::after {
                    @include size(.2rem);

                    content: '';

                    display: flex;
                    flex: 0 0 auto;
                    border-radius: 50%;
                    background-color: map-get($colors, black-1);
                    margin: 0 0.2rem;
                }
            }

            &-dot {
                display: flex;
                margin-left: auto;

                > span {
                    @include size(.2rem);

                    border-radius: 50%;
                    background-color: map-get($colors, black-1);

                    &:nth-child(2) {
                        margin: 0 .2rem;
                    }
                }
            }
        }

        > figure {
            @include size(100%, auto);
            @include aspect(1.05);

            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            > img {
                @include size(100%);

                position: absolute;
                object-fit: cover;
            }
        }

        &__bottom {
            color: map-get($colors, black-1);
            padding: 1.2rem 1.6rem 1.6rem;
            background-color: map-get($colors, white);
            margin-bottom: 0.6rem;

            &-top {
                display: flex;
                margin-bottom: 0.6rem;

                > span {
                    &:last-child {
                        margin-left: auto;
                    }
                }
            }

            > p {
                @include typo('small', 12);
                
                &:not(:last-child) {
                    margin-bottom: 0.6rem;
                }

                // &:nth-child(3) {
                //     &::after {
                //         content: ' ...more';
                //         color: map-get($colors, gray-2);
                //     }
                // }

                &:last-child {
                    color: map-get($colors, gray-2);
                }
            }

            > span {
                @include size(100%, auto);
                display: flex;

                > p {
                    @include typo('small', 12);

                    &:first-child {
                        @include text-ellipsis(1);

                        flex: 1;
                    }

                    &:last-child {
                        color: map-get($colors, gray-2);

                        margin-left: 1rem;
                        flex:  0 0 auto;
                    }
                }
            }
        }
    }
</style>