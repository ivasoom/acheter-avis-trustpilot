export interface ProductVariant {
  qty: number
  priceNormal: number
  priceExpress: number
  stripePriceIdNormal: string
  stripePriceIdExpress: string
}

export const VARIANTS: ProductVariant[] = [
  { qty: 1  , priceNormal: 12.90  , priceExpress: 14.90  , stripePriceIdNormal: 'price_1TD1QqBZ4Jva9ZNNhZO06HXB', stripePriceIdExpress: 'price_1TD1QrBZ4Jva9ZNNFR8xnVFT' },
  { qty: 5  , priceNormal: 59.90  , priceExpress: 64.90  , stripePriceIdNormal: 'price_1TD1QsBZ4Jva9ZNNEAwKdr8A', stripePriceIdExpress: 'price_1TD1QsBZ4Jva9ZNNGX2JsMQv' },
  { qty: 10 , priceNormal: 109.90 , priceExpress: 129.90 , stripePriceIdNormal: 'price_1TD1QtBZ4Jva9ZNNLoJexWwR', stripePriceIdExpress: 'price_1TD1QuBZ4Jva9ZNNveNcwhZA' },
  { qty: 25 , priceNormal: 259.90 , priceExpress: 274.90 , stripePriceIdNormal: 'price_1TD1QuBZ4Jva9ZNN8iJUOfiS', stripePriceIdExpress: 'price_1TD1QvBZ4Jva9ZNN5zquOThZ' },
  { qty: 50 , priceNormal: 499.00 , priceExpress: 539.00 , stripePriceIdNormal: 'price_1TD1QvBZ4Jva9ZNNvBzBvxGI', stripePriceIdExpress: 'price_1TD1QwBZ4Jva9ZNNI9FAC3AJ' },
  { qty: 100, priceNormal: 875.00 , priceExpress: 919.00 , stripePriceIdNormal: 'price_1TD1QxBZ4Jva9ZNN0BZnqNm8', stripePriceIdExpress: 'price_1TD1QxBZ4Jva9ZNNZ56WHmEt' },
]

export const INCLUDES = [
  'Comptes français vérifiés',
  'Avis permanents garantis',
  'Rédaction offerte si besoin',
  'Remplacement garanti 1 an',
  'Satisfait ou remboursé',
]
