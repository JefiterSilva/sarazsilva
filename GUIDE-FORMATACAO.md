# 🎯 Guia de Formatação Automática

## ✅ Configuração Completa

O Prettier com plugin Tailwind CSS está configurado para formatar automaticamente ao salvar!

### 🔧 O que foi configurado:

1. **`v2-redesign/.prettierrc.json`** - Configuração do Prettier com plugin Tailwind
2. **`.vscode/settings.json`** - Configurações do VS Code para formatação automática
3. **`.vscode/extensions.json`** - Extensões recomendadas

### 🚀 Como usar:

1. **Instale as extensões recomendadas** quando o VS Code solicitar
2. **Salve qualquer arquivo** (`Ctrl+S`) - a formatação acontece automaticamente
3. **As classes do Tailwind** serão organizadas automaticamente

### 🎨 Exemplo de formatação automática:

**Antes de salvar:**

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 flex items-center">
```

**Depois de salvar (automático):**

```jsx
<div className="flex items-center rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-600">
```

### 🔍 Para verificar se está funcionando:

1. Abra qualquer arquivo `.tsx` ou `.jsx`
2. Adicione classes desorganizadas
3. Pressione `Ctrl+S`
4. As classes devem ser reorganizadas automaticamente

### 🛠️ Se não estiver funcionando:

1. **Verifique se a extensão Prettier está instalada**
2. **Pressione `Ctrl+Shift+P`** → "Format Document With..." → "Prettier"
3. **Reinicie o VS Code**
4. **Execute `npm install` em `v2-redesign/`** para garantir que as dependências estão atualizadas

### 📝 Scripts úteis:

```bash
# Formatar todos os arquivos manualmente
cd v2-redesign
npm run format

# Verificar se todos os arquivos estão formatados
npm run format:check
```

### 🎉 Pronto!

Agora sempre que você salvar um arquivo, o código será formatado automaticamente e as classes do Tailwind CSS serão organizadas na ordem correta!

