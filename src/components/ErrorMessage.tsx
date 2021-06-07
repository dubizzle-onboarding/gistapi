import styled from "styled-components";

const ErrorContainer = styled.div`
    padding: 32px;
    text-align: center;
`

const ErrorText = styled.div`
    font-weight: 600;
    font-size: 20px;
`

const ErrorMessage = ({error, query}: {error: any, query?: string}) => {
    let errorMessage = "";
    
    if (error.status === 403) {
        // Forbidden
        errorMessage = "API rate limit exceeded.";
    } else if (error.status === 404) {
        // Not Found
        errorMessage = `We couldn’t find any gists matching the query "${query}".`;
    } else if (error.status === 204) {
        // No Content
        errorMessage = `${query} does not have any gists under their account`;
    } else {
        errorMessage = "Something went wrong";
    }

    return <ErrorContainer>
        <svg aria-hidden="true" viewBox="0 0 24 24" version="1.1" data-view-component="true" height="24" width="24" className="octicon octicon-search blankslate-icon">
            <path fill-rule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path>
        </svg>
        <ErrorText>{errorMessage}</ErrorText>
    </ErrorContainer>
}

export default ErrorMessage;