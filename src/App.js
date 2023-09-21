import './App.css';
import { useSearchParams } from 'react-router-dom';

// FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faBinoculars,
    faMagnifyingGlass,
    faQuestionCircle,
    faBell
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
                    <div className={"nulWho"}>
                        <header>DSL을 만든 사람들</header>
                        <div className={"nulWhoUser"}>
                            <header>디떱 (Dwk0910)</header>
                            <div className={"nulWhoDescription"}>
                                지금의 DSL을 있게 한 중요 인물.<br/>
                                DSL4인조 중 한명이다.<br/>
                                옛 오리지널을 시작하여 스노우를 만나고, 루아를 ASK에 넣고 고래를 TPOINT에 입사시키는 등<br/>
                                옛부터 활동을 이어온 중요한 인물 중 하나이다.<br/>
                                오리지널 팀으로부터 갈갈과 함께 Turbo팀을 만들었으며,<br/>
                                뒤에 갈갈과 함께 TPOINT를 만들었다.<br/>
                                구DSL을 신DSL로 바꾸면서 관리자로 올라오게 되었다.
                            </div>
                            <header>스노우</header>
                            <div className={"nulWhoDescription"}>
                                지금의 DSL을 있게 한 또다른 인물.<br/>
                                옛 친구들서버 총관리자였으며, DSL4인조 중 한명이다.<br/>
                                갈갈에 의하여 Dwk0910을 만나게 되었고, 옛 오리지널 크루원이였다고 한다.<br/>
                                서버 내 분쟁으로 인하여 오리지널에서 나오게 되었고<br/>
                                TPOINT때부터 Dwk0910과 함께 일을 시작하게 되었다.
                            </div>
                            <header>갈갈</header>
                            <div className={"nulWhoDescription"}>
                                지금의 DSL이 있게 해준 인물.<br/>
                                스노우와 Dwk0910을 만나게 해주었으며,<br/>
                                Dwk0910과 함께 TPOINT를 만들었다.<br/>
                                TPOINT가 해체된 이후로는 활동을 하지 않는다.<br/>
                                오리지널 팀에서 중요한 역할을 맡고 있었고,<br/>
                                Dwk0910에게 1차 팀분열을 같이하자고 말했던 사람들 중 한명이다.
                            </div>
                            <header>크픽</header>
                            <div className={"nulWhoDescription"}>
                                ASK, 무료화 배그방을 만든 사람이다.<br/>
                                이 사람 역시 오리지널에 같이 있었으며, 갈갈, 승우와 친한 사이였다.<br/>
                                Dwk0910에게 1차 팀분열을 같이하자고 말했던 사람들 중 한명이다.
                            </div>
                            <header>승우 (Sry)</header>
                            <div className={"nulWhoDescription"}>
                                Dwk0910이 처음으로 만난 사람.<br/>
                                현재까지도 친분을 유지하여 DSL서버에서 Sry라는 활동명으로 활동중이다.<br/>
                                오리지널에서 중요한 역할을 맡고 있었다.<br/>
                                크픽과 ASK를 같이 만든 사람이다.<br/>
                                Dwk0910에게 1차 팀분열을 같이하자고 말했던 사람들 중 한명이며, 처음으로 팀분열을 주장했다.
                            </div>
                            <header>루아 (LuaMetro)</header>
                            <div className={"nulWhoDescription"}>
                                DSL4인조 중 한명이다.<br/>
                                친구들서버에서 많이 활동하였으며, TSR을 만든 사람이다.<br/>
                                2022년부터 엄청난 노력으로 부관리자 자리를 얻게 되었다.<br/>
                                Dwk0910이 설득하여 ASK에 들어오게 하였으며, 그 이후 계속해서 활동을 이어가는 중이다.<br/>
                                구DSL을 신DSL로 바꾼 인물 중 하나이다.
                            </div>
                            <header>고래 (Skywhale)</header>
                            <div className={"nulWhoDescription"}>
                                DSL4인조 중 한명이다.<br/>
                                구DSL 총관리자 였으며, Dwk0910에 의해서 TPOINT에 입사한 후로 활동을 시작하게 되었다.<br/>
                                친구들서버에서 중요한 직급을 맡고 있었다.<br/>
                                구DSL 당시, 지하철서버를 주도했던 인물이다.
                            </div>
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
                <header>Copyright 2023. DSL All rights reserved.</header>
                <span>이 사이트는 DSL서버법을 따르고 있습니다.</span>
            </footer>
        </div>
    );
}

export default App;