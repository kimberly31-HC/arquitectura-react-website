import React, { useState } from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaWhatsapp,
  FaShareAlt
} from 'react-icons/fa';
import styled from 'styled-components';

// Definir estilos con styled-components
const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  z-index: 1000;

  &.expanded .socialButton {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const SocialButton = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  text-decoration: none;
`;

const MainButton = styled.button`
  background-color: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border: none;
  transition: all 0.3s ease;
`;

const SocialFloat = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <Container className={expanded ? 'expanded' : ''}>
      <SocialButton href="https://facebook.com/tupagina" target="_blank" aria-label="Facebook">
        <FaFacebook />
      </SocialButton>

      <SocialButton href="https://twitter.com/tupagina" target="_blank" aria-label="Twitter">
        <FaTwitter />
      </SocialButton>

      <SocialButton href="https://instagram.com/tupagina" target="_blank" aria-label="Instagram">
        <FaInstagram />
      </SocialButton>

      <SocialButton href="https://linkedin.com/company/tupagina" target="_blank" aria-label="LinkedIn">
        <FaLinkedin />
      </SocialButton>

      <SocialButton href="https://wa.me/tunumero" target="_blank" aria-label="WhatsApp">
        <FaWhatsapp />
      </SocialButton>

      <MainButton onClick={toggleExpand} aria-label={expanded ? 'Ocultar redes' : 'Mostrar redes'}>
        <FaShareAlt />
      </MainButton>
    </Container>
  );
};

export default SocialFloat;
