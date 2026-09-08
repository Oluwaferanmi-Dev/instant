-- Supabase Schema DDL for Instant Platform

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  role text not null check (role in ('customer', 'provider', 'admin')),
  full_name text,
  avatar_url text,
  phone text,
  bio text,
  category text,
  rating numeric(3,2) default 5.0,
  review_count integer default 0,
  hourly_rate numeric(10,2),
  coverage_area text,
  verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Provider Services Table
create table if not exists public.provider_services (
  id uuid default gen_random_uuid() primary key,
  provider_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  description text,
  price numeric(10,2) not null,
  duration text,
  category text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Bookings Table
create table if not exists public.bookings (
  id uuid default gen_random_uuid() primary key,
  customer_id uuid references public.profiles(id) on delete cascade not null,
  provider_id uuid references public.profiles(id) on delete cascade not null,
  service_id uuid references public.provider_services(id) on delete set null,
  status text not null check (status in ('pending', 'accepted', 'in_progress', 'completed', 'cancelled')) default 'pending',
  scheduled_date timestamp with time zone not null,
  total_price numeric(10,2) not null,
  address text not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Messages Table
create table if not exists public.messages (
  id uuid default gen_random_uuid() primary key,
  booking_id uuid references public.bookings(id) on delete cascade,
  sender_id uuid references public.profiles(id) on delete cascade not null,
  receiver_id uuid references public.profiles(id) on delete cascade not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Reviews Table
create table if not exists public.reviews (
  id uuid default gen_random_uuid() primary key,
  booking_id uuid references public.bookings(id) on delete cascade not null,
  customer_id uuid references public.profiles(id) on delete cascade not null,
  provider_id uuid references public.profiles(id) on delete cascade not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Waitlist Table
create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  role text default 'customer',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.provider_services enable row level security;
alter table public.bookings enable row level security;
alter table public.messages enable row level security;
alter table public.reviews enable row level security;
alter table public.waitlist enable row level security;

-- Basic Public Access Policies for Read
create policy "Public profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Services are viewable by everyone" on public.provider_services for select using (true);
create policy "Reviews are viewable by everyone" on public.reviews for select using (true);
create policy "Waitlist insert for everyone" on public.waitlist for insert with check (true);

-- Authenticated User Policies
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Providers can manage own services" on public.provider_services for all using (auth.uid() = provider_id);
create policy "Users can view relevant bookings" on public.bookings for select using (auth.uid() = customer_id or auth.uid() = provider_id);
create policy "Customers can create bookings" on public.bookings for insert with check (auth.uid() = customer_id);
create policy "Booking participants can update bookings" on public.bookings for update using (auth.uid() = customer_id or auth.uid() = provider_id);
create policy "Participants can view messages" on public.messages for select using (auth.uid() = sender_id or auth.uid() = receiver_id);
create policy "Participants can insert messages" on public.messages for insert with check (auth.uid() = sender_id);
create policy "Customers can write reviews" on public.reviews for insert with check (auth.uid() = customer_id);
