# Perguntas e Respostas sobre o Modelo OSI e Tecnologias Open Source

## 1. Diferenciar as camadas 2 e 3 do modelo OSI, e indicar os protocolos utilizados para endereçamento nestas camadas.

A **camada 2** do modelo OSI é a **camada de enlace**, responsável por garantir a comunicação confiável entre dispositivos dentro da mesma rede. Essa camada utiliza **endereços físicos (MAC)** para identificar os hosts e entregar quadros corretamente. Tecnologias como **Wi-Fi** e **Ethernet** operam nessa camada para transmitir dados.

Já a **camada 3**, conhecida como **camada de rede**, tem como função principal o roteamento de pacotes entre diferentes redes. Nessa camada, os dados são divididos em pacotes, e o endereçamento lógico é feito por protocolos como **IPv4** e **IPv6**, que definem o destino final dos dados.

### Resumo:
- A **camada 2** realiza comunicação entre dispositivos **na mesma rede**, utilizando **endereços MAC**.
- A **camada 3** realiza comunicação **entre redes**, utilizando **endereços IP**.

---

## 2. Diferença entre uma solução proprietária (ex: Windows) e uma solução open source (ex: Ubuntu). Pontos positivos e negativos de cada abordagem.

### Solução proprietária:
Em uma solução proprietária, o código-fonte não é acessível ao usuário. Ele é controlado exclusivamente pela empresa desenvolvedora, que geralmente cobra pelo uso por meio de licenças.

**Pontos positivos:**
- Suporte oficial, geralmente acessível e confiável.
- Interfaces amigáveis e intuitivas, ideais para usuários leigos.
- Atualizações otimizadas e centralizadas, realizadas pela empresa.

**Pontos negativos:**
- Alto custo de licenciamento.
- Dependência do fornecedor para suporte, atualizações e continuidade do produto.
- Falta de flexibilidade e privacidade, já que o usuário não tem acesso ao código-fonte.

### Solução open source:
Em uma solução open source, o código-fonte é acessível, permitindo que os usuários o modifiquem conforme suas necessidades. Embora geralmente gratuita, pode haver custos associados a suporte especializado.

**Pontos positivos:**
- Gratuidade ou custos reduzidos.
- Flexibilidade para personalizar a solução.
- Transparência e segurança aprimoradas, já que qualquer pessoa pode auditar o código.
- Independência de fornecedores.

**Pontos negativos:**
- Curva de aprendizado mais acentuada.
- Suporte técnico pode ser limitado, dependendo da comunidade.
- Implementações avançadas podem exigir conhecimentos técnicos.

### Analogia:
- A **empresa A** representa uma solução proprietária, como o Windows. Ela controla totalmente a produção e define os detalhes do produto, cobrando pela licença. A comunidade pode sugerir melhorias, mas as decisões são da empresa.
- A **empresa B** representa uma solução open source, como o Ubuntu. A produção é colaborativa, com fãs (ou desenvolvedores) moldando o produto, enquanto a empresa oferece suporte e recursos para manter o projeto.

---

## 3. O que é um projeto open source? Como as empresas podem adotar essas tecnologias e o que isso acarreta?

Um **projeto open source** é uma solução cujo código-fonte é disponibilizado publicamente, permitindo que qualquer pessoa o utilize, modifique e contribua para sua evolução. Esses projetos geralmente são hospedados em plataformas como o **GitHub**, onde desenvolvedores podem sugerir alterações (pull requests), corrigir bugs e propor novas funcionalidades, sempre respeitando as licenças do projeto.

### Como empresas podem adotar open source:
1. **Uso direto:** Utilizar o software como está, sem alterações.
2. **Customização:** Modificar o código para atender necessidades específicas.
3. **Contribuição:** Participar do desenvolvimento, ajudando a aprimorar a solução.
4. **Suporte pago:** Contratar empresas especializadas para suporte e consultoria.

### Vantagens para as empresas:
- **Redução de custos:** Soluções geralmente gratuitas ou de baixo custo.
- **Flexibilidade:** Código-fonte acessível para customizações.
- **Segurança e transparência:** Código aberto pode ser auditado por qualquer pessoa.
- **Inovação:** Projetos evoluem rapidamente devido à colaboração da comunidade.

### Desvantagens para as empresas:
- **Gestão de licenças:** Algumas licenças open source exigem cuidados legais, como a GPL.
- **Curva de aprendizado:** Algumas soluções exigem conhecimentos avançados para implementação.
- **Suporte limitado:** Dependência de comunidades ou empresas terceiras para suporte técnico.

# Como Usar Este Projeto Node.js

Este README fornece instruções passo a passo para configurar e executar um projeto Node.js que contém duas pastas principais (`./primos` e `./fibonacci`) com código.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu sistema:
- [Node.js](https://nodejs.org/) (versão recomendada LTS)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação do Projeto

1. **Clone o repositório** (se ainda não tiver feito):
   ```sh
   git clone challenges-code
   cd challenges-code
   ```

2. **Instale as dependências** no diretório raiz:
   ```sh
   npm install
   ```
   ou, se estiver usando `yarn`:
   ```sh
   yarn install
   ```

3. **Instale dependências individuais** (se necessário) para cada pasta separadamente:
   ```sh
   cd primos && npm install
   cd ../fibonacci && npm install
   ```
   ou com `yarn`:
   ```sh
   cd primos && yarn install
   cd ../fibonacci && yarn install
   ```

## Executando o Projeto

Dependendo da estrutura do projeto, você pode precisar executar diferentes partes separadamente.

### Rodando as pastas

```sh
cd primos
npm start
```

ou

```sh
cd fibonacci
yarn start
```

## Estrutura do Projeto

```
.
├── package.json
├── package-lock.json
├── primos/
│   ├── primos-lienar.js
│   ├── primos-recursive.js
|   ├── primos.js (codigo base)

├── fibonacci/
│   ├── fibonacci-linear.js
│   ├── fibonacci-recursive.js
|   ├── fibonacci.js (codigo base)

```

---
Agora seu projeto Node.js está pronto para ser executado! 🚀
