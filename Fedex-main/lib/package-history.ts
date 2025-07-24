export interface PackageHistoryItem {
  id: string
  trackingNumber: string
  from: string
  to: string
  receiver: string
  status: "delivered" | "inTransit" | "cancelled"
  shipDate: string
  deliveryDate?: string
  service: string
  cost: number
}

export const packageHistory: PackageHistoryItem[] = [
  {
    id: "1",
    trackingNumber: "FX123456789PE",
    from: "Westchester, New York City, USA",
    to: "Av larco 740 vista alegre - victor larco, Trujillo Peru",
    receiver: "Ivan Humberto",
    status: "inTransit",
    shipDate: "2024-07-22",
    service: "Express International",
    cost: 55.07,
  },
  {
    id: "2",
    trackingNumber: "FX987654321US",
    from: "Westchester, New York City, USA",
    to: "Miami, Florida, USA",
    receiver: "Maria Rodriguez",
    status: "delivered",
    shipDate: "2024-07-15",
    deliveryDate: "2024-07-17",
    service: "Express Overnight",
    cost: 32.5,
  },
  {
    id: "3",
    trackingNumber: "FX456789123CA",
    from: "Westchester, New York City, USA",
    to: "Toronto, Ontario, Canada",
    receiver: "John Smith",
    status: "delivered",
    shipDate: "2024-07-10",
    deliveryDate: "2024-07-12",
    service: "International Priority",
    cost: 28.75,
  },
  {
    id: "4",
    trackingNumber: "FX789123456MX",
    from: "Westchester, New York City, USA",
    to: "Mexico City, Mexico",
    receiver: "Carlos Mendez",
    status: "delivered",
    shipDate: "2024-07-05",
    deliveryDate: "2024-07-08",
    service: "Express International",
    cost: 41.2,
  },
  {
    id: "5",
    trackingNumber: "FX321654987BR",
    from: "Westchester, New York City, USA",
    to: "São Paulo, Brazil",
    receiver: "Ana Silva",
    status: "cancelled",
    shipDate: "2024-06-28",
    service: "Ground International",
    cost: 0,
  },
]
