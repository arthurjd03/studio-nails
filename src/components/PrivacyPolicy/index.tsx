import styles from "./styles.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.updated}>
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <p className={styles.paragraph}>
          Esta Política de Privacidade descreve como o site{" "}
          <strong>Suellen Nails</strong> coleta, usa e protege as informações
          fornecidas pelos visitantes, em conformidade com a Lei Geral de
          Proteção de Dados (LGPD — Lei nº 13.709/2018).
        </p>

        <h2 className={styles.subtitle}>1. Quais dados coletamos</h2>
        <p className={styles.paragraph}>
          Ao utilizar o formulário de agendamento, coletamos apenas os seguintes
          dados, fornecidos voluntariamente por você:
        </p>
        <ul className={styles.list}>
          <li>Nome completo</li>
          <li>Número de telefone</li>
          <li>Forma de pagamento escolhida</li>
          <li>Observações adicionais (quando informadas)</li>
        </ul>

        <h2 className={styles.subtitle}>2. Como usamos seus dados</h2>
        <p className={styles.paragraph}>
          As informações fornecidas são utilizadas exclusivamente para gerar uma
          mensagem de agendamento, enviada diretamente para o WhatsApp da
          profissional Suellen. Essa mensagem é criada localmente no seu
          navegador e enviada por você através do aplicativo WhatsApp.
        </p>

        <h2 className={styles.subtitle}>3. Armazenamento de dados</h2>
        <p className={styles.paragraph}>
          <strong>Este site não possui banco de dados.</strong> Nenhuma
          informação preenchida no formulário é armazenada, salva ou processada
          em servidores. Os dados existem apenas temporariamente no seu
          navegador durante o preenchimento e são descartados assim que a página
          é fechada ou recarregada.
        </p>

        <h2 className={styles.subtitle}>4. Compartilhamento de dados</h2>
        <p className={styles.paragraph}>
          Os dados informados são compartilhados unicamente com a profissional
          Suellen, através da mensagem enviada ao WhatsApp dela. Não
          compartilhamos, vendemos ou cedemos seus dados a terceiros, empresas
          de publicidade ou qualquer outra parte.
        </p>

        <h2 className={styles.subtitle}>5. Cookies</h2>
        <p className={styles.paragraph}>
          Este site não utiliza cookies de rastreamento, cookies de publicidade
          ou ferramentas de análise de comportamento. Não realizamos nenhum tipo
          de rastreamento de navegação.
        </p>

        <h2 className={styles.subtitle}>6. Seus direitos</h2>
        <p className={styles.paragraph}>
          De acordo com a LGPD, você tem direito a solicitar informações sobre
          eventuais dados tratados, sua correção ou exclusão. Como não
          armazenamos dados em banco, qualquer informação enviada existe apenas
          na conversa do WhatsApp gerada por você — podendo ser apagada
          diretamente pelo aplicativo, a qualquer momento.
        </p>

        <h2 className={styles.subtitle}>7. Contato</h2>
        <p className={styles.paragraph}>
          Em caso de dúvidas sobre esta Política de Privacidade, entre em
          contato através do WhatsApp disponível na seção de contato do site.
        </p>
      </div>
    </section>
  );
}
