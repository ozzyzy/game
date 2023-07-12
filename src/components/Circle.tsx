import React, { FC } from 'react'
import { Region } from './Region'
import { ISector, sectors } from '../pages/Home'
import styled from 'styled-components'

export const Circle: FC<ICircleProps> = ({ coloredRegion, onSelect }) => {
    return (
        <CircleComponent>
            {sectors.map((sector: ISector, i: number) => (
                <Region
                    key={sector.name}
                    index={i}
                    color={i === coloredRegion ? sector.color : '#D3D3D3'}
                    onSelect={(index: number) => onSelect(index)}
                />
            ))}
        </CircleComponent>
    )
}

const CircleComponent = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-grow: 1;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid grey;
`

interface ICircleProps {
    coloredRegion: number | null
    onSelect: (number: number) => void
}
