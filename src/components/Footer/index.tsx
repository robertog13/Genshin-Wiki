import { FooterSection, FooterSubSection, HeaderButton,  LinkStyled, ParagFooter, Title } from "../../style"
import { IoLogoGithub,IoLogoLinkedin } from "react-icons/io";


export const Footer = () => {

  return(
    <FooterSection>
      <FooterSubSection>
        <Title color="gray100">Desenvolvedor</Title>
        <ParagFooter>Site ciado e desenvolvido por Roberto Gonçalves de Araújo. Para mais informações sobre o desenvolvedor sinta-se avontade para vistar suas rede linkadas abaixo</ParagFooter>
        <HeaderButton to="https://github.com/robertog13">
          <IoLogoGithub size={30} />
        </HeaderButton>
        <HeaderButton to="https://www.linkedin.com/in/devroberto-goncalves/">
          <IoLogoLinkedin size={30} />
        </HeaderButton>
      </FooterSubSection>

      <FooterSubSection>
        <Title color="gray100">Genshin Impact</Title>
        <ParagFooter>O site apresenta informações do jogo Genshin, um jogo eletrônico RPG de ação gratuito desenvolvido e publicado pela desenvolvedora chinesa de jogos, miHoY. Se deseja baixar o jogo ou saber mais sobre recomendo que acesse o <LinkStyled to="https://genshin.hoyoverse.com/pt/">Site Oficial.</LinkStyled></ParagFooter>

      </FooterSubSection>

      <FooterSubSection>
        <Title color="gray100">Api</Title>
        <ParagFooter>As informações presentes nesse site foram retiradas da <LinkStyled to="https://github.com/genshindev/api">Api.GenshinImpact</LinkStyled>. Para melhores informações sobre quais informações estão presentes na API recomendo que visite o GitHub da API.</ParagFooter>
      </FooterSubSection>

    </FooterSection>
  )
}