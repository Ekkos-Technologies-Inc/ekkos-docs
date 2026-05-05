FROM public.ecr.aws/docker/library/node:22-slim AS base
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app

FROM base AS deps
COPY apps/docs/package.json ./apps/docs/package.json
RUN cd apps/docs && npm install --legacy-peer-deps

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/apps/docs/node_modules ./apps/docs/node_modules
COPY apps/docs/ ./apps/docs/
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app/apps/docs
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/apps/docs/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/apps/docs/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/docs/.next/static ./.next/static
USER nextjs
EXPOSE 8080
CMD ["sh", "-c", "exec env HOSTNAME=0.0.0.0 node server.js"]
