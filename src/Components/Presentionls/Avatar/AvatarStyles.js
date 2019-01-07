import styled from 'styled-components';
// import profile from './img/profile.jpg'

export const StyledAvatar = styled.div`
        width: ${({ size }) => size ? size : '4rem'};
        height: ${({ size }) => size ? size : '4rem'};
        border-radius:50%;
        background-image: ${({ avatarImg }) => avatarImg ? `url(${avatarImg})` : `url('http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png')`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 1rem;
`