import styled from 'styled-components';
import { MdFacebook } from 'react-icons/md';
import { BsTwitter, BsYoutube, BsTwitch, BsInstagram } from 'react-icons/bs';
import { StreamIcon } from 'src/config/images';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialButton
            icon={<MdFacebook style={{ width: '24px', height: '24px' }} />}
            link="https://www.facebook.com/Cradle-of-Sins-328966197835907"
          />
          <SocialButton
            icon={<BsTwitter style={{ width: '24px', height: '24px' }} />}
            link="https://twitter.com/cradleofsins"
          />
          <SocialButton
            icon={<BsYoutube style={{ width: '24px', height: '24px' }} />}
            link="https://www.youtube.com/channel/UCJYKItGmKLS9RxQVjvVN_Sg"
          />
          <SocialButton
            icon={<BsTwitch style={{ width: '24px', height: '24px' }} />}
            link="https://m.twitch.tv/cradleofsins/profile"
          />
          <SocialButton
            icon={<BsInstagram style={{ width: '24px', height: '24px' }} />}
            link="https://www.instagram.com/cradleofsins/"
          />
          <SocialButton
            icon={<img src={StreamIcon} style={{ width: '24px', height: '24px' }} />}
            link="https://store.steampowered.com/app/1037380/Cradle_of_Sins_VR/"
          />
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

interface SocialButtonProps {
  icon: React.ReactNode;
  link: string;
}

const SocialButton = (props: SocialButtonProps) => {
  const { icon, link } = props;
  return <SocialButtonContainer onClick={() => window.open(link)}>{icon}</SocialButtonContainer>;
};

const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #464f88;
  transition: all linear 0.2s;
  &:hover {
    background-color: #c5b357;
    transform: scale(1.1);
  }
`;
