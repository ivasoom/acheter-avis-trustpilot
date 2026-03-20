export interface ProductVariant {
  qty: number
  priceNormal: number
  priceExpress: number
  stripePriceIdNormal: string
  stripePriceIdExpress: string
}

export const VARIANTS: ProductVariant[] = [
  { qty: 1,   priceNormal: 12.90,  priceExpress: 14.90,  stripePriceIdNormal: 'price_normal_1',   stripePriceIdExpress: 'price_express_1' },
  { qty: 5,   priceNormal: 59.90,  priceExpress: 64.90,  stripePriceIdNormal: 'price_normal_5',   stripePriceIdExpress: 'price_express_5' },
  { qty: 10,  priceNormal: 109.90, priceExpress: 129.90, stripePriceIdNormal: 'price_normal_10',  stripePriceIdExpress: 'price_express_10' },
  { qty: 25,  priceNormal: 259.90, priceExpress: 274.90, stripePriceIdNormal: 'price_normal_25',  stripePriceIdExpress: 'price_express_25' },
  { qty: 50,  priceNormal: 499.00, priceExpress: 539.00, stripePriceIdNormal: 'price_normal_50',  stripePriceIdExpress: 'price_express_50' },
  { qty: 100, priceNormal: 875.00, priceExpress: 919.00, stripePriceIdNormal: 'price_normal_100', stripePriceIdExpress: 'price_express_100' },
]

export const INCLUDES = [
  'Comptes français vérifiés',
  'Avis permanents garantis',
  'Rédaction offerte si besoin',
  'Remplacement garanti 1 an',
  'Satisfait ou remboursé',
]
