import React from 'react'
import '../../../styles/Event/Word.scss'
export default function HotKeyWord() {
    return (
        <div className="hotkeyword">
            <div className="hotkeyword-cont">
                <h3 >hot keyword</h3><ul ><li >
                    <a href="">21SS도 함께할 베스트 아이템! #The Best, Forever</a></li>
                    <li ><a href="">매일 입고 싶은 클래식 #프론트로우 데님 컬렉션</a>
                    </li><li ><a href="">봄을 담은 #블라우스&amp;셔츠 </a></li><li >
                        <a href="">W컨셉에서만 만나볼 수 있는 #봄기운을 담은 백</a>
                    </li><li ><a href="">4월, 새롭게 주목할 #주얼리 브랜드 </a></li>
                </ul><p className="search">
                    <input type="text" placeholder="제목 또는 내용, 브랜드명 입력" className="ipt" /><button ><i aria-label="icon: search" className="search_ anticon anticon-search" >
                        <svg viewBox="64 64 896 896" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" className="">
                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                        </svg>
                    </i>
                    </button>
                </p>
            </div>
        </div>
    )
}
