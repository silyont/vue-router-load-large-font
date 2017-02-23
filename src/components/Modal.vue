<template>
    <transition name="fade">
        <div class="overlay" @click.self="closeModal">
            <transition name="slide">
                <div class="modal" v-if="show">
                    <div class="header">
                        <div class="header-upper">
                            <!-- <modal-close-button v-on:close-modal="closeModal"></modal-close-button> -->
                        </div>
                        <div class="header-middle">
                            <h1 class="title">Title</h1>
                        </div>
                    </div>
                    <div class="body">
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <!-- <fixed-action-button floating-button="share" :actionButtons="this.shareButtons"></fixed-action-button> -->
                    </div>
                    <!-- <div class="article-footer">
                        <div class="article-comment">
                            <comments :comments="item.comments"></comments>
                        </div>
                    </div> -->
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'modal',

        data() {
            return {
                show: false,
                fetched: false, //TODO: maybe changed if use vuex for storing fetched data
                closing: false
            }
        },

        mounted() {
            this.openModal();
        },

        methods: {
            openModal() {
                this.show = true;
                // ModalMixins.openModal(this);
            },

            closeModal() {
                this.show = false;
                this.$router.back();
                // ModalMixins.closeModal(this);
            },

            fetchContent() {

            }
        }
    }
</script>

<style lang="stylus">
.modal
    display: block
    position: relative
    width: 1200px
    margin: 15px auto

    @media (max-width: 1230px)
        width: calc(100% - 30px)

.overlay
    width: 100%
    height: 100%
    background-color: rgba(#43484e, 0.8)
    display: block
    position: fixed
    top: 0
    right: 0
    left: 0
    bottom: 0
    z-index: 1050
    overflow-y: auto
    -webkit-overflow-scrolling: touch

.slide-enter-active, .slide-leave-active,
.fade-enter-active, .fade-leave-active
    transition: all .3s ease


.slide-enter, .slide-leave-active
    transform: translateY(-20px)


.fade-enter, .fade-leave-active
    opacity: 0


</style>