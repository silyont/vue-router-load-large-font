<template>
  <div id="app">
    <router-view name="page"></router-view>
    <router-view name="modal"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style type="stylus">

@font-face {
    font-family: 'Noto Sans CJKtc';
    src: url('/fonts/NotoSansCJKtc-Regular.otf');
    font-weight: 400;
    font-style: normal;
}

* {
    font-family: 'Noto Sans CJKtc';
    font-size: 16;
}

</style>
