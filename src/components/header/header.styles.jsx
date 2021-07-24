import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 0px 25px 25px 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const OptionLinks = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`

//With styled components we can import css, and with that we can set the css to a variable and apply the same style to multiple components
//import styled, { css } from 'styled-components';

// const OptionContainerStyles = css`
// padding: 10px 15px;
// cursor: pointer;
// `
// export const OptionLinks = styled(Link)`
//     ${OptionContainerStyles}
// `

// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `