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
import IntroImg from './img/IntroImg.jpg';

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
                <div className={"nulIntro"}>
                    <div className={"nulIntroImg"}>
                        <img src={IntroImg} alt={"IntroImg"}/>
                    </div>
                    <div className={"nulIntroDescription"}>
                        <header>DSLDB란?</header>
                        <span>
                            DSLDB 설명란
                        </span>
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
            <div className={"mainContent"}>
                <MainContent/>
            </div>
        </div>
    );
}

export default App;