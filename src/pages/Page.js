import Swal from "sweetalert2";
import { useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faArrowLeft, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import MDEditor from '@uiw/react-md-editor';

// Local Import
import userList from "../save/userlist.json";
import contentList from "../save/contentlist.json";
import nulIntroImg from "../img/IntroImg.jpg";

export function LoginForm() {
    if (typeof localStorage.getItem('id') === 'string') {
        alert('잘못된 접근입니다.');
        window.location.replace(".");
    }

    if (localStorage.getItem('loginFailed') === "true") {
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            title: '아이디 또는 비밀번호가\n잘못되었습니다.',
            icon: 'error'
        }).then(() => {
            localStorage.removeItem('loginFailed');
        });
    }

    return (
        <div className={"Login"}>
            <span style={{fontSize: "2vw"}}>DSLDB LOGIN</span>
            <form className={"LoginForm"}>
                <input type={"hidden"} name={"pid"} value={"ReqLogin"}/>
                <input type={"text"} name={"id"} placeholder={"아이디"}/>
                <input type={"password"} name={"pwd"} placeholder={"비밀번호"}/>
                <input type={"submit"} value={"로그인"}/>
            </form>
        </div>
    );
}

export function ReqLogin() {
    const [ queryParams ] = useSearchParams();
    const typedID = queryParams.get('id');
    const typedPWD = queryParams.get('pwd');

    let referrer_bef = document.referrer.split("?")[document.referrer.split("?").length - 1];
    let referrer = referrer_bef.split("=");

    if (referrer[referrer.length - 1] !== 'login') {
        alert("잘못된 접근입니다.");
        window.history.back();
        return;
    }

    for (let i in userList) {
        if (typedID === userList[i].id) {
            if (typedPWD === userList[i].pwd) {
                localStorage.setItem('IsLogin', 'true');
                localStorage.setItem('firstJoin', 'true');
                localStorage.setItem('id', typedID);
                localStorage.setItem('pwd', typedPWD);
                window.location.replace(".");
                return;
            } else {
                break;
            }
        }
    }

    localStorage.setItem('loginFailed', 'true');
    window.location.replace("?pid=login");
}

export function Logout() {
    if (typeof localStorage.getItem('id') !== 'string') {
        alert('잘못된 접근입니다.');
        window.location.replace(".");
    } else {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('id');
        localStorage.removeItem('pwd');

        localStorage.setItem('isLogout', 'true');
        window.location.replace(".");
    }
}

// Normal Pages

export function Nul() {
    return (
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
}

export function Browse() {
    const [ queryParams ] = useSearchParams();
    const selectedMode = queryParams.get('mode');
    const queryString = queryParams.get('qry');

    let SortedContentList = contentList.toSorted((a, b) => new Date(a.date) - new Date (b.date)).reverse();

    let SliceString = (targetStr, mch) => {
        if (targetStr.length <= mch) {
            return (targetStr);
        }

        return(targetStr.substring(0, mch) + "...");
    }

    let GetIndex = (targetName, targetOwner, TargetDate, targetContent) => {
        for (let i in contentList) {
            if (contentList[i].name === targetName && contentList[i].owner === targetOwner && contentList[i].date === TargetDate && contentList[i].content === targetContent) {
                return i;
            }
        }
        console.log("ERROR");
        return null;
    }

    let browseContent = [];

    if (selectedMode === 'search') {
        if (queryString === '') window.location.replace("?pid=bws");

        const q = queryString.toLowerCase();
        let containList = [];

        for (let i in SortedContentList) {
            let target = SortedContentList[i].name.toLowerCase();
            if (target.includes(q)) containList.push(GetIndex(SortedContentList[i].name, SortedContentList[i].owner, SortedContentList[i].date, SortedContentList[i].content));
        }

        for (let i in containList) {
            let index = parseInt(GetIndex(SortedContentList[i].name, SortedContentList[i].owner, SortedContentList[i].date, SortedContentList[i].content));

            browseContent.push(
                <div className={"browseContainer"} key={i} onClick={() => {
                    window.location.replace(`?pid=ViewContent&idx=${index + 1}`)
                }}>
                    <header>{SliceString(contentList[containList[i]].name, 17)}</header>
                    <span>{contentList[containList[i]].owner}</span>
                    <span>{contentList[containList[i]].date}</span>
                </div>
            );
        }
    } else {
        for (let i in SortedContentList) {
            let index = parseInt(GetIndex(SortedContentList[i].name, SortedContentList[i].owner, SortedContentList[i].date, SortedContentList[i].content));

            browseContent.push(
                <div className={"browseContainer"} key={i} onClick={() => {
                    window.location.replace(`?pid=ViewContent&idx=${index + 1}`)
                }}>
                    <header>{SliceString(SortedContentList[i].name, 17)}</header>
                    <span>{SortedContentList[i].owner}</span>
                    <span>{SortedContentList[i].date}</span>
                </div>
            );
        }
    }

    let plusContent = () => {
        if (typeof localStorage.getItem('id') === 'string') {
            return (<span className={"contentAdd"}><FontAwesomeIcon icon={faPlusCircle}/> 글 쓰기</span>);
        }
    };

    return (
        <div className={"browse"}>
            <form>
                <input type={"hidden"} name={"pid"} value={"bws"}/>
                <input type={"hidden"} name={"mode"} value={"search"}/>
                <input type={"text"} name={"qry"} placeholder={"검색어 입력"} defaultValue={queryString}/>
                <input type={"submit"} value={"검색"}/>
            </form>
            {plusContent()}
            <div className={"browseContentParent"}>
                <div className={"browseContent"}>
                    {browseContent}
                </div>
            </div>
        </div>
    );
}

export function ViewContent() {
    const [ queryParams ] = useSearchParams();
    const index = parseInt(queryParams.get('idx')) - 1;

    let titleArr = [];
    if (localStorage.getItem('id') === contentList[index].owner) {
        titleArr.push(<a href={`?pid=EditContent&idx=${index + 1}`}><FontAwesomeIcon icon={faPencil}/></a>);
        titleArr.push(<a href={`?pid=DeleteContent&idx=${index + 1}`}><FontAwesomeIcon icon={faTrashCan}/></a>);
    }

    return (
        <div className={"ViewContent"}>
            <div className={"ViewContentTitle"}>
                <a style={{marginLeft: "9%"}} href={"?pid=bws"}><FontAwesomeIcon icon={faArrowLeft}/> 돌아가기</a>
                {titleArr}
                <span>{contentList[index].name}</span>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div><span>작성일 : </span><span>{contentList[index].date}</span></div>
                    <div><span>작성자 : </span><span>{contentList[index].owner}</span></div>
                </div>
            </div>
            <div className={"ViewContentDetail"} data-color-mode={"light"}>
                <MDEditor.Markdown source={contentList[index].content} style={{
                    backgroundColor: "transparent",
                    width: "80%",
                    marginLeft: "9%",
                    marginTop: "1%",
                    marginBottom: "2%",
                    padding: "2%",
                    borderRadius: "5px",
                    backdropFilter: "blur(5px)"
                }}/>
            </div>
        </div>
    );
}