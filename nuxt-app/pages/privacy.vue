<template>
    <div class="page-privacy">
        <div class="page-privacy__wrapper container">
            <div v-html="pageData?.data?.post?.post_content"></div>
        </div>
        <Footer />
    </div>
</template>
<script setup>
    const { data: pageData } = await useAsyncData(
        'get_page_custom',
        () => $fetch( useRuntimeConfig().apiUrl + '/get_page_custom', {
            method: 'POST',
            body: {
                slug: 'privacy',
            }
        })
    )

    console.log(pageData.value)

    const pageloaded = usePageLoaded()
    if (pageData.value) {
        pageloaded.value = true
    } else {
        navigateTo('/404')
    }

    // Meta
    useHead({
        title: pageData?.value?.data?.og_title,
        meta: [
            { property: 'og:locale', content: 'zh' },
            { name: 'description', content: pageData?.value?.data?.meta_description },
            { hid: 'og:title', property: 'og:title', content: pageData?.value?.data?.og_title },
            { hid: 'og:description', property: 'og:description', content: pageData?.value?.data?.meta_description },
            { hid: 'og:image', property: 'og:image', content: pageData?.value?.data?.og_image?.url },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
        ],
    })
</script>
<style lang="scss">
    $class-name: page-privacy;
    .#{$class-name} {
        &__wrapper {
            padding-top: 8rem;
            padding-bottom: 8rem;

            @include media-breakpoint-down(medium) {
                padding-top: 4rem;
                padding-bottom: 4rem;
            }

            > div {
                > h1 {
                    @include typo('heading', 32);

                    font-weight: bold;

                    @include media-breakpoint-down(medium) {
                        @include typo('heading', 24);
                    }

                    &:not(:last-child) {
                        margin-bottom: 3.6rem;
                    }
                }

                > h2 {
                    @include typo('heading', 24);

                    font-weight: bold;

                    @include media-breakpoint-down(medium) {
                        @include typo('body', 20);
                    }

                    &:not(:last-child) {
                        margin-bottom: 3.6rem;
                    }
                }

                > h3 {
                    @include typo('body', 20);

                    font-weight: bold;

                    @include media-breakpoint-down(medium) {
                        @include typo('body', 16);

                        font-size: 1.6rem !important;
                    }

                    &:not(:last-child) {
                        margin-bottom: 3.6rem;
                    }
                }

                > p {
                    @include typo('body', 16);

                    &:not(:last-child) {
                        margin-bottom: 3.6rem;
                    }

                    > strong {
                        font-weight: bold;
                    }

                    > em {
                        font-style: italic;
                    }

                    > a {
                        color: map-get($colors, brand-3);
                        text-decoration: underline;
                    }
                }

                > blockquote {
                    display: flex;
                    justify-content: center;
                    padding: 2.4rem 10.8rem;
                    color: map-get($colors, brand-3);
                    background-color: map-get($colors, white);

                    @include media-breakpoint-down(medium) {
                        padding: 2.4rem 5.2rem;
                    }

                    &:not(:last-child) {
                        margin-bottom: 3.6rem;
                    }

                    > p {
                        @include typo('body', 20);

                        position: relative;
                        display: flex;
                        align-items: center;
                        text-align: center;

                        @include media-breakpoint-down(medium) {
                            @include typo('body', 16);
                        }

                        &::before {
                            position: absolute;
                            left: -1.2rem;
                            transform: translateX(-100%);
                            content: '“';
                            font-size: 4rem;
                            line-height: 0;
                        }

                        &::after {
                            position: absolute;
                            right: -1.2rem;
                            transform: translateX(100%);
                            content: '”';
                            font-size: 4rem;
                            line-height: 0;
                        }
                    }
                }

                > ol {
                    display: flex;
                    flex-direction: column;
                    list-style: decimal-leading-zero !important;
                    counter-reset: item;

                    &:not(:last-child) {
                        margin-bottom: 3.6rem;
                    }
                    
                    > li {
                        @include typo('body', 16);
                        
                        display: flex;

                        &:not(:last-child) {
                            margin-bottom: 1.6rem;
                        }

                        &::before {
                            counter-increment: item;
                            content: counter(item, decimal-leading-zero);

                            margin-right: 0.8rem;
                            color: map-get($colors, brand-3);
                            font-weight: bold;
                        }
                    }
                }

                > ul {
                    display: flex;
                    flex-direction: column;
                    list-style: disc !important;

                    &:not(:last-child) {
                        margin-bottom: 3.6rem;
                    }
                    
                    > li {
                        @include typo('body', 16);
                        
                        display: flex;

                        &:not(:last-child) {
                            margin-bottom: 1.6rem;
                        }

                        &::before {
                            content: '＊';

                            margin-right: 0.8rem;
                            color: map-get($colors, brand-3);
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>