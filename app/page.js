"use client"; // これをファイルの先頭に追加

import { useEffect } from 'react';
import Link from 'next/link';
import './page.css';
import './styles/style.scss';
import styles from './page.module.css';

export default function Page() {
  useEffect(() => {
    const profileContainer = document.querySelector('.profile-container');
    const hobbyContainer = document.querySelector('.hobby-container');
    const noteContainer = document.querySelector('.note-container');
    const worksContainer = document.querySelector('.works-container');
    const topButton = document.querySelector('.top-button');
    const profileButton = document.querySelector('.profile-button');
    const hobbyButton = document.querySelector('.hobby-button');
    const newsButton = document.querySelector('.news-button');
    const worksButton = document.querySelector('.works-button');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    if (profileContainer) observer.observe(profileContainer);
    if (hobbyContainer) observer.observe(hobbyContainer);
    if (noteContainer) observer.observe(noteContainer);
    if (worksContainer) observer.observe(worksContainer); // worksContainerを監視

    if (topButton) {
      topButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.container')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    if (profileButton) {
      profileButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.profile')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    if (hobbyButton) {
      hobbyButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.hobby')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    if (newsButton) {
      newsButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.news')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    if (worksButton) {
      worksButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.works')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    // クリーンアップ関数
    return () => {
      if (topButton) topButton.removeEventListener('click', () => {});
      if (profileButton) profileButton.removeEventListener('click', () => {});
      if (hobbyButton) hobbyButton.removeEventListener('click', () => {});
      if (newsButton) newsButton.removeEventListener('click', () => {});
      if (worksButton) worksButton.removeEventListener('click', () => {});
      if (profileContainer) observer.unobserve(profileContainer);
      if (hobbyContainer) observer.unobserve(hobbyContainer);
      if (noteContainer) observer.unobserve(noteContainer);
      if (worksContainer) observer.unobserve(worksContainer); // worksContainerの監視を解除

    };
  }, []);
  
  
  return (
    <>
      <header>
        <div className="navbar-left">
          <Link href="#" className="b1 top-button">TOP</Link>
          <Link href="#" className="b1 profile-button">PROFILE</Link>
          <Link href="#" className="b1 hobby-button">HOBBY</Link>
          <Link href="#" className="b1 news-button">NEWS</Link>
          <Link href="#" className="b1 works-button">WORKS</Link>
        </div>
        <div className="navbar-right">
        </div> 
      </header>
      <div className="container" id="container">
        <div className="introduction">
          <p className="concept">～オンリーワンな超個性～</p>
          <img src="cube.jpg" className="cube"></img>
          <p>むっつーの頭は、ルービックキューブ。高い野心・自由な発想・天然・楽観的・シンプル・衝動性、これらが合わさったのが、むっつーである。</p>
        </div>
      </div>
      <div className="profile">
        <div className="profile-container">
          <p className="profile-title">プロフィール</p>
          <p className="profile-p">2004年12月10日:広島県内病院で爆誕⇒愛知県田原市で育つ</p>
          <p className="profile-p">2011年4月:田原中部小学校入学</p>
          <p className="profile-p">2013年4月:親の影響でソフトテニスを始める</p>
          <p className="profile-p">2017年1月:ソフトテニスダブルスで3位をとる。</p>
          <p className="profile-p">(むっつーは前衛で上手い後衛の友達に助けてもらった模様)</p>
          <p className="profile-p">2017年3月:同校卒業</p>
          <p className="profile-p">2017年4月:田原中学校入学</p>
          <p className="profile-p">2018年11月:部活の卓球大会で市内3位に入る(当時卓球にドハマりしてた)</p>
          <p className="profile-p">2020年3月:同校卒業</p>
          <p className="profile-p">2020年4月:愛知県立豊橋東高校入学</p>
          <p className="profile-p">2023年3月:同校卒業</p>
          <p className="profile-p">2024年4月:慶應義塾大学商学部入学⇒今に至る</p>
        </div>
      </div>
      <div className="hobby">
        <div className="hobby-container">
          <p className="hobby-title">趣味</p>
          <p className="hobby-p">❶アニメ: 同じアニメは最低5回は見ないと気が済まない。特に最近は「五等分の花嫁」にハマってしまった(ラブコメ系は実はこれが初めて)。自分の心の支えとなってるアニメは、ブルーロック・銀魂・ブラッククローバー。</p>
          <p className="hobby-p">❷ゲーム: 最近、一度データを消去したモンストに超ハマってしまっている(モンストのやりすぎが原因で、中3の愛知県模試で志望校の判定がAからDに落ちた経験あり)。</p>
          <p className="hobby-p">大学に入ってからはポケモン対戦もたまにやるようになった。11/8～11/11に開催されたインターネット公式大会で、194/14805という上位1.5%だった。だが実際は資格試験の勉強をしていて、構築を考えたり練習大会に参加したりする暇がなくて基本選出のヘルガーとコノヨザル以外適当に考えてた。だから、この順位見たときは「もう少し真面目にやればよかった」とすごく後悔してる。ちなみに構築は<a href="https://note.com/mute_wasp2483/n/n17c902c3586a" target="_blank" rel="noopener noreferrer" className="kotira">こちら</a>を参照。好きなポケモンはゼルネアス。</p>
          <p className="hobby-p">その他にも、1人でルービックキューブや旅行なども好きである。また、カラオケやボウリング、ボードゲームなど友達と遊ぶことも好きで、仲がいい友達に誘われたり、テンションが上がっているときにはだいたい発狂してる。</p>
        </div>
      </div>
      <div className="news">
        <div className="note-container">
          <p className="note-title">直近2ヶ月の出来事</p>
          <div className="note-item">
            <p>9/22：矢上祭でワードディスタンスゲームを展示(自分はほとんど何もしていない模様)</p>
          </div>
          <div className="note-item">
            <p>10/4：東急ストア日吉店でバイトを始める。</p>
          </div>
          <div className="note-item">
            <p>10/6：Pythonデータ分析実践試験に合格</p>
          </div>
          <div className="note-item">
            <p>11/11：ポケモン公式大会「スター団杯」194/14805 位(上位1.5%)</p>
          </div>
          <div className="note-item">
            <p>11/13：慶應AICの講習会「AIビジネス基礎」に参加</p>
          </div>
        </div>
      </div>
      <div class="works">
        <div className="works-container">
          <p className="note-title">自分が作ったもの</p>
          <div className="note-item">
              <Link href="/bcg" class="button-click-game b2">ボタンクリックゲーム</Link>
          </div>
        </div>
      </div>
    </>
  );
}
