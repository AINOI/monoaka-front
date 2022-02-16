<template lang="pug">
b-container#memberothershome
  b-row
    b-col.h1.rounded.text-white.text-center.py-3.aino-bg-primary.aino-rounded(cols='12') 創作者資訊
  b-row.mt-5.border-bottom
    b-col.d-flex.flex-column.align-items-center.h2.mb-5(cols='3') 創作者頭貼
        img.mt-3.img-box(:src='user.avatarimg' )
    b-col.pl-5.mb-5.text-white.aino-rounded.aino-bg-wood(cols='9')
      b-row.h-100.d-flex.mx-0.mt-3
        b-col.d-flex.flex-column(cols='12')
          div.h3(v-if='user.nickname') 創作者名稱: {{ user.nickname }}
          div.h3(v-if='!user.nickname') 創作者名稱: {{ user.account }}
          div.h4 帳號: {{ user.account }}
          div.h4(v-if='user.emailswitch === 2') 信箱: 不讓你看 キラー☆
          div.h4(v-if='user.emailswitch === 1') 信箱: {{ user.email }}
          div.h4(v-if='user.birthdayMon !== 13 || user.birthdayDate !== 32') 生日: {{ user.birthdayMon }} 月 {{ user.birthdayDate }} 日
          div.h4(v-if='user.birthdayMon === 13 && user.birthdayDate === 32') 生日: 不讓你看 キラー☆
          div.h4 性別: {{ user.sex }}
          b-btn.aino-btn-third(to='' v-if='user.isLogin') 加入好友
</template>
