<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>제목</td>
        <td>
          <input type="text" v-model="title"/>
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input type="text" v-model="writer"/>
        </td>
      </tr>
      <tr>
        <td>본문</td>
        <td>
          <textarea cols="50" rows="20" v-model="content"/>
        </td>
      </tr>
      <tr>
        <td>이미지를 등록하세요</td>
        <td>
          <input type="file" accept="image/*" @change="onFileChange"/>
          <img :src="imagePreview" v-if="imagePreview"/>
        </td>
      </tr>
      <tr>
        <td>가격</td>
        <td>
          <input type="number" v-model="price"/>
        </td>
      </tr>
    </table>
  
    <div>
      <button type="submit">등록</button>
      <router-link to="{ name: 'JpaBoardListPage' }">
        취소
      </router-link>
    </div>

  </form>
</template>
<script>
export default {
    name: "JpaBoardRegisterForm",
    data () {
        return {
            title: '제목을 입력하세요.',
            writer: '누구세요 ?',
            content: '내용을 입력하세요.',
            file: null,
            price: 0,
        }
    },
    computed: {
        imagePreview() {
            if (this.file) {
                return URL.createObjectURL(this.file)
            }
            return null
        }
    },
    methods: {
        onSubmit () {
            const { title, writer, content, file, price } = this
            this.$emit('submit', { title, writer, content, file, price })
        },
        onFileChange (event) {
            const file = event.target.files[0]
            this.file = file
        }
    }
}
</script>
<style>
</style>