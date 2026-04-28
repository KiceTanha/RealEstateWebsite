import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Property } from '@/models/Property';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const query: any = {};
    if (searchParams.get('type')) query.type = searchParams.get('type');
    if (searchParams.get('status')) query.status = searchParams.get('status');
    if (searchParams.get('city')) query.city = new RegExp(searchParams.get('city')!, 'i');
    if (searchParams.get('minPrice')) query.price = { $gte: Number(searchParams.get('minPrice')) };
    if (searchParams.get('maxPrice')) query.price = { ...query.price, $lte: Number(searchParams.get('maxPrice')) };
    const properties = await Property.find(query).sort({ createdAt: -1 }).limit(50);
    return NextResponse.json(properties);
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const property = await Property.create(body);
    return NextResponse.json(property, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
