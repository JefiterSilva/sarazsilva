# 🌐 Configurar Domínio sarazs.com.br na Vercel

## 🎯 **Seu Domínio:** `sarazs.com.br`

### 📋 **Passo 1: Adicionar Domínio na Vercel**

1. **Acesse:** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Selecione** seu projeto `sara-silva-landing`
3. **Vá em:** Settings → Domains
4. **Clique em:** Add Domain
5. **Digite:** `sarazs.com.br`
6. **Clique em:** Add
7. **Repita para:** `www.sarazs.com.br`

### 📋 **Passo 2: Configurar DNS no Registro.br**

#### **2.1 Acesse o Painel do Registro.br**

1. **Site:** [registro.br](https://registro.br)
2. **Login** com suas credenciais
3. **Vá em:** Meus Domínios
4. **Selecione:** sarazs.com.br
5. **Clique em:** DNS

#### **2.2 Configure os Registros DNS**

Adicione estes registros exatamente:

```dns
# Registro A - Domínio Principal
Tipo: A
Nome: @ (ou deixe vazio)
Conteúdo: 76.76.19.61
TTL: 3600

# Registro CNAME - Subdomínio www
Tipo: CNAME
Nome: www
Conteúdo: cname.vercel-dns.com
TTL: 3600
```

#### **2.3 Tela do Registro.br**

No painel DNS do Registro.br:

```
┌─────────────────────────────────────────┐
│ Tipo │ Nome │ Conteúdo               │ TTL  │
├─────────────────────────────────────────┤
│  A   │  @   │ 76.76.19.61            │ 3600 │
│ CNAME│ www  │ cname.vercel-dns.com   │ 3600 │
└─────────────────────────────────────────┘
```

### 📋 **Passo 3: Configurar Variáveis de Ambiente**

Na Vercel Dashboard:

1. **Vá em:** Settings → Environment Variables
2. **Atualize/Adicione:**

```env
NEXT_PUBLIC_SITE_URL=https://sarazs.com.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
NODE_ENV=production
```

### 📋 **Passo 4: Aguardar Propagação**

#### **4.1 Timeline Esperado:**
- ✅ **Configuração Vercel:** Imediato
- 🔄 **DNS Registro.br:** 5-15 minutos
- 🔄 **Propagação mundial:** 15 min - 48 horas
- ✅ **SSL automático:** 5-15 minutos após DNS
- ✅ **Site funcionando:** Após propagação completa

#### **4.2 Verificar Propagação:**

**Online (Recomendado):**
- [dnschecker.org](https://dnschecker.org) → Digite `sarazs.com.br`
- [whatsmydns.net](https://whatsmydns.net) → Digite `sarazs.com.br`

**Terminal/CMD:**
```bash
nslookup sarazs.com.br
dig sarazs.com.br
```

### 📋 **Passo 5: Teste Final**

Após propagação, teste:

- ✅ `http://sarazs.com.br` → Redireciona para HTTPS
- ✅ `https://sarazs.com.br` → Carrega o site
- ✅ `https://www.sarazs.com.br` → Redireciona para versão sem www
- ✅ SSL válido (cadeado verde no navegador)

### 🚨 **Troubleshooting**

#### **❌ "Domain not found"**
- **Causa:** DNS ainda propagando
- **Solução:** Aguardar mais tempo (até 48h)

#### **❌ "SSL Certificate Error"**
- **Causa:** Certificado ainda sendo gerado
- **Solução:** Aguardar 15-30 minutos

#### **❌ "502 Bad Gateway"**
- **Causa:** Domínio não configurado corretamente na Vercel
- **Solução:** Verificar se adicionou o domínio na Vercel

#### **❌ DNS não resolve**
```bash
# Verificar se os registros estão corretos
nslookup sarazs.com.br 8.8.8.8
```

### 🎯 **Configuração Avançada (Opcional)**

#### **Melhorar Performance com Cloudflare:**

1. **Criar conta:** [cloudflare.com](https://cloudflare.com)
2. **Adicionar domínio:** sarazs.com.br
3. **Cloudflare vai escanear** seus DNS atuais
4. **Alterar nameservers** no Registro.br para os do Cloudflare
5. **Configurar DNS** no Cloudflare:

```dns
Type: A
Name: @
Content: 76.76.19.61
Proxy: ✅ (Nuvem laranja)

Type: CNAME
Name: www
Content: sarazs.com.br
Proxy: ✅ (Nuvem laranja)
```

**Benefícios do Cloudflare:**
- 🚀 CDN global (site mais rápido)
- 🛡️ Proteção DDoS
- 📊 Analytics detalhado
- 🔒 SSL melhorado

### 📊 **Status Atual do Projeto**

Seu projeto já está configurado com:
- ✅ Redirecionamento www → não-www
- ✅ Headers de segurança (HSTS, etc.)
- ✅ Build otimizado para Vercel
- ✅ Dependências corrigidas

### 🎉 **Próximos Passos**

1. **Configure DNS** no Registro.br (10 min)
2. **Aguarde propagação** (até 48h)
3. **Teste o site** em `https://sarazs.com.br`
4. **Configure analytics** se necessário

---

## 📞 **Precisa de Ajuda?**

Se encontrar problemas:
1. **Screenshot** da configuração DNS
2. **Resultado** do `nslookup sarazs.com.br`
3. **Erro específico** que está vendo

**Seu site estará no ar em breve!** 🚀
