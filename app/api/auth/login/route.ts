import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { signToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    await connectDB();
    const users = await User.find({ email }).limit(1);
    if (!users.length) return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    const user = users[0];
    const valid = await bcrypt.compare(password, user.password as string);
    if (!valid) return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    const token = signToken({ id: String(user._id), email: user.email, role: user.role });
    const cookieStore = await cookies();
    cookieStore.set('token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7, path: '/' });
    return NextResponse.json({ message: 'Logged in', user: { name: user.name, email: user.email } });
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
