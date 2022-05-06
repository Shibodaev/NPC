<template>
  <div class="main">
    <top-sections :title="topSestion.title"></top-sections>
    <question :Questions="Questions"></question>
    <advantage :Advantage="Advantage"></advantage>
    <success-stories :SuccessStories="SuccessStories"></success-stories>
    <MainFooter :links="links"/>
  </div>
</template>

<script>
import TopSections from '../components/sections/TopSections';
import {description} from "@nuxtjs/svg-sprite/lib/plugins/inlineDefs";
import Question from "../components/sections/Question";
import Advantage from "../components/sections/Advantage/Advantage";
import SuccessStories from "../components/sections/SuccessStories";
import MainFooter from "../components/MainFooter";
// import {EventBus } from '@/event-bus.js';


export default {
  components: {
    TopSections,
    Question,
    Advantage,
    SuccessStories,
    MainFooter
  },
  data() {
    return {
      topSestion: {
        'title': "Мой бизнес - цифровая платформа для тех, кто хочет открыть и развивать свой бизнес"
      },
      Questions: {
        'questions': 'Для начала работы ответьте на вопрос, есть ли у вас уже существующий бизнес?',
        'btn1': 'Да, у меня уже есть бизнес',
        'btn2': 'Нет, но планирую открыть',
      },
      Advantage: {
        title: 'Преимущества',
        items: [
          {
            path: 'advantage-1',
            text: 'Организаций поддержки\n' +
              'по Российской Федерации',
            num: '482'
          }, {
            path: 'advantage-2',
            text: 'Оказано услуг \n' +
              'государственной поддержки',
            num: '5240'
          }, {
            path: 'advantage-3',
            text: 'Зарегестрировано\n' +
              'участников проекта',
            num: '1360'
          }
        ]
      },
      SuccessStories: {
        title: "Истории успеха",
        items: [
          {
            title: "Пекарня “Русские традиции”",
            svg: 'blockquote.svg',
            svgArrow: 'svgArrow.svg',
            path: "./img/SuccessStories-1.jpg",
            blockquote: "Как говорит сам Владимир: «мне хотелось, чтобы все узнали, что такое русская кухня», «обьяснить, что она жива».\n" +
              "\n" +
              "\n",
            text: "Чтобы мини-пекарня стала рентабельным бизнесом, необходимы строгие расчеты, учет рисков и перспектив, анализ рынка, налаживание сбыта. " +
              "\n" +
              "\n"

          },{
            title: "Автомастерская",
            path: "./img/SuccessStories-2.jpg",
            svgArrow: 'svgArrow.svg',
            svg: 'blockquote.svg',
            blockquote: "Первые дни независимости. Когда не нужно рано вставать, когда не нужно отпрашиваться, что бы успеть съездить в магазин, когда удобно.\n" +
              "\n" +
              "\n",
            text: "Встреча в городе Н с моими будущими партнерами была плодотворной. Я не смог заснуть до пяти утра – не потому что не спалось, но потому что мысли о будущих перспективах просто взрывали мой мозг. "

          },{
            title: "Салон красоты “Эмират”",
            svg: 'blockquote.svg',
            svgArrow: 'svgArrow.svg',
            blockquote: "Когда же появилась возможность открыть свой бизнес, я рассматривала различные варианты, изучала всевозможные направления.\n" +
              "\n" +
              "\n",
            path: "./img/SuccessStories-3.jpg"

          },
        ]

      },
      links: ['Услуги  и поддержка','Сервисы для бизнеса', 'Общая информация ', 'Защита бизнеса']
    }
  }
};
</script>

<style lang='scss'>
</style>
