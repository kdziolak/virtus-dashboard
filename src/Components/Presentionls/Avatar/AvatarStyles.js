import styled from 'styled-components';
// import profile from './img/profile.jpg'

export const StyledAvatar = styled.div`

        width: ${({ size }) => size ? size : '40px'};
        height: ${({ size }) => size ? size : '40px'};
        border-radius:50%;
        background-image: url('http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 10px;

    @media screen and (min-width: 520px) {
        width: 40px;
        height: 40px;
        border-radius:50%;
        background-image: url('http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 10px;
    }
`