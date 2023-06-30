<template>
    <div
        class="elements-key-visual"
        ref="keyVisualRef"
    >
        <div
            class="elements-key-visual__typea"
            v-if="data?.style == 'a'"
        >
            <h2 v-text="data?.title"></h2>
            <div class="elements-key-visual__typea-title">
                <ElementsDecoTitle
                    :data="data?.deco_title"
                    :hero="true"
                    :center="true"
                />
            </div>
            <div class="elements-key-visual__typea-icon">
                <nuxt-icon name="arrow_down" />
            </div>
            <div
                class="elements-key-visual__typea-img"
                ref="imgRef"
            >
                <figure>
                    <img
                        :src="data?.image?.url"
                        :alt="data?.image?.alt"
                    />
                </figure>
            </div>
        </div>
        <div
            class="elements-key-visual__typeb"
            v-else
        >
            <h2 v-text="data?.title"></h2>
            <div class="elements-key-visual__typeb-title">
                <ElementsDecoTitle
                    :data="data?.deco_title"
                    :hero="true"
                    :center="true"
                />
            </div>
            <figure class="elements-key-visual__typeb-bg">
                <img
                    :src="data?.image?.url"
                    :alt="data?.image?.alt"
                />
            </figure>
        </div>
    </div>
</template>
<script setup>
    import { gsap } from 'gsap'
    import ScrollTrigger from 'gsap/ScrollTrigger'

    const viewport = useViewport()
    const props = defineProps({
        data: {
            type: Object,
            default: {},
        },
    })

    const keyVisualRef = ref(null)
    const imgRef = ref(null)

    console.log(viewport.value.isDesktop)

    onMounted(() => {
        if (props.data.style === 'a') {
            gsap.registerPlugin(ScrollTrigger)
    
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: imgRef.value,
                    start: 'top center',
                    end: `bottom+=${window.innerHeight} center`,
                    scrub: true,
                    anticipatePin: 1,
                    // markers: true,
                }
            })
    
            tl.to(imgRef.value, {
                width: window.innerWidth,
                height: viewport.value.isDesktop ? 'calc(100vh - 84px)' : 'calc(100vh - 64px)',
            })
        }
    })
</script>
<style lang="scss">
    $class-name: elements-key-visual;
    .#{$class-name} {
        &__typea {
            @include size(100%, 250vh);

            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 8rem;
            
            > h2 {
                @include typo('heading', 32);
    
                margin-bottom: 2.4rem;
                z-index: 1;

                @include media-breakpoint-down(medium) {
                    @include typo('body', 20);
                }
            }
    
            &-title {
                @include size(100%, auto);
    
                margin-bottom: 5.2rem;
                z-index: 1;
            }
    
            &-icon {
                @include size(4.5rem, auto);
    
                z-index: 1;
    
                > span {
                    @include size(100%, auto);
    
                    > svg {
                        @include size(100%, auto);
                    }
                }
            }
    
            &-img {
                @include size(calc((100vw - (2 * map-get($container-padding, desktop)) - (11 * $grid-gutter-width)) / 12 * 4 + (3 * $grid-gutter-width)), auto);
    
                position: sticky;
                display: flex;
                justify-content: center;
                max-width: none !important;
                top: map-get($header-height, desktop);
                margin-top: -20rem;

                @include media-breakpoint-down(medium) {
                    top: map-get($header-height, mobile);
                }
    
                > figure {
                    @include size(100%);
                    @include aspect(1.32);
    
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
    
                    > img {
                        @include size(100%);
                        
                        object-fit: cover;
                    }
                }
            }
        }

        &__typeb {
            @include size(100%, calc(100vh - map-get($header-height, desktop)));

            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: map-get($colors, white);

            > h2 {
                @include typo('heading', 32);
    
                margin-bottom: 2.4rem;
                z-index: 1;
            }

            &-title {
                margin-bottom: 5.2rem;
                z-index: 1;
            }

            &-bg {
                @include size(100%);

                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;

                &::after {
                    @include size(100%);

                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: rgba(map-get($colors, black-1), .2);
                }

                > img {
                    @include size(100%);

                    position: absolute;
                    object-fit: cover;
                }
            }
        }
    }
</style>