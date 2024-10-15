import React, { useEffect, useState } from 'react';
import './styles/common.scss';
import Title from './components/title/Title';
import Navigation from './components/navigation/Navigation';
import IPage from './entity/page';
import Page from './components/content/Page';
import Footer from './components/footer/Footer';
import Roll from './components/roll/Roll';
import About from './components/content/contents/about/About';
import Target from './components/content/contents/target/Target';
import Links from './components/content/contents/links/Links';

function App() {

  let [pages, setPages] = useState<IPage[]>(
    [
      {
        key: "about",
        text: "О себе",
        content: <About></About>
      },
      {
        key: "target",
        text: "Цели",
        content: <Target></Target>
      },
      {
        key: "links",
        text: "Ссылки",
        content: <Links></Links>
      }
    ]
  );
  let [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App">
      <Roll></Roll>

      <img src="https://i.imgur.com/Pac5lus.gif" className="clip" />

      <div className="background"></div>
      
      <div className="content">
        <Title></Title>
        <Navigation pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}></Navigation>
        <Page content={pages[currentPage].content}></Page>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
