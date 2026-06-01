#!/bin/bash

set -e

echo "🚀 Iniciando deploy do RDE Enamed Lista VIP..."

# Projeto já compilado — assets estáticos na raiz
echo "📦 Projeto estático detectado, pulando etapa de build..."

S3_BUCKET="rde-enamed-vendas-intensivao"
CLOUDFRONT_DISTRIBUTION_ID="E25D8FO89X245D"

if [ ! -f "iac/terraform.tfstate" ]; then
    echo "⚠️  Terraform ainda não foi aplicado. Execute 'cd iac && terraform apply' primeiro."
    exit 1
fi

TF_ID=$(cd iac && terraform output -raw cloudfront_distribution_id 2>/dev/null || echo "")
if [ -n "$TF_ID" ]; then
    CLOUDFRONT_DISTRIBUTION_ID="$TF_ID"
fi

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "❌ Erro: Não foi possível obter o CloudFront Distribution ID"
    exit 1
fi

echo "☁️ Fazendo upload para S3..."
DEPLOY_DIR="$(cd "$(dirname "$0")/.." && pwd)"

aws s3 sync "${DEPLOY_DIR}/" s3://${S3_BUCKET}/ --delete \
    --exclude "*" \
    --include "assets/*" \
    --include "fonts/*" \
    --include "favicon.png" \
    --include "robots.txt" \
    --cache-control "max-age=31536000,public" \
    --no-verify-ssl

aws s3 cp "${DEPLOY_DIR}/index.html" s3://${S3_BUCKET}/index.html \
    --cache-control "max-age=0,no-cache,no-store,must-revalidate" \
    --no-verify-ssl

echo "✅ Upload para S3 concluído!"

echo "🔄 Invalidando cache do CloudFront..."
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*" --no-verify-ssl

echo ""
echo "✅ Deploy concluído com sucesso!"
echo "🌐 Site disponível em: https://enamed-intensivao-vendas.residente-elite.com"
