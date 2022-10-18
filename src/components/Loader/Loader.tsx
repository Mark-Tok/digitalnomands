import React from 'react';

import { InfinitySpin } from 'react-loader-spinner'
import styled from 'styled-components'
import { useI18n } from 'hooks/useI18n '
import './animation.css'
import {  EnKey } from 'constanst/keys'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const WrapperLoader = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
height: 100vh;
`

const Transition = styled(TransitionGroup)`
position: relative;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

type LoaderProps = {
    step: number
    errorRequests: string[]
}

export const Loader: React.FC<LoaderProps> = ({ step, errorRequests }) => {
    const status = useI18n(EnKey);
    const mapToStatus: Record<string, string> = {
        0: status['Loading.Post'],
        1: status['Loading.Comments'],
        2: status['Loading.Albums'],
        3: status['Loading.Photos'],
        4: status['Loading.Todos'],
        5: status['Loading.Users'],
        6: status['Success.LoadingFinished']
    }
    return (
        <WrapperLoader>
            <InfinitySpin
                width='200'
                color="#0bcf6b"
            />
            {mapToStatus?.[step] && <Transition>
                <CSSTransition key={Math.random() + ''} timeout={500} classNames="status">
                    <div className='status-item'> {mapToStatus[step]} </div>
                </CSSTransition>
            </Transition>}
            <div className='errors'>
                {!!errorRequests.length ? errorRequests.map((item) => {
                    return <div>{`Ошибка модуля: ${item}`}</div>
                }) : null}
            </div>
        </WrapperLoader>
    );
}