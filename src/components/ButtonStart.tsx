import { FC } from 'react'
import styled from 'styled-components'

export const ButtonStart: FC<IButtonStartProps> = ({ onStart, disabled }) => {
    return (
        <StartButton onClick={() => (!disabled ? onStart() : null)} disabled={disabled}>
            Start
        </StartButton>
    )
}

const StartButton = styled.button`
    align-items: center;
    justify-content: center;
    padding: 12px 32px;
    border-radius: 4px;
    background-color: white;
    border: ${(props: IStartButtonComponentProps) =>
        props.disabled ? '4px solid #7A7479' : '4px solid #221820'};
    color: ${(props: IStartButtonComponentProps) => (props.disabled ? '#7A7479' : '#221820')};
    font-size: 24px;
    font-weight: bold;
    margin: 32px;

    &:hover {
        border: ${(props: IStartButtonComponentProps) =>
            props.disabled ? null : '4px solid #BCB9BC'};
        color: ${(props: IStartButtonComponentProps) => (props.disabled ? null : '#BCB9BC')};
    }
`

interface IButtonStartProps {
    onStart: VoidFunction
    disabled: boolean
}

interface IStartButtonComponentProps {
    disabled: boolean
}
