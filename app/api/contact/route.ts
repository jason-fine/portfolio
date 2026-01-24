import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;

  // configure this according to your google form
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (!formLink || !fieldIdName || !fieldIdEmail || !fieldIdMessage || !fieldIdSocial) {
    return NextResponse.json({message: "Contact form not configured"}, { status: 200 });
  }

  try {
    const body = await req.json();
    const { name, message, social, email } = body;

    const res = await fetch(
      `${formLink}/formResponse?${fieldIdName}=${name}&${fieldIdEmail}=${email}&${fieldIdMessage}=${message}&${fieldIdSocial}=${social}`
    );

    return NextResponse.json("Success!");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
