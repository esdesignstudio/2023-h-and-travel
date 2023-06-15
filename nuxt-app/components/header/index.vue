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
                <div class="header-index__right">
                    測試右邊
                </div>
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
</script>
<style lang="scss">
$class-name: header-index;
.#{$class-name} {
    width: 100%;
    position: fixed;
    border-bottom: 1px solid map-get($colors, gray-line);
    background-color: map-get($colors, brand-2);

    &__wrap {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: space-between;

        span {
            margin-right: 1rem;
            display: inline-block
        }
    }
    &__logo {
        @include size(auto, 4rem);
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }
}
</style>