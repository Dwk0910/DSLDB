// CSS Import
import './App.css';

// React Import
import { useSearchParams } from 'react-router-dom';

// Npm Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faMagnifyingGlass,
    faQuestionCircle,
    faBell,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2';

// Page Import
import {
    LoginForm,
    ReqLogin,
    Logout,
    Nul,
    Browse,
    ViewContent
} from './pages/Page';

function MenuBar(props) {
    const [ queryParams ] = useSearchParams();
    const selectedPage = queryParams.get('pid');
    const lis = [];
    for (let i = 0; i < props.content.length; i++) {
        let t = props.content[i];
        if (selectedPage === t.target) lis.push(<a key={i} className={"selected"} href={"?pid=" + t.target}><FontAwesomeIcon icon={t.icon}/> {t.title}</a>);
        else lis.push((t.title === "Home") ? <a key={i} href={"/"}><FontAwesomeIcon icon={faHome}/> {t.title}</a> : <a key={i} href={"?pid=" + t.target}><FontAwesomeIcon icon={t.icon}/> {t.title}</a>);
    }

    if (typeof localStorage.getItem('id') === 'object') {
        lis.push(<a key={"loginbtn"} href={"?pid=login"} style={{position: "absolute", right: "2%"}}>로그인</a>);
    } else {
        lis.push(<span key={"idspan"} style={{position: "absolute", right: "11%", fontSize: "1vw", padding: "1% 2% 1% 2%", borderRight: "1px solid black"}}>{localStorage.getItem('id')}</span>);
        lis.push(<span key={"loginbtn"} onClick={() => {
            Swal.fire({
                toast: true,
                title: '정말 로그아웃 하시겠습니까?',
                icon: 'question',
                confirmButtonText: '확인',
                cancelButtonText: '취소',
                showCancelButton: true,
            }).then((e) => {
                if (e.isConfirmed) {
                    window.location.replace("?pid=logout");
                }
            });
        }} id={"logoutButton"} style={{position: "absolute", right: "2%"}}><FontAwesomeIcon icon={faRightFromBracket}/> 로그아웃</span>);
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
            result = <Nul/>;
        break;
        case "login": result = <LoginForm/>; break;
        case "ReqLogin": result = <ReqLogin/>; break;
        case "logout": result = <Logout/>; break;
        case "bws": result = <Browse/>; break;
        case "ViewContent": result = <ViewContent/>; break;
        default: console.log(404); break;
    }

    return result;
}

function App() {
    if (typeof localStorage.getItem('firstJoin') !== 'object') {
        localStorage.removeItem('firstJoin');
        Swal.fire({
            toast: true,
            position: 'top-end',
            title: '로그인이 완료되었습니다.',
            icon: 'success',
            timer: 2500,
            timerProgressBar: true,
            showConfirmButton: false
        });
    }

    if (localStorage.getItem('isLogout') === 'true') {
        localStorage.removeItem('isLogout');
        Swal.fire({
            toast: true,
            position: 'top-end',
            title: '로그아웃 되었습니다.',
            icon: 'success',
            timer: 2500,
            timerProgressBar: true,
            showConfirmButton: false
        });
    }

    return (
        <div className={"App"}>
            <MenuBar content={[
                {
                    title: "Home"
                },
                {
                    title: "둘러보기",
                    icon: faMagnifyingGlass,
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