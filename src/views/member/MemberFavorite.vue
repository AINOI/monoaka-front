<template lang="pug">
b-container#memberfavorite
  b-row.mb-5
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12' :class="{labelDark:user.themeSwitcher, light:!user.themeSwitcher}") 喜愛作品
</template>

<style lang="scss">
@import '../../../scss/aino-style.scss';

</style>
