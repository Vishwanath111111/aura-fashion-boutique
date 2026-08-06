export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

export interface ContactRequest {
  fullName: string;
  email: string;
  phone: string;
  preferredDate?: string;
  serviceType: "Haute Couture Consultation" | "Bridal Fitting" | "Personal Styling" | "General Inquiry";
  message: string;
}

export interface NewsletterRequest {
  email: string;
  preferredCategory?: string;
}
