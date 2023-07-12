import { FC } from 'react'
import styled from 'styled-components'

export const Header: FC<IHeaderProps> = ({ result, isWrong }) => {
    if (isWrong) {
        return <HeaderComponent isWrong={isWrong}>Try again!</HeaderComponent>
    }

    if (!result) {
        return <HeaderComponent>Start the game to see how nimble you are!</HeaderComponent>
    }

    return <HeaderComponent>Your result : {result} seconds</HeaderComponent>
}

const HeaderComponent = styled.div<IHeaderComponentProps>`
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 40px;
    color: ${(props: IHeaderComponentProps) => (props.isWrong ? '#BF0040' : '#221820')};
    margin-top: 40px;
`

export interface IHeaderProps {
    result: number | null
    isWrong: boolean
}

interface IHeaderComponentProps {
    isWrong?: boolean
}
