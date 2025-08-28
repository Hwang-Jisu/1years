import React from 'react';
import '../App.scss';

const photos = [
  { src: '/images/2.jpg', caption: '첫 여행🚆 김밥 맛있었는뎅😋' },
  { src: '/images/3.jpg', caption: '바다뷰 삼합🏞️' },
  { src: '/images/4.jpg', caption: '부자가 되진 못했지만 행복했던😊' },
  { src: '/images/5.jpg', caption: '오빠가 사준 케키 뭉개진 건 비밀🙄' },
  { src: '/images/6.jpg', caption: '맛 없었는데 맛있다 해줘서 고마웠던🥰' },
  { src: '/images/7.jpg', caption: '봉명동 시선🍻' },
  { src: '/images/8.jpg', caption: '지수 생일날 갔던 짭마카세😊' },
  { src: '/images/9.jpg', caption: '삼바리 실패로 갔던 조개구이집🍴' },
  { src: '/images/10.jpg', caption: '사진 찍는거 극도로 싫어하시는 남훈씨😎' },
  { src: '/images/11.jpg', caption: '서로 그려주기 킹받드라슈🤣' },
  { src: '/images/12.jpg', caption: '첫 글램핑 논산 라곰👩🏻‍❤️‍👨🏻' },
  { src: '/images/13.jpg', caption: '냉전 후 먹는 할맥 파스타🍻' },
  { src: '/images/14.jpg', caption: '오월드 데이트🦁' },
  { src: '/images/15.jpg', caption: 'DCC 데이트 아쉬웠당😗' },
  { src: '/images/16.jpg', caption: '두입 컷 타코🌮' },
  { src: '/images/17.jpg', caption: '비린거 극혐 김남훈시가 같이 머거준 굴🦪' },
  { src: '/images/18.jpg', caption: '자주 갔던 비비큐 생맥주 킬러🍻' },
  { src: '/images/19.jpg', caption: '똠얌쌀국수랑 카레🍛' },
  { src: '/images/20.jpg', caption: '사케는 마싯서!🍶' },
  { src: '/images/21.jpg', caption: '사케는 마싯서!2🍶' },
  { src: '/images/22.jpg', caption: '전주 십원빵🫓 치즈를 더달라!' },
  { src: '/images/23.jpg', caption: 'BHC 테이블에서 몰래 먹기🍴' },
  { src: '/images/24.jpg', caption: '육전이랑 막걸리 꿀조합🥛' },
  { src: '/images/25.jpg', caption: '전주 이자카야 사시미 대존맛😁' },
  { src: '/images/26.jpg', caption: '물코기! 남훈 외모 칭찬 받은 날🐠' },
  { src: '/images/27.jpg', caption: '하트 더줘!❣️' },
  { src: '/images/28.jpg', caption: '카페 거울 샷👩🏻‍🤝‍👨🏻' },
  { src: '/images/29.jpg', caption: '오정동 연탄구이🥩' },
  { src: '/images/30.jpg', caption: '참새집 왕 계란말이🧈' },
  { src: '/images/31.jpg', caption: '반석 전마니 남훈 최애집🥘' },
  { src: '/images/32.jpg', caption: '회포 사연이 많은 집이쥬😅' },
  { src: '/images/33.jpg', caption: '없어진 거리🥲' },
  { src: '/images/34.jpg', caption: '중리동 우리뿐이었던 양꼬치🍖' },
  { src: '/images/35.jpg', caption: '시작은 좋았으나 싸웠던 홈파티😂' },
  { src: '/images/36.jpg', caption: '용문동 갑오징어 꾸이🦑' },
  { src: '/images/37.jpg', caption: '대왕 갈비탕🍖' },
  { src: '/images/38.jpg', caption: '연 육!😗' },
  { src: '/images/39.jpg', caption: '전골 좋아🤗' },
  { src: '/images/40.jpg', caption: '쿠우쿠우 담엔 더 푸짐한 곳으로 가장😝' },
  { src: '/images/41.jpg', caption: '전골 좋아2🤗' }, 
  { src: '/images/42.jpg', caption: '댕동 사시미🤤' },
  { src: '/images/43.jpg', caption: '다시는 가지않을... 쌈밥집😅' },
  { src: '/images/44.jpg', caption: '공주 군밤 축제🎊' },
  { src: '/images/45.jpg', caption: '군밤 축제 갔다와서 홈 파티🎊' },
  { src: '/images/46.jpg', caption: '오빠 취향은 아니었던 떡붂잉🍴' },
  { src: '/images/47.jpg', caption: '👩🏻‍❤️‍👨🏻사진 좀 많이 찍읍시다아' },
  { src: '/images/48.jpg', caption: '👩🏻‍❤️‍👨🏻사진 좀 많이 찍읍시다아2' },
  { src: '/images/49.jpg', caption: '남훈 뽑기신 들어섰던 날🤘🏻' },
  { src: '/images/50.jpg', caption: '나도 사라매💖' },
  { src: '/images/51.jpg', caption: '기절 훈🤭 ㄱㅇㅇ💖' },
  { src: '/images/52.jpg', caption: '동깨스 존맛땡👍🏻' },
  { src: '/images/53.jpg', caption: '남훈시가 포장해온 푸짐한상🍽️' },
  { src: '/images/54.jpg', caption: '남훈시 부려먹은 남훈시 생일상🤭' },
  { src: '/images/55.jpg', caption: 'ㄱㅇㅇ~❤️🧡💛💚💙💜' },
  { src: '/images/56.jpg', caption: '생일 케쿠🎂' },
  { src: '/images/57.jpg', caption: '남이섬 여행✌🏻' },
  { src: '/images/58.jpg', caption: '귀여운 그의 뒷모습🤭' },
  { src: '/images/59.jpg', caption: '명인 막걸리는 별로야 ~~😗' },
  { src: '/images/60.jpg', caption: '춘천 포장마차 갬성좋아! 🥰' },
  { src: '/images/61.jpg', caption: '두두당☕' },
  { src: '/images/62.jpg', caption: '앞을 봐주세용!😳' },
  { src: '/images/63.jpg', caption: '아비꼬 카레는 맛있어!🍛' },
  { src: '/images/64.jpg', caption: '향수 맹글기😊' },
  { src: '/images/65.jpg', caption: '싸우지 말기로 약속 했자나!👀' },
  { src: '/images/66.jpg', caption: '지수 최애 바다곶' },
  { src: '/images/67.jpg', caption: '동학사 건강 한상🍽️' },
  { src: '/images/68.jpg', caption: '벚꽃 보려다 못 나올까바 입구에서 깔짝🌸' },
  { src: '/images/69.jpg', caption: '홍콩구락부🍖' },
  { src: '/images/70.jpg', caption: '오빠가 GPT로 맹글어준 우리 사진🎞️' },
  { src: '/images/71.jpg', caption: '선화동 고기집 야장 또 가고싶어!🥩' },
  { src: '/images/72.jpg', caption: '배실댁!😊' },
  { src: '/images/73.jpg', caption: '기여운 고양이 있는 까페🐱' },
  { src: '/images/74.jpg', caption: '동학사 테라스에서 먹었던 추운 날🥶' },
  { src: '/images/75.jpg', caption: '장군집! 너무 달아😣' },
  { src: '/images/76.jpg', caption: '중리동 형제수산 맛이 변해쏘😥' },
  { src: '/images/77.jpg', caption: '갈마쌀롱 대준맛🍴' },
  { src: '/images/78.jpg', caption: '우린 오징어 처돌이🦑' },
  { src: '/images/79.jpg', caption: '배부를땐 육연이쥬!😊' },
  { src: '/images/80.jpg', caption: '홈파티는 즐거어🤗' },
  { src: '/images/81.jpg', caption: '육사구이 안간지 넘 오래댔써!😗' },
  { src: '/images/82.jpg', caption: '우리 홈파티 꽤 많이 했구낭?😊' },
  { src: '/images/83.jpg', caption: '숯토리!😗' },
  { src: '/images/84.jpg', caption: '미카사로 연어 너무 마싰써😛' },
  { src: '/images/85.jpg', caption: '남훈시가 좋아하는 쯔보미 오뎅탕🍢' },
  { src: '/images/86.jpg', caption: '남훈시가 찾아준 존맛탱 라멘🍜' },
  { src: '/images/87.jpg', caption: '웨이팅 성공! 샤브올데이😛' },
  { src: '/images/88.jpg', caption: '민생회복소비쿠폰 플렉스하기🤗' },
  { src: '/images/89.jpg', caption: '월미도 여행🚆' },
  { src: '/images/90.jpg', caption: '남훈시가 사준 마싯는 조개꾸이🍴' },
  { src: '/images/91.jpg', caption: '바이킹 타는 남훈시 ㄱㅇㅇ💓' },
  { src: '/images/92.jpg', caption: '쪼꼼 찔긴 스테이크😳' },
  { src: '/images/93.jpg', caption: '대하꾸이' },
  { src: '/images/94.jpg', caption: '모태쏠로 보면서 홈파티🍴' },
];

const Gallery = () => {
  return (
    <section className='gallery'>
      <h2>우리가 함께한 추억들</h2>
      <p>(사실 먹을 것 뿌니 없지만🤭)</p>
      <div className='photos'>
        {photos.map((p, idx) => (
          <div key={idx}>
            <img src={p.src} alt={`memory-${idx}`} />
            <div className='caption'>{p.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;