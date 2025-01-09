<h1 align="center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViCoMGDM9XiBXvlyB07xGRIIidiLMPfDxyQ&s" alt="PGE" height="200" width="300">
    <br>
</h1>

<div style="display: flex; justify-content: center;">
<a href="https://github.com/GustavoAvila123/DesafioBancoCarrefourMobile.git"><img src="https://img.shields.io/badge/-COMMITS-f44336?style=for-the-badge&logo=github&logoColor=white" width="100" height="22" style="margin-right: 5px;"/></a>
<a href="https://github.com/webdriverio/native-demo-app/releases"><img src="https://img.shields.io/badge/-DEMO-1da750?style=for-the-badge&logo=internet-explorer&logoColor=White" width="70" height="22" style="margin-right: 5px;"/></a>
</div>

---

<h4 align="center" style="color: white; font-size: 20px;">
    🚧 AUTOMAÇÃO DE TESTES | FRONT-END 🚧
</h4>

---

## <font color="white">💻 SOBRE O PROJETO</font>

<p style="color: white;">Este projeto é um conjunto abrangente de <strong>testes automatizados de aplicações móveis,</strong> desenvolvido para <strong>garantir a funcionalidade e a integridade de aplicativos Android e iOS.</strong><br>
Ele foi projetado para cobrir cenários críticos de uso e fornecer uma base sólida para validar a qualidade de suas aplicações.<br>

<strong>A estrutura dos testes assegura uma cobertura de 100%.</strong><br>

Além disso, o projeto está integrado em uma pipeline de CI, gerando relatórios dos resultados dos testes, garantindo que a aplicação móvel seja testada de forma contínua e eficiente.<br>

A aplicação visa garantir uma experiência <strong>CONFIÁVEL</strong> e sem falhas para todos os usuários.</p>

---

## <font color="white">🛠️ TECNOLOGIAS UTILIZADAS</font>

<font color="white">O projeto foi desenvolvido utilizando as seguintes tecnologias:</font>

- <span style="color: #f44336;">WebdriverIO: </span>Framework principal para automação dos testes.
- <span style="color: #f44336;">Appium: </span>Automação de dispositivos móveis Android e iOS.
- <span style="color: #f44336;">BrowserStack: </span>Execução dos testes em dispositivos reais e emuladores.
- <span style="color: #f44336;">Allure Report: </span>Geração de relatórios detalhados com evidências dos testes.

---

## <font color="white">📊 RECURSOS DE GERAÇÃO DE EVIDÊNCIAS</font>

<font color="white">O projeto possue os testes que incluem:</font>

- <span style="color: #f44336;">Relatórios Detalhados: </span>Resumo dos testes executados, organizados por cenários.
- <span style="color: #f44336;">Screenshots Automáticos: </span>Captura de telas em caso de falhas para facilitar a análise.
- <span style="color: #f44336;">Logs de Execução: </span>Registro detalhado das ações executadas durante o teste.
- <span style="color: #f44336;">Informações do Ambiente: </span>Dados sobre os dispositivos e sistemas operacionais utilizados.

---

## <font color="white">🚀 CONFIGURAÇÃO DO AMBIENTE</font>

<font color="white">O projeto necessita dos seguintes requisitos:</font>

- <span style="color: #f44336;">Node.js (v16 ou superior)</span>
- <span style="color: #f44336;">Navegadores e drivers configurados</span>
- <span style="color: #f44336;">Credenciais do BrowserStack</span>
- <span style="color: #f44336;">Aplicativo carregado no BrowserStack (IDs de aplicativo configurados no arquivo wdio.conf.js)</span>

---

## <font color="white">📂 COMO BAIXAR O PROJETO</font>

<pre>
<code class="language-bash">
<span style="color: #f44336;"># Clonar o repositório</span>
$ https://github.com/GustavoAvila123/DesafioBancoCarrefour.git

<span style="color: #f44336;"># Instalar as dependências</span>
$ npm install

<span style="color: #f44336;">#BrowserStack</span>
$ Configure as credenciais do BrowserStack no arquivo wdio.conf.js.

<span style="color: #f44336;"># Executando os testes</span>
$ npx wdio run wdio.conf.js

<span style="color: #f44336;"># Gerando o relatório</span>
$ allure generate allure-results --clean

<span style="color: #f44336;"># Abrindo o relatório gerado</span>
$ allure open
</code>
</pre>

## <font color="white">📝 RESUMO DA ESTRUTURA</font>

<p style="color: #FFFFFF;">
    🎬 TEST/SPECS/:<br>
    <font color="#f44336">&#10004;</font> Contém os testes organizados por funcionalidade.
</p>

<p style="color: #FFFFFF;">
    ⚪ PAGES/:<br>
    <font color="#f44336">&#10004;</font> Implementação do Page Object Model (POM) para organização de componentes de tela.
</p>

<p style="color: #FFFFFF;">
    ⏯️ ERRORSHOTS/:<br>
    <font color="#f44336">&#10004;</font> Diretório para armazenar screenshots de falhas.
