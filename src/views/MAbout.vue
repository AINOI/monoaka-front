<template lang="pug">
b-container#MAbout.mt-5.px-0.h-100.d-flex.justify-content-center.align-items-center.flex-wrap(fluid)
  b-container.mb-5
    b-row.d-flex
      b-col(md='4')
        img.border-top(src='https://picsum.photos/500/500/?radom=4')
      b-col.bg-white.py-4.px-4.mb-5.mb-md-0.border-bottom(md='8')
        .h3 為何會架設Mono‘s Archive?
        .h5 123456
    b-row.mt-5.d-flex.flex-md-row-reverse
      b-col(md='4')
        img.border-top.reverse-top(src='https://picsum.photos/500/500/?radom=7')
      b-col.bg-white.py-4.px-4.mb-5.mb-md-0.border-bottom.reverse-bottom(md='8')
        .h3 Mono‘s Archive的由來?
        .h5 123456
</template>

<style lang="scss">
@import '../../scss/aino-style.scss';

.row {
  margin-top: 0;
  .col-md-4 {
    padding: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .border-top {
    border-radius: 15px 15px 0 0 ;
  }
  .border-bottom {
    border-radius: 0 0 15px 15px;
  }
}

@include md {

  .border-top {
    border-radius: 15px 0 0 15px !important;
  }
  .border-bottom {
    border-radius: 0 15px 15px 0 !important;
  }
  .reverse-top {
    border-radius: 0 15px 15px 0 !important;
  }
  .reverse-bottom {
    border-radius: 15px 0 0 15px !important;
  }
}
</style>
