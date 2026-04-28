import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { signToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }
    await connectDB();
    const existing = await User.find({ email }).limit(1);
    if (existing.length) return NextResponse.json({ message: 'Email already in use' }, { status: 400 });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });
    const token = signToken({ id: String(user._id), email: user.email as string, role: user.role as string });
    const cookieStore = await cookies();
    cookieStore.set('token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7, path: '/' });
    return NextResponse.json({ message: 'Account created', user: { name: user.name, email: user.email } });
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
