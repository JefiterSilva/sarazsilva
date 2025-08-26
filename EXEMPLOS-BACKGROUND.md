# 🖼️ Guia: Imagens como Background no Tailwind CSS

## ❌ Formas INCORRETAS:

```jsx
// ❌ Isso NÃO funciona
<div className="bg-[url(public/imagem.jpg)]">

// ❌ Isso NÃO funciona
<div className="bg-[url('./imagem.jpg')]">

// ❌ Isso NÃO funciona
<div className="bg-[url('public/imagem.jpg')]">
```

## ✅ Formas CORRETAS:

### 1. **Usando style inline (Recomendado):**

```jsx
<div
  className="h-64 w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url(/imagem.jpg)' }}
>
  Conteúdo aqui
</div>
```

### 2. **Usando CSS customizado:**

```jsx
<div className="bg-imagem-custom h-64 w-full">Conteúdo aqui</div>
```

E no seu CSS:

```css
.bg-imagem-custom {
  background-image: url('/imagem.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### 3. **Usando Tailwind com CSS customizado:**

```jsx
<div className="h-64 w-full bg-[url('/imagem.jpg')] bg-cover bg-center bg-no-repeat">
  Conteúdo aqui
</div>
```

## 🎯 Exemplos Práticos:

### Card com imagem de fundo:

```jsx
<Card className="overflow-hidden">
  <CardContent
    className="relative h-48 bg-cover bg-center bg-no-repeat p-6"
    style={{ backgroundImage: 'url(/dominando_pt1.jpg)' }}
  >
    {/* Overlay escuro para melhorar legibilidade */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Conteúdo */}
    <div className="relative z-10 text-white">
      <h3 className="text-xl font-bold">Título do Curso</h3>
      <p className="text-sm opacity-90">Descrição do curso</p>
    </div>
  </CardContent>
</Card>
```

### Hero section com imagem de fundo:

```jsx
<section
  className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
>
  <div className="text-center text-white">
    <h1 className="text-4xl font-bold">Título Principal</h1>
    <p className="text-xl">Subtítulo</p>
  </div>
</section>
```

### Card com overlay gradiente:

```jsx
<div className="relative overflow-hidden rounded-lg">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/imagem.jpg)' }}
  ></div>

  {/* Overlay gradiente */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

  {/* Conteúdo */}
  <div className="relative z-10 p-6 text-white">
    <h3 className="text-xl font-bold">Título</h3>
    <p>Descrição</p>
  </div>
</div>
```

## 🔧 Classes Tailwind Úteis para Background:

```jsx
// Tamanho do background
bg - cover; // background-size: cover
bg - contain; // background-size: contain
bg - auto; // background-size: auto

// Posição do background
bg - center; // background-position: center
bg - top; // background-position: top
bg - bottom; // background-position: bottom
bg - left; // background-position: left
bg - right; // background-position: right

// Repetição
bg - no - repeat; // background-repeat: no-repeat
bg - repeat; // background-repeat: repeat
bg - repeat - x; // background-repeat: repeat-x
bg - repeat - y; // background-repeat: repeat-y

// Fixação (para parallax)
bg - fixed; // background-attachment: fixed
bg - local; // background-attachment: local
bg - scroll; // background-attachment: scroll
```

## 🎨 Dicas Importantes:

1. **Sempre use `/` no início do caminho** - `url(/imagem.jpg)` em vez de `url(imagem.jpg)`
2. **Coloque as imagens na pasta `public/`** - elas ficam acessíveis em `/imagem.jpg`
3. **Use `bg-cover` para imagens responsivas** - elas se ajustam ao container
4. **Adicione overlay para melhorar legibilidade** - especialmente com texto branco
5. **Considere usar `object-fit` para imagens em `<img>`** - pode ser mais simples

## 🚀 Exemplo Completo:

```jsx
import { Card, CardContent } from '@/components/ui/card';

const CursoCard = ({ titulo, descricao, imagem }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent
        className="group relative h-64 bg-cover bg-center bg-no-repeat p-6"
        style={{ backgroundImage: `url(${imagem})` }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/60"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-white">
          <h3 className="mb-2 text-xl font-bold">{titulo}</h3>
          <p className="text-sm opacity-90">{descricao}</p>
        </div>
      </CardContent>
    </Card>
  );
};
```
