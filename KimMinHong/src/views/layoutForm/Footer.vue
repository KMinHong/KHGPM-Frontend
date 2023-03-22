<template>
  <v-footer inset padless class="justify-center pl-0">
    <v-card flat class="text-center" width="100%">
      <v-card-text class="pt-0">
        <router-link style="text-decoration: none; color: black;" :to="{ name: 'AgreementPage' }">
          이용약관
        </router-link>
        | 
        <router-link style="text-decoration: none; color: black;" :to="{ name: 'PrivacyPolicyPage' }">
          개인정보처리방침
        </router-link>
        |
        <router-link style="text-decoration: none; color: black;" :to="{ name: 'CustomorCenterPage' }">
          고객센터
        </router-link>
        |
        <router-link style="text-decoration: none; color: black;" :to="{ name: 'CompanyPage' }">
          회사 정보 
        </router-link>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="text-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

export default {
    name: "Footer",
    data: () => ({
        icons: [
            "mdi-facebook",
            "mdi-twitter",
            "mdi-google-plus",
            "mdi-instagram"
        ],
    })
}

</script>

<style>

</style>