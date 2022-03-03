<template lang="pug">
b-container#MAbout.mt-5.px-0.h-100.d-flex.justify-content-center.align-items-center.flex-wrap(fluid)
  b-container.mb-5
    b-row.d-flex
      b-col(md='4')
        img.border-top(src='https://picsum.photos/500/500/?img=15')
      b-col.bg-white.py-4.px-4.mb-5.mb-md-0.border-bottom(md='8' :class="{labelDark:user.themeSwitcher, textDark:user.themeSwitcher, light:!user.themeSwitcher}")
        b-row
          b-col(cols='12')
            h3 為何會架設Mono‘s Archive?
            br
            br
            h5 想讓喜好創作的寫手們有個較為正式的分享平台。
            h5 且，為閱讀者提供舒適的閱讀環境。
            h5 使用者之間的留言及喜愛，亦促進讓兩方達成良好的互動。
    b-row.mt-5.d-flex.flex-md-row-reverse
      b-col(md='4')
        img.border-top.reverse-top(src='https://picsum.photos/500/500/?img=20')
      b-col.bg-white.py-4.px-4.mb-5.mb-md-0.border-bottom.reverse-bottom(md='8' :class="{labelDark:user.themeSwitcher, textDark:user.themeSwitcher, light:!user.themeSwitcher}")
        b-row
          b-col(cols='12')
            h3 Mono‘s Archive的由來?
            br
            br
            h5 Mono取自於日語的故事 「物語 (monogatari) (ものがたり) 」 而 「物 (mono) (もの) 」 代表著任何事物都能成為一篇美好的文作。
            h5 Archive「檔案」代表對於創作者嘔心瀝血的創作進行整理、歸檔。向所有創作者及文作至上敬意。
</template>

<style lang="scss">
@import '../../scss/aino-style.scss';

#MAbout {
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
