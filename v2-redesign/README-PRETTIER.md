# Configuração Prettier + Tailwind CSS

Este projeto está configurado com Prettier e o plugin `prettier-plugin-tailwindcss` para formatação automática de código e organização das classes do Tailwind CSS.

## 📦 Dependências Instaladas

- `prettier`: Formatador de código
- `prettier-plugin-tailwindcss`: Plugin para organizar classes do Tailwind CSS

## ⚙️ Configuração

### Arquivos de Configuração

1. **`.prettierrc.json`**: Configurações do Prettier
   - `semi: true`: Adiciona ponto e vírgula
   - `trailingComma: "es5"`: Adiciona vírgula no final
   - `singleQuote: true`: Usa aspas simples
   - `printWidth: 80`: Largura máxima da linha
   - `tabWidth: 2`: Indentação de 2 espaços
   - `plugins: ["prettier-plugin-tailwindcss"]`: Plugin do Tailwind

2. **`.prettierignore`**: Arquivos ignorados pelo Prettier
   - `node_modules/`
   - `.next/`
   - `public/`
   - Arquivos de build e configuração

3. **`.vscode/settings.json`**: Configurações do VS Code
   - Formatação automática ao salvar
   - Prettier como formatador padrão
   - Configurações do Tailwind CSS

## 🚀 Scripts Disponíveis

```bash
# Formatar todos os arquivos
npm run format

# Verificar se todos os arquivos estão formatados
npm run format:check
```

## 🎯 Como Usar

### Formatação Manual

```bash
# Formatar todos os arquivos
npm run format

# Formatar arquivos específicos
npx prettier --write "app/**/*.{ts,tsx,js,jsx}"

# Verificar formatação sem alterar
npm run format:check
```

### Formatação Automática (VS Code)

- Instale a extensão "Prettier - Code formatter"
- O código será formatado automaticamente ao salvar
- As classes do Tailwind CSS serão organizadas automaticamente
- **IMPORTANTE**: Certifique-se de que o VS Code está usando o Prettier como formatador padrão
- Para verificar: `Ctrl+Shift+P` → "Format Document With..." → "Prettier - Code formatter"

## 🔧 Exemplo de Organização das Classes

**Antes:**

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 flex items-center justify-center">
```

**Depois:**

```jsx
<div className="flex items-center justify-center rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-600">
```

## 📝 Extensões Recomendadas

- **Prettier - Code formatter**: Formatação automática
- **Tailwind CSS IntelliSense**: Autocompletar classes
- **TypeScript Importer**: Importações automáticas
- **Auto Rename Tag**: Renomear tags HTML/JSX

## 🛠️ Solução de Problemas

### Se o Prettier não estiver funcionando:

1. Verifique se as extensões estão instaladas
2. Reinicie o VS Code
3. Execute `npm install` para garantir que as dependências estão instaladas
4. Verifique se o Prettier é o formatador padrão: `Ctrl+Shift+P` → "Format Document With..." → "Prettier"

### Se as classes do Tailwind não estiverem sendo organizadas:

1. Verifique se o plugin está no `.prettierrc.json`
2. Certifique-se de que o arquivo tem extensão `.tsx`, `.ts`, `.jsx` ou `.js`
3. Execute `npm run format` manualmente
4. Verifique se o VS Code está salvando automaticamente

### Como Testar a Formatação Automática:

1. Abra qualquer arquivo `.tsx` ou `.jsx`
2. Adicione classes desorganizadas como: `className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 flex items-center"`
3. Salve o arquivo (`Ctrl+S`)
4. As classes devem ser reorganizadas automaticamente para: `className="flex items-center rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-600"`

## 📚 Recursos Adicionais

- [Documentação do Prettier](https://prettier.io/docs/en/)
- [Plugin Tailwind CSS para Prettier](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
