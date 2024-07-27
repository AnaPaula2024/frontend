// src/components/PrivacyPolicy.jsx
import React from 'react';
import styles from '../assets/css/privacy-policy.module.css';
import cadeado from '../assets/img/cadeado-politica.png';
import user from '../assets/img/user-politica.png';

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacyPolicy}>
      <div className={styles.icons}>
        <img src={cadeado} alt="Cadeado de segurança" className={styles.icon} />
        <h1>Política de Privacidade</h1>
        <img src={user} alt="Ícone de segurança do usuário" className={styles.icon} />
      </div>

      <p>
        A privacidade dos nossos clientes é de extrema importância para nós. Este documento descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você visita nosso site, WALCEM.
      </p>
      
      <h2>Quais dados coletamos?</h2>
      <p>Coletamos diversos tipos de dados, incluindo:</p>
      <ul>
        <li><strong>Dados pessoais fornecidos pelo usuário:</strong> Nome, telefone, CPF, endereço de e-mail.</li>
        <li><strong>Dados coletados automaticamente:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site.</li>
      </ul>

      <h2>Como usamos esses dados?</h2>
      <p>Os dados coletados são utilizados para:</p>
      <ul>
        <li>Melhorar sua experiência no site e personalizar o conteúdo.</li>
        <li>Garantir a segurança dos nossos serviços.</li>
        <li>Comunicar informações importantes e atualizações.</li>
        <li>Realizar análises e melhorias contínuas do site.</li>
      </ul>

      <h2>Com quem compartilhamos seus dados?</h2>
      <p>Seus dados podem ser compartilhados com:</p>
      <ul>
        <li><strong>Fornecedores de serviços:</strong> Empresas responsáveis pelos postos de coleta.</li>
        <li><strong>Parceiros comerciais:</strong> Empresas com as quais colaboramos para oferecer produtos e serviços.</li>
        <li><strong>Obrigação legal:</strong> Quando necessário para cumprir a legislação aplicável ou responder a processos legais.</li>
      </ul>

      <h2>Como guardamos e protegemos seus dados?</h2>
      <p>Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e administrativas. Utilizamos criptografia, firewalls e controles de acesso para garantir a segurança dos dados.</p>

      <h2>Seus direitos como titular dos dados</h2>
      <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
      <ul>
        <li>Acessar seus dados.</li>
        <li>Corrigir dados incorretos ou incompletos.</li>
        <li>Solicitar a exclusão dos seus dados.</li>
        <li>Restringir o processamento dos seus dados.</li>
        <li>Solicitar a portabilidade dos dados.</li>
        <li>Retirar o consentimento a qualquer momento.</li>
      </ul>
      <p>Para exercer esses direitos, entre em contato conosco através das informações fornecidas abaixo.</p>

      <h2>Alterações na política de privacidade</h2>
      <p>Podemos atualizar periodicamente esta política de privacidade e notificaremos você sobre quaisquer alterações publicando a nova versão no site. Recomendamos que você revise regularmente para se manter informado sobre como estamos protegendo seus dados.</p>

      <h2>Contato</h2>
      <p>Se você tiver dúvidas ou preocupações sobre nossa política de privacidade, entre em contato conosco:</p>
      <ul>
        <li>Email: <a href="mailto:contato@walcem.com.br">contato@walcem.com.br</a></li>
        <li>Telefone: <a href="tel:1140940378">11 4094-0378</a></li>
      </ul>

      <h2>Legislação Aplicável</h2>
      <p>Esta política de privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil. Para mais informações sobre seus direitos, visite o site oficial da ANPD (Autoridade Nacional de Proteção de Dados).</p>
    </section>
  );
};

export default PrivacyPolicy;
