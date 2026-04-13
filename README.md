# Sara Silva Landing

Landing page desenvolvida para **Sara Zandonai Silva**, focada em apresentar cursos e materiais sobre **projeção para igrejas**, **Holyrics**, identidade visual e capacitação de mídia/comunicação.

## Versão em produção

Este repositório possui **uma única versão** considerada oficial/produção: **`v2-redesign/`**.

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
cd v2-redesign
npm ci
npm run dev
```

Depois acesse: http://localhost:3000

## Scripts

- `npm run dev`: ambiente de desenvolvimento (execute dentro de `v2-redesign/`)
- `npm run build`: build de produção (ideal para Vercel)
- `npm run build:hostinger`: build + export estático (gera a pasta `out/`)
- `npm run start`: inicia em produção após o build
- `npm run lint`: lint do Next
- `npm run typecheck`: valida TypeScript (sem emitir build)
- `npm run test`: smoke suite local (typecheck + lint)
- `npm run format`: formata o projeto com Prettier
- `npm run format:check`: valida formatação

## Variáveis de ambiente

Crie um `.env.local` (opcional) em `v2-redesign/`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

- `NEXT_PUBLIC_GA_ID`: usado em `v2-redesign/app/components/google-analytics.tsx` (se não definido, o componente não inicializa tracking).
- `NEXT_PUBLIC_SITE_URL`: usado em `v2-redesign/next-sitemap.config.js` para gerar `sitemap.xml` e `robots.txt`.

Observação: códigos de verificação de buscadores (Google/Yandex/Yahoo) estão definidos em `v2-redesign/app/layout.tsx` e podem ser ajustados conforme a necessidade.

## SEO e Sitemap

- Metadados (OpenGraph/Twitter/Schema.org) ficam em `v2-redesign/app/layout.tsx`.
- Sitemap é gerado automaticamente no `postbuild` via `next-sitemap` (config em `v2-redesign/next-sitemap.config.js`).

## Deploy

- Vercel: veja o guia em `VERCEL-DEPLOY.md`
- Hostinger (estático): veja o guia em `HOSTINGER-DEPLOY.md`

## Estrutura do projeto

- `v2-redesign/app/`: páginas e componentes da aplicação (Next.js App Router)
- `v2-redesign/components/ui/`: componentes reutilizáveis (shadcn/ui)
- `v2-redesign/public/`: imagens/arquivos estáticos, `robots.txt`, `sitemap.xml` (quando gerados)
- `v2-redesign/app/globals.css`: estilos globais

## Rollback (procedimento)

Se um problema crítico for identificado após o deploy:

1. **Reverter no Git**: crie um commit de revert do merge/commit que introduziu o problema (ou resete para o SHA anterior, conforme política do time).
2. **Re-deploy**:
   - **Vercel**: faça deploy do branch/commit revertido (ou promova um deployment anterior como “Production”).
   - **Hostinger**: gere novamente `npm run build:hostinger` em `v2-redesign/` e publique a pasta `out/`.
3. **Validar**: execute `npm run test` e `npm run build` em `v2-redesign/` antes de promover para produção.
