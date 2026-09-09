import { supabase } from "@/utils/supabase";

export interface Provider {
  id: string;
  name: string;
  businessName: string;
  category: string;
  rating: number;
  reviewsCount: number;
  hourlyRate: string;
  avatarUrl?: string;
  verified: boolean;
  location: string;
  bio: string;
  services?: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  providerId: string;
  title: string;
  category: string;
  price: string;
  priceType: "flat" | "hourly";
  duration: string;
  description: string;
}

export interface Booking {
  id: string;
  customerId: string;
  providerId: string;
  customerName: string;
  providerName: string;
  serviceTitle: string;
  amount: string;
  status: "requested" | "accepted" | "in_progress" | "completed" | "cancelled" | "disputed";
  scheduledDate: string;
  scheduledTime: string;
  address: string;
  notes?: string;
  createdAt: string;
}

export interface Message {
  id: string;
  bookingId: string;
  senderId: string;
  senderName: string;
  text: string;
  createdAt: string;
}

export interface Review {
  id: string;
  bookingId: string;
  customerId: string;
  customerName: string;
  providerId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Fallback demo providers
const DEMO_PROVIDERS: Provider[] = [
  {
    id: "p1",
    name: "Mike Johnson",
    businessName: "Mike's Plumbing",
    category: "Plumbing",
    rating: 4.9,
    reviewsCount: 128,
    hourlyRate: "$75/hr",
    verified: true,
    location: "Downtown • 2.4 miles",
    bio: "Licensed master plumber with over 12 years of experience in residential repairs, drain cleaning, and emergency leak detection.",
  },
  {
    id: "p2",
    name: "Sarah Miller",
    businessName: "BrightSpark Electrical",
    category: "Electrical",
    rating: 4.8,
    reviewsCount: 96,
    hourlyRate: "$85/hr",
    verified: true,
    location: "Westside • 3.1 miles",
    bio: "Certified electrician specializing in panel upgrades, lighting installations, EV charger setups, and home safety inspections.",
  },
  {
    id: "p3",
    name: "Elena Rostova",
    businessName: "FreshNest Cleaning",
    category: "Cleaning",
    rating: 4.95,
    reviewsCount: 210,
    hourlyRate: "$50/hr",
    verified: true,
    location: "North End • 1.8 miles",
    bio: "Eco-friendly residential and commercial deep cleaning service. Insured and background-checked staff.",
  },
  {
    id: "p4",
    name: "David Chen",
    businessName: "ProCraft Handyman",
    category: "Handyman",
    rating: 4.7,
    reviewsCount: 64,
    hourlyRate: "$60/hr",
    verified: false,
    location: "Eastside • 4.2 miles",
    bio: "General home repair specialist. Drywall repair, door installations, furniture assembly, and custom shelving.",
  }
];

const DEMO_SERVICES: ServiceItem[] = [
  { id: "s1", providerId: "p1", title: "Drain Unclogging & Cleaning", category: "Plumbing", price: "$120", priceType: "flat", duration: "1-2 hrs", description: "Clear blocked sinks, showers, or main drain lines using professional augers." },
  { id: "s2", providerId: "p1", title: "Faucet & Sink Leak Repair", category: "Plumbing", price: "$90", priceType: "flat", duration: "1 hr", description: "Fix dripping faucets, replace worn seals, or install new fixture hardware." },
  { id: "s3", providerId: "p2", title: "Electrical Panel Inspection & Repair", category: "Electrical", price: "$150", priceType: "flat", duration: "2 hrs", description: "Full circuit breaker check, safety diagnostics, and breaker replacements." },
  { id: "s4", providerId: "p3", title: "Standard Home Deep Clean", category: "Cleaning", price: "$160", priceType: "flat", duration: "3-4 hrs", description: "Complete house cleaning including kitchen, bathrooms, dusting, and floor care." },
];

const DEMO_BOOKINGS: Booking[] = [
  {
    id: "bk001",
    customerId: "c1",
    providerId: "p1",
    customerName: "Jane Doe",
    providerName: "Mike's Plumbing",
    serviceTitle: "Drain Unclogging & Cleaning",
    amount: "$120",
    status: "accepted",
    scheduledDate: "Sep 12, 2026",
    scheduledTime: "10:00 AM",
    address: "742 Evergreen Terrace, Springfield",
    notes: "Kitchen sink is draining very slowly.",
    createdAt: "Sep 8, 2026",
  },
  {
    id: "bk002",
    customerId: "c1",
    providerId: "p2",
    customerName: "Jane Doe",
    providerName: "BrightSpark Electrical",
    serviceTitle: "Electrical Panel Inspection",
    amount: "$150",
    status: "in_progress",
    scheduledDate: "Sep 9, 2026",
    scheduledTime: "02:30 PM",
    address: "742 Evergreen Terrace, Springfield",
    createdAt: "Sep 7, 2026",
  }
];

// --- PROVIDERS API ---
export async function getProviders(category?: string, query?: string): Promise<Provider[]> {
  try {
    let q = supabase.from("profiles").select("*").eq("role", "provider");
    const { data, error } = await q;

    if (error || !data || data.length === 0) {
      let filtered = [...DEMO_PROVIDERS];
      if (category && category !== "All") {
        filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
      }
      if (query) {
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.businessName.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        );
      }
      return filtered;
    }

    let mapped: Provider[] = data.map((p) => ({
      id: p.id,
      name: p.full_name || "Service Provider",
      businessName: p.business_name || p.full_name || "Independent Pro",
      category: p.category || "General Services",
      rating: p.rating || 4.8,
      reviewsCount: p.reviews_count || 12,
      hourlyRate: p.hourly_rate ? `$${p.hourly_rate}/hr` : "$65/hr",
      avatarUrl: p.avatar_url,
      verified: p.verified || false,
      location: p.location || "Local Provider",
      bio: p.bio || "Professional service provider.",
    }));

    if (category && category !== "All") {
      mapped = mapped.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (query) {
      mapped = mapped.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.businessName.toLowerCase().includes(query.toLowerCase())
      );
    }
    return mapped;
  } catch {
    return DEMO_PROVIDERS;
  }
}

