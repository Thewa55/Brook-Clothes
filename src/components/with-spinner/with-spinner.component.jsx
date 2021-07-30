import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style';

const withSpinner = WrappedComponent => { 
    const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer>

            </SpinnerContainer>
        </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner;
};

export default withSpinner