import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req, { params }) {
  try {
    const { email, password } = await req.json();
    const foundUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!foundUser) throw { name: "invalidcredentials" };
    const comparedPassword = bcrypt.compareSync(password, foundUser.password);
    if (comparedPassword) {
      const accessToken = jwt.sign(
        {
          id: foundUser.id,
          email: foundUser.email,
        },
        "rahasiabangetjir"
      );
      cookies().set({
        name: "accessToken",
        value: accessToken,
        maxAge: 60 * 60 * 24,
      });
      return NextResponse.json(
        {
          message: "Login success",
        },
        { status: 200 }
      );
    }
    return NextResponse.json({ message: "respon" });
  } catch (error) {
    if (error.name === "invalidcredentials") {
      return NextResponse.json({ message: "Email or password is invalid" });
    } else {
      return NextResponse.json({ message: "Interval Server Error" });
    }
  }
}
