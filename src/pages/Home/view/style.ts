import styled from "styled-components";

import Contact from "assets/img/ContactForm.jpg";
import Landing from "assets/img/landing.png";
import { Link } from "react-router-dom";

export const HomeContent = styled.div`
  width: 100%;
  height: calc(100vh - 84px);
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const LandingSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: calc(100vh - 84px);
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-image: url(${Landing});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.label`
  color: white;
  font-size: 64px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  max-width: 550px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const FindButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: var(--bg-primary-2);
  color: var(--primary-2);
  font-weight: 700;
  border-radius: 8px;
  border: none;
  padding: 10px 20px;
  &:hover {
    background-color: var(--primary-2);
    color: var(--bg-primary-2);
  }
  transition: all;
  transition-duration: 150ms;
`;

export const AboutSection = styled.div`
  width: 100vw;
  min-height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  gap: 46px;
`;

export const AboutImg = styled.img`
  border-radius: 36px 0px 36px 36px;
  max-width: 540px;
  height: 540px;
  object-fit: cover;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const AbouTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutTitle = styled.label`
  text-transform: uppercase;
  color: var(--primary-3);
  font-weight: 900;
  font-size: 20px;
`;

export const AboutSubtitle = styled.div`
  color: var(--primary-4);
  font-size: 48px;
  font-weight: 800;
  max-width: 520px;
`;

export const AboutDescription = styled.p`
  color: #333;
  font-size: 20px;
  font-weight: 700;
  max-width: 520px;
`;

export const AboutLearnButton = styled.button`
  background-color: var(--bg-primary-3);
  width: min-content;
  white-space: nowrap;
  border: none;
  padding: 10px 20px;
  color: var(--primary-3);
  font-size: 17px;
  font-weight: 600;
  border-radius: 8px;
  &:hover {
    background-color: var(--bg-primary-2);
    color: var(--bg-primary-1);
  }
  transition: all;
  transition-duration: 150ms;
`;

export const FeatureSection = styled.div`
  width: 100vw;
  height: calc(50vh - 42px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--primary-1);
  gap: 60px;
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 21px;
`;

export const FeatureTitle = styled.label`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
`;

export const FeatureSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  max-width: 500px;
`;

export const FeatureGroup = styled.div`
  display: flex;
  gap: 114px;
`;

export const FeatureIconGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;

export const FeatureIcon = styled.img`
  width: 134px;
  height: 134px;
`;

export const FeatureLabel = styled.label`
  color: #083143;
  font-size: 26px;
  font-weight: 800;
`;

export const ContactSection = styled.div`
  width: 100vw;
  height: calc(100vh - 84px);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;

export const ContactContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const ContactTitle = styled.label`
  color: var(--primary-3);
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 900;
  padding-bottom: 5px;
`;

export const ContactSubtitle = styled.p`
  color: var(--primary-1);
  text-transform: capitalize;
  font-size: 48px;
  max-width: 450px;
  font-weight: 800;
  padding-bottom: 20px;
`;

export const ContactDescription = styled.label`
  color: #333;
  font-size: 20px;
  font-weight: 400;
`;

export const ContactNumber = styled.label`
  color: var(--primary-5);
  font-size: 30px;
  font-weight: 900;
`;

export const ContactEmail = styled.label`
  color: var(--primary-5);
  font-size: 18px;
  font-weight: 800;
`;

export const ContactForm = styled.form`
  padding: 90px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 14px;
  background-image: url(${Contact});
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormLabel = styled.label`
  color: white;
  font-size: 16px;
  font-weight: 800;
`;

export const FormInput = styled.input`
  &:focus {
    outline: none;
  }
  padding: 16px;
  border-radius: 8px;
  border: none;
  min-width: 360px;
`;

export const SendButton = styled.button`
  background-color: var(--bg-primary-0);
  border-radius: 50px;
  border: none;
  color: white;
  width: min-content;
  white-space: nowrap;
  padding: 8px 16px;
`;

export const CareerSection = styled.div`
  width: 100vw;
  height: calc(45vh - 42px);
  background-image: url(${Contact});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CareerTitle = styled.div`
  color: white;
  font-size: 50px;
  font-weight: 800;
  padding-bottom: 6px;
`;

export const CareerSubTitle = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 500;
  padding-bottom: 26px;
`;

export const CareerButton = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  background-color: var(--bg-primary-2);
  border-radius: 50px;
  padding: 8px 16px;
`

export const FooterWrapper = styled.div`
  width: 100vw;
  height: calc(45vh - 42px);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding-top: 64px;
  padding-left: 120px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  padding-left: 120px;
`;

export const IntroTitle = styled.label`
  color: white;
  font-size: 40px;
  font-weight: 900;
`;

export const IntroSubtitle = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  max-width: 250px;
`;

export const LinkTitle = styled.label`
  color: var(--bg-primary-2);
  font-size: 20px;
  font-weight: 600;
`;

export const FootTitle = styled.label`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const LinkList = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactList = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 12px;
`;

export const ContactLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
`;
