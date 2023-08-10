# Calculadora de IMC (Índice de Massa Corporal)

Uma simples calculadora de Índice de Massa Corporal (IMC) que permite aos usuários calcular seu IMC com base no peso e altura fornecidos. Esta calculadora é desenvolvida usando TypeScript, HTML e CSS.

## Arquitetura do projeto

calculadora-de-imc
├── .vscode
├── Img
│   └── Fet.webp
│
├── coverage
├── dist
│   └── js
│       └── .DS_Store
│
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── styles.css
│   │   │
│   │   └── index.html
│   │
│   ├── calculation.ts
│   ├── levelBMI.ts
│   └── script.ts
│      
├── test
│   ├── calculation.test.ts
│   │
│   └── levelBMI.test.ts
│
├── editorconfig
├── .eslint.js
├── .gitignore
├── .prettierrc.js
├── README.md
├── jest.config.js
├── package-lock.json
├── Package.json
├── tsconfig.frontend.json
└── webpack.config.js

## Funcionalidades
Calcular o IMC com base no peso e altura inseridos.
Exibir a categoria do IMC (abaixo do peso, peso normal, sobrepeso, obesidade, obesidade grave) de acordo com o resultado do cálculo.
Interface de usuário responsiva e amigável.

## Pré-requisitos
Node.js (para executar os testes e compilar o TypeScript, se necessário)

## Instalação
- Clone o repositório para o seu diretório local:
```
git clone https://github.com/seu-usuario/calculadora-imc.git
```
- Abra o projeto em sua IDE
```
cd calculadora-de-imc
```
- Instale as dependências do projeto:
```
npm install --legacy-peer-deps
```
- Instale um servidor para gerar seu **arquivo HTML**

## Uso
1. Abra o arquivo index.html no seu navegador.
2. Insira o peso (em quilogramas) e a altura (em centímetros) nos campos apropriados.
3. Clique no botão "Calcular IMC" para obter o resultado.

## Testes Unitários
O projeto inclui testes unitários para a função de cálculo de IMC. Para executar os testes, utilize o seguinte comando:
```
npm run test:coverage
```
## Desenvolvimento
Se você quiser fazer alterações no código ou expandir o projeto, siga estas etapas:
1. Faça as alterações necessárias nos arquivos TypeScript (src/script.ts) e/ou no arquivo de estilo CSS (styles.css).
2. Compile o TypeScript para JavaScript usando o seguinte comando:
```
npx tsc
```
3. Abra o arquivo index.html no navegador para testar as alterações.

## Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga estas etapas:
1. Fork o repositório.
2. Crie um branch para a sua nova feature ou correção:
```
git checkout -b minha-nova-feature
```
3. Faça as alterações e commit:
```
git commit -m "Adiciona nova feature"
```
4. Envie as alterações para o seu fork:
```
git push origin minha-nova-feature
```
5. Abra um Pull Request no repositório original.
