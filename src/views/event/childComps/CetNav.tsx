import React from 'react'
import '../../../styles/Event/nav.scss'
export default function CetNav() {
    return (
        <div className="cetNav">
            <div className="senction">
                <div className="my_brand_cont">
                    <div className="cont-title">
                        <h3 >
                            <p >MY❤BRAND EVENT</p></h3>
                    </div><div className="cont">
                        <p > 로그인 하시면 MY❤에 등록한 BRAND의 최근 EVENT를 확인할 수 있습니다. </p>
                        <a href="http://localhost:8080/login">로그인</a></div>
                </div><div className="benefit"><div className="benefit-title"><h3 ><p >BENEFIT</p></h3>
                </div><div className="benefit-cont"><ul >
                    <li ><a href="">
                        <img src="//image.wconcept.co.kr/images/builder/1/4/132/189/wc_benefit_03_20200713153123.png" alt="" /></a></li><li ><a href="">
                            <img src="//image.wconcept.co.kr/images/builder/1/4/132/189/wc_benefit_09_20190905092308.png" alt="" /></a>
                    </li><li ><a href="">
                        <img src="//image.wconcept.co.kr/images/builder/1/4/132/189/멤버쉽_20190731154447.jpg" alt="" />//</a></li><li ><a href="">
                            <img src="//image.wconcept.co.kr/images/builder/1/4/132/189/pc_icon_20210205184922_20210226182134.jpg" alt="" /></a></li></ul></div></div></div></div>
    )
}
