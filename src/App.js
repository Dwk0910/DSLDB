import './App.css';
import { useSearchParams } from 'react-router-dom';

// FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faBinoculars,
    faMagnifyingGlass,
    faQuestionCircle,
    faBell,
    faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';

// Local Import
import nulIntroImg from './img/IntroImg.jpg';

function MenuBar(props) {
    const [ queryParams ] = useSearchParams();
    const selectedPage = queryParams.get('pid');
    const lis = [];
    for (let i = 0; i < props.content.length; i++) {
        let t = props.content[i];
        if (selectedPage === t.target) lis.push(<a key={i} className={"selected"} href={"?pid=" + t.target}><FontAwesomeIcon icon={t.icon}/> {t.title}</a>);
        else lis.push((t.title === "Home") ? <a key={i} href={"/"}><FontAwesomeIcon icon={faHome}/> {t.title}</a> : <a key={i} href={"?pid=" + t.target}><FontAwesomeIcon icon={t.icon}/> {t.title}</a>);
    }

    return (
        <div className={"menuBar"}>
            {lis}
        </div>
    );
}

function MainContent() {
    const [ queryParams ] = useSearchParams();
    const selectedPage = queryParams.get('pid');

    let result = "";
    switch (selectedPage) {
        case null:
            result = (
                <div className={"nul"}>
                    <div className={"nulIntro"}>
                        <div className={"nulIntroImg"}>
                            <img src={nulIntroImg} alt={"IntroImg"}/>
                        </div>
                        <div className={"nulIntroDescription"}>
                            <header>DSLDB란?</header>
                            <span>
                                DSLDB에 오신 유저여러분을 환영합니다!<br/>
                                DSLDB는 2023년 9월부터 개발을 시작하여<br/>
                                2024년을 맞춰 공개된 차세대 정보열람용 웹사이트입니다.<br/><br/>
                                DSL유저 모두 언제든지 이용 가능하며<br/>
                                서로간의 깨끗한 인터넷 사용문화를<br/>
                                유지시켜가며 이용을 부탁드립니다!
                            </span>
                        </div>
                    </div>
                </div>
            );
        break;

        default:
            console.log(404);
        break;
    }

    return result;
}

function App() {
    return (
        <div className={"App"}>
            <MenuBar content={[
                {
                    title: "Home"
                },
                {
                    title: "검색",
                    icon: faMagnifyingGlass,
                    target: "srh"
                },
                {
                    title: "둘러보기",
                    icon: faBinoculars,
                    target: "bws"
                },
                {
                    title: "알림",
                    icon: faBell,
                    target: "nof"
                },
                {
                    title: "DSL을 만든 사람들",
                    icon: faPeopleGroup,
                    target: "wmd"
                },
                {
                    title: "도움말",
                    icon: faQuestionCircle,
                    target: "inf"
                }
            ]}/>
            <div className={"ContentWrap"}>
                <div className={"mainContent"}>
                    <MainContent/>
                </div>
            </div>
            <footer>
                <header>
                    Copyright 2023. DSL Official Server All rights reserved.
                </header>
                <span>
                    이 사이트는 DSL서버법을 따르고 있습니다.
                </span>
            </footer>
        </div>
    );
}

export default App;