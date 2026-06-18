-- CreateTable
CREATE TABLE "ConversionQuote" (
    "id" TEXT NOT NULL,
    "quoteId" TEXT NOT NULL,
    "fromAsset" TEXT NOT NULL,
    "toAsset" TEXT NOT NULL,
    "fromAmount" TEXT NOT NULL,
    "toAmount" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "walletId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "executedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConversionQuote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConversionQuote_quoteId_key" ON "ConversionQuote"("quoteId");

-- CreateIndex
CREATE INDEX "ConversionQuote_quoteId_idx" ON "ConversionQuote"("quoteId");

-- CreateIndex
CREATE INDEX "ConversionQuote_status_expiresAt_idx" ON "ConversionQuote"("status", "expiresAt");

-- CreateIndex
CREATE INDEX "ConversionQuote_fromAsset_toAsset_idx" ON "ConversionQuote"("fromAsset", "toAsset");
