import { FC } from 'react'
import styled from 'styled-components'

export const Region: FC<IRegion> = ({ index, color, onSelect }) => {
    return <RegionComponent color={color} index={index} onClick={() => onSelect(index)} />
}

const RegionComponent = styled.div<IRegionComponentProps>`
    width: calc(50% - 2px);
    height: calc(50% - 2px);
    background-color: ${(props: IRegionComponentProps) => props.color};
    border-left: ${(props: IRegionComponentProps) =>
        props.index % 2 !== 0 ? '4px solid grey' : ''};
    border-top: ${(props: IRegionComponentProps) => (props.index > 1 ? '4px solid grey' : '')};
`

interface IRegion {
    index: number
    color: string
    onSelect: (number: number) => void
}

interface IRegionComponentProps {
    color: string
    index: number
}
