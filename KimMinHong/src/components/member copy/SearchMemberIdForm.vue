<template>
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
      <v-container class="white" style="width: 1240px">
        <v-row justify="center">
          <v-col cols="auto" style="padding-bottom: 90px">
            <router-link to="/">
              <v-img
                  :src="require('@/assets/logo/logo-removebg.png')"
                  width="400"
                  class="mx-auto mb-6"
              ></v-img>
            </router-link>
            <v-card width="540" v-if="!isPass">
              <v-card-text class="text-center px-12 py-16">
  
                <v-form>
                  <div class="text-h4 font-weight-black mb-10">ID 찾기</div>
  
                  <div class="d-flex">
                    <v-text-field
                        v-model="memberName"
                        label="이름"
                        :rules="memberName_rule"
                        clearable
                        prepend-icon="mdi-account-outline"
                        color="orange"
                    />
                  </div>
                  <div class="d-flex">
                  <v-text-field
                      v-model="phoneNumber"
                      label="휴대폰 번호"
                      :rules="phoneNumber_rule"
                      clearable
                      prepend-icon="mdi-phone-outline"
                      color="orange"
                  />
                </div>
                  <v-btn
                      block
                      x-large
                      rounded
                      color="orange lighten-1"
                      class="mt-6"
                      @click="findAccountmemberName(), findAccountPhone()"
                      :disabled="false"
                  >ID 찾기</v-btn>
                </v-form>
                <v-card width="460" v-if="isPass">
                  <v-card-text>
                    <div class="text-h4 font-weight-black mb-10">ID 찾기 결과</div>
                      <div v-if="matchingId">{{ matchingId }}</div>
                      <div v-else>입력한 정보와 일치하는 아이디가 없습니다.</div>
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
      memberName: "",
      phoneNumber: "",
      isPass: false,
      matchingId: null,
      
      memberName_rule:[
        v => !!v || '가입한 이름을 입력해주세요.',
        v => {
        const replaceV = v.replace(/(\s*)/g, '')
        const pattern = /^[가-힣]{2,}$/
        return pattern.test(replaceV) || '한글 이름을 작성해주세요.'
        }
      ],
      phoneNumber_rule: [
        v => !!v || '가입한 전화번호를 입력 해주세요.',
        v => {
          const replaceV = v.replace(/(\s*)/g, '')
          const pattern = /^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/
          return pattern.test(replaceV) || '010-1234-5678 형식의 번호를 입력해주세요.'
        }
      ],
    };
  },
  methods: {
    findAccountmemberName() {
      const { memberName } = this;
      axios
          .post("http://localhost:7777/member/memberNameMatch", { memberName })
          .then((res) => {
            if (res.data) {
              alert("인증이 완료되었습니다.");
              this.isPass = true;
              this.matchingId(memberName, this.phoneNumber);
            } else {
              alert("해당이름으로 가입된 정보가 없습니다.");
              this.isPass = false;
            }
        })
        .catch((error) => {
          console.error(error);
          alert("요청에 실패했습니다. 다시 시도해주세요.");
        });
    },
    findAccountPhone() {
      const { phoneNumber } = this;
      axios
          .post("http://localhost:7777/member/phoneNumberMatch", { phoneNumber })
          .then((res) => {
            if (res.data) {
              alert("인증이 완료되었습니다.");
              this.isPass = true;
              this.matchingId(this.memberName, phoneNumber);
            } else {
              alert("입력한 휴대폰번호로 가입된 정보가 없습니다.");
              this.isPass = false;
            }
        })
        .catch((error) => {
          console.error(error);
          alert("요청에 실패했습니다. 다시 시도해주세요.");
        });
      },
      findmatchingId(memberName, phoneNumber) {
      axios
        .post("http://localhost:7777/member/findMatchingId", { memberName, phoneNumber })
        .then((res) => {
          if (res.data) {
            this.matchingId = res.data;
          } else {
            this.matchingId = "";
          }
        })
        .catch((error) => {
          console.error(error);
          alert("요청에 실패했습니다. 다시 시도해주세요.");
        });
      },
  },
}

</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap");

</style>