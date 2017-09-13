<template>
    <!-- Start: Content-Wrapper -->
    <div>

        <!-- begin canvas animation bg -->
        <div id="canvas-wrapper">
            <canvas id="demo-canvas"></canvas>
        </div>

        <!-- Begin: Content -->
        <section id="content">

            <div class="admin-form theme-info" id="login1">

                <div class="panel panel-info mt10 br-n">
                    <!-- end .form-header section -->
                    <form method="post" id="contact" @submit.prevent="submit">
                        <div class="panel-body bg-light p30">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="section">
                                        <label for="email" class="field-label text-muted fs18 mb10">Email</label>
                                        <label for="email" class="field prepend-icon">
                                            <input type="text" id="email" class="gui-input" placeholder="Enter email"
                                                   v-model="email">
                                            <label for="email" class="field-icon">
                                                <i class="fa fa-user"></i>
                                            </label>
                                        </label>
                                    </div>
                                    <!-- end section -->
                                    <div class="section">
                                        <label for="password" class="field-label text-muted fs18 mb10">Password</label>
                                        <label for="password" class="field prepend-icon">
                                            <input type="password" id="password" class="gui-input"
                                                   placeholder="Enter password" v-model="password">
                                            <label for="password" class="field-icon">
                                                <i class="fa fa-lock"></i>
                                            </label>
                                        </label>
                                    </div>
                                    <!-- end section -->

                                </div>
                            </div>
                        </div>
                        <!-- end .form-body section -->
                        <div class="panel-footer clearfix p10 ph15">
                            <button type="submit" class="button btn-primary mr10 pull-right">Sign In</button>
                            <label class="switch ib switch-primary pull-left input-align mt10">
                                <input type="checkbox" name="remember" id="remember" checked>
                                <label for="remember" data-on="YES" data-off="NO"></label>
                                <span>Remember me</span>
                            </label>
                        </div>
                        <!-- end .form-footer section -->
                    </form>
                </div>
            </div>
        </section>
        <!-- End: Content -->
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    /**
    * Component's local state
    */
    data() {
      return {
        email: 'admin@admin.com',
        password: '123',
        bodyClass: 'external-page sb-l-c sb-r-c'
      }
    },
    methods: {
      /**
      * Map the actions from Vuex to this component.
      * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
      */
      ...mapActions(['attemptLogin', 'setMessage']),

      /**
      * Handle form's submit event
      */
      submit() {
        const { email, password } = this // http://wesbos.com/destructuring-objects/
        this.attemptLogin({ email, password }) // this is a Vuex action
          .then(() => {
            this.setMessage({ type: 'error', message: [] }) // this is a Vuex action
            this.$router.push({ name: 'dashboard.index' })
          })
      },
      /**
      * Reset component's local state
      */
      reset() {
        this.email = ''
        this.password = ''
      },
    },
    created() {
    }
  }

</script>

