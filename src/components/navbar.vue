<template>
    <header class="navbar navbar-fixed-top navbar-shadow">
        <div class="navbar-branding">
            <a class="navbar-brand" href="dashboard.html">
                <b>Embed</b>Partner
            </a>
            <span id="toggle_sidemenu_l" class="ad ad-lines"></span>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown menu-merge">
                <a href="#" class="dropdown-toggle fw600 p15" data-toggle="dropdown">
                    <span class="hidden-xs pl15"> {{ currentUser.full_name }}</span>
                    <span class="caret caret-tp hidden-xs"></span>
                </a>
                <ul class="dropdown-menu list-group dropdown-persist w250" role="menu">
                    <li class="list-group-item">
                        <a href="#" class="animated animated-short fadeInUp">
                            <span class="fa fa-envelope"></span> Messages
                            <span class="label label-warning">2</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#" class="animated animated-short fadeInUp">
                            <span class="fa fa-user"></span> Friends
                            <span class="label label-warning">6</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#" class="animated animated-short fadeInUp">
                            <span class="fa fa-bell"></span> Notifications </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#" class="animated animated-short fadeInUp">
                            <span class="fa fa-gear"></span> Settings </a>
                    </li>
                    <li class="dropdown-footer">
                        <a href="#" @click="logoutUser">
                            <span class="fa fa-power-off pr5"></span>
                            <span v-translate>Logout</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </header>

</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import CcSpinner from '../general/spinner'
  import { version } from '../../config'

  export default {
    components: {
      CcSpinner,
    },
    computed: {
      /**
      * See src/app/auth/vuex/getters.js
      */
      ...mapGetters(['currentUser', 'isLogged']),
      version() {
        return version
      },
    },
    watch: {
      isLogged(value) { // isLogged changes when the token changes
        if (value === false) {
          this.$router.push({ name: 'auth.signin' })
        }
      },
    },
    methods: {
      /**
      * Makes logout() action available withint this component
      * See /src/app/auth/vuex/actions.js
      */
      ...mapActions(['logout']),
      /* eslint-disable no-undef */
      navigate(name) {
        switch (name) {
          case 'logout':
            this.logout()
            break;
          default:
            this.$router.push({ name })
            break;
        }
      },

      logoutUser() {
        this.logout()
      },
    },
  }


</script>