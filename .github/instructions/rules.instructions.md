---
applyTo: '**'
---

---

## applyTo: "\*\*"

# Project: Stack and Dependency Versions

This project uses the following main technologies and dependencies, with exact versions extracted from `package.json`:

## Production Dependencies

- **Next.js**: 15.2.4
- **React**: ^19
- **React DOM**: ^19
- **Tailwind CSS**: ^3.4.17
- **PostCSS**: ^8.5.6
- **@tailwindcss/postcss**: ^4.1.11
- **Autoprefixer**: ^10.4.20
- **TypeScript**: ^5 (dev)
- **@types/react**: ^19 (dev)
- **@types/node**: ^22 (dev)
- **@types/react-dom**: ^19 (dev)
- **Radix UI**: Several packages (accordion, alert-dialog, etc) in versions 1.x/2.x
- **clsx**: ^2.1.1
- **class-variance-authority**: ^0.7.1
- **cmdk**: 1.0.4
- **date-fns**: 4.1.0
- **embla-carousel-react**: 8.5.1
- **geist**: ^1.3.1
- **input-otp**: 1.4.1
- **lucide-react**: ^0.454.0
- **next-themes**: ^0.4.4
- **react-day-picker**: 9.8.0
- **react-hook-form**: ^7.54.1
- **react-resizable-panels**: ^2.1.7
- **recharts**: 2.15.0
- **sonner**: ^1.7.1
- **tailwind-merge**: ^2.5.5
- **tailwindcss-animate**: ^1.0.7
- **vaul**: ^0.9.6
- **zod**: ^3.24.1

## Development Dependencies

- **TypeScript**: ^5
- **PostCSS**: ^8.5.6
- **Tailwind CSS**: ^3.4.17
- **@types/node**: ^22
- **@types/react**: ^19
- **@types/react-dom**: ^19

## Best Practice Notes for the Used Versions

- **Next.js 15.x**: Use the `/app` routing system and server/client components. Take advantage of performance improvements and SSR/SSG. Pay attention to v15 breaking changes (see the official changelog).
- **React 19.x**: Use modern hooks, leverage performance improvements and features like Server Actions (if applicable). Ensure all third-party libraries are compatible with React 19.
- **Tailwind CSS 3.4.x**: Use JIT (Just-in-Time) mode and configure purge/content to remove unused CSS. Use official plugins and keep the config file lean.
- **TypeScript 5.x**: Keep strict mode enabled for maximum safety. Use modern TS 5 features.
- **PostCSS 8.x**: Use plugins recommended by Tailwind and keep the configuration compatible with the Tailwind version.
- **Radix UI**: Make sure to use only components compatible with React 19. Follow accessibility recommendations from Radix documentation.
- **react-hook-form 7.x**: Use controlled mode and integrate with zod for validation.
- **zod 3.x**: Use for schema validation and form integration.
- **lucide-react**: Icons optimized for React 18+ and 19.
- **Husky, ESLint, Prettier, lint-staged**: It is recommended to add these tools to ensure code quality and standardization, even if not currently listed in package.json.

## General Notes

- Keep dependencies always up to date to ensure security and access to new features.
- Always consult the official documentation of the libraries for recommended practices and breaking changes.
- Adopt automated testing and continuous integration to ensure quality and reliability.
- Use TypeScript in strict mode and leverage typing throughout the project.
- Configure Tailwind to remove unused CSS in production.

---
