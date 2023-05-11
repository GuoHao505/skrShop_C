import React from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from '../../store/actions'
import { Shop } from '../../types/index';
import SwiperHreader from './childComps/SwiperHreader';
import AnCar from './childComps/AnCar';
import SwiperList from './childComps/SwiperList';
import SwiperCarousel from './childComps/SwiperCarousel';
import SwiperColor from './childComps/SwiperColor';
import SwiperAndList from './childComps/SwiperAndList';
import TypeList from './childComps/TypeList';
import './index.scss'


export default function Home(){
   
    return (
        <div className='home'>
            <div className='SwiperHreader'>
                <SwiperHreader/>
            </div>
            <div className='title'>
                <p>Basketball shoes</p>
            </div>
            <div className='AnCard'>
                <AnCar width={'calc(25% - 8px)'} name={'篮球鞋'} start={0} end={4}/>
            </div>
            <div className='title'>
                <p>Skate shoes</p>
            </div>
            <div className='SwiperList'>
                <SwiperList/>
            </div>
            <div className='title'>
                <p>Running shoes</p>
            </div>
            <div className='SwiperCarousel'>
                <SwiperCarousel/>
            </div>

             <div className='title'>
                <p>Casual shoes</p>
            </div>
            <div className='SwiperColor'>
                <SwiperColor/>
            </div>
            <div className='AnCard'>
                <AnCar width={'calc(12.5% - 8px)'} name={'休闲鞋'} start={0} end={8}/>
            </div>
            <div className='title'>
                <p>Recommend+</p>
            </div>
            <div className='SwiperAndList'>
                <SwiperAndList/>
            </div>
            <div>
                <TypeList/>
            </div>
        </div>
    )
}
