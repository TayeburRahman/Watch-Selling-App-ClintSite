import React from 'react'
import ImageCard1 from './ImageCard1'
import ImageCard2 from './ImageCard2'
import ImageCard3 from './ImageCard3'

function  ImagecardMain() {
    return (
        <div className='hight row'>
            <div className='col-md-6 hight-row col-lg-4 col-sm-12'>
                <ImageCard1></ImageCard1>
            </div>
            <div className='hight-row col-md-6 col-lg-4 col-sm-12'>
                <ImageCard3></ImageCard3>
            </div>
            <div className='hight-row col-md-6 col-lg-4 col-sm-12'>
                <ImageCard2></ImageCard2>
            </div>
        </div>
    )
}

export default  ImagecardMain
