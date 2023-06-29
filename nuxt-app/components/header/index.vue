<template>
    <header 
        id="header"
        class="header-index"
        :class="{ 'is-scrolled': isScrolled}"
    >
        <HeaderTopbar 
            :data="global.top_bar"
        />
        <div class="container">
            <div class="header-index__wrap">
                <div class="header-index__navigation">
                    <HeaderNavigation :data="global.main_menu" />
                </div>
                <NuxtLink 
                    to="/"
                    class="header-index__logo"
                >
                    <img :src="global.logo.url" :alt="global.logo.alt">
                </NuxtLink>
                <NuxtLink
                    class="header-index__right"
                    :to="global.right_top_link?.url"
                    :target="global.right_top_link?.target"
                >
                    <nuxt-icon name="reserve" />
                    {{ global.right_top_link.title }}
                </NuxtLink>
            </div>
        </div>
    </header>
</template>
<script setup>
    const global = useGlobal()
    const isScrolled = ref(false)
    onMounted(() => {
        window.addEventListener('scroll', (e) => {
            const scrollY = window.scrollY
            scrollY > 50 ?
            isScrolled.value = true :
            isScrolled.value = false
        })
    })

    console.log(global)
</script>
<style lang="scss">
$class-name: header-index;
.#{$class-name} {
    width: 100%;
    position: fixed;
    border-bottom: 1px solid map-get($colors, gray-line);
    background-color: map-get($colors, brand-2);
    z-index: 999;

    &__wrap {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: space-between;

        > span {
            margin-right: 1rem;
            display: inline-block
        }
    }

    &__logo {
        @include size(auto, 4rem);
        left: 50%;
        transform: translateX(-50%);
        position: absolute;

        > img {
            @include size(auto, 100%);
        }
    }

    &__right {
        @include typo('body', 16);

        display: flex;
        align-items: center;
        padding: .4rem 1.6rem;
        border-radius: 5rem;
        color: map-get($colors, white);
        background-color: map-get($colors, brand-1);
        transition: background-color .3s ease-in-out;

        @include media-breakpoint-up(medium) {
            &:hover {
                background-color: map-get($colors, brand-3);
            }
        }

        > span {
            @include size(1.6rem, auto);

            margin-right: 0.6rem;

            > svg {
                @include size(1.6rem, auto);
            }
        }
    }
}
</style>