# Sara Silva Landing

Landing page desenvolvida para **Sara Zandonai Silva**, focada em apresentar cursos e materiais sobre **projeção para igrejas**, **Holyrics**, identidade visual e capacitação de mídia/comunicação.

## Páginas

- `/` (home): seções principais da landing (hero, destaque de produtos, sobre, conteúdo, rodapé).
- `/combo-projecao`: página com conteúdo/estrutura do “Combo da Projeção no Holyrics”.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- Vercel Analytics + Speed Insights
- next-sitemap (gera sitemap/robots no pós-build)

## Como rodar localmente

```bash
npm ci
npm run dev
```

Depois acesse: http://localhost:3000

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção (ideal para Vercel)
- `npm run build:hostinger`: build + export estático (gera a pasta `out/`)
- `npm run start`: inicia em produção após o build
- `npm run lint`: lint do Next
- `npm run format`: formata o projeto com Prettier
- `npm run format:check`: valida formatação

## Variáveis de ambiente

Crie um `.env.local` (opcional) na raiz:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

- `NEXT_PUBLIC_GA_ID`: usado em `app/components/google-analytics.tsx` (se não definido, o componente não inicializa tracking).
- `NEXT_PUBLIC_SITE_URL`: usado em `next-sitemap.config.js` para gerar `sitemap.xml` e `robots.txt`.

Observação: códigos de verificação de buscadores (Google/Yandex/Yahoo) estão definidos em `app/layout.tsx` e podem ser ajustados conforme a necessidade.

## SEO e Sitemap

- Metadados (OpenGraph/Twitter/Schema.org) ficam em `app/layout.tsx`.
- Sitemap é gerado automaticamente no `postbuild` via `next-sitemap` (config em `next-sitemap.config.js`).

## Deploy

- Vercel: veja o guia em `VERCEL-DEPLOY.md`
- Hostinger (estático): veja o guia em `HOSTINGER-DEPLOY.md`

## Estrutura do projeto

- `app/`: páginas e componentes da aplicação (Next.js App Router)
- `components/ui/`: componentes reutilizáveis (shadcn/ui)
- `public/`: imagens/arquivos estáticos, `robots.txt`, `sitemap.xml` (quando gerados)
- `styles/` e `app/globals.css`: estilos globais
