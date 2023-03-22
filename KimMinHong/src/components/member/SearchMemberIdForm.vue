<template>
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
      <v-container class="white" style="width: 1240px">
        <v-row justify="center">
          <v-col cols="auto" style="padding-bottom: 90px">
            <router-link to="/">
              <v-img
                  :src="require('@/assets/logo/logo-removebg.png')"
                  width="300"
                  class="mx-auto mb-6"
              ></v-img>
            </router-link>
            <v-card width="460" v-if="!isPass">
              <v-card-text class="text-center px-12 py-16">
  
                <v-form>
                  <div class="text-h4 font-weight-black mb-10">ID 찾기</div>
  
                  <div class="d-flex">
                    <v-text-field
                        v-model="email"
                        label="이메일"
                        :rules="email_rule"
                        clearable
                        prepend-icon="mdi-email"
                        color="orange"
                    />
                  </div>
                  <v-btn
                      block
                      x-large
                      rounded
                      color="orange lighten-1"
                      class="mt-6"
                      @click="findAccountEmail"
                      :disabled="false"
                  >ID 찾기</v-btn>
                </v-form>
                <v-card width="460" v-if="isPass">
                    <v-card-text>
                        <div class="text-h4 font-weight-black mb-10">ID 찾기 결과</div>
                        <v-list>
                            <v-list-item v-if="matchingId" :key="matchingId">
                                <v-list-item-content>{{ matchingId }}</v-list-item-content>
                            </v-list-item>
                            <v-list-item v-else>
                                <v-list-item-content>일치하는 아이디가 없습니다.</v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
              </v-card-text>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "SearchMemberIdForm",
  data() {
    return {
      email: "",
      phoneNumber: "",
      isPass: false,
      password: "",
      passwordConfirm: "",  
    };
  },
  methods: {
    findAccountEmail() {
      const { email } = this;
      axios
          .post("http://localhost:7777/member/emailMatch", { email })
          .then((res) => {
            if (res.data) {
              alert("인증이 완료되었습니다.");
              this.isPass = true;
            } else {
              alert("입력하신 정보로 가입된 정보가 없습니다.");
              this.isPass = false;
            }
          });
    },
  },
}

</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap");

</style>