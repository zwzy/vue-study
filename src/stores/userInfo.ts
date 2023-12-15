import { reactive } from 'vue';

export const userInfoStore = reactive({
  userInfo: {
    name: '',
    age: 0,
    sex: '男'
  },
  updateUserInfo(userinfo: any) {
    this.userInfo = { ...this.userInfo, ...userinfo };
  },
  initUserInfo(userinfo: any) {
    this.userInfo = userinfo;
  }
});
