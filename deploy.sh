#!/usr/bin/env bash
set -euo pipefail

# Locales Deployment per FTP zu All-Inkl
# Nutzung:  FTP_HOST=... FTP_USER=... FTP_PASSWORD=... FTP_TARGET_DIR=... ./deploy.sh
# Oder:     ./deploy.sh

HOST="${FTP_HOST:?FTP_HOST nicht gesetzt}"
USER="${FTP_USER:?FTP_USER nicht gesetzt}"
PASS="${FTP_PASSWORD:?FTP_PASSWORD nicht gesetzt}"
TARGET="${FTP_TARGET_DIR:?FTP_TARGET_DIR nicht gesetzt}"

echo "==> Baue Site ..."
npm ci
npm run build

echo "==> Deploye zu $HOST ..."
lftp -c "
  set ssl:verify-certificate no
  open -u '$USER','$PASS' $HOST
  mirror -R --delete --verbose=2 ./dist/ $TARGET
"

echo "==> Fertig."
