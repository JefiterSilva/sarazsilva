# 🚀 Guia de Deploy na Vercel

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Projeto no GitHub, GitLab ou Bitbucket
- Node.js 18+ instalado localmente

## 🔧 Configuração

### 1. **Variáveis de Ambiente**

Na Vercel, configure estas variáveis de ambiente:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_SITE_URL=https://sarazsilva.vercel.app
NODE_ENV=production
```

**Como configurar:**

1. Acesse o dashboard da Vercel
2. Selecione seu projeto
3. Vá em **Settings** → **Environment Variables**
4. Adicione cada variável acima

### 2. **Deploy Automático**

#### Opção A - Via GitHub (Recomendado)

1. **Conecte o repositório:**

   ```bash
   # Push para GitHub
   git add .
   git commit -m "Preparado para Vercel"
   git push origin main
   ```

2. **Importe na Vercel:**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Conecte sua conta GitHub
   - Selecione o repositório `sara-silva-landing`
   - Clique em **Deploy**

#### Opção B - Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na Vercel
vercel login

# Deploy
vercel --prod
```

### 3. **Configurações Otimizadas**

✅ **Já configurado no projeto:**

- **`vercel.json`** - Configurações específicas da Vercel
- **`v2-redesign/next.config.mjs`** - Otimizado para SSR/SSG
- **Headers de segurança** - CSRF, XSS, etc.
- **Cache otimizado** - Assets estáticos
- **Compressão** - Gzip automático

## 🎯 **Estrutura de Deploy**

```
Vercel Deploy:
├── 🔧 Build automático (Next.js)
├── 🌐 CDN global
├── 🔒 SSL automático
├── 📊 Analytics integrado
└── 🚀 Deploy instantâneo
```

## 📈 **Funcionalidades Ativadas**

### ⚡ **Performance**

- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Automatic Code Splitting
- ✅ Image Optimization
- ✅ Edge Functions

### 🔒 **Segurança**

- ✅ HTTPS automático
- ✅ Headers de segurança
- ✅ DDoS protection
- ✅ Bot protection

### 📊 **Monitoramento**

- ✅ Real User Metrics (RUM)
- ✅ Core Web Vitals
- ✅ Error tracking
- ✅ Performance insights

## 🌐 **Domínio Personalizado**

### 1. **Adicionar Domínio**

1. No dashboard da Vercel → **Settings** → **Domains**
2. Adicione: `sarazsilva.com`
3. Configure DNS no seu provedor:

```dns
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

### 2. **Certificado SSL**

- ✅ Automático via Let's Encrypt
- ✅ Renovação automática
- ✅ HTTP → HTTPS redirect

## 🚨 **Troubleshooting**

### ❌ **Build Error: "Cannot find module"**

```bash
# Limpar cache e reinstalar
cd v2-redesign
rm -rf node_modules package-lock.json
npm install
```

### ❌ **Environment Variables não funcionam**

- Certifique-se que começam com `NEXT_PUBLIC_`
- Redeploy após adicionar variáveis
- Verifique se estão na seção correta (Production/Preview)

### ❌ **Images não carregam**

- Verifique se estão na pasta `public/`
- Use paths relativos: `/image.jpg`
- Não use `./image.jpg`

## 📊 **Métricas Importantes**

Após o deploy, monitore:

- **Core Web Vitals** < 2.5s LCP
- **Performance Score** > 90
- **SEO Score** > 95
- **Accessibility** > 90

## 🔄 **CI/CD Automático**

✅ **Configurado:**

- Push para `main` → Deploy automático
- Pull Request → Preview deploy
- Branch protection → Só deploy após aprovação

## 🎉 **Verificação Final**

Após deploy, teste:

1. ✅ Site carrega rápido
2. ✅ Google Analytics funciona
3. ✅ SEO meta tags corretas
4. ✅ Mobile responsivo
5. ✅ Links internos funcionam
6. ✅ Formulários de contato
7. ✅ Domínio personalizado (se configurado)

---

## 🚀 **Links Úteis**

- 📊 [Vercel Dashboard](https://vercel.com/dashboard)
- 📈 [Analytics](https://vercel.com/analytics)
- 🔧 [Vercel CLI Docs](https://vercel.com/docs/cli)
- 🌐 [Domínio Docs](https://vercel.com/docs/concepts/projects/domains)

**🎯 URL de Produção:** https://sara-silva-landing.vercel.app
