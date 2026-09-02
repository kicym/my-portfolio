import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  color: #fff; 
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }
    @media (max-width: 768px) {
        position: fixed;     
        top: 30px;           
        right: 110px;      
        z-index: 100000000;  
    }
`;

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLanguage = i18n.language.startsWith('en') ? 'ru' : 'en';
        i18n.changeLanguage(nextLanguage);
    };

    const isEn = i18n.language.startsWith('en');

    return (
        <StyledButton onClick={toggleLanguage}>
            {isEn ? 'EN' : 'RU'}
        </StyledButton>
    );
}
