import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import 'echarts';
import ECharts from 'vue-echarts';
import ElementPlus from 'element-plus';
import SvgIcon from '@/components/SvgIcon/index.vue';
import DynamicDigital from '@/components/DynamicDigital/index.vue';
import 'element-plus/dist/index.css';
import { store } from '@/stores';
import '@/assets/css/index.scss';
import '@/utils/rem';
import 'virtual:svg-icons-register';
import '@/utils/rem';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
// import { Presets, VuePlugin } from "rete-vue-plugin";
import axios from 'axios';
const app = createApp(App);


app.use(ElementPlus)
app.component('v-chart', ECharts);
app.component('DynamicDigital', DynamicDigital);
app.component('SvgIcon', SvgIcon);
app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(Antd);
app.mount('#app');
