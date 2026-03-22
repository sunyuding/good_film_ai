export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface ServiceItem {
  readonly key: string;
  readonly icon: string;
}

export interface PortfolioItem {
  readonly key: string;
  readonly image: string;
  readonly videoUrl?: string;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly company?: string;
  readonly message: string;
  readonly honeypot?: string;
}
