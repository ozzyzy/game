import { FC, useState } from 'react'
import { Circle } from '../components/Circle'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { ButtonStart } from '../components/ButtonStart'

export const sectors: ISector[] = [
    {
        name: 'spring',
        color: '#93C700',
    },
    {
        name: 'summer',
        color: '#FFC801',
    },
    {
        name: 'autumn',
        color: '#FF530D',
    },
    {
        name: 'winter',
        color: '#0E99DA',
    },
]

export const Home: FC = () => {
    const [coloredRegion, setColoredRegion] = useState<number | null>(null)
    const [startTime, setStartTime] = useState<number | null>(null)
    const [timeResult, setTimeResult] = useState<number | null>(null)
    const [isWrong, setIsWrong] = useState<boolean>(false)
    const [result, setResult] = useState<number[]>([])

    const onStart = () => {
        setIsWrong(false)
        setColoredRegion(Math.floor(Math.random() * sectors.length))
        setStartTime(new Date().getTime())
    }

    const onSelect = (index: number) => {
        if (!startTime) return

        if (index === coloredRegion) {
            setTimeResult((new Date().getTime() - startTime) / 1000)
            onStart()
        } else {
            setIsWrong(true)
            setColoredRegion(null)
            setTimeResult(null)
        }
        if (result.length < 10) {
            //keep this array of results for future processing
            setResult([...result, timeResult as number])
        } else {
            setResult(result.slice(1))
            setResult([...result, timeResult as number])
        }
    }

    return (
        <HomeComponent>
            <Header result={timeResult} isWrong={isWrong} />
            <ButtonStart onStart={onStart} disabled={!!startTime && !isWrong} />
            <Circle coloredRegion={coloredRegion} onSelect={onSelect} />
        </HomeComponent>
    )
}

const HomeComponent = styled.div`
    position: relative;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: hidden;
`

export interface ISector {
    name: string
    color: string
}
