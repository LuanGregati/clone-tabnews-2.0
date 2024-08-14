// Biblioteca que lida com arquivos .env
const dotenv = require("dotenv");

// Especifica qual arquivo .env carregar
dotenv.config({
  path: ".env.development",
});

// Bibilioteca fornecida pelo Next.js para fornecer seus "poderes" ao Jest
const nextJest = require("next/jest");

// "nextJest" é uma função que retorna outras funções (uma factory de funções).
// Recebe um objeto de parâmetros com algumas configurações específicas da biblioteca.
const createJestConfig = nextJest({
  dir: ".",
});

// Chamo a função que foi retornada com o uso da função "nextJest".
// Recebe como parâmetro um objeto de configurações específicas/adicionais
// para o Jest.
const jestConfig = createJestConfig({
  // Diretórios dos módulos. Por padrão vem o "node_modules" configurado,
  // mas deve ser redeclarado para poder continuar importando módulos do npm.

  // <rootDir> é um placeholder criado pelo Jest para indicar a pasta raiz do projeto
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
