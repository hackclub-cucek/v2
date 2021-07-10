import React from 'react';
import { Button } from '../ButtonElements';
import {
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    InfoRow,
    InfoWrapper,
    InfoContainer,
    Subtitle,
    TextWrapper,
    TopLine,
    BtnWrap
} from './InfoElements'

const InfoSection3 = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    img,
    alt,
    primary,
    dark,
    dark2,
    buttonLabel,

}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        to={'/form'}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection3
