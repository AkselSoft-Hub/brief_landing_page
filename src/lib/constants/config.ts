interface iConfig {
  API_URL: string
  API_KEY: string
}

export const configuration: iConfig = {
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'https://google.com',
  API_KEY: process.env.NEXT_PUBLIC_API_KEY ?? '',
}
