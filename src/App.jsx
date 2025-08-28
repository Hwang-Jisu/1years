import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import FallingHearts from './components/FallingHearts';
import Gallery from './components/Gallery';
import './App.scss';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const startDate = new Date('2024-09-01');
  const today = new Date();
  const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    gsap.fromTo(
      '.cover h1',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      '.cover img',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      '.cover p',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        stagger: 0.2,
      }
    );
    gsap.fromTo('.content', 
      { opacity: 0, y: 20 },
      { opacity: .9, 
        y: 0, 
        duration: 1.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.content',
          start: 'top 50%',
          toggleActions: 'play none none play'
        }
      }
    );
    gsap.fromTo(
      '.gallery',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: '.gallery',
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
    gsap.fromTo(
      '.message',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.message',
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className='App'>
      <FallingHearts />
      <section className='cover'>
        <h1>❤️ 지수 | 남훈 ❤️</h1>
        <img src="/images/1.jpg" alt="커플 사진" />
        <p>✨🎉 우리의 1주년 🎉✨</p>
        <p className='date'>2025. 09. 01</p>
      </section>

      <section className='content'>
        <h2>우리가 함께한 지</h2>
        <p className='days'>👩🏻 {days}일 👦🏻</p>
      </section>

      <Gallery />

      <section className='message'>
        <h1>💌 남훈이에게 💌</h1>
        <p>
          안녕 남훈시🤗 나 지수야<br/>
          지금 나 스타벅스에서 편지 쓰고 있어. 
          오빠는 지금 나 공부하고 있는 줄 알겠지?<br/><br /> 이것도 어떻게 보면 공부인가? ㅎㅎㅎ 우리 되게 사진 안찍은줄 알았는데 오늘 정리해보니까 진짜 많두라 놓친 사진 있어두 이해바람! <br /><br />이걸로 1주년 편지쓸라니깐 신기하고 어색하당 ㅋㅋㅋㅋㅋㅋ 이건 종이가 아니라 내가 삭제하기 전까지는 평생 남는다잉 ㅎ3ㅎ<br /><br /> 우리 엊그제 만난 거 같은데 벌써 1년이라닝 시간 너무 빠른거 같다 그치 중간중간 위기는 있었지만! 이렇게 일년을 맞이해 너무너무 행복해 난😊 <br /><br />가끔 킹받고 짜증날 때도 있고 오빠도 물론 있겠지만 그래도 항상 내가 많이 사랑해 어딜가도 오빠 생각나고 뭘 해도 오빠 생각이 제일 많이나 오빠는 못 느낀다고 하지만은 누구보다 제일 많이 생각한다구! <br /><br />
          항상 배려해주고 내 생각 해주고 하는 거 아주 잘 알고있어서 항상 고마워💓 일년까지는 우여곡절 많았지만 지금까지 해온 것처럼 앞으로도 우여곡절 있을 때 잘 이겨내서 많이많이 더 사랑했으면 좋겠어! <br /><br />
          사랑하고 행복하기에도 시간이 짧은데 싸워서 상처받는 시간은 너무 아깝잖아!🥲
          <br /><br />
          편지 퀄리티 많이 떨어져도 이해해줘! 처음 맹드는거라 구래잇..ㅎ ㅎ ㅎ
          <br /><br />
          사랑하구 항상 고맙고 오래오래 더 많이많이 사랑하자 💓💓💓
        </p>
      </section>

      <footer>
        <p>앞으로 평생 책임져 !</p>
      </footer>
    </div>
  );
}

export default App;