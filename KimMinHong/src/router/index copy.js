import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import SignInPage from "@/views/account/member/SignInPage.vue"
import SignUpPage from "@/views/account/member/SignUpPage.vue"
import SignAgreePage from "@/views/account/member/SignAgreePage.vue"
import SearchMemberIdPage from "@/views/account/member/SearchMemberIdPage.vue"
import SearchMemberPasswordPage from "@/views/account/member/SearchMemberPasswordPage.vue"

import AgreementPage from "@/views/information/AgreementPage.vue"
import CompanyPage from "@/views/information/CompanyPage.vue"
import CustomorCenterPage from "@/views/information/CustomorCenterPage"
import PrivacyPolicyPage from "@/views/information/PrivacyPolicyPage"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/',
    name: 'SignAgreePage',
    component: SignAgreePage
  },
  {
    path: '/search-id',
    name: 'SearchMemberIdPage',
    component: SearchMemberIdPage
  },
  {
    path: '/search-password',
    name: 'SearchMemberPasswordPage',
    component: SearchMemberPasswordPage
  },
  {
    path: '/agreement',
    name: 'AgreementPage',
    component: AgreementPage
  },
  {
    path: '/company',
    name: 'CompanyPage',
    component: CompanyPage
  },
  {
    path: '/customer-center',
    name: 'CustomorCenterPage',
    component: CustomorCenterPage
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicyPage',
    component: PrivacyPolicyPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
