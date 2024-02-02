import React from "react";
import * as S from './styles';

export default function Header() {
    return (
        <>
        <S.TabsContainer variant='enclosed'>
            <S.TabsList>
                {/* <S.Tabstext color={'yellowgreen'}>Notícias</S.Tabstext> */}
                <S.Tabstext color={'darkgreen'}>Esportes</S.Tabstext>
                {/* <S.Tabstext color={'blue'}>Lazer</S.Tabstext> */}
            </S.TabsList>

            {/* <S.TabsPanels>
                <S.TabPainel>
                <p>one!</p>
                </S.TabPainel>

                <S.TabPainel>
                <p>two!</p>
                </S.TabPainel>

                <S.TabPainel>
                <p>three!</p>
                </S.TabPainel>
            </S.TabsPanels> */}
        </S.TabsContainer>
        </>
    )
}