</p>

<p style="color: #FFFFFF;">
    🔒 ALLURE-RESULTS/:<br>
    <font color="#f44336">&#10004;</font> Diretório com os resultados gerados para o Allure Report.
</p>

## <font color="white">🔍 OVERVIEW DOS TESTES</font>

<p style="color: #FFFFFF;">
    <strong style="color: #f44336;">BANCO CARREFOUR:</strong><br>
        <p style="text-align: justify; margin-left: 50px;">
    <strong>Testando a ausência de nome de usuário:</strong> Este teste verifica se, ao tentar fazer login sem fornecer um nome de usuário (campo vazio) mas com uma senha válida, a aplicação exibe a mensagem de erro esperada: "Username cannot be empty". O teste também registra no console uma mensagem detalhada se a mensagem de erro for diferente da esperada.
        <p style="text-align: justify; margin-left: 50px;">
    <strong>Testando a ausência de senha:</strong> Este teste valida se, ao tentar fazer login com um nome de usuário válido, mas sem fornecer uma senha (campo vazio), a aplicação exibe a mensagem de erro correta: "Password cannot be empty". Assim como o teste anterior, ele registra no console informações adicionais caso a mensagem de erro não corresponda ao esperado.
        <p style="text-align: justify; margin-left: 50px;">
    <strong>Preenchendo e enviando o formulário com sucesso:</strong> Este teste verifica o comportamento da aplicação ao preencher um formulário com dados válidos e enviá-lo. Ele adiciona informações no relatório Allure sobre o navegador, a plataforma e a versão da aplicação utilizada para o teste. Durante a execução, o teste inclui etapas detalhadas no Allure, como o preenchimento do formulário com os dados "John Doe" e "john.doe@example.com", a submissão do formulário e a captura da mensagem de sucesso exibida. Por fim, o teste valida se a mensagem retornada é "Form submitted successfully" para garantir que o envio foi bem-sucedido.
        <p style="text-align: justify; margin-left: 50px;">
    <strong>Login com credenciais válidas:</strong> Este teste verifica se o sistema permite que um usuário faça login utilizando credenciais válidas. Ele adiciona detalhes no relatório Allure, como o navegador, a plataforma e a versão da aplicação testada. Durante a execução, o teste tenta fazer login com as credenciais "validUsername" e "validPassword". Após o login, ele valida se o menu da aplicação está acessível, anexando uma captura de tela do menu no relatório para evidência.
        <p style="text-align: justify; margin-left: 50px;">
    <strong>Exibição de erro com credenciais inválidas:</strong> Este teste verifica o comportamento do sistema ao tentar fazer login com credenciais inválidas. Ele simula um login utilizando "invalidUsername" e "invalidPassword". Em seguida, valida se a mensagem de erro "Invalid username or password" é exibida, garantindo que o sistema informa corretamente a falha de autenticação. Uma captura de tela da mensagem de erro é anexada no relatório Allure para facilitar a análise de evidências.
        <p style="text-align: justify; margin-left: 50px;">
    <strong>Acessar a Página de Perfil:</strong> O teste inicia com a configuração do ambiente para o Allure, adicionando informações sobre o navegador, a plataforma e a versão do aplicativo. Em seguida, o primeiro teste valida se a navegação para a página de perfil ocorre corretamente. O teste começa com o comando HomePage.navigateToProfile(), que redireciona o usuário para a página de perfil. Após a navegação, o teste valida a visibilidade do cabeçalho da página de perfil através de ProfilePage.profileHeader. Se o cabeçalho for visível, o teste captura uma captura de tela da página de perfil e a adiciona como anexo no relatório Allure.
        <p style="text-align: justify; margin-left: 50px;">
    <strong>Abrir o Menu:</strong> O segundo teste valida a interação com o menu. Assim como o primeiro teste, o ambiente Allure é configurado antes da execução. O teste inicia com a ação de abrir o menu através de HomePage.openMenu(). Após a ação, é verificado se um item do menu está visível utilizando HomePage.menuItem. Caso o item esteja visível, o teste captura uma captura de tela do menu e adiciona a imagem ao relatório Allure, garantindo a documentação da etapa.
    </p>

<h2 style="color: white;">✍ AUTOR</h2>
  <table>
  <tr>
    <td align="center">
      <a href="www.linkedin.com/in/gustavo-ávila-1168a8150">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/132934043?s=400&u=d70e99353630191829cdfbc95f9f48c0a66299e8&v=4" width="100px;" alt=""/>
        <br />
         <sub style="color: white;"><b>Gustavo Ávila</b></sub>
      </a>
      <br />
      <a title="GUSTAVO ÁVILA"><sub style="color: white;"><b>Analista de Qualidade<b></a>
      <br/>
      <br/>
      <a href="mailto:gustavotoiansk@icloud.com">
        <img src="https://img.shields.io/badge/-gustavotoiansk@icloud.com-f44336?style=flat-square&logo=Gmail&logoColor=white" alt=""/>
      </a>
      <td align="center">
    </td>
  </tr>
</table>