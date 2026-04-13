# Guia de Deploy na Hostinger

## Pré-requisitos

- Conta na Hostinger
- Acesso ao painel de controle (hPanel)
- Node.js instalado localmente

## Passo a Passo

### 1. Preparação Local

```bash
# Instalar dependências
cd v2-redesign
npm install

# Fazer build estático para Hostinger (gera `out/`)
npm run build:hostinger
```

**✅ Arquivos prontos para upload:**

- Pasta `out/` com todos os arquivos do site
- Arquivo `site-sara-silva.zip` (92KB) - versão compactada

### 2. Acesso ao Painel da Hostinger

1. Faça login no [hPanel da Hostinger](https://hpanel.hostinger.com)
2. Acesse o seu domínio/hosting
3. Vá para "Gerenciador de Arquivos"

### 3. Upload dos Arquivos

**Opção A - Upload via ZIP (Recomendado):**

1. **Navegue até a pasta `public_html`** (ou `www` em alguns casos)
2. **Delete todos os arquivos existentes** (faça backup se necessário)
3. **Faça upload do arquivo `site-sara-silva.zip`**
4. **Extraia o ZIP** no servidor (botão direito → Extrair)

**Opção B - Upload manual:**

1. **Navegue até a pasta `public_html`**
2. **Delete todos os arquivos existentes**
3. **Faça upload de todos os arquivos da pasta `out`**

### 4. Estrutura de Arquivos

Após o upload, sua estrutura deve ficar assim:

```
public_html/
├── _next/
├── combo-projecao/
├── .htaccess
├── favicon.svg
├── index.html
├── robots.txt
├── sitemap.xml
└── [outros arquivos estáticos]
```

### 5. Configurações Adicionais

#### Configurar Domínio (se necessário)

1. No hPanel, vá para "Domínios"
2. Configure o domínio principal ou subdomínio
3. Aponte para a pasta `public_html`

#### Configurar SSL (recomendado)

1. No hPanel, vá para "SSL"
2. Ative o SSL gratuito para seu domínio
3. Configure redirecionamento HTTPS (descomente no .htaccess)

### 6. Verificação

1. Acesse seu domínio no navegador
2. Verifique se todas as páginas carregam corretamente
3. Teste navegação entre páginas
4. Verifique se imagens e recursos carregam

### 7. Troubleshooting

#### Página não carrega

- Verifique se os arquivos estão na pasta correta
- Confirme se o .htaccess foi uploadado
- Verifique logs de erro no hPanel

#### Imagens não aparecem

- Confirme se a pasta `_next` foi uploadada completamente
- Verifique caminhos das imagens no código

#### Erro 404 em rotas

- Confirme se o .htaccess está configurado corretamente
- Verifique se todas as páginas foram geradas no build

### 8. Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código local
2. Execute `npm run build:hostinger` (em `v2-redesign/`)
3. Faça upload dos novos arquivos da pasta `out`
4. Substitua os arquivos antigos

### 9. Configurações de Performance

O arquivo `.htaccess` já inclui:

- Cache para arquivos estáticos
- Compressão GZIP
- Headers de segurança

### 10. Suporte

Se encontrar problemas:

- Consulte a documentação da Hostinger
- Entre em contato com o suporte da Hostinger
- Verifique os logs de erro no hPanel

## Arquivos Importantes

- **`site-sara-silva.zip`** - Arquivo compactado com todos os arquivos do site
- **`out/`** - Pasta com todos os arquivos gerados pelo build
- **`.htaccess`** - Configurações do servidor Apache
- **`HOSTINGER-DEPLOY.md`** - Este guia de deploy

## Notas Importantes

- Este deploy gera um site estático
- Não há funcionalidades server-side
- Todas as rotas devem ser pré-renderizadas
- Imagens devem estar na pasta `v2-redesign/public`

## Status do Deploy

✅ **Build concluído com sucesso**
✅ **Arquivos estáticos gerados**
✅ **Arquivo ZIP criado (92KB)**
✅ **Configurações de servidor prontas**
🚀 **Pronto para upload na Hostinger!**