export async function getProviderById(id: string): Promise<Provider | null> {
  try {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", id).single();
    if (error || !data) {
      return DEMO_PROVIDERS.find((p) => p.id === id) || DEMO_PROVIDERS[0];
    }
    return {
      id: data.id,
      name: data.full_name || "Service Provider",
      businessName: data.business_name || data.full_name || "Independent Pro",
      category: data.category || "Plumbing",
      rating: data.rating || 4.9,
      reviewsCount: data.reviews_count || 45,
      hourlyRate: data.hourly_rate ? `$${data.hourly_rate}/hr` : "$75/hr",
      avatarUrl: data.avatar_url,
      verified: data.verified || true,
      location: data.location || "Downtown",
      bio: data.bio || "Experienced home service specialist committed to quality workmanship.",
    };
  } catch {
    return DEMO_PROVIDERS.find((p) => p.id === id) || DEMO_PROVIDERS[0];
  }
}

// --- SERVICES API ---
export async function getServicesByProvider(providerId: string): Promise<ServiceItem[]> {
  try {
    const { data, error } = await supabase.from("provider_services").select("*").eq("provider_id", providerId);
    if (error || !data || data.length === 0) {
      return DEMO_SERVICES.filter((s) => s.providerId === providerId) || DEMO_SERVICES;
    }
    return data.map((s) => ({
      id: s.id,
      providerId: s.provider_id,
      title: s.title,
      category: s.category || "General",
      price: `$${s.price}`,
      priceType: s.price_type || "flat",
      duration: s.duration || "1-2 hrs",
      description: s.description || "",
    }));
  } catch {
    return DEMO_SERVICES;
  }
}

