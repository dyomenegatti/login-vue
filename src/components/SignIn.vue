<template>
  <v-app class="sign-in">
    <v-main style="background-color: #f1f1f1">
      <v-container class="sign-in fill-height">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="10">
            <v-card class="d-flex justify-space-around py-3 px-3" color="tertiary">
              <img src="../assets/sign-in.png" alt="Sign In Image" class="d-none d-lg-flex d-md-none">
              <v-card style="max-width: 400px" class="px-4 py-4">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>
                      <img src="../assets/logo.svg" alt="Logo DM" width="50" height="20">
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-h5 font-weight-bold">Sign in.</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-subtitle class="text-right">No account?</v-list-item-subtitle>
                    <v-list-item-subtitle 
                      class="no-account text-right font-weight-bold">
                      <router-link class="link" @click.stop :to="{ name: 'sign_up' }" style="text-decoration: none">
                        Sign up.
                      </router-link>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-text>
                  <v-btn elevation="2" small color="secondary" class="text-uppercase pa-3">
                    <v-icon class="pr-1">mdi-google</v-icon>Sign in with Google.
                  </v-btn>
                  <ValidationObserver ref="forms" v-slot="{}">
                    <v-form @submit.prevent="handleAccess" class="pt-4">
                      <ValidationProvider name="email" rules="required" v-slot="{ errors }">
                        <v-text-field
                          label="Username"
                          name="email"
                          type="text"
                          v-model="email"
                          placeholder="name@mail.com.br"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                        <v-text-field
                          label="Password"
                          name="password"
                          type="password"
                          v-model="password"
                          placeholder="6+ Characters, 1 Capital letter"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                      <div>
                        <p class="font-weight-black float-right mt-0" color="secondary">Forgout password?</p>
                      </div>
                      <v-card-actions>
                        <v-btn 
                          class="ml-n2 mt-4" 
                          color="primary" 
                          type="submit"
                        >Sign in</v-btn>
                      </v-card-actions>
                    </v-form>
                  </ValidationObserver>
                </v-card-text>
              </v-card>
            </v-card>
          </v-col>
        </v-row>

        <access-dialog
          v-model="dialog_preview"
        />

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AccessDialog from './AccessDialog.vue';

export default {
  name: "SignIn",
  components: { AccessDialog },
  data: () => ({
    email: '',
    password: '',
    dialog_preview: false
  }),
  methods: {
    handleAccess() {
      this.dialog_preview = true;
    }
  }
}
</script>

<style>
  .no-account {
    font-size: 0.9rem;
    text-decoration: none;
  }
</style> 