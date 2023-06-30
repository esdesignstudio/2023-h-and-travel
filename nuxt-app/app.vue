<template>
    <div>
        <div class="loading">
            <div class="container">
                <div class="loading__spinner">
                    <div class="funspinner__box">
                        <div class="linesquare">
                        <b></b><b></b><b></b><b></b><b></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NuxtLayout name="default">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>
    const pageloaded = usePageLoaded()
    
    onMounted(() => {
        ESinit()
    })
</script>
<style lang="scss">

div.linesquare,
div.texttransform {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-size: 2vw;
  b {
    transform: scaleY(0);
    animation: texttransform_in 1.5s infinite cubic-bezier(0.76, 0, 0.24, 1);
    @for $i from 0 to 10 {
        &:nth-child(#{$i+1}) {
            animation-delay: #{$i * 0.15}s;
        }
    }
  }
}
div.linesquare {
  b {
    @include size(3rem);
    background-color: map-get($colors, brand-2);
  }
}

@keyframes texttransform_in {
  0% {
    transform-origin: 50% 100%;
    transform: scaleY(0)
  } 25% {
    transform-origin: 50% 100%;
    transform: scaleY(1)
  } 75% {
    transform-origin: 50% 0%;
    transform: scaleY(1)
  } 100% {
    transform-origin: 50% 0%;
    transform: scaleY(0)
  }
}

$class-name: loading;
.#{$class-name} {
    @include size(100%);

    top: 0;
    left: 0;
    position: fixed;
    z-index: 9999;

    > div {
        @include size(100%);
        @include typo('heading', 48);

        color: map-get($colors, white);
        z-index: 1;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        will-change: opacity, transform;
        transition: opacity .3s, transform .3s;
    }

    &:before {
        @include size(100%);

        content: '';
        top: 0;
        left: 0;
        z-index: 0;
        position: absolute;
        transform-origin: 0 0;
        will-change: transform;
        background-color: map-get($colors, brand-1);
        transition: transform 1s .1s cubic-bezier(0.87, 0, 0.13, 1);
    }

}
body.isLoaded {
    .#{$class-name} {
        pointer-events: none;

        &:before {
            transform: scaleY(0);
        }

        > div {
            opacity: 0;
            transform: translate3d(0, -5rem, 0);
        }
    }
}
</style>