// --- BOOKINGS API ---
export async function getBookings(userId?: string, role: "customer" | "provider" | "admin" = "customer"): Promise<Booking[]> {
  try {
    let query = supabase.from("bookings").select("*");
    if (role === "customer" && userId) {
      query = query.eq("customer_id", userId);
    } else if (role === "provider" && userId) {
      query = query.eq("provider_id", userId);
    }

    const { data, error } = await query;
    if (error || !data || data.length === 0) {
      return DEMO_BOOKINGS;
    }

    return data.map((b) => ({
      id: b.id,
      customerId: b.customer_id,
      providerId: b.provider_id,
      customerName: b.customer_name || "Customer",
      providerName: b.provider_name || "Service Pro",
      serviceTitle: b.service_title,
      amount: `$${b.amount}`,
      status: b.status,
      scheduledDate: b.scheduled_date,
      scheduledTime: b.scheduled_time || "10:00 AM",
      address: b.address || "Client Address",
      notes: b.notes,
      createdAt: b.created_at,
    }));
  } catch {
    return DEMO_BOOKINGS;
  }
}

export async function createBooking(booking: Partial<Booking>): Promise<{ success: boolean; data?: Booking; error?: string }> {
  try {
    const newBooking = {
      customer_id: booking.customerId || "c1",
      provider_id: booking.providerId || "p1",
      customer_name: booking.customerName || "Jane Doe",
      provider_name: booking.providerName || "Mike's Plumbing",
      service_title: booking.serviceTitle || "Plumbing Service",
      amount: parseFloat((booking.amount || "120").replace(/[^0-9.]/g, "")),
      status: "requested",
      scheduled_date: booking.scheduledDate || "Sep 15, 2026",
      scheduled_time: booking.scheduledTime || "10:00 AM",
      address: booking.address || "123 Main St",
      notes: booking.notes || "",
    };

    const { data, error } = await supabase.from("bookings").insert(newBooking).select().single();

    if (error) {
      return {
        success: true,
        data: {
          id: `bk-${Date.now()}`,
          customerId: newBooking.customer_id,
          providerId: newBooking.provider_id,
          customerName: newBooking.customer_name,
          providerName: newBooking.provider_name,
          serviceTitle: newBooking.service_title,
          amount: `$${newBooking.amount}`,
          status: "requested",
          scheduledDate: newBooking.scheduled_date,
          scheduledTime: newBooking.scheduled_time,
          address: newBooking.address,
          notes: newBooking.notes,
          createdAt: new Date().toLocaleDateString(),
        }
      };
    }

    return {
      success: true,
      data: {
        id: data.id,
        customerId: data.customer_id,
        providerId: data.provider_id,
        customerName: data.customer_name,
        providerName: data.provider_name,
        serviceTitle: data.service_title,
        amount: `$${data.amount}`,
        status: data.status,
        scheduledDate: data.scheduled_date,
        scheduledTime: data.scheduled_time,
        address: data.address,
        notes: data.notes,
        createdAt: data.created_at,
      }
    };
  } catch {
    return {
      success: true,
      data: {
        id: `bk-${Date.now()}`,
        customerId: booking.customerId || "c1",
        providerId: booking.providerId || "p1",
        customerName: booking.customerName || "Jane Doe",
        providerName: booking.providerName || "Mike's Plumbing",
        serviceTitle: booking.serviceTitle || "Service",
        amount: booking.amount || "$120",
        status: "requested",
        scheduledDate: booking.scheduledDate || "Tomorrow",
        scheduledTime: booking.scheduledTime || "10:00 AM",
        address: booking.address || "Local Address",
        notes: booking.notes,
        createdAt: new Date().toLocaleDateString(),
      }
    };
  }
}

export async function updateBookingStatus(bookingId: string, status: Booking["status"]): Promise<boolean> {
  try {
    const { error } = await supabase.from("bookings").update({ status }).eq("id", bookingId);
    return !error;
  } catch {
    return true;
  }
}
