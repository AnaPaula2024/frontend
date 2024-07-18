import React from 'react';
import 'animate.css'; 
import cadeadoPolitica from '../assets/img/cadeado-politica.png';
import userPolitica from '../assets/img/user-politica.png';
import styles from './PrivacyPolicy.module.css'; 


function PrivacyPolicy() {
    return (
        <main className={`animate__animated animate__fadeIn ${styles.main}`}>
            <section className={styles.privacyPolicy}>
                <div className={styles.privacyPolicyIcons}>
                    <img src={cadeadoPolitica} alt="Cadeado de segurança" className="icon" />
                    <h1 className={styles.privacyPolicyH1}>Política de Privacidade</h1>
                    <img src={userPolitica} alt="User segurança" className="icon" />
                </div>
                <p className={styles.privacyPolicyP}>A privacidade dos nossos clientes é de extrema importância para nós, portanto esse documento descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você visita nosso site WALCEM.</p>

                <h2 className={styles.privacyPolicyH2}>Quais dados coletamos?</h2>
                <p className={styles.privacyPolicyP}>Coletamos diversos tipos de dados, incluindo:</p>
                <ul className={styles.privacyPolicyUl}>
                    <li className={styles.privacyPolicyLi}><strong className={styles.privacyPolicyStrong}>Dados pessoais fornecidos pelo usuário:</strong> Nome, telefone, CPF, endereço de e-mail.</li>
                    <li className={styles.privacyPolicyLi}><strong className={styles.privacyPolicyStrong}>Dados coletados automaticamente:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site.</li>
                </ul>

                <h2 className={styles.privacyPolicyH2}>Como usamos esses dados?</h2>
                <p className={styles.privacyPolicyP}>Os dados coletados são utilizados para:</p>
                <ul className={styles.privacyPolicyUl}>
                    <li className={styles.privacyPolicyLi}>Melhorar sua experiência no site e personalizar o conteúdo.</li>
                    <li className={styles.privacyPolicyLi}>Garantir a segurança dos nossos serviços.</li>
                    <li className={styles.privacyPolicyLi}>Comunicar informações importantes e atualizações.</li>
                    <li className={styles.privacyPolicyLi}>Realizar análises e melhorias contínuas do site.</li>
                </ul>

                <h2 className={styles.privacyPolicyH2}>Com quem compartilhamos seus dados?</h2>
                <p className={styles.privacyPolicyP}>Seus dados podem ser compartilhados com:</p>
                <ul className={styles.privacyPolicyUl}>
                    <li className={styles.privacyPolicyLi}><strong className={styles.privacyPolicyStrong}>Fornecedores de serviços:</strong> Empresas de postos de coleta.</li>
                    <li className={styles.privacyPolicyLi}><strong className={styles.privacyPolicyStrong}>Parceiros comerciais:</strong> Empresas com as quais colaboramos para oferecer produtos e serviços.</li>
                    <li className={styles.privacyPolicyLi}><strong className={styles.privacyPolicyStrong}>Obrigação legal:</strong> Quando necessário para cumprir a legislação aplicável ou responder a processos legais.</li>
                </ul>

                <h2 className={styles.privacyPolicyH2}>Como guardamos e protegemos seus dados?</h2>
                <p className={styles.privacyPolicyP}>Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e administrativas. Utilizamos criptografia, firewalls e controles de acesso para garantir a segurança dos dados.</p>

                <h2 className={styles.privacyPolicyH2}>Seus direitos como titular dos dados</h2>
                <p className={styles.privacyPolicyP}>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
                <ul className={styles.privacyPolicyUl}>
                    <li className={styles.privacyPolicyLi}>Acessar seus dados.</li>
                    <li className={styles.privacyPolicyLi}>Corrigir dados incorretos ou incompletos.</li>
                    <li className={styles.privacyPolicyLi}>Solicitar a exclusão dos seus dados.</li>
                    <li className={styles.privacyPolicyLi}>Restringir o processamento dos seus dados.</li>
                    <li className={styles.privacyPolicyLi}>Portabilidade dos dados.</li>
                    <li className={styles.privacyPolicyLi}>Retirar o consentimento a qualquer momento.</li>
                </ul>
                <p className={styles.privacyPolicyP}>Para exercer esses direitos, entre em contato conosco através das informações fornecidas abaixo.</p>

                <h2 className={styles.privacyPolicyH2}>Alterações na política de privacidade</h2>
                <p className={styles.privacyPolicyP}>Podemos atualizar periodicamente e notificaremos você sobre quaisquer alterações publicando a nova política de privacidade no site. Recomendamos que você revise regularmente para se manter informado sobre como estamos protegendo seus dados.</p>

                <h2 className={styles.privacyPolicyH2}>Contato</h2>
                <p className={styles.privacyPolicyP}>Se você tiver dúvidas ou preocupações sobre nossa política de privacidade, entre em contato conosco:</p>
                <ul className={styles.privacyPolicyUl}>
                    <li className={styles.privacyPolicyLi}>Email: contato@walcem.com.br</li>
                    <li className={styles.privacyPolicyLi}>Telefone: 111-4094-0378</li>
                </ul>

                <h2 className={styles.privacyPolicyH2}>Legislação Aplicável</h2>
                <p className={styles.privacyPolicyP}>Esta política de privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil. Para mais informações sobre seus direitos, visite o site oficial da ANPD (Autoridade Nacional de Proteção de Dados).</p>
            </section>
        </main>
    );
}

export default PrivacyPolicy